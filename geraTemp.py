import json;
import requests;

#apiUrl = 'https://ptsv2.com/t/l6bey-1560872553/post'

temperatura = input('Temperatura: ')
umidade = input('Umidade: ')

apiUrl = "http://localhost:3000/temperatura/{0}/umidade/{1}".format(temperatura, umidade)

response = requests.post(apiUrl)

responseText = response.text
print(responseText)