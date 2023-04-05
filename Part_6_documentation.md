# Technical Documentation

Teebay is a simple product buy/sell/rent/lending application, developed with Rails, Next Js, Postgresql, Mantine UI and containerized with docker and docker compose.

First, I tried to find the necessary entities for this application. Then I decided what should be attributes and how the entities should relate to each other. A Entity Relationship Diagram below will give the idea of how the database is structured. 


![Alt text](/client/public/teebay_erd.jpg "Teebay ERD")

### Database creation
Created a local postgresql database, then configured it to the rails app to work with and created Models following the ERD and migrated them to database. Had to update relationships and attributes after the first migration as I was facing some issues. 
## Rails app (backend) configuration
 Added routes for resources. Tried out the endpoints using [Insomnia](https://insomnia.rest/)
Updated the models based on their relations and added controllers for related entities. Server side validation checks were also written.
`unsold_products` endpoint renders products that are not yet sold and rented. When the rent period expires the product belongs to unsold products list.

In the `users_controller`, added `products`, `sold_products`, `bought_products`, `borrowed_products`, `lent_products` methods or endpoints that returns products created, sold, bought, borrowed or lent by the user. 

## Next Js app (client)
First I created pages for user authentication to complete Part 1 of the challenge. Storing the current user and find the current user throughout the application was a bit challenging. Used `localStorage` to store the user id after log in then installed a `Cookies` packages to store it. 

Then created pages for Products, added dynamic routes for individual product. Refactored the code and added reusable components to work with. Added rule for pages where `authenticatedUser` will be able to access only and added a Navbar for easier navigation throughout the application. 

When a product is bought or borrowed, it will not appear in the all products list as i have added a endpoint in the backend that fetches only the unsold products. 

In the transactions part, i tried to add different endpoints that fetches products that are sold, borrowed, bought or lent by the authenticted current user. 

When a user logs out, the user id gets removed from the cookies. 


## Testing
Ran tests for each controllers `bin/rails test test/backend/controller/controllerName_test.rb`
Notable errors were like, Foreign key reference, related entity destroying, field name changing, response sent by the controller mismatch with the test file. Fixed those issues by updating models and in some case the controllers and all tests ran successfully. 

## Containerization
Tried several methods for containerization. Finally, created Dockerfile for each app and from the docker compose file. 

Had to change database configuration in `database.yml`, added the hostname as the database service name, username and password declared in compose file.

Also, added `config.hosts <<  "<back end service name>"` to accept request from frontend using `http://<back end service name>:8000/<end-point>`

In the `cors.rb` file added `http://localhost:3000` in allowed origins to avoid CORS errors.

> Struggled to communicate between the containers with the default network created by docker compose. Then declared `networks` options for back end and front end services and it solved the issue.





