from django.urls import path

from . import views

app_name = 'backend'
urlpatterns = [
    path('account', views.account, name='account'),
    path('login', views.login, name='login'),
    path('register', views.register, name='register'),
    path('status', views.orderStatus, name='status'),
    path('order', views.placeOrder, name='order'),
    path('inventory', views.getStock, name='inventory')
    path('history', views.orderHistory, name='history'),
    path('update', views.updateOrder, name='update')
]
