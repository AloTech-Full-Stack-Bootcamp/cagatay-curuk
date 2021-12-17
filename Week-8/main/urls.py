
from django.urls import path, include
from rest_framework import routers

from .views import PostViewSet, LikeViewSet, CommentViewSet, UserViewSet

# We are registering our viewset(controllers) to the routers
router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'likes', LikeViewSet)
router.register(r'coments', CommentViewSet)
router.register(r'users', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
