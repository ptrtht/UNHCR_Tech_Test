# example/urls.py
from django.urls import path

from UNHCR_django.routes import palindrome, index


urlpatterns = [
    path('unhcr', palindrome),
    path('', index)
]