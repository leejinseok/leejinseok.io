from django import forms
from django.contrib.auth.models import User
from .models import Post

class LoginForm(forms.ModelForm):
  class Meta:
    model = User
    fields = ['username', 'password'] # 로그인 시에는 유저이름과 비밀번호만 입력 받는다.

class PostForm(forms.ModelForm):
  class Meta:
    model = Post
    fields = ['title']