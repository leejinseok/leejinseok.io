from django.urls import path, include
from . import views

app_name = 'app'
urlpatterns = [
    path('', views.view__index, name="index"),
]
