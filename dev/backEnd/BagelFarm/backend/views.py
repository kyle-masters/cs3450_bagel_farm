from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Account


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
    except ObjectDoesNotExist:
        return HttpResponse("Does not exist")
    except ValueError:
        return HttpResponse("Invalid id")
    except:
        return HttpResponse("Error")

def login(request):
    return HttpResponse(True)

def register(request):
    return HttpResponse(True)