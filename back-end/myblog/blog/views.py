from django.shortcuts import render, HttpResponse, HttpResponseRedirect
from django.urls import reverse

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
  return HttpResponseRedirect(reverse('blog:index'))
