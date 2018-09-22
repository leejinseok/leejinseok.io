from django.conf.urls import url
from django.urls import path, include
from . import views

urlpatterns = [
  path('', views.all, name="all"),
  path('<int:id>', views.one, name="one"),
]
