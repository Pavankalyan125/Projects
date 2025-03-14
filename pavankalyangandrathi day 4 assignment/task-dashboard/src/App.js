import React, { useState } from "react";
import TaskDashboard from "./TaskDashboard";
import ThemeToggle from "./ThemeToggle";
import { ThemeProvider } from "styled-components";

const lightTheme = {
    background: "#f0f0f0",
    color: "#000",
    cardBackground: "#fff",
    buttonBackground: "#007bff",
};

const darkTheme = {
    background: "#181818",
    color: "#fff",
    cardBackground: "#333",
    buttonBackground: "#ff6600",
};

function App() {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ background: theme.background, minHeight: "100vh", padding: "20px" }}>
                <ThemeToggle toggleTheme={toggleTheme} />
                <TaskDashboard theme={theme} />
            </div>
        </ThemeProvider>
    );
}

export default App;
