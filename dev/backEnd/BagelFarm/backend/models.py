from django.db import models
from django import forms


class Account(models.Model):
    email = models.EmailField(max_length=200)
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    phoneNumber = models.CharField(max_length=200)
    type = models.IntegerField()
    balance = models.DecimalField(decimal_places=2, max_digits=20)
    rewards = models.IntegerField()

    def __str__(self):
        return self.firstName

class Item(models.Model):
    itemName = models.CharField(max_length=200)
    itemType = models.CharField(max_length=200)
    itemQuantity = models.IntegerField(max_digits=100)
    itemPrice = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.itemName
