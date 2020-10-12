from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.

from .models import Account

def account(request):
    b = Account.objects.get(id=request.GET.get('id',0))

    print("fff")

    theID = request.GET.get('id', 2)

    data = {
        'firstName': b.firstName,
        'lastName': b.lastName,
        'email': b.email,
        'phoneNumber': b.phoneNumber,
        'rewards': b.rewards,
        'balance': b.balance,
        'password': b.password,
        'type': b.type
    }

    return JsonResponse(data)
