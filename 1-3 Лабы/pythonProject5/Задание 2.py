import my_module
def True_false(x,y):
    try:
        float(x)
        float(y)
        return x,y
    except:
        return exit()
x = input()
y = input()
True_false(x,y)
print(my_module.sum(x,y))