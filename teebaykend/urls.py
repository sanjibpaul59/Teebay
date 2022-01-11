from django.urls import path, include
from rest_framework import routers, urlpatterns
from .api import UserViewSet, ProductViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet, 'users')
router.register(r'products', ProductViewSet, 'products')
router.register(r'categories', CategoryViewSet, 'categories')


urlpatterns = [
  path('api/', include(router.urls)),
  path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]