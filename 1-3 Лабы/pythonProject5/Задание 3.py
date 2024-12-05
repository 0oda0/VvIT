from packet import sqrt1
from packet import sum1
def True_false(x,y):
    try:
        float(x)
        float(y)
        return x, y
    except:
        return exit()
x = input()
y = input()
True_false(x,y)
print(sqrt1.sqrt(x))
print(sum1.sum(x,y))


