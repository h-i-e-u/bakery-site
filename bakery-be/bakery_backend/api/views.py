from django.shortcuts import render
from rest_framework import viewsets
from .models import Item, Order
from .serializers import ItemSerializer, OrderSerializer

# Create your views here.

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
