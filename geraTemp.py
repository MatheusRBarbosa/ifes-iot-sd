import json;
import requests;

#apiUrl = 'https://ptsv2.com/t/l6bey-1560872553/post'
apiUrlBase = 'http://localhost:3000/temperatura/'

temperatura = input('Temperatura: ')
umidade = input('Umidade: ')

apiUrl = apiUrlBase + temperatura + '/' + umidade

response = requests.post(apiUrl)

responseText = response.text
print(responseText)