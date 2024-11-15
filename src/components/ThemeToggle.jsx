import React from "react";
import styled from "styled-components";



const ToggleButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

function ThemeToggle({ toggleTheme, isDarkMode }) {
  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </ToggleButton>
  );
}

export default ThemeToggle;
