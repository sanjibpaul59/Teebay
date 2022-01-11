from django.db import models
from django.db.models.deletion import SET_DEFAULT
from django.utils import timezone
from rest_framework import status
# Create your models here.
# User Model
class User(models.Model):
  firstName = models.CharField(max_length=255)
  lastName = models.CharField(max_length=255)
  address = models.CharField(max_length=255, blank=True) 
  email = models.EmailField(max_length=255, unique=True)
  phone = models.CharField(max_length=14, blank=True)
  password = models.CharField(max_length=16)
  confirmPassword = models.CharField(max_length=16)
  joined_at = models.DateTimeField(auto_now=True)
  
  def _str_(self):
    return self.email

# Category Model 
class Category(models.Model):
  name = models.CharField(max_length=40)
  # A product can belong to one or more category
  def __str__(self):
      return self.name
    
    
# Product Model 
class Product(models.Model):
  class InventoryProducts(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status="Inventory")
  
  PRODUCT_INVENTORY = 'IN'
  PRODUCT_SOLD = 'SL'
  PRODUCT_LENT = 'LT'
  PRODUCT_STATUS=[
    (PRODUCT_INVENTORY, 'Inventory'),
    (PRODUCT_SOLD, 'Sold'),
    (PRODUCT_LENT, 'Lent'),
    
  ]
  title = models.CharField(max_length=255)
  description = models.TextField()
  categories = models.ManyToManyField(Category)
  rent_price = models.DecimalField(max_digits=4, decimal_places=2)
  sale_price = models.DecimalField(max_digits=6, decimal_places=2)
  last_update = models.DateTimeField(auto_now=True)
  posted_at = models.DateTimeField(default=timezone.now)
  status = models.CharField(max_length=2, choices=PRODUCT_STATUS, default=PRODUCT_INVENTORY)
  owner = models.ForeignKey(User, on_delete=models.PROTECT, default=1)