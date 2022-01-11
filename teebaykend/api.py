from rest_framework.decorators import permission_classes
from teebaykend.models import User, Product, Category
from rest_framework import serializers, viewsets, permissions
from .serializers import UserSerializer, ProductSerializer, CategorySerializer

class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  permission_classes = [permissions.AllowAny]
  serializer_class = UserSerializer

class ProductViewSet(viewsets.ModelViewSet):
  queryset = Product.objects.all()
  permission_classes = [permissions.AllowAny]
  serializer_class = ProductSerializer
  
class CategoryViewSet(viewsets.ModelViewSet):
  queryset = Category.objects.all()
  permission_classes = [permissions.AllowAny]
  serializer_class = CategorySerializer