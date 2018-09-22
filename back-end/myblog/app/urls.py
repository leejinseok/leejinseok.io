from django.conf.urls import url
from django.urls import path, include
from . import views
from .api import urls as api_urls

app_name = 'app'
urlpatterns = [
    url(r'^$', views.index, name="index"), # index
    url(r'^posts', views.posts, name="posts"), # posts
    url(r'^post/(?P<pk>\d+)', views.post_detail, name="post_detail"), # posts
    url(r'^api/', include(api_urls))
]
