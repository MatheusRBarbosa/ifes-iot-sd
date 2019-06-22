import json
import requests

temperatura = input('Temperatura: ')
umidade = input('Umidade: ')

apiUrl = "http://localhost:3001/temperatura/{0}/umidade/{1}".format(temperatura, umidade)

response = requests.post(apiUrl)

responseText = response.text
print(responseText)