CREATE TABLE ingredients( 

   id INT(11) AUTO_INCREMENT, 

   name VARCHAR(50) NOT NULL, 

   PRIMARY KEY(id), 

   UNIQUE(name) 

); 

  

CREATE TABLE seasons( 

   id INT(11) AUTO_INCREMENT, 

   name VARCHAR(50), 

   PRIMARY KEY(id) 

); 

  

CREATE TABLE courses( 

   id INT(11) AUTO_INCREMENT, 

   menu VARCHAR(50), 

   PRIMARY KEY(id) 

); 

  

CREATE TABLE permissions( 

   id INT(11) AUTO_INCREMENT, 

   role VARCHAR(50), 

   PRIMARY KEY(id) 

); 

  

CREATE TABLE users( 

   id INT(11) AUTO_INCREMENT, 

   lastname VARCHAR(30) NOT NULL, 

   firstname VARCHAR(39), 

   mail VARCHAR(150) NOT NULL, 

   password VARCHAR(50), 

   id_1 INT NOT NULL, 

   PRIMARY KEY(id), 

   UNIQUE(mail), 

   FOREIGN KEY(id_1) REFERENCES permissions(id) 

); 

  

CREATE TABLE recipes( 

   id INT(11) AUTO_INCREMENT, 

   name VARCHAR(50) NOT NULL, 

   slug VARCHAR(50) NOT NULL, 

   description VARCHAR(400) NOT NULL, 

   guests TINYINT(4), 

   created_at DATETIME, 

   updated_at DATETIME, 

   id_1 INT NOT NULL, 

   id_2 INT, 

   id_3 INT NOT NULL, 

   PRIMARY KEY(id), 

   UNIQUE(slug), 

   FOREIGN KEY(id_1) REFERENCES courses(id), 

   FOREIGN KEY(id_2) REFERENCES seasons(id), 

   FOREIGN KEY(id_3) REFERENCES users(id) 

); 

  

CREATE TABLE steps( 

   id INT(11) AUTO_INCREMENT, 

   content TEXT, 

   id_1 INT NOT NULL, 

   PRIMARY KEY(id), 

   FOREIGN KEY(id_1) REFERENCES recipes(id) 

); 

  

CREATE TABLE images( 

   id INT(11) AUTO_INCREMENT, 

   url VARCHAR(250), 

   alternate_text VARCHAR(200), 

   id_1 INT NOT NULL, 

   PRIMARY KEY(id), 

   FOREIGN KEY(id_1) REFERENCES recipes(id) 

); 

  

CREATE TABLE ingredients_recipes( 

   id INT(11) AUTO_INCREMENT, 

   id_1 INT, 

   quantty DOUBLE, 

   PRIMARY KEY(id, id_1), 

   FOREIGN KEY(id) REFERENCES ingredients(id), 

   FOREIGN KEY(id_1) REFERENCES recipes(id) 

); 

 