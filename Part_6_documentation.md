# Technical Documentation

Teebay is a simple product buy/sell/rent/lending application, developed with Rails, Next Js, and Mantine.

First, I tried to find the necessary entities for this application. Then I decided what should be attributes and how the entities should relate to each other. A Entity Relationship Diagram below will give the idea of how the database is structured. 


![Alt text](/client/public/teebay_erd.jpg "Teebay ERD")

### Database creation
I created a local postgresql database, then configured it to the rails app to work with and created Models following the ERD and migrated them to database.
## Rails app (backend) configuration
 Added routes for resources. Tried out the endpoints using [Insomnia](https://insomnia.rest/)
Updated the models based on their relations and added controllers for related entities. Server side validation checks were also written.

## Next Js app (client)
First I created pages for user authentication to complete Part 1 of the challenge. Storing the current user and find the current user throughout the application was a bit challenging.

Then created pages for Products, added dynamic routes for individual product. Refactored the code and added reusable components to work with.

## Testing
Ran tests for each controllers `bin/rails test test/backend/controller/controller_test_name.rb`
Notable errors were like, Foreign key reference, related entity destroying, field name changing. Fixed those issues and all tests ran successfully. 

## Containerization
Tried several methods for containerization. Finally, created Dockerfile for each app and from the docker compose file 



