import requests
from rich import print

def whatmyzipcode():
    url  = 'http://localhost:8090/api/City/'
    ask = input('Enter City Name: ')

    link = url + ask

    r =requests.get(link,verify=False)
    recived = r.json()
    data = recived[0]
    print(f"{ask} ZipCode: {data['Codepostal']}")
    return data['Codepostal']

def welcome():
    pass




def w2b():
    url = 'http://localhost:8090/api/Articles/'
    ask = input('Enter Article Name: ')
    link = url + ask
    r = requests.get(link,verify=False)
    recived = r.json()
    print (recived)

def main():
    w2b()


if __name__ == '__main__':
    main()






