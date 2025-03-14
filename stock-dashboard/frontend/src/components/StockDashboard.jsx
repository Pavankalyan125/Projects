import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const socket = io("http://localhost:5000");

const StockDashboard = () => {
    const [symbol, setSymbol] = useState(""); // Controlled input
    const [stockData, setStockData] = useState({});
    const previousSymbols = useRef([]);

    useEffect(() => {
        // Connect WebSocket and listen for stock data
        socket.on("connect", () => {
            console.log("✅ Connected to WebSocket server");
        });

        socket.on("stockData", (data) => {
            console.log("📈 Received stock data:", data);
            setStockData((prevStockData) => ({
                ...prevStockData,
                [data.symbol]: data.stockData
            }));
        });

        socket.on("disconnect", () => {
            console.log("❌ Disconnected from WebSocket server");
        });

        return () => {
            socket.off("stockData");
            socket.off("connect");
            socket.off("disconnect");
        };
    }, []);

    const handleSubscribe = () => {
        if (symbol) {
            console.log("📡 Subscribing to:", symbol);
            socket.emit("subscribe", symbol); // Request stock updates
            previousSymbols.current.push(symbol);
            setSymbol(""); // Clear input
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Stock Market Dashboard</h2>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Stock Symbol (e.g., AAPL)"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                />
                <button className="btn btn-primary mt-2" onClick={handleSubscribe}>
                    Track Stock
                </button>
            </div>

            {/* Display Stock Data */}
            {Object.keys(stockData).map((key) => (
                <div key={key} className="card p-3 mt-3">
                    <h4>Stock: {key.toUpperCase()}</h4>
                    <p>Current Price: ${stockData[key].c}</p>
                    <p>High: ${stockData[key].h} | Low: ${stockData[key].l}</p>
                    <p>Previous Close: ${stockData[key].pc}</p>
                </div>
            ))}

            <h5>Previous Searches</h5>
            <ul className="list-group">
                {previousSymbols.current.map((s, index) => (
                    <li key={index} className="list-group-item">{s.toUpperCase()}</li>
                ))}
            </ul>
        </div>
    );
};

export default StockDashboard;