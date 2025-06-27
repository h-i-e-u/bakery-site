import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  vi: {
    translation: {
      "Featured Products": "Sản phẩm nổi bật",
      "View All Products": "Xem tất cả sản phẩm",
      "Add to Cart": "Thêm vào giỏ hàng",
      "Welcome to our bakery!": "Chào mừng đến với tiệm bánh của chúng tôi!",
      "Our Products": "Sản phẩm của chúng tôi",
      Bread: "Bánh mì",
      Pastries: "Bánh ngọt",
      Cakes: "Bánh kem",
      "Order Now": "Đặt hàng ngay",
        "Your Cart": "Giỏ hàng của bạn",
        "Your cart is empty.": "Giỏ hàng của bạn đang trống.",
        "Quantity": "Số lượng",
        "each": "mỗi",
        "Remove": "Xóa",
        "Clear Cart": "Xóa giỏ hàng",
        "Order Summary": "Tóm tắt đơn hàng",
        "Subtotal": "Tổng phụ",
        "Shipping": "Vận chuyển",
        "Total": "Tổng cộng",
        "Proceed to Checkout": "Tiến hành thanh toán",
        "Placing Order...": "Đang đặt hàng...",
        "Place Order": "Đặt hàng",
        "Thank You!": "Cảm ơn bạn",
        "Continue Shopping": "Tiếp tục mua sắm",
        "We appreciate your business and hope you enjoy your treats!": "Chúng tôi trân trọng sự ủng hộ của bạn và hy vọng bạn sẽ thích các món ăn của chúng tôi!",
        "Oops! Page not found": "Rất tiếc! Trang không tồn tại",
        "Go Back": "Quay lại",
        "Home": "Trang chủ",
        "Welcome to Our Bakery!": "Chào mừng đến với Tiệm Bánh Của Chúng Tôi!",
        "Discover our delicious range of baked , from fresh bread to artisanal pastries.": "Khám phá các loại bánh ngon của chúng tôi, từ bánh mì tươi đến bánh ngọt thủ công.",
        "Custom Cakes": "Bánh kem tùy chỉnh",
        "Order a custom cake for your special occasion. We create beautiful and delicious cakes tailored to your needs.": "Đặt bánh kem tùy chỉnh cho dịp đặc biệt của bạn. Chúng tôi tạo ra những chiếc bánh đẹp và ngon phù hợp với nhu cầu của bạn.",
        "Fresh Bread": "Bánh mì tươi",
        "Enjoy our freshly baked bread, made daily with the finest ingredients.": "Thưởng thức bánh mì tươi được nướng hàng ngày với nguyên liệu tốt nhất.",
        "About Us": "Về Chúng Tôi",
        "We're passionate about creating delicious baked goods using traditional recipes and the finest ingredients. Every day, our master bakers craft fresh breads, pastries, and cakes for our community.": "Chúng tôi đam mê tạo ra các món bánh ngon bằng cách sử dụng công thức truyền thống và nguyên liệu tốt nhất. Mỗi ngày, các thợ làm bánh của chúng tôi chế biến bánh mì, bánh ngọt và bánh kem tươi cho cộng đồng của chúng tôi.",
        "Visit Us": "Thăm Chúng Tôi",
        "Meet Our Team": "Đội Ngũ Của Chúng Tôi",
        "Quick Links": "Liên kết nhanh",
        "Contact": "Liên hệ",
        "Social": "Mạng xã hội",
        // ...add more translations here
    },
  },
  en: {
    translation: {
      "Featured Products": "Featured Products",
      "View All Products": "View All Products",
      "Add to Cart": "Add to Cart",
      "Welcome to our bakery!": "Welcome to our bakery!",
      "Our Products": "Our Products",
      Bread: "Bread",
      Pastries: "Pastries",
      Cakes: "Cakes",
      "Order Now": "Order Now",
      // ...add more translations here
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
