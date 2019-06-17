docker run --name mongo -d -e MONGO_INITDB_DATABASE=iot \
-p 8081:8081 -p 27017:27017 -p 27018:27018 -p 27019:27019 \
-v /home/barbosa/DOCKER-VOLUME/mongo:/etc/mongo \
mongo