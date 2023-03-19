a = 10
b = 5
a + b
a - b
a * b
a / b
a // b
a ** b
a % b

print("Olá, mundo!")

hours = 6
minutes = hours * 60
seconds = minutes * 60
print(minutes)
print(seconds)

# Exercício 4: Suponha que o preço de capa de um livro seja R$ 24,20,
#  mas as livrarias recebem um desconto de 40%.
#  O transporte custa 3,00 para o primeiro exemplar e 75 centavos
#  para cada exemplar adicional. Qual é o custo total de atacado
#  para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

books = 60
book_price = (1 - 0.4) * 24.20
logistic = 3 + (books - 1) * 0.75
cost = books * book_price + logistic
print(cost)

# Exercício 5: Adicione o elemento “Ciência da Computação” à lista.
# Exercício 6: Acesse e altere o primeiro elemento da lista para “Fundamentos”.

trybe_course = ["Introdução", "Front-end", "Back-end"]

trybe_course.append("Ciência da Computação")

trybe_course[0] = "Fundamentos"

print(trybe_course)

setJenny = set()
setJenny.add("Jenny")

print(setJenny)

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = "Sim"

print(info)

del info["origem"]

print(info)