create database dsw;
use dsw;

grant all privileges on *.* to 'parsa'@'localhost';

CREATE TABLE `professores` ( 
	`idprofessores` INT NOT NULL AUTO_INCREMENT,  
	`nome` VARCHAR(45) NOT NULL,  
    `titulacao` VARCHAR(45) NOT NULL,   
    `timestamp` TIMESTAMP,  
    UNIQUE INDEX `nome_UNIQUE` (`nome` ASC),   
    PRIMARY KEY (`idprofessores`)
);

insert into professores (nome, titulacao, `timestamp`, idprofessores) values('Andrewid', 'Doutor', now(), 2);
insert into professores (nome, titulacao, `timestamp`, idprofessores) values('Eduardo', 'Mestre', now(), 3);
insert into professores (nome, titulacao, `timestamp`, idprofessores) values('Jonatas', 'Doutor', now(), 4);

select * from professores;

CREATE TABLE `dsw`.`estudantes` (  `idestudantes` INT NOT NULL AUTO_INCREMENT,   `nome` VARCHAR(45) NOT NULL,   `nota` DECIMAL NOT NULL,   `created_at` TIMESTAMP default current_timestamp,   PRIMARY KEY (`idestudantes`));
insert into estudantes (nome, nota) values('Vera Lucia', 10);
insert into estudantes (nome, nota) values('Roberto Santos', 10);
insert into estudantes (nome, nota) values('Ana Maria', 10);

delete from estudantes;
drop table estudantes;
select * from estudantes;

CREATE TABLE `dsw`.`conteudoprogramatico` ( 
	`idconteudoprogramatico` INT NOT NULL AUTO_INCREMENT,  
    `conteudo` VARCHAR(200) NOT NULL,  
    `data` DATE NULL,    
    `timestamp` TIMESTAMP, 
    PRIMARY KEY (`idconteudoprogramatico`)
);	

select * from conteudoprogramatico;

Alter table estudantes add column data_nasc date;
Alter table estudantes add column cidade varchar(50);
Alter table estudantes add column email varchar(50);

CREATE TABLE `DSW`.`usuarios` ( 
	`idusuario` INT NOT NULL AUTO_INCREMENT,   
    `nome` VARCHAR(45) NOT NULL,   
    `username` VARCHAR(20) NOT NULL,   
    `password` VARCHAR(20) NOT NULL, 
    timestamp TIMESTAMP,   
    PRIMARY KEY (`idusuario`)
);

select * from usuarios;
