def greet(name):
    print(f"Привет, {name}!")
    choiser()

def square(n):
 print(f"Квадрат {n} = {n ** 2} ")
 choiser()

def max_of_two(a, b):
 if a > b:
    print (f" {a} > {b}  ")
 else:
    print (f" {a} < {b}  ")
 choiser()

def describe_person(name, age=30):
 print(f"Меня зовут {name}, и мне {age} лет.")
 choiser()


def is_prime(n):
 if n <= 1:
    print("False")
 if n == 2:
    print ("True")
 if n % 2 == 0:
     print("False")
 for i in range(3, int(n**0.5)+1, 2):
    if n % i == 0:
        print("False")
    print("True")
 choiser()

def choiser ():
    choice = int(input("\nВыберите функцию для выполнения \n1 Знакомство \n2 Возведение в степень \n3 Сравнение чисел \n4 Представление и возраст  \n5 Простые числа \n Выбор:  "))
    if choice == 1:
        name = input("Введите имя, давайте познакомимся: ")
        greet(name)
    elif choice == 2:
        n = int(input("Введите число для возведения в степень: "))
        square(n)
    elif choice == 3:
        a = int(input("Введите 1 число для сравнения: "))
        b = int(input("Введите 2 число для сравнения: "))
        max_of_two(a, b)
    elif choice == 4:
        name = input("Введите имя я вас представлю: ")
        age = int(input("Введите ваш возраст:  "))
        describe_person(name, age)
    elif choice == 5:
        n = int(input("Введите число и мы определим простое ли оно"))
        is_prime(n)
    else:
        print("Неверный выбор. Попробуйте еще раз.")

if __name__ == '__main__':
    choiser()
