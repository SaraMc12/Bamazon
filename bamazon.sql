DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price Decimal(5,2) ,
    stock_quantity INT,
     PRIMARY KEY (item_id)
);

insert into products (product_name, department_name, price, stock_quantity)
values ("Clown Shoes", "Clothes", 10.50, 20);

insert into products (product_name, department_name, price, stock_quantity)
values ("Pet Rock", "toys", 2.25, 100);

insert into products (product_name, department_name, price, stock_quantity)
values ("Scooter", "toys", 100.50, 40);

insert into products (product_name, department_name, price, stock_quantity)
values ("Instant Pot", "Housewares", 69.99, 10);

insert into products (product_name, department_name, price, stock_quantity)
values ("Doggles", "Pets", 50.50, 20);

insert into products (product_name, department_name, price, stock_quantity)
values ("Neon-Lipstick", "Makeup", 2.25, 100);

insert into products (product_name, department_name, price, stock_quantity)
values ("Ham sented deoderant", "Soap", .50, 300);

insert into products (product_name, department_name, price, stock_quantity)
values ("Glitter-Bombs", "Party", 12.99, 200);