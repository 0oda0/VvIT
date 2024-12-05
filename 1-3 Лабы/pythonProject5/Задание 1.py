import math
from datetime import datetime


def sqrt(x):
    if float(x) < 0:
        exit()
    return round(math.sqrt(float(x)),1)
def True_false(x):
    try:
        float(x)
        return x
    except:
        return exit()

x = input()
True_false(x)
print(sqrt(x))
now = datetime.now()
print(now)
