FROM python:3.10
WORKDIR /code
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
RUN pip3 install nltk
RUN pip3 install gdown
COPY . /code/
RUN python3 model_setup.py
EXPOSE 8080
WORKDIR /code/api
CMD ["uvicorn","app:app","--host","0.0.0.0","--port","8080"]