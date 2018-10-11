import json
from django.utils.decorators import method_decorator
from django.shortcuts import HttpResponse, get_object_or_404
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.contrib.auth.models import User
from app.models import Post 
from app.forms import PostForm
from django.views.generic import View

class PostsView(View):
  @method_decorator(csrf_protect)
  def post(self, request, *args, **kwargs):

    user = User.objects.get(pk=request.session['user']['id'])
    form = PostForm(request.POST)
    if form.is_valid():
      post = form.save(commit=False)
      post.author = user
      post.save()
      response = 'success'
    else:
      response = 'failed'

    return HttpResponse(response)

  @method_decorator(csrf_exempt)
  def get(self, request, *args, **kwargs):
    splited = request.path.split('/')
    return HttpResponse('get')

  @method_decorator(csrf_protect)
  def delete(self, request, *args, **kwargs):
    return HttpResponse('This is DELETE request')

  @method_decorator(csrf_protect)
  def put(self, request, *args, **kwargs):
    return HttpResponse('This is PUT request')



