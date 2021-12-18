from rest_framework import viewsets
from django.contrib.auth.models import User

from main.models import Post, Comment, Like
from .serializers import PostSerializier, CommentSerializer, LikeSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response


class PostViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializier
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['get'])
    def like_create(self, request, pk=None):
        user = request.user
        post = self.get_object()
        qs = Like.objects.get_or_create(post=post, user=user)
        serializer = LikeSerializer(qs[0],context={'request': request})
        return Response(serializer.data)


class LikeViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    permission_classes = [IsAuthenticated]


class CommentViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]


class UserViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
