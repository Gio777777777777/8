import React from "react";
import styled from "styled-components";

// Task container
const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.itemBg};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const TaskText = styled.span`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed, theme }) => (completed ? "#888" : theme.text)};
  cursor: pointer;
  flex: 1;
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: red;
  }
`;

function TodoItem({ task, onDelete, onToggle }) {
  return (
    <TaskContainer>
      <TaskText completed={task.completed} onClick={onToggle}>
        {task.text}
      </TaskText>
      <ActionButton onClick={onDelete}>🗑</ActionButton>
    </TaskContainer>
  );
}

export default TodoItem;
