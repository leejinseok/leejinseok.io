from django.conf.urls import url
from django.urls import path, include
from .views import PostsView

urlpatterns = [
  url(r'^', PostsView.as_view(), name="api-posts"),
]
