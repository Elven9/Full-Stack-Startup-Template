CREATE DATABASE avl;

CREATE USER 'avl'@'%' IDENTIFIED WITH mysql_native_password BY 'ekick4sl3';
GRANT ALL PRIVILEGES ON * . * TO 'avl'@'%';
flush privileges;