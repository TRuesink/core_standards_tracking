from django.db import models
from users.models import CustomUser

class Class(models.Model):
    name = models.CharField(max_length=100)
    grade_level = models.IntegerField()
    teachers = models.ManyToManyField(CustomUser, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self) -> str:
        return self.name
