from django.shortcuts import render, HttpResponse

# Create your views here.
def view__index(request):
  context = {
    'css': [
      'app/css/index.css'
    ],
    'js': [
      'app/js/index.js'
    ]
  }

  return render(request, 'app/index.html', context)  
  # return HttpResponse('Hello world')
