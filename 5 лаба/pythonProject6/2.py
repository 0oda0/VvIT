class Circle:
    def __init__(self, radius):
        self.radius = radius

    def get_radius(self):
        return self.radius

    def set_radius(self, new_radius):
        self.radius = new_radius

# Создание объекта класса Circle
circle = Circle(5)

# Изменение радиуса и вывод нового значения
circle.set_radius(19090)
print(f"Новый радиус круга: {circle.get_radius()}")