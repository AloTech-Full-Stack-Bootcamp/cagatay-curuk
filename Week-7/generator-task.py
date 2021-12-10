import random

"""
Parametre olarak verilen l rakamdan (basamak sayısı) oluşan, yine parametre olarak verilen n adet rastgele sayı üreten bir generator yazalım.
Daha önce üretilen bir sayının tekrar üretilmemesini bekliyoruz. Fonksiyonun signature'ı: random_number_generator(n, l=6)
"""


def random_number_generator(n, l=2):
    try:
        x = random.sample(range(10**(l-1), (10**l)-1), n)
        for i in x:
            yield i
    except ValueError:
        print(f"{n} number cannot be produced in this range {10**(l-1)}-{(10**l)-1}")


for i in random_number_generator(50):
    print(i)
