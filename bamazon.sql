DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

create table products (
	item_id INTEGER(15) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(40) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(100) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)

values ('SmartWater','Grocery', 2.19, 175),
        ('Micellar Cleaning Water', 'Cosmetics', 6.45, 208),
        ('Fancy Feast Wet Cat Food', 'Pet', 1.55, 100),
        ('Huggies Diapers', 'Babies', 10.88, 145),
        ('Fitbit', 'tech', 125, 80),
        ('Peanut Butter' 'Grocery', 2.60, 111),
        ('Mico USB', 'tech', 13.09, 100),
        ('Red lipstick', 'Cosmetics', 9.99,200),
        ('Apples', 'Grocery', .49, 233),
        ('Baby wipes', 'Babies', 2.50, 99),
        ('cat nip', 'Pet', 2.00, 55),
        ('Candy Canes', 'Grocery', .99, 145),
        ('WII U', 'tech', 350.50, 101),
        ('Ginger ale', 'Grocery', 1.25, 204),
        ('Blue nail polish', 'Cosmetics', 8.22, 45);
        
        
        
