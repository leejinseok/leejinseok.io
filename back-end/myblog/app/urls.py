from django.conf.urls import url
from django.urls import path, include
from django.contrib.auth import views as auth_views  # 이 줄 추가.
from .views import views
from .views import api

app_name = 'app'
urlpatterns = [
    url(r'^$', views.index, name="index"), # index
    url(r'^posts', views.posts, name="posts"), # posts
    url(r'^post/(?P<pk>\d+)', views.post_detail, name="post_detail"), # posts
    url(r'^api/v1/login', api.loginAPI, name="login"), # api / login
]
