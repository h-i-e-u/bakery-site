# 🍞 Bakery Site

---

## About

Welcome to **Bakery Site** – your online destination for delicious, fresh-baked treats!  
This project is an AI-powered bakery website designed to streamline ordering, personalize recommendations, and enhance the customer experience.

---

## Features

- 🥐 **Browse Products:** View a wide range of breads, pastries, cakes, and more.
- 🛒 **Smart Cart:** Add items to your cart and enjoy a seamless checkout process.
- 📦 **Order Management:** Admin dashboard for managing products and orders.
- 🌐 **Multilingual:** Supports both English and Vietnamese.
- 💸 **VND Currency:** All prices are displayed in Vietnamese Dong (₫).
- 📱 **Responsive Design:** Works beautifully on desktop and mobile devices.

---

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, i18next
- **Backend:** Django, Django REST Framework
- **Database:** SQLite (default, easy to switch)
- **Other:** Pillow (for image uploads), Axios

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/bakery-site.git
cd bakery-site
```

### 2. Backend Setup

```sh
cd bakery-be
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata data.json  # (optional) Load sample data
python manage.py runserver
```

### 3. Frontend Setup

```sh
cd bakery-fe
npm install
npm start
```

---

## Usage

- Visit [http://localhost:3000](http://localhost:3000) to browse the bakery.
- Admin dashboard: [http://localhost:3000/admin](http://localhost:3000/admin)
- Switch language using the top bar.
- Add products to your cart and place orders easily!

---

## Screenshots

> Comming soon!_

---

## License

MIT License

---

## Credits

- Built with ❤️ by Doan Cong Hieu
- Thanks to OpenAI Copilot for code assistance! (i have no idea *-Hieu*)


