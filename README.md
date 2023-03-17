# Teebay
A simple containerized product renting, buying/selling application. Tech stack includes Rails, React, Postgresql, docker, and docker compose. 

## How to run this application

To run this application in your local machine, you need to follow some simple steps. Make sure you have [Docker](https://docs.docker.com/engine/install/) and [docker compose](https://docs.docker.com/compose/install/) installed in your machine.
Clone this repository, using 
```bash 
git clone git@github.com:sanjibpaul59/Teebay.git
```

Move inside the directory using, `cd Teebay`

First, the databse is needed to be created using the following command

```bash 
docker compose run api rake db:create
``` 
To run the application use the following command 
```bash
docker compose up -d
```

After successful build and container creation, visit 

[`http://localhost:3001`](http://localhost:3000)
to see the client interface and visit 
 
 [`http://localhost:3000` ](http://localhost:3000) for rails application
 
 You might need to migrate the database. In that case, run  
 `docker exec -it api_container_id bash`
 
 Inside the container run `bin/rails db:migrate`
