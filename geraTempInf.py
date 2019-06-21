import json
import requests
import random

while(1):
    i = 0
    while(i < 5000):
        temperatura = random.randint(-10, 45)
        umidade = random.randint(10, 100)

        apiUrl = "http://localhost:3000/temperatura/{0}/umidade/{1}".format(temperatura, umidade)

        response = requests.post(apiUrl)

        responseText = response.text
        print(responseText)