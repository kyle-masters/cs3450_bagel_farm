from django.urls import path

from . import views

app_name = 'backend'
urlpatterns = [
    path('account', views.account, name='account'),
    path('login', views.login, name='login'),
    path('register', views.register, name='register'),
    path('createitem', views.createitem, name='createitem'),
    path('increment', views.increment, name='increment'),
    path('decrement', views.decrement, name='decrement')
]
