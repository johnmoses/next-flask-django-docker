from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.http import HttpRequest, HttpResponse
from .serializers import RegisterSerializer

def welcome(request: HttpRequest) -> HttpResponse:
    return HttpResponse("Welcome to API.")

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer