"""
Aşağıda tanımlı fonksiyonla birlikte kullanıldığında,
  a) aldığı tüm sayı parametrelerinin değerini 1 arttıracak,
  b) boolean dönüş değerini tersine çevirecek (True dönüyor ise False, False dönüyor ise True yapacak şekilde) bir decorator yazalım. 
  (Not: Belki de mod_batch fonksiyonu yanlış implemente edilmiştir... Bu durumda öncelikle onun beklenen çıktıyı verecek şekilde düzenlenmesi gerekir. :))
"""

def decorator(func):
    def wrapper(*args, **kwargs):
        increased_list = [i+1 for i in args]
        return not func(*increased_list)
    return wrapper


@decorator
def mod_batch(*numbers):
    result = all([True if n % 3 == 0 else False for n in numbers])
    return result


print(mod_batch(2, 7, 8))
