import random

# first task
def calcTillN(n):
    return n * (n+1) // 2

print(calcTillN(5))

# second task
def getEvenNums(start, end):
    for i in range(start + (start % 2), end, 2):
        print(i)

getEvenNums(1, 100)
# third task
def guessNumber():
    target = random.randint(1, 5)
    while guess := int(input("Введите число от 1 до 5: ")) != target:
        print("Ваше число меньше загаданного." if guess < target else "Ваше число больше загаданного.")
    print("Поздравляем! Вы угадали число")

guessNumber()

# fourth task
def multiplicationTable():
    n = int(input("Введите число: "))
    print("\n".join(f"{n} x {i} = {n * i}" for i in range(1, 11)))

multiplicationTable()
