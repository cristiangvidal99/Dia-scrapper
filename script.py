import requests
from bs4 import BeautifulSoup

url = 'https://diaonline.supermercadosdia.com.ar/limpieza/cuidado-de-la-ropa?page=2'

def getHtml(url):
    response = requests.get(url)
    return response.text

response = getHtml(url)

parser = BeautifulSoup(response, 'html.parser')

precio = parser.find_all('span', class_='diaio-store-5-x-sellingPriceValue')
with open('precio.txt', 'w') as f:
    f.write(str(precio))
print(precio)



#diaio-store-5-x-sellingPriceValue
