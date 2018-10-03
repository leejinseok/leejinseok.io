from django.shortcuts import render, HttpResponse, HttpResponseRedirect, redirect
from django.contrib.auth import login, authenticate
from django.urls import reverse
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from app.forms import LoginForm
from app.models import Post

# index (login form)
def index(request):
  # if request.session.get('user', True):
  #     return redirect('app:posts')
  
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
    'breadcrumbs': [
      {
        'display': '<i class=\'fas fa-home\'></i>',
        'url': 'app:posts',
        'class': '',
      },
      {
        'display': '포스트',
        'url': '#',
        'class': 'active',
      }
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
    'breadcrumbs': [
      {
        'display': '<i class=\'fas fa-home\'></i>',
        'url': 'app:posts',
        'class': '',
      },
      {
        'display': '포스트',
        'url': 'app:posts',
        'class': '',
      },
      {
        'display': '상세',
        'url': '#',
        'class': 'active',
      }
    ],
    'post': post
  }
  return render(request, 'app/post_detail.html', context)

def post_write(request):
  context = {
    'css': [
      'app/css/post_write.css'
    ],
    'js': [
      'app/js/post_write.js'
    ],
    'breadcrumbs': [
      {
        'display': '<i class=\'fas fa-home\'></i>',
        'url': 'app:posts',
        'class': '',
      },
      {
        'display': '포스트',
        'url': 'app:posts',
        'class': '',
      },
      {
        'display': '글쓰기',
        'url': '#',
        'class': 'active',
      }
    ],
  }

  return render(request, 'app/post_write.html', context)

