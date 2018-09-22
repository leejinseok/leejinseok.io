from django.conf.urls import url
from django.urls import path, include
from .auth import urls as auth_urls
from .post import urls as posts_urls

urlpatterns = [
  path('auth/', include(auth_urls)),
  path('post/', include(posts_urls))
]
