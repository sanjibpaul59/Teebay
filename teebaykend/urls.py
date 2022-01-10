from rest_framework import routers, urlpatterns
from .api import UserViewSet

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')

urlpatterns = router.urls