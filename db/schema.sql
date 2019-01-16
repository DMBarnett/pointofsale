CREATE DATABASE point_of_sale;
USE point_of_sale;

CREATE TABLE Users(
    id INT(9) NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    manager_status BOOLEAN NOT NULL,
    created_date TIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
)

CREATE TABLE Customers(
    id INT(9) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    store_credit INT(9) DEFAULT 0,
    created_date TIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
)

CREATE TABLE Items(
    id INT(9) NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(255) NOT NULL,
    price FLOAT(9, 2) NOT NULL DEFAULT 0.00,
    barcode VARCHAR(12),
    category VARCHAR(255),
)

CREATE TABLE Categories(
    id INT(9) NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
)