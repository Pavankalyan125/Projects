import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
    background: ${(props) => props.theme.buttonBackground};
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
    
    &:hover {
        background: ${(props) => (props.theme.buttonBackground === "#007bff" ? "#0056b3" : "#e65100")};
    }
`;

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
    return (
        <div style={{ background: isDarkMode ? "#222" : "#ddd", padding: "20px", textAlign: "center", borderRadius: "10px" }}>
            <h2>Theme Toggle</h2>
            <ToggleButton onClick={toggleTheme}>
                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </ToggleButton>
        </div>
    );
};

export default ThemeToggle;