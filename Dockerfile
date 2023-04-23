FROM python3.10
WORKDIR /code
RUN apt-get update && \
    apt-get install -y awscli
RUN pip3 install fastapi
RUN pip3 install uvicorn["standard"]
RUN pip3 install boto3
RUN pip3 install joblib
COPY . /code/
EXPOSE 8080
CMD ["uvicorn","app:app","--host","0.0.0.0","--port","8080"]