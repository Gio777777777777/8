import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoContainer = styled.div`
  width: 400px;
  background-color: ${({ theme }) => theme.itemBg};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <TodoContainer>
      <InputContainer>
        <Input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a task"
        />
        <Button onClick={addTask}>Add Task</Button>
      </InputContainer>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onDelete={() => deleteTask(index)}
          onToggle={() => toggleTaskCompletion(index)}
        />
      ))}
    </TodoContainer>
  );
}

export default TodoList;
