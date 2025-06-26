from rest_framework import serializers
from .models import Item, Order, OrderItem

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
        
    def get_image_display(self, obj):
        request = self.context.get('request')
        if obj.image:
            url = obj.image.url
            if request:
                return request.build_absolute_uri(url)
            return url
        elif obj.image_url:
            return obj.image_url
        return None

    def validate(self, data):
        # Ensure at least one image source is provided
        if not data.get('image') and not data.get('image_url'):
            raise serializers.ValidationError("Either image or image_url must be provided.")
        return data

class OrderItemSerializer(serializers.ModelSerializer):
    product = ItemSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Item.objects.all(), source='product', write_only=True
    )

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'product_id', 'quantity', 'price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(**validated_data)
        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)
        return order