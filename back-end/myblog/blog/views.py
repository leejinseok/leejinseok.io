from django.shortcuts import render, HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User
from .forms import LoginForm
from django.contrib.auth import login, authenticate
from django.template import RequestContext

# Create your views here.
def index(request):
  context = {
    'css': [
      'blog/css/index.css'
    ],
    'js': [
      'blog/js/index.js'
    ]
  }

  return render(request, 'blog/index.html', context)  

def login(request):
  form = LoginForm(request.POST)
  username = request.POST['username']
  password = request.POST['password']
  user = authenticate(username = username, password = password)
  if user is not None:
    return HttpResponseRedirect(reverse('blog:home'))
  else:
    return HttpResponseRedirect(reverse('blog:index'))

def home(request):
  context = {
    'css': [
      'blog/css/home.css'
    ],
    'js': [
      'blog/js/home.js'
    ]
  }

  return render(request, 'blog/home.html', context)  
