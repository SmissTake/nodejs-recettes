CREATE TABLE ingredients( 

   id INT(11) AUTO_INCREMENT, 

   name VARCHAR(50) NOT NULL, 

   PRIMARY KEY(id), 

   UNIQUE(name) CREATE TABLE ingredients( 

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

   idPermissions INT NOT NULL, 

   PRIMARY KEY(id), 

   UNIQUE(mail), 

   FOREIGN KEY(idPermissions) REFERENCES permissions(id) 

); 

  

CREATE TABLE recipes( 

   id INT(11) AUTO_INCREMENT, 

   name VARCHAR(50) NOT NULL, 

   slug VARCHAR(50) NOT NULL, 

   description VARCHAR(400) NOT NULL, 

   guests TINYINT(4), 

   created_at DATETIME, 

   updated_at DATETIME, 

   idCourses INT NOT NULL, 

   idSeasons INT, 

   idUsers INT NOT NULL, 

   PRIMARY KEY(id), 

   UNIQUE(slug), 

   FOREIGN KEY(idCourses) REFERENCES courses(id), 

   FOREIGN KEY(idSeasons) REFERENCES seasons(id), 

   FOREIGN KEY(idUsers) REFERENCES users(id) 

); 

  

CREATE TABLE steps( 

   id INT(11) AUTO_INCREMENT, 

   content TEXT, 

   idRecipes INT NOT NULL, 

   PRIMARY KEY(id), 

   FOREIGN KEY(idRecipes) REFERENCES recipes(id) 

); 

  

CREATE TABLE images( 

   id INT(11) AUTO_INCREMENT, 

   url VARCHAR(250), 

   alternate_text VARCHAR(200), 

   idRecipes INT NOT NULL, 

   PRIMARY KEY(id), 

   FOREIGN KEY(idRecipes) REFERENCES recipes(id) 

); 

  

CREATE TABLE ingredients_recipes( 

   id INT(11), 

   idRecipes INT, 

   quantity DOUBLE, 

   PRIMARY KEY(id, idRecipes), 

   FOREIGN KEY(id) REFERENCES ingredients(id), 

   FOREIGN KEY(idRecipes) REFERENCES recipes(id) 

); 

 

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

   idPermissions INT NOT NULL, 

   PRIMARY KEY(id), 

   UNIQUE(mail), 

   FOREIGN KEY(idPermissions) REFERENCES permissions(id) 

); 

  

CREATE TABLE recipes( 

   id INT(11) AUTO_INCREMENT, 

   name VARCHAR(50) NOT NULL, 

   slug VARCHAR(50) NOT NULL, 

   description VARCHAR(400) NOT NULL, 

   guests TINYINT(4), 

   created_at DATETIME, 

   updated_at DATETIME, 

   idCourses INT NOT NULL, 

   idSeasons INT, 

   idUsers INT NOT NULL, 

   PRIMARY KEY(id), 

   UNIQUE(slug), 

   FOREIGN KEY(idCourses) REFERENCES courses(id), 

   FOREIGN KEY(idSeasons) REFERENCES seasons(id), 

   FOREIGN KEY(idUsers) REFERENCES users(id) 

); 

  

CREATE TABLE steps( 

   id INT(11) AUTO_INCREMENT, 

   content TEXT, 

   idRecipes INT NOT NULL, 

   PRIMARY KEY(id), 

   FOREIGN KEY(idRecipes) REFERENCES recipes(id) 

); 

  

CREATE TABLE images( 

   id INT(11) AUTO_INCREMENT, 

   url VARCHAR(250), 

   alternate_text VARCHAR(200), 

   idRecipes INT NOT NULL, 

   PRIMARY KEY(id), 

   FOREIGN KEY(idRecipes) REFERENCES recipes(id) 

); 

  

CREATE TABLE ingredients_recipes( 

   id INT(11), 

   idRecipes INT, 

   quantity DOUBLE, 

   PRIMARY KEY(id, idRecipes), 

   FOREIGN KEY(id) REFERENCES ingredients(id), 

   FOREIGN KEY(idRecipes) REFERENCES recipes(id) 

); 

 