from rest_framework import serializers
from django.contrib.auth.models import User

from main.models import Post, Comment, Like

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class PostSerializier(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(
            read_only=True,
            slug_field='username'
    )

    likes_comments_count = serializers.SerializerMethodField()
    def get_likes_comments_count(self, obj):
        return f"Likes: {obj.likes_count} / Comments: {obj.comments_count}"
        
    
    class Meta:
        model = Post
        fields = ('id', 'url', 'image', 'title', 'content', 'author', 'created_at', 'updated_at','likes_count','comments_count','likes_comments_count')
        

class LikeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

