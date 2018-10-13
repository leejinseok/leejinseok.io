import json
import pprint
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.shortcuts import HttpResponse, get_object_or_404 
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.views.generic import View
from django.contrib.auth.models import User
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.core import serializers
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
    post_list = Post.objects.all().order_by('-created_date')
    serialized = serializers.serialize('json', list(post_list), fields=('title', 'content'))
    print(serialized)
    return JsonResponse(serialized, safe=False)

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



