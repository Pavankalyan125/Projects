const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

const API_URL = "https://finnhub.io/api/v1/quote"; // Stock API
const API_KEY = "YOUR_FINNHUB_API_KEY"; // Replace with your Finnhub API key

// Function to fetch stock price
const getStockData = async (symbol) => {
    try {
        const response = await axios.get(`${API_URL}?symbol=${symbol}&token=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching stock data:", error.message);
        return null;
    }
};

// Store active subscriptions
const subscribedStocks = {};

io.on("connection", (socket) => {
    console.log("✅ New client connected");

    socket.on("subscribe", async (symbol) => {
        console.log(`📡 Client subscribed to: ${symbol}`);

        // Check if already subscribed
        if (!subscribedStocks[symbol]) {
            subscribedStocks[symbol] = setInterval(async () => {
                const stockData = await getStockData(symbol);
                if (stockData) {
                    io.emit("stockData", { symbol, stockData });
                    console.log(`📈 Sent data for ${symbol}:`, stockData);
                }
            }, 5000); // Fetch data every 5 seconds
        }
    });

    socket.on("disconnect", () => {
        console.log("❌ Client disconnected");
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});