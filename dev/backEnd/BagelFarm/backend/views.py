from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.core.exceptions import ObjectDoesNotExist
from .models import Account, Item, Order, OrderItem
from django.utils import timezone
from decimal import *
import re
import random

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
        valid = validateRegistration([request.GET.get('firstName'),request.GET.get('lastName'),request.GET.get('email'), request.GET.get('phoneNumber'),request.GET.get('password')])

        if valid:

            account = Account.objects.all().create(
                firstName=request.GET.get('firstName'),
                lastName=request.GET.get('lastName'),
                email=request.GET.get('email'),
                phoneNumber=request.GET.get('phoneNumber'),
                type=0,
                password=request.GET.get('password'),
                balance=100,
                rewards=0
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
                'rewards': newAccount.rewards,
                'type': newAccount.type
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
            return False

    if Account.objects.filter(email=requestInfo[2]).exists():
        response = JsonResponse({'status': False})
        response['Access-Control-Allow-Origin'] = '*'
        return False

    # Implement data validations

    return True

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
                    'rewards': acctId.rewards,
                    'type': acctId.type
                })
                response['Access-Control-Allow-Origin'] = '*'
                return response
            else:
                response = JsonResponse({'status':False})
                response['Access-Control-Allow-Origin'] = '*'
                return response
    except:

        response = JsonResponse({'status':False})
        response['Access-Control-Allow-Origin'] = '*'
        return response

def orderStatus(request):
    acctID = request.GET.get('id')

    orders = Order.objects.all().filter(accountID=acctID).filter(accountID__gte=1).filter(status__lt=4)

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
            'orderID': int(order.id),
            'items': itemInfoList,
            'status': order.status,
            'orderTime': order.orderTime,
            'pickupTime': order.pickupTime,
            'price': order.price,
            'rewards': order.rewards
        }
        orderInfoList.append(orderInfo)

    response = JsonResponse({'id': int(acctID),
                         'orders': orderInfoList})
    response['Access-Control-Allow-Origin'] = '*'
    return response


def getOrderByStatus(request):
    orders = Order.objects.all().filter(status=request.GET.get('status'))

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
            'orderID': int(order.id),
            'items': itemInfoList,
            'status': order.status,
            'orderTime': order.orderTime,
            'pickupTime': order.pickupTime,
            'price': order.price,
            'rewards': order.rewards
        }
        orderInfoList.append(orderInfo)

    response = JsonResponse({'orders': orderInfoList})
    response['Access-Control-Allow-Origin'] = '*'
    return response


def placeOrder(request):

    order = Order.objects.all().create(
        status=1,
        accountID=request.GET.get("id"),
        price=0,
        orderTime=timezone.now(),
        pickupTime=timezone.now(),
        isFavorite=False,
        rewards=0
    )

    totalPrice = Decimal(0.0)
    for k, v in request.GET.items():
        if k.startswith("item"):
            orderitem = OrderItem.objects.all().create(
                name=Item.objects.all().get(id=v).name,
                quantity=request.GET.get("qty_"+k[5:], 1),
                price=Item.objects.all().get(id=v).price * Decimal(request.GET.get("qty_"+k[5:], 1)),
                orderID=order,
                itemID=v
            )
            totalPrice = totalPrice + orderitem.price

    order.price = totalPrice
    order.save()

    # Rewards for the order
    order.rewardPoints = totalPrice * random.randint(100, 500)

    # Rewards for the account
    account = Account.objects.all().get(id=request.GET.get("id"))
    account.rewards = account.rewards + order.rewards
    account.save()

    response = JsonResponse({'status': True})
    response['Access-Control-Allow-Origin'] = '*'
    return response

def setFavOrder(request):
    orderID = request.GET.get("id")
    orderID.isFavorite = request.GET.get("isFavorite")
    orderID.save()
    response = JsonResponse({'status': 'success'})
    response['Access-Control-Allow-Origin'] = '*'
    return response

def getFavOrder(request):
    orderID = request.GET.get("id")
    if(orderID != None):
        response = JsonResponse({'status': 'fail'})
        response['Access-Control-Allow-Origin'] = '*'
        return response
    else:
        response = JsonResponse(orderID.isFavorite)
        response['Access-Control-Allow-Origin'] = '*'
        return response


def getCurrentPrice(name):
    nameParts = name.split("_")
    item = Item.objects.all().get(name=nameParts[0], category=nameParts[1])
    return item.price


def decrementInventory(id, amount):
    unluckyItem = Item.objects.all().get(id=id)
    unluckyItem.stock = unluckyItem.stock - 1


def restock(id):
    luckyItem = Item.objects.all().get(id=id)
    if luckyItem.stock >= 100:
        pass
    else:
        luckyItem.stock = 100
    luckyItem.save()


def getStock(request):
    restockId = request.GET.get("id")
    if(restockId != None):
        restock(restockId)
    allStock = Item.objects.all()

    stock = []

    for item in allStock:
        stock.append({
            'name': item.name,
            'qty': item.stock,
            'price': item.price,
            'category': item.category,
            'id': item.id
        })
    response = JsonResponse({'inventory': stock})
    response['Access-Control-Allow-Origin'] = '*'
    return response


def orderHistory(request):
    acctID = request.GET.get('id')

    orders = Order.objects.all().filter(accountID=acctID)

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
            'orderID': int(order.id),
            'items': itemInfoList,
            'status': order.status,
            'orderTime': order.orderTime,
            'pickupTime': order.pickupTime,
            'price': order.price,
            'rewards': order.rewards
        }
        orderInfoList.append(orderInfo)

    response = JsonResponse({'id': int(acctID),
                             'orders': orderInfoList})
    response['Access-Control-Allow-Origin'] = '*'
    return response

  
def updateOrder(request):
    orderID = request.GET.get('order')
    newStatus = request.GET.get('status')
    acctID = request.GET.get('id')

    account = Account.objects.all().get(id=acctID)
    order = Order.objects.all().get(id=orderID)

    validUpdate = True
    if order.status == 0:
        validUpdate = False
    if order.status == 1:
        if newStatus == 0:
            if account.type != 0 and account.type != 3:
                validUpdate = False
        elif newStatus == 2:
            if account.type != 2 and account.type != 3:
                validUpdate = False
        else:
            validUpdate = False
    if order.status == 2:
        if newStatus == 3:
            if account.type != 2 and account.type != 3:
                validUpdate = False
        else:
            validUpdate = False
    if order.status == 3:
        if newStatus == 4 or newStatus == 5:
            if account.type != 1 and account.type != 2 and account.type != 3:
                validUpdate = False
            else:
                order.pickupTime = timezone.now()
        else:
            validUpdate = False

    if validUpdate == True:
        order.status = newStatus
        order.save()

    response = JsonResponse({'status': ValidUpdate})
    response['Access-Control-Allow-Origin'] = '*'
    return response


def viewOrder(request):
    orderID = request.GET.get('id')

    order = Order.objects.all().get(id=orderID)

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
        'orderID': int(order.id),
        'items': itemInfoList,
        'status': order.status,
        'orderTime': order.orderTime,
        'pickupTime': order.pickupTime,
        'price': order.price
    }

    response = JsonResponse(orderInfo)
    response['Access-Control-Allow-Origin'] = '*'
    return response


def updateInfo(request):
    acctID = request.GET.get('id')
    field = request.GET.get('field')
    value = request.GET.get('value')

    account = Account.objects.all().get(id=acctID)

    setattr(account, field, value)
    account.save()

    response = JsonResponse({'status': True})
    response['Access-Control-Allow-Origin'] = '*'
    return response


def mostpurchased(request):
    startDate = request.GET.get('start', 1) # format is YYYY-mm-dd ("%Y-%m-%d")
    endDate = request.GET.get('end', 1)
    acctID = request.GET.get(id, None)

    if startDate == 1:
        startDate = timezone.now()
        startDate = startDate.replace(year=startDate.year-1)
    else:
        startDate = strptime(startDate, "%Y-%m-%d")

    if endDate == 1:
        endDate = timezone.now()
    else:
        endDate = strptime(endDate, "%Y-%m-%d")



    orders = Order.objects.all().filter(orderTime__gt=startDate)
    if acctID is not None:
        orders.filter(accountID=acctID)

    orderList = list(orders)

    allStock = Item.objects.all()
    stock = []
    for item in allStock:
        stock.append({
            'name': item.name,
            'qty': item.stock,
            'price': item.price,
            'category': item.category,
            'id': item.id,
            'quantity': 0
        })

    for i, dict in enumerate(stock):
        if dict['id'] == 3:
            response = JsonResponse({'order': i})

    for order in orderList:
        items = OrderItem.objects.all().filter(orderID=order)
        for item in items:
            iid = item.itemID
            x = findDict(stock, 'id', item.itemID)
            stock[x]['quantity'] = stock[x]['quantity'] + item.quantity

    stock.sort(reverse=True, key=lambda inventory: inventory['quantity'])

    response = JsonResponse({'inventory': stock})
    response['Access-Control-Allow-Origin'] = '*'
    return response

def findDict(list, key, value):
    for i, dict in enumerate(list):
        if dict[key] == value:
            return i
