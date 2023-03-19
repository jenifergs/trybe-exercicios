# LISTA 
fruits = ["laranja", "maçã", "uva", "abacaxi"]  # elementos são definidos 
# separados por vírgula, envolvidos por colchetes

fruits[0]  # o acesso é feito por índices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("abacaxi")  # removendo uma fruta

fruits.extend(["pera", "melão", "kiwi"])  # acrescenta uma lista de frutas

fruits.index("maçã")  # retorna o índice onde a fruta está localizada

fruits.sort()  # ordena a lista de frut

# TUPLAS
# As tuplas são semelhantes às listas, mas são imutáveis.
user = ("Will", "Marcondes", 42)  # elementos são definidos separados por
# vírgula, envolvidos por parênteses

user[0]  # acesso também por índices

# CONJUNTOS (SETS)
# Os conjuntos são semelhantes às listas, mas não permitem elementos
# # duplicados.
# Os elementos não são ordenados.
# Os elementos não são acessados por índice.
# Os elementos não são mutáveis.

permissions = {"member", "group"}  # elementos separados por vírgula,
# envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item
# é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante
# da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# dicionários(dict)

people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}  # elementos no
#
# formato "chave: valor" separados por vírgula, envolvidos por chaves

people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}  # outro exemplo,
# dessa vez usando strings como chaves. As aspas são necessárias para que o
# #  Python não ache que `Maria`, `Fernanda` e `Felipe` sejam variáveis.

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Maria

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(1, "Maria"), (2, "Fernanda"),
# (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores

# RANGE (range)
# O range é um tipo de dado que representa uma sequência de números.
# O range é imutável.
# O range é acessado por índice.
# O range é iterável.

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]