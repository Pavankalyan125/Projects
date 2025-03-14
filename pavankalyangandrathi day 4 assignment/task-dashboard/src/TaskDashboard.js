import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import styled from "styled-components";

const socket = io("http://localhost:5000");

const DashboardContainer = styled.div`
    background: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.color};
    width: 1460px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    padding: 10px;
    width: 100%;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    background: ${(props) => props.theme.buttonBackground};
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

const TaskList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 10px;
    width: 100%;
`;

const TaskItem = styled.li`
    background: ${(props) => props.theme.cardBackground};
    padding: 10px;
    border-radius: 5px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DeleteButton = styled.button`
    background: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: darkred;
    }
`;

const TaskDashboard = ({ theme }) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // Load tasks from backend
    useEffect(() => {
        socket.emit("getTasks");

        socket.on("loadTasks", (loadedTasks) => {
            setTasks(loadedTasks);
        });

        socket.on("taskUpdated", (updatedTasks) => {
            setTasks(updatedTasks);
        });

        return () => {
            socket.off("loadTasks");
            socket.off("taskUpdated");
        };
    }, []);

    // Handle input change
    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    // Add task
    const addTask = () => {
        if (newTask.trim() === "") return;
        socket.emit("addTask", newTask);
        setNewTask("");
    };

    // Delete task
    const deleteTask = (index) => {
        socket.emit("deleteTask", index);
    };

    return (
        <DashboardContainer theme={theme}>
            <h1>Task Dashboard</h1>
            <Input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter task" />
            <Button onClick={addTask}>Add Task</Button>

            <TaskList>
                {tasks.map((task, index) => (
                    <TaskItem key={index}>
                        {task}
                        <DeleteButton onClick={() => deleteTask(index)}>Delete</DeleteButton>
                    </TaskItem>
                ))}
            </TaskList>
        </DashboardContainer>
    );
};

export default TaskDashboard;