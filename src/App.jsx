import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/themes";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";



const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppContainer>
        <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <TodoList />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
