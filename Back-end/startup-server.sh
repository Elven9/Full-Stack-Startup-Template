# /bin/zsh


# Start Mysql Server
docker run -d --name mysql-db -e MYSQL_ROOT_PASSWORD="ekick4sl3" -p 3306:3306 mysql:latest