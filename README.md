# Teebay
> An one stop solutions for all necessary items we need day to day

## This article describes necessary steps to run the project in your machine.

Technologies used in this project are as follows:  

**Front-end**
- React, React-router, React-router-dom
- Bootstrap
- react-bootstrap  

**Backend**
- Django
- Django Rest Framework
- Cors Headers

**Database**
- Postgresql

**First** `git clone` the project in your local machine.  
In the terminal `cd Teebay`  
In your preferred terminal open the project. For VsCode use `code .`  
Run `pipenv install django djangorestframework psycopg2-binary` if you have pipenv installed, otherwise use `pip3 install pipenv` & `pipenv shell` then issue the previous command.  
Choose the Python Interpreter by pressing `Ctrl+Shift+P`.  
After installation of the required packages, run `python manage.py makemigration` followed by `pyhton manage.py migrate` to migrate the models to database.  
Finally run `python manage.py runserver` to start the backend.  
Then `cd client` will take you to the front-end part. There `npm i` and `npm start` command will startup the front-end app.
Frontend will run locally at Localhost [http://localhost:3000](http://localhost:3000) and backend apis will be found at Api Root [http://127.0.0.1:8000](http://127.0.0.1:8000)

