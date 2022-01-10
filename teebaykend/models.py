from django.db import models

# Create your models here.
class User(models.Model):
  firstName = models.CharField(max_length=255)
  lastName = models.CharField(max_length=255)
  email = models.EmailField(max_length=255, unique=True)
  address = models.CharField(max_length=255)
  password = models.CharField(max_length=16)
  confirmPassword = models.CharField(max_length=16)
  joined_at = models.DateTimeField(auto_now=True)
  
  def _str_(self):
    return self.email