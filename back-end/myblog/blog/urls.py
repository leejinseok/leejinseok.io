from django.urls import path

from . import views

app_name = 'blog'
urlpatterns = [
  path('', views.index, name='index'),
  path('login', views.login, name='login'),
  path('home', views.home, name='home'),
]