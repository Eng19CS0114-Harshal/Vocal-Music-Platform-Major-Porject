import boto3
import requests 
import json
import os
from typing import List
import pandas as pd
import joblib
from sklearn.preprocessing import MinMaxScaler



# setup_aws_env()
def get_graphql_endpoint_access_key():
    global app_sync_api_name
    appsync_client = boto3.client('appsync',region_name = "MY_REGION",aws_access_key_id="MY-KEY",aws_secret_access_key="MY_SECRET_ACCESS_KEY")
    graphql_api_details = appsync_client.list_graphql_apis()
    for api in graphql_api_details['graphqlApis']:
        if api["name"] == "vocalmusic-dev":
            requested_api_details = api
            break
    graphql_access_api_id = requested_api_details['apiId']
    graphql_endpoint = requested_api_details['uris']['GRAPHQL']
    response = appsync_client.list_api_keys(apiId=graphql_access_api_id)
    api_access_key = response["apiKeys"][0]["id"]
    print(graphql_endpoint, api_access_key)
    return(graphql_endpoint,api_access_key)


def get_songs_df(genre: List[str]) -> pd.DataFrame:
    graphql_endpoint , access_key = get_graphql_endpoint_access_key()
    query =  """
            query ListSongData(
            $nextToken: String
            ) {
            listSongData(nextToken: $nextToken) {
                items {
                id
                file_name
                song_name
                likes
                play_count
                artist_Id
                genres {
                    items {
                    genre {
                        name
                    }
                    }
                }
                playlists {
                    nextToken
                }
                comments {
                    nextToken
                }
                createdAt
                updatedAt
                owner
                }
                nextToken
            }
            }
        """

    requests_header = {
    "Content-Type":"application/json",
    "X-Api-Key": access_key
    }

    response = requests.post(graphql_endpoint,json={"query":query},headers=requests_header)
    print("Response code: ",response)
    print("Data: ",response.content)
    response_content = json.loads(response.content)
    songs_list = response_content["data"]["listSongData"]["items"]
    for song_dict in songs_list:
        try:
            song_dict['genres'] = song_dict['genres']['items'][0]['genre']['name']
        except:
            song_dict['genres'] = 'Genre 2'
    songs_df = pd.DataFrame(songs_list)
    songs_df = songs_df[songs_df['genres'].isin(genre)]
    
    return songs_df


def get_rank(songs_df_row:pd.DataFrame) -> int:
    model = joblib.load('scripts/rank_predictor.pkl')
    print(type(songs_df_row))
    feature = [[songs_df_row["play"],songs_df_row["like"]]]
    rank = model.predict(feature)
    return rank[0]


def get_recommended_songs(genre: List[str]) -> dict :
    
    songs_df = get_songs_df(genre)
    scaler = MinMaxScaler()
    songs_df['like'] = scaler.fit_transform(songs_df[['likes']])
    songs_df['play'] = scaler.fit_transform(songs_df[["play_count"]])
    songs_df["rank"] = songs_df.apply(lambda row: get_rank(row), axis=1)
    songs_df = songs_df.sort_values(by='rank',ascending=True)
    ranked_song_list = songs_df.to_dict(orient="records")
    return ranked_song_list
