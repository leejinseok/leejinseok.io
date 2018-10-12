from django.conf.urls import url
from django.urls import path, include
from .views import PostsView

urlpatterns = [
  path('<int:id>', PostsView.as_view(), name="api-post"),
  path('', PostsView.as_view(), name="api-posts"),
]
