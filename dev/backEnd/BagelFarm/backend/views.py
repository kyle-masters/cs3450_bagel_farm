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
            account.save()

            newAccount = Account.objects.get(email=request.GET.get('email'))

            response = JsonResponse({'id': newAccount.id})
            response['Access-Control-Allow-Origin'] = '*'
            return response

        else:
            response =  JsonResponse({'status':False})
            response['Access-Control-Allow-Origin'] = '*'
            return response
    except ValueError:
        response = JsonResponse({'status': False})
        response['Access-Control-Allow-Origin'] = '*'
        return response

def validateRegistration(requestInfo):
    for info in requestInfo:
        if info is None:
            return False

    if Account.objects.filter(email=requestInfo[2]).exists():
        return False

    # Implement data validations

    return True

def login(request):
    try:
        emailAttempt = request.GET.get('email', 'example@example.com')

        #Validate email using a regex
        if re.search(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", emailAttempt) == None:
            return JsonResponse({'status':'SuperFalse'})
        
        else:
            passwordAttempt = request.GET.get('password', 'admin')

            #Validate password using a regex
            acctId = Account.objects.get(email = emailAttempt)

            if acctId.password == passwordAttempt:
                response = JsonResponse({'id':acctId.id})
                response['Access-Control-Allow-Origin'] = '*'
                return response
            else:
                response = JsonResponse({'status':'False1'})
                response['Access-Control-Allow-Origin'] = '*'
                return response
    except:
        return JsonResponse({'status':'False2'})
