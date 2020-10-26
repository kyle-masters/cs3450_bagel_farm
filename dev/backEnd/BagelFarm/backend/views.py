from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.core.exceptions import ObjectDoesNotExist
<<<<<<< HEAD
from .models import Account
from .models import Item
=======
from .models import Account, Item, Order, OrderItem
from django.utils import timezone
from decimal import *
>>>>>>> origin/development
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

        response = JsonResponse(data)
        response['Access-Control-Allow-Origin'] = '*'
        return response
    except:
        response = JsonResponse({'status':False})
        response['Access-Control-Allow-Origin'] = '*'
        return response

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

            response = JsonResponse({
                'id':newAccount.id,
                'firstName': newAccount.firstName,
                'lastName': newAccount.lastName,
                'phoneNumber': newAccount.phoneNumber,
                'email': newAccount.email,
                'balance': newAccount.balance,
                'rewards': newAccount.rewards
            })
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
            response = JsonResponse({'status': False})
            response['Access-Control-Allow-Origin'] = '*'
            return response

    if Account.objects.filter(email=requestInfo[2]).exists():
        response = JsonResponse({'status': False})
        response['Access-Control-Allow-Origin'] = '*'
        return response

    # Implement data validations

    response = JsonResponse({'status': True})
    response['Access-Control-Allow-Origin'] = '*'
    return response

def login(request):
    try:
        emailAttempt = request.GET.get('email', 'example@example.com')

        #Validate email using a regex
        if re.search(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", emailAttempt) == None:
            response = JsonResponse({'status': False})
            response['Access-Control-Allow-Origin'] = '*'
            return response
        
        else:
            passwordAttempt = request.GET.get('password', 'admin')

            #Validate password using a regex
            acctId = Account.objects.get(email = emailAttempt)

            if acctId.password == passwordAttempt:
                response = JsonResponse({
                    'id':acctId.id,
                    'firstName': acctId.firstName,
                    'lastName': acctId.lastName,
                    'phoneNumber': acctId.phoneNumber,
                    'email': acctId.email,
                    'balance': acctId.balance,
                    'rewards': acctId.rewards
                })
                response['Access-Control-Allow-Origin'] = '*'
                return response
            else:
                response = JsonResponse({'status':False})
                response['Access-Control-Allow-Origin'] = '*'
                return response
    except:
<<<<<<< HEAD
        return JsonResponse({'status':'False2'})

def inventory(request):
    try:
        item = Item.objects.all()
        #This holds the actual inventory numbers
        currentInventory = {
            'plainBagelNum':item.plainBagelNum,
            'onionBagelNum':item.onionBagelNum,
            'cinnamonRaisinBagel':item.cinnamonRaisinBagel,
            'sesameBagelNum':item.sesameBagelNum,
            'cheesyBagelNum':item.cheesyBagelNum,
            'pumpernickelBagelNum':item.pumpernickelBagelNum,
            'plainSmearNum':item.plainSmearNum,
            'honeyNutSmearNum':item.honeyNutSmearNum,
            'strawberrySmearNum':item.strawberrySmearNum,
            'frenchOnionSmearNum':item.frenchOnionSmearNum,
            'coffeeNum':item.coffeeNum,
            'milkNum':item.milkNum,
            'orangeJuiceNum':item.orangeJuiceNum,
            'waterNum':item.waterNum,
            'baconToppingNum':item.baconToppingNum,
            'eggToppingNum':item.eggToppingNum,
            'cheeseToppingNum':item.cheeseToppingNum,
            'sausageToppingNum':item.sausageToppingNum,
            'avacadoToppingNum':item.avacadoToppingNum,
            'turkeyToppingNum':item.turkeyToppingNum,
            'hamToppingNum':item.hamToppingNum,
            'spinnachToppingNum':item.spinnachToppingNum,
            'tomatoToppingNum':item.tomatoToppingNum,
            'loxToppingNum':item.loxToppingNum
        }
        response = JsonResponse(currentInventory)
        response['Access-Control-Allow-Origin'] = '*'
        return response

    except:
        return JsonResponse({'status':False})
=======
        response = JsonResponse({'status':False})
        response['Access-Control-Allow-Origin'] = '*'
        return response

def orderStatus(request):
    acctID = request.GET.get('id')

    orders = Order.objects.all().filter(accountID=acctID).filter(accountID__gte=1)

    orderInfoList = []
    for order in orders:
        items = OrderItem.objects.all().filter(orderID=order.id)
        itemInfoList = []
        for item in items:
            itemInfo = {
                'name': item.name,
                'quantity': item.quantity,
                'price': item.price
            }
            itemInfoList.append(itemInfo)
        orderInfo = {
            'orderID': order.id,
            'items': itemInfoList,
            'status': order.status,
            'orderTime': order.orderTime,
            'price': order.price
        }
        orderInfoList.append(orderInfo)

    response = JsonResponse({'id': acctID,
                         'orders': orderInfoList})
    response['Access-Control-Allow-Origin'] = '*'
    return response


def placeOrder(request):

    order = Order.objects.all().create(
        status=1,
        accountID=request.GET.get("id"),
        price=0,
        orderTime=timezone.now(),
        pickupTime=timezone.now(),
        isFavorite=False
    )

    totalPrice = Decimal(0.0)
    for k, v in request.GET.items():
        if k.startswith("item"):
            orderitem = OrderItem.objects.all().create(
                name=v,
                quantity=request.GET.get("qty_"+k[5:], 1),
                price=getCurrentPrice(v),
                orderID=order
            )
            totalPrice = totalPrice + getCurrentPrice(v)

    order.price = totalPrice

    response = JsonResponse({'status': True})
    response['Access-Control-Allow-Origin'] = '*'
    return response


def getCurrentPrice(name):
    nameParts = name.split("_")
    item = Item.objects.all().get(name=nameParts[0], category=nameParts[1])
    return item.price
>>>>>>> origin/development
