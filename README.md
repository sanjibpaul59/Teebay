# Teebay
> An one stop solutions for all necessary items we need day to day

## This article describes necessary steps to run the project in your machine.

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

In the root directory, by the command `django-admin startproject teebay .` the main project was initiated.
In the `settings.py` of the project directory, inside DATABASE section, postgres was configured. 
Next, 
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
This commands were issued to run the project. In `http://127.0.0.1:8000 | http://localhost:8000` the output was shown.
