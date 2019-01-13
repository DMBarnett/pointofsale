CREATE DATABASE point_of_sale;
USE point_of_sale;

CREATE TABLE Users(
    id INT(9) NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    manager_status BOOLEAN NOT NULL,
    created_date TIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
)