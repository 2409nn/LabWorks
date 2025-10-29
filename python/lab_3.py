
# first task
def listOperations():
    nums = list(range(10, 110, 10))  # создание списка от 10 до 100
    print(f"Исходный список: {nums}")
    print(f"Третий элемент: {nums[2]}, седьмой элемент: {nums[6]}")

    nums[4] = 100
    nums.append(50)
    del nums[1]
    print(f"Изменённый список: {nums}")
    print(f"Длина списка: {len(nums)}")

listOperations()

# second task
def dictOperations():
    student = {
        "имя": "Искандер",
        "возраст": 17,
        "курс": 1,
        "средний балл": 4.8,
        "город": "Алматы"
    }

    student |= {"специальность": "программист"}  # оператор объединения словарей
    student["средний балл"] = 4.95

    print("Ключи:", list(student.keys()))
    print("Значения:", list(student.values()))
    print("Наличие ключа 'email':", "email" in student)

dictOperations()

# third task
def setOperations():
    A, B = {1, 2, 3, 4, 5}, {4, 5, 6, 7, 8}
    print("Объединение:", A | B)
    print("Пересечение:", A & B)
    print("Разность A - B:", A - B)

# fourth task
def citiesProcessing():
    cities = ["Алматы", "Лондон", "Париж", "Токио", "Берлин", "Рим", "Мадрид"]

    sortedAlphabet = sorted(cities)
    sortedByLength = sorted(cities, key=len)

    afterL = [city for city in cities if city[0] > "Л"]
    cityLengths = {city: len(city) for city in cities}

    print("По алфавиту:", sortedAlphabet)
    print("По длине:", sortedByLength)
    print("Города после 'Л':", afterL)
    print("Словарь длин:", cityLengths)

citiesProcessing()

# fifth task
from collections import Counter
import re

def textAnalysis():
    text = "Python — это высокоуровневый язык программирования. Python используется для веб-разработки. Язык Python популярен."
    words = re.findall(r"\w+", text.lower())

    counts = Counter(words)
    uniqueWords = set(words)
    top3 = counts.most_common(3)
    singleOccurrence = sum(1 for c in counts.values() if c == 1)

    print("Список слов:", words)
    print("Частоты слов:", dict(counts))
    print("Уникальные слова:", uniqueWords)
    print("Топ-3 частых слова:", top3)
    print("Слов, встречающихся 1 раз:", singleOccurrence)

textAnalysis()

# sixth task
def productsDB():
    products = [
        {"название": "Хлеб", "цена": 150, "категория": "Еда", "кол-во": 20},
        {"название": "Молоко", "цена": 350, "категория": "Еда", "кол-во": 15},
        {"название": "Мыло", "цена": 250, "категория": "Гигиена", "кол-во": 30},
        {"название": "Шампунь", "цена": 1200, "категория": "Гигиена", "кол-во": 10},
        {"название": "Ноутбук", "цена": 500000, "категория": "Электроника", "кол-во": 3},
        {"название": "Телефон", "цена": 300000, "категория": "Электроника", "кол-во": 5},
        {"название": "Кофе", "цена": 1800, "категория": "Еда", "кол-во": 8},
    ]

    category = "Еда"
    expensiveThan = 1000

    byCategory = [p for p in products if p["категория"] == category]
    expensive = [p for p in products if p["цена"] > expensiveThan]
    totalValue = sum(p["цена"] * p["кол-во"] for p in products)
    categories = {p["категория"] for p in products}
    mostExpensive = max(products, key=lambda p: p["цена"])
    cheapest = min(products, key=lambda p: p["цена"])

    print(f"Товары категории '{category}':", byCategory)
    print(f"Товары дороже {expensiveThan}:", expensive)
    print(f"Общая стоимость всех товаров: {totalValue}")
    print("Уникальные категории:", categories)
    print("Самый дорогой товар:", mostExpensive)
    print("Самый дешёвый товар:", cheapest)

productsDB()
