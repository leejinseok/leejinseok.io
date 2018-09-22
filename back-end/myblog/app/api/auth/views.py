from django.shortcuts import  HttpResponse, HttpResponseRedirect, redirect
from django.contrib.auth import login, authenticate
from app.forms import LoginForm
from app.models import Post

# api__login
def loginAPI(request): 
  if request.method == "POST":
    form = LoginForm(request.POST)
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username = username, password = password)
    if user is not None:
      login(request, user)
      return redirect('app:posts')
    else:
      return HttpResponse('로그인 실패. 다시 시도 해보세요.')