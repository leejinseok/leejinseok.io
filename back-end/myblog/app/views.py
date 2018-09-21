from django.shortcuts import render, HttpResponse, HttpResponseRedirect, redirect
from .forms import LoginForm
from django.contrib.auth import login, authenticate
from django.urls import reverse

# view__index
def view__index(request):
  # if (request.user):
  #   return redirect('app:home');

  form = LoginForm()
  context = {
    'css': [
      'app/css/index.css'
    ],
    'js': [
      'app/js/index.js'
    ],
    'form': form
  }

  return render(request, 'app/index.html', context)  

# view_home
def view__home(request):
  context = {
    'css': [
      'app/css/home.css'
    ],
    'js': [
      'app/js/home.js'
    ],
    'request': request
  }
  return render(request, 'app/home.html', context)

# api__login
def api__login(request): 
  if request.method == "POST":
    form = LoginForm(request.POST)
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username = username, password = password)
    if user is not None:
      login(request, user)
      return redirect('app:home')
    else:
      return HttpResponse('로그인 실패. 다시 시도 해보세요.')
