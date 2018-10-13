import json
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.shortcuts import HttpResponse, get_object_or_404 
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.contrib.auth.models import User
from django.views.generic import View
from app.models import Post 
from app.forms import PostForm

class PostsView(View):
  @method_decorator(csrf_protect)
  def post(self, request, *args, **kwargs):
    user = User.objects.get(pk=request.session['user']['id'])
    form = PostForm(request.POST)
    if form.is_valid():
      post = form.save(commit=False)
      post.author = user
      post.save()
      return JsonResponse({
        'status': 'success',
      })
    else:
      return JsonResponse({
        'status': 'failed',
      })

  @method_decorator(csrf_exempt)
  def get(self, request, *args, **kwargs):
    splited = request.path.split('/')
    return HttpResponse('get')

  @method_decorator(csrf_exempt)
  def put(self, request, *args, **kwargs):
    return HttpResponse('This is PUT request')

  @method_decorator(csrf_protect)
  def delete(self, request, *args, **kwargs):
    post = get_object_or_404(Post, id=kwargs['id']);
    try:
      post.delete()
      return JsonResponse({
      'status': 'success',
      })
    except ProtectedError:
      error_message = "This object can't be deleted!!"
      return JsonResponse(error_message)

    return JsonResponse({
      'status': 'failed',
    })



