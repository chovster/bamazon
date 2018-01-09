CREATE DATABASE bamazon_db
USE bamazon_db

CREATE TABLE products (
	item_id INTEGER (10) NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(20),
	department_name VARCHAR(20),
	price DECIMAL (10,2),
	stock_quantity INTEGER,
	PRIMARY KEY (item_id)
	);

DROP DATABASE IF EXISTS bamazon_db

	
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo Dot", "Electronic", 29.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPad Air", "Electronic", 299.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beats Headphone", "Electronic", 199.99, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Free Run", "Clothing", 129.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Basketball Socks", "Clothing", 19.99, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kobe NXT", "Clothing", 199.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wilson Basketball", "Sports", 49.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fishing Rod", "Sports", 19.99, 27);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("One Republic: Native", "Music", 17.99, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Shampoo", "Pet Care", 13.99, 25);

SELECT * FROM products;
