from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from project_model.functions import ProfanityFilter 

profanity = ProfanityFilter()
app = FastAPI()



class ProfanityCheck(BaseModel):
    text: str
origins = ["http://localhost", "http://localhost:3000", "http://0.0.0.0:3000","http://0.0.0.0"]  
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

@app.post("/sentiment/")
async def sentiment_analysis(message: ProfanityCheck):
    sentiment  = profanity.check_profanity(message.text)
    return {"Toxic" : sentiment}
