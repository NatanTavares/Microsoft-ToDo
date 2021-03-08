import React, { createContext, ReactNode, useState } from 'react';

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksProviderData {
  inputValue: string,
  currentTask: string,
  gridWithTasks: string[],
  handleInputValue: (value: string) => void;
  handleNewTask: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleList: () => void;
}

export const TasksContext = createContext({} as TasksProviderData);

const emptyList = Array(11).fill('');
const tasks: string[] = [];

export function TasksProvider({ children }: TasksProviderProps) {
  const [inputValue, setInputValue] = useState('');
  const [currentTask, setCurrentTask] = useState('');
  const [gridWithTasks, setGridWithTasks]  = useState<string[]>([]);

  function handleInputValue(value: string) {
    setInputValue(value);
  }

  function handleNewTask(e : React.KeyboardEvent<HTMLInputElement>) {
    if (e.charCode === 13) {
      setCurrentTask(inputValue);
      setInputValue("");

      tasks.push(currentTask);
      handleList();
    }
  }

  function handleList() {
    const sizeToCut = tasks.length - emptyList.length;

    if (sizeToCut <= 0) {
      setGridWithTasks([...tasks, ...emptyList.slice(sizeToCut)]);
    }

    setGridWithTasks(tasks);
  }

  return (
    <TasksContext.Provider value={
      {
        inputValue,
        currentTask,
        gridWithTasks,
        handleInputValue,
        handleNewTask,
        handleList,
      }
    }>
      {children}
    </ TasksContext.Provider>
  );
}