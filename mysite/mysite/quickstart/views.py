from django.shortcuts import render
from django.contrib.auth.models import User, Group
from mysite.quickstart.serializers import UserSerializer, GroupSerializer
from rest_framework import viewsets

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


# Create your views here.
