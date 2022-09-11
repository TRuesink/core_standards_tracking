from rest_framework import generics

from .permissions import IsOwnerOrReadOnly

from .models import Class
from .serializers import ClassSerializer

class ClassList(generics.ListCreateAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

class ClassDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

# Create your views here.
