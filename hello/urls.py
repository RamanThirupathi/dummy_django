from django.contrib import admin
from django.urls import path , include
from hello import views as v2

app_name='hello'
urlpatterns = [
    path('home', v2.wHome,name='home'),
]