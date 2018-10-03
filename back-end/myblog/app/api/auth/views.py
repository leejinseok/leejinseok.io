from django.http import JsonResponse
from django.shortcuts import  HttpResponse, HttpResponseRedirect, redirect
from django.contrib.auth import authenticate
from app.forms import LoginForm
from app.models import Post

# api-auth-login
def login(request): 
  if request.method == "POST":
    form = LoginForm(request.POST)
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username = username, password = password)
    if user is not None:
      request.session['user'] = {
        'username': user.username,
        'id': user.id
      }

      return redirect('app:posts')
    else:
      return HttpResponse('로그인 실패. 다시 시도 해보세요.')