from django.urls import path, include
from .views import OrderRawView
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, OrderViewSet

router = DefaultRouter()
router.register(r'items', ItemViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('orders/raw/', OrderRawView.as_view(), name='order-raw'),
    path('', include(router.urls)),
]