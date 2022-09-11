from django.urls import path

from .views import ClassList, ClassDetail

urlpatterns = [
    path('class/<int:pk>/', ClassDetail.as_view(), name='class_detail'),
    path('class/', ClassList.as_view(), name='class_list')
]