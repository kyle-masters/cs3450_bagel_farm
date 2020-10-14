from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Account
import re


def account(request):
    try:
        b = Account.objects.get(id=request.GET.get('id', 0))

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
    except:
        return JsonResponse({'status':False})

def login(request):
    return JsonResponse({'status':False})

def register(request):

    try:
        valid = validateRegistration([request.GET.get('firstName'),request.GET.get('lastName'),request.GET.get('email'),
                                      request.GET.get('phoneNumber'),request.GET.get('password')])

        if valid is True:

            account = Account.objects.all().create(
                firstName=request.GET.get('firstName'),
                lastName=request.GET.get('lastName'),
                email=request.GET.get('email'),
                phoneNumber=request.GET.get('phoneNumber'),
                type=0,
                password=request.GET.get('password'),
                balance=100,
                rewards=0,
            )
            account.save
            return JsonResponse({'status':True})
        else:
            return JsonResponse({'status':False})
    except ValueError:
        return JsonResponse({'status':False})

def validateRegistration(requestInfo):
    for info in requestInfo:
        if info is None:
            return False

    # Implement data validations

    return True