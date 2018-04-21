drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

create table burger (
id int auto_increment primary key,
burger_name varchar(40) not null,
devoured boolean not null
);

