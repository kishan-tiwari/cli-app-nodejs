# cli-app-nodejs
- cli-app for wish greeting  to people.

# Tech Stack
- Nodejs 
- Express Framework
- EJS
- Docker


# Healthcheck endpoint URL 
- http://<host-ip>/actuator/health

# Webapp
- http://<host>
- This webapp take input the name of the birthday honoree(s) and incorporate the name(s) into the song.

# cli-app rest-api 
- GET
    - http://localhost/api/v1/<honoree-name>
- POST
    - http://localhost/api/v1


# How to start cli-app
## Prerequisite
- Docker

## Docker compose command to start app 
- docker-compose up -d
