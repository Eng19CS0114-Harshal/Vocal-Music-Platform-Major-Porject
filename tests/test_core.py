from fastapi.testclient import TestClient
from api.app import app


client = TestClient(app)

def test_root():
    response = client.post('/')
    print(response.json())
    assert response.status_code == 200
    
def test_api():
    var = {"text":"You are a stinckin chit"}
    response = client.post("/sentiment/",json=var)
    print(response.json())
    assert response.status_code == 200