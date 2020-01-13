#! /bin/bash

docker swarm init
docker stack deploy -c docker-compose.yml nodeapp
docker stack ls
docker service ls
# same as above
docker stack services nodeapp
docker stack ps nodeapp
curl http://localhost:9000
curl http://localhost:9001
docker service scale nodeapp_webserver1=2
docker stack rm nodeapp
docker swarm leave -f

