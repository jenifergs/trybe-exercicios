-- exercicios usando banco sakila

--Exercício 1
--Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
SELECT
    a.actor_id, a.first_name, f.film_id
FROM
    sakila.actor AS a
INNER JOIN
    sakila.film_actor AS f ON a.actor_id = f.actor_id;

--Exercício 2
--Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT
    s.first_name, s.last_name, a.address
FROM
    sakila.staff AS s
INNER JOIN
    sakila.address AS a ON s.address_id = a.address_id;

--Exercício 3
--Exiba o id, nome e email das primeiras 100 pessoas clientes, ordenados alfabeticamente pelo nome em ordem decrescente, juntamente
--com o id do endereço e o nome da rua onde mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT
    c.customer_id,
    c.first_name,
    c.email,
    c.address_id,
    a.address
FROM
    sakila.customer AS c
INNER JOIN
    sakila.address AS a ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

--Exercício 4
--Exiba o nome, email, id do endereço, endereço e distrito dos clientes
--que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT
    c.first_name, c.email, c.address_id, a.address, a.district
FROM
    sakila.customer AS c
INNER JOIN
    sakila.address AS a ON c.address_id = a.address_id
WHERE
    a.district = 'California'
        AND c.first_name LIKE '%rene%';

-- Exercício 5
--Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados
--por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT
    c.first_name,
    COUNT(a.address) AS `quantidade de endereço`
FROM
    sakila.customer c
INNER JOIN
    sakila.address AS a ON a.address_id = c.address_id
WHERE
    c.active = 1
GROUP BY
    c.customer_id
ORDER BY
    first_name DESC,
    last_name DESC;

-- Exercício 6
--Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga
--aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT
    stf.first_name,
    stf.last_name,
    AVG(pay.amount) AS `Média de pagamento`
FROM
    sakila.staff AS stf
INNER JOIN
    sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE
    YEAR(pay.payment_date) = 2006
GROUP BY stf.staff_id;

-- Exercício 7
--Monte uma query que exiba o id do ator,
--nome, id do filme e titulo do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT
    a.actor_id,
    a.first_name,
    f.film_id,
    f.title
FROM
    sakila.actor AS a
INNER JOIN
    sakila.film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN
    sakila.film AS f ON f.film_id = fa.film_id;