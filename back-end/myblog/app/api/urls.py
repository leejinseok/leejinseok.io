from django.conf.urls import url
from django.urls import path, include
from .auth import urls as auth_urls

urlpatterns = [
  url(r'^auth/', include(auth_urls))
]
