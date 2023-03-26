# Teebay
A simple containerized product renting, buying/selling application. Tech stack includes Rails, React, Postgresql, docker, and docker compose. 

## How to run this application

To run this application in your local machine, you need to follow some simple steps. Make sure you have [Docker](https://docs.docker.com/engine/install/) and [docker compose](https://docs.docker.com/compose/install/) installed in your machine.
Clone this repository, using 
```bash 
git clone git@github.com:sanjibpaul59/Teebay.git
```

Move inside the directory using, `cd Teebay`

To run the application use the following command 
```bash
docker compose up -d
```
For database migration and seeding the following command is required

```bash 
docker compose run web rake db:migrate
docker compose run web rake db:seed
``` 
First command is for database migration following the migration files and the second one is for seeding the database with some model attributes describe in `seeds.rb` file.

After successful build and container creation, please visit 

[`http://localhost:3000`](http://localhost:3000)
to see the client interface and visit 
 
 [`http://localhost:8000` ](http://localhost:8000) for rails application

 `docker compose logs -f` will show the continuous logs for the services described in the compose file. To see the logs of individual services, try running 
 ```
 docker compose ps
 docker compose logs <service name>
 ```