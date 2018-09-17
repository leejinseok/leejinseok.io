from django.shortcuts import render

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
