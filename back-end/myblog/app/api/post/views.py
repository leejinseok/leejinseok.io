import json
from django.shortcuts import HttpResponse
from django.core import serializers
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from app.models import Post 

def all(request):
  return HttpResponse('hi')

def register(request):
  return JsonResponse({
    'method': 'POST'
  })

@csrf_exempt
def one(request, id):
  if (request.method == 'GET'):
    post = Post.objects.values('id', 'title', 'category__display_name', 'created_date').get(id=id)
    return JsonResponse(dict(post), safe=False)

  if (request.method == 'DELETE'):
    return JsonResponse({
      'method': 'DELETE'
    })
  
  if (request.method == 'PUT'):
    return JsonResponse({
      'method': 'PUT'
    })

  if (request.method == 'POST'): 
    return JsonResponse({
      'method': 'POST'
    })