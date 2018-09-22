from django.db import models
from django.utils import timezone

# Create your models here.
class PostCategory(models.Model):
  display_name = models.CharField(max_length=100)

  def __str__(self):
    return self.display_name

class Post (models.Model):
  author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
  category = models.ForeignKey(PostCategory, on_delete=models.DO_NOTHING)
  title = models.CharField(max_length=200)
  created_date = models.DateTimeField(default=timezone.now)
  published_date = models.DateTimeField(blank=True, null=True)

  def publish(self):
    self.published_date = timezone.now()
    self.save()
  
  def __str__(self):
    return self.title

