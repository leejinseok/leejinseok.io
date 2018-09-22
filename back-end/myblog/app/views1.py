from django.shortcuts import render, HttpResponse, HttpResponseRedirect, redirect
from django.contrib.auth import login, authenticate
from django.urls import reverse
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from .forms import LoginForm
from .models import Post

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
def view__posts(request):
  post_list = Post.objects.all().values(
    'id',
    'title',
    'created_date',
    'category_id',
    'category__display_name'
  )
  paginator = Paginator(post_list, 20)
  page = request.GET.get('page') if request.GET.get('page') else 1  
  posts = paginator.get_page(page)
  context = {
    'css': [
      'app/css/posts.css'
    ],
    'js': [
      'app/js/posts.js'
    ],
    'request': request,
    'posts': posts
  }
  return render(request, 'app/posts.html', context)

# api__login
def api__login(request): 
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
