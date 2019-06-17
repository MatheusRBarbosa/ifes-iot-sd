docker run -d --hostname rabbitMQ --name rabbitmq-srv \
-p 5672:5672 -p 8080:15672 rabbitmq:3-management