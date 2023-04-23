import torch
import numpy as np
import requests
from transformers import TrainingArguments, Trainer
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import string
import nltk
from nltk.corpus import stopwords

nltk.download("stopwords")

class ProfanityFilter:
    
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
        self.model = AutoModelForSequenceClassification.from_pretrained("Profanity_filter")
    
    def preprocess_text(self,text):
        text = text.lower()
        text = text.translate(str.maketrans("", "", string.punctuation))
        text = " ".join([word for word in text.split() if word not in stopwords.words("english")])
        return text
    
    def check_profanity(self,text:str) -> bool:
        
        text = self.preprocess_text(text)
        tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
        inputs = self.tokenizer(text,padding = True, truncation = True, return_tensors='pt')
        outputs = self.model(**inputs)
        predictions = torch.nn.functional.softmax(outputs.logits, dim=-1)
        predictions = predictions.cpu().detach().numpy()
        predictor_filter = predictions.argmax()
    
        if predictor_filter > 0:
            return True
    
        else:
            return False
