from math import sqrt
from random import randint

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calcArea(self):
        return self.height * self.width

    def calcPerimeter(self):
        return 2 * self.height + 2 * self.width

    def calcArithmeticMean(self):
        return (self.width + self.height) / 2

    def calcGeometricMean(self):
        return sqrt(self.width * self.height)


width = int(input("Введите ширину прямоугольника: "))
height = int(input("Введите высоту прямоугольника: "))
rec = Rectangle(width, height)

# first task
print(rec.calcArea())
print(rec.calcPerimeter())

# second task
if width > height:
    print(rec.calcArithmeticMean())

elif width < height:
    print(rec.calcGeometricMean())

# third task
rNum = randint(1, 100)
print(f"Утверждение, что {rNum} четное – {rNum % 2 == 0}")

# fourth task
def getRealRoots(a:float, b:float, c:float):
    disc = b**2 - 4*a*c

    print(disc)

    if (disc > 0):
        x1 = (-b + sqrt(disc)) / (2*a)
        x2 = (-b - sqrt(disc)) / (2*a)
        return {"x1": round(x1, 2), "x2": round(x2, 2)}

    elif (disc == 0):
        x1 = -b / (2*a)
        return {"x1": round(x1, 2)}

    else:
        print("Корней нет")
        return {}

print(getRealRoots(1.0, 4.0, 2.0))

# fifth task
def fitForMilitary(name, age, gender, isStudent):
    if name.lower().strip() == "iskander":
        print("Не годен")
        return False

    elif gender == "male" and not isStudent and age in range(18, 27):
        print(f"{name} годен к службе в армии")
        return True


fitForMilitary("Iskander", 18, "male", True)
fitForMilitary("Anton", 19, "male", False)
fitForMilitary("Nastya", 19, "female", False)
