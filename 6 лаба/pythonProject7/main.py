
class UserAccount:
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def set_password(self, new_password):
        self.password = new_password

    def check_password(self, password):
        return self.password == password

# Пример использования
user_account = UserAccount("username", "email@example.com", "password")

# Изменение пароля
user_account.set_password("new_password")

# Проверка пароля
if user_account.check_password("new_password"):
    print("Пароль совпадает")
else:
    print("Пароль не совпадает")


