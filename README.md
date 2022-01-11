# Teebay
> An one stop solutions for all necessary items we need day to day

## This article describes necessary steps to run the project in your machine.

Generally, you need to have [Python](https://www.python.org/) installed in your computer or you can [download](https://www.python.org/downloads/) from here.
Check the version using `python3 --version`

Then using `pip3 install pipenv` you need to install the virtual environment. Furthermore, `pipenv` will be used to install [Django](https://www.djangoproject.com/). 

The command list goes as,
```
pip3 install pipenv
pipenv --venv 
pipenv shell
pipenv install django djangorestframework psycopg2-binary

```
