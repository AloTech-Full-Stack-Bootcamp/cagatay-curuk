from rest_framework import viewsets
from django.contrib.auth.models import User

from main.models import Post, Comment, Like
from .serializers import PostSerializier, CommentSerializer, LikeSerializer, UserSerializer


class PostViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializier


class LikeViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class CommentViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer