from django.contrib import admin
from . import models
# Register your models here.

class LikeInline(admin.TabularInline):
    model = models.Comment
    extra = 1
    readonly_fields = ['id', 'user']
    model = models.Like

@admin.register(models.Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'content', 'created_at', 'updated_at', 'likes_comments_count')
    list_filter = ('author__username',)
    search_fields = ('title', 'content', 'author__username')
    ordering = ('-created_at',)
    autocomplete_fields = ('author',)
    inlines = [LikeInline]

    def likes_comments_count(self,post):
        return f'{post.likes.count()} / {post.comments.count()}'

@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = ('post', 'user', 'created_at')
    list_filter = ('created_at',)
    autocomplete_fields = ('user','post')


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('post', 'user', 'created_at')
    list_filter = ('created_at',)
    autocomplete_fields = ('user','post')
