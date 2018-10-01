import json
from django.shortcuts import HttpResponse
from django.core import serializers
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from app.models import Post 
from django.views.generic import View

class PostsView(View):
  def get(self, request, *args, **kwargs):
    splited = request.path.split('/')
    return HttpResponse(request.path)

  @csrf_protect
  def post(self, request, *args, **kwargs):
    return HttpResponse('This is POST request')

  @csrf_protect
  def delete(self, request, *args, **kwargs):
    return HttpResponse('This is DELETE request')

  @csrf_protect
  def put(self, request, *args, **kwargs):
    return HttpResponse('This is PUT request')

  @csrf_exempt
  def dispatch(self, *args, **kwargs):
    return super(PostsView, self).dispatch(*args, **kwargs)

