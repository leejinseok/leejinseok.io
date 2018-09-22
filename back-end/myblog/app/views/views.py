from django.shortcuts import render, HttpResponse, HttpResponseRedirect, redirect
from django.contrib.auth import login, authenticate
from django.urls import reverse
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from ..forms import LoginForm
from ..models import Post

# index (login form)
def index(request):
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

# posts
def posts(request):
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
    'posts': posts
  }
  return render(request, 'app/posts.html', context)

def post_detail(request, pk):
  post = Post.objects.values(
    'id',
    'author__username',
    'title',
    'category__display_name',
    'created_date',
  ).get(id=pk)
  context = {
    'css': [
      'app/css/post_detail.css'
    ],
    'js': [
      'app/js/post_detail.js'
    ],
    'post': post
  }
  return render(request, 'app/post_detail.html', context)

