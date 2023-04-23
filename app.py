from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from scripts.utils import  get_recommended_songs
from typing import List

app = FastAPI()
# setup_aws_env()
class RecommendSongs(BaseModel):
    genre: List[str]


origins = ["http://localhost","http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=origins,
    allow_methods=["POST"],
    allow_headers=["*"],
)

@app.post("/")
async def root():
    return {"Message":"test passed"}

@app.post("/get_recommendations/")
async def get_recommendations(genres: RecommendSongs):
    recommended_songs = get_recommended_songs(genres.genre)
    return {"recommendedSongs": recommended_songs}