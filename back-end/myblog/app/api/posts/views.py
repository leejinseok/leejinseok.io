import json
from django.utils.decorators import method_decorator
from django.shortcuts import HttpResponse
from django.core import serializers
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, csrf_protect, ensure_csrf_cookie
from app.models import Post 
from django.views.generic import View

class PostsView(View):
  # @csrf_exempt
  # def dispatch(self, *args, **kwargs):
  #   return super(PostsView, self).dispatch(*args, **kwargs)

  @method_decorator(csrf_protect)
  def post(self, request, *args, **kwargs):
    print(request)
    return HttpResponse('This is POST request')

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



