# Generated by Django 4.0.1 on 2022-01-10 23:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=255)),
                ('lastName', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('address', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=16)),
                ('confirmPassword', models.CharField(max_length=16)),
            ],
        ),
    ]
