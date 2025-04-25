
# 💰 Real-Time Crypto Price Website

A simple and responsive web app that displays **real-time prices** of popular cryptocurrencies like **Bitcoin (BTC)**, **Ethereum (ETH)**, and **Dogecoin (DOGE)** using the **CoinGecko API**.

---

## 📸 Screenshot

![Website Preview](images/desktopview.png)

---

## ⚙️ Features

- 🔄 Live crypto price updates in USD
- 🛠️ Built with plain **HTML**, **CSS**, and **JavaScript**
- 📱 Responsive and mobile-friendly design
- 🔌 Fetches data from [CoinGecko API](https://www.coingecko.com/en/api)
- ⚡ Lightweight and fast

---

## 🛠️ How to Run

1. **Clone this repository**:

   ```bash
   git clone https://github.com/your-username/Cryptocurrency-Exchange-Website.git
   ```

2. **Navigate to the project folder**:

   ```bash
   cd Cryptocurrency-Exchange-Website
   ```

3. **Open `index.html` in your browser**:

   - You can simply double-click it  
   - Or use a local server (like Live Server extension in VS Code)

---

## 📡 API Used

Data is fetched from CoinGecko’s public API:

```
GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd
```

- No API key required
- Free and easy to use

---

## 📁 Project Structure

```
Cryptocurrency-Exchange-Website/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📌 Future Improvements

- Add more cryptocurrencies
- Display price charts
- Dark mode toggle
- Add currency conversion feature

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and share it. Just give credit!

---
