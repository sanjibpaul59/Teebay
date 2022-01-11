# Project Documentation

### Step by Step Description

Generally, you need to have [Python](https://www.python.org/) installed in your computer or you can [download](https://www.python.org/downloads/) from here.
Check the version using `python3 --version`

Then using `pip3 install pipenv` you need to install the virtual environment. Furthermore, `pipenv` will be used to install [Django](https://www.djangoproject.com/). 

The command list goes as,
```
pip3 install pipenv
pipenv shell
pipenv install django djangorestframework psycopg2-binary

```
You can get the virtual environment created by running `pipenv --venv` and then activate (in case it does not activated automatically) by running `Source /path/name of venv/bin/activate`

In VsCode, by pressing `Ctrl+Shift+P` you can select python interpreter and start working.

`pipenv install` will create a Pipfile in the root directory.

In the root directory, by the command `django-admin startproject teebaydmin .` the main project was initiated.
In the `settings.py` of the project directory, inside DATABASE section, postgres was configured. 
Next, 
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
This commands were issued to run the project. In `http://127.0.0.1:8000 | http://localhost:8000` the output was shown.

### Approach

The idea was simple, to create a eCommerce website name **Teebay** using React, Django and Postgresql.  
I am familiar with react but Django and Postgres was new to me when I started the project.

To startwith, I installed pipenv in my machine and then went by installing venv and django respectively.
Created the django project by `django-admin startproject teebaydmin .` and inspected the files and folders to understand what's goin on.  

After that I created the `teebaykend` app by running `python manage.py startapp teebaykend` from the command line.  Created data models in `models.py`, determined the relationship between the models. Django Rest Framework provides `serializers` which helps to convert the queryset and complex data types to native Python datatypes which can be rendered easily. `urls.py` files contains the urls for the backend app and in the `api.py` I created the viewsets. 

Used Proxy in `package.json` to avoid Cross origin policy and whitelisted `localhost:3000` in the `settings.py` to communicate with the fronend app.

Created a new app named frontend in the root directory issuing `python manage.py startapp frontend` then `npx create-react-app` to implement the front-end application.

### Challenges faced
I misinterpreted the goal at the very first place when I saw the last line of the Instruction. Therefore I choose the harder approach. I would say, I went for excellence but I totally missed the basics.

I went for Containerized application at the first place which made thing tougher. Eventually I followed the simple approach at the very last minute. 

The project is not complete, not even the preliminary features. There is some components for Sign In and Register and Listing out the Products, However, The major api's are ready.  
It needs time to be in a standard stage. 

There were some issues with `Semantic UI React` with webpack issues. I had to choose alternate options which cost me more time from very limited time.
