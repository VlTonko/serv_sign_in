# webpack


INSERT INTO public.usersform
(firstname, lastname, email, phone, adress)
VALUES('Vasya', 'Ivanov', 'vas@gmail.com', '102', 'Lenina');


CREATE TABLE public.usersform (
	firstname varchar(80) NULL,
	lastname varchar(80) NULL,
	email varchar(80) NULL,
	phone varchar(80) NULL,
	adress varchar(80) NULL,
	id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);