from django.urls import path

from . import views

app_name = 'backend'
urlpatterns = [
    path('account', views.account, name='account'),
    path('login', views.login, name='login'),
    path('register', views.register, name='register'),
    path('status', views.orderStatus, name='status'),
    path('orderStatus', views.getOrderByStatus, name='orderStatus'),
    path('order', views.placeOrder, name='order'),
    path('inventory', views.getStock, name='inventory'),
    path('history', views.orderHistory, name='history'),
    path('update', views.updateOrder, name='update'),
    path('view', views.viewOrder, name='view'),
    path('updateInfo', views.updateInfo, name='updateInfo'),
    path('mostpurchased', views.mostpurchased, name='mostpurchased'),
    path('manageAccounts', views.manageAccounts, name='manageAccounts'),
    path('deleteAccount', views.deleteAccount, name='deleteAccount'),
    path('favorite', views.setFavOrder, name='favorite'),
    path('getFavorite', views.getFavOrder, name='getFavorite')
]
