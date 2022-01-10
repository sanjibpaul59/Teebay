from rest_framework.decorators import permission_classes
from teebaykend.models import User
from rest_framework import serializers, viewsets, permissions
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  permission_classes = [permissions.AllowAny]
  serializer_class = UserSerializer