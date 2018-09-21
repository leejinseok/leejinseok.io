from django.conf.urls import url
from django.urls import path, include
from django.contrib.auth import views as auth_views  # 이 줄 추가.
from . import views

app_name = 'app'
urlpatterns = [
    url(r'^$', views.view__index, name="index"),
    url(r'^login/', views.api__login, name="login"),
    url(r'^home/', views.view__home, name="home")
]
