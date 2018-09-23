from django.conf.urls import url
from django.urls import path, include
from . import views
from .api import urls as api_urls

app_name = 'app'
urlpatterns = [
    path('', views.index, name="index"), # index
    path('posts', views.posts, name="posts"), # posts
    path('post/<int:pk>', views.post_detail, name="post_detail"), # posts
    path('post/write', views.post_write, name="post_write"), # posts
    path('api/', include(api_urls))
]
