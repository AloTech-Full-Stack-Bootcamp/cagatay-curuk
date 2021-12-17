from django.contrib import admin
from . import models
# Register your models here.

def comment_like_count(self):
    return f'{self.comments.count()} / {self.likes.count()}'


class LikeInline(admin.TabularInline):
    model = models.Comment
    extra = 1
    readonly_fields = ['id', 'user']
    model = models.Like

@admin.register(models.Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'content', 'created_at', 'updated_at', comment_like_count)
    list_filter = ('author__username',)
    search_fields = ('title', 'content', 'author__username')
    ordering = ('-created_at',)
    autocomplete_fields = ('author',)
    inlines = [LikeInline]

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
