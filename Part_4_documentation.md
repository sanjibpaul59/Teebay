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
