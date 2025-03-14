const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

const TASKS_FILE = "tasks.json";

// Load tasks from file
const loadTasks = () => {
    try {
        const data = fs.readFileSync(TASKS_FILE, "utf8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Save tasks to file
const saveTasks = (tasks) => {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
};

let tasks = loadTasks();

io.on("connection", (socket) => {
    console.log("New client connected");

    // Send tasks to client
    socket.emit("loadTasks", tasks);

    // Add task
    socket.on("addTask", (task) => {
        tasks.push(task);
        saveTasks(tasks);
        io.emit("taskUpdated", tasks);
    });

    // Delete task
    socket.on("deleteTask", (index) => {
        tasks.splice(index, 1);
        saveTasks(tasks);
        io.emit("taskUpdated", tasks);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});
