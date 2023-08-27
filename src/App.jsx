import React from 'react'
import { useState } from 'react'
import "./style.css"

import {
  FluentProvider,
  createLightTheme,
  createDarkTheme,
  Switch,
  Text

} from "@fluentui/react-components"
import Addtodo from './Addtodo';
import TodoList from './TodoList';


function App() {
  const myTheme = {
    10: "#050301",
    20: "#1F170C",
    30: "#332612",
    40: "#423015",
    50: "#513C18",
    60: "#61481B",
    70: "#71541D",
    80: "#81611F",
    90: "#926E20",
    100: "#A27B21",
    110: "#B38922",
    120: "#C39823",
    130: "#D2A737",
    140: "#DCB75F",
    150: "#E5C884",
    160: "#EED8A8"
  };

  const lightTheme = {
    ...createLightTheme(myTheme),
  };

  const darkTheme = {
    ...createDarkTheme(myTheme),
  };


  darkTheme.colorBrandForeground1 = myTheme[110];
  darkTheme.colorBrandForeground2 = myTheme[120];



  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const [todos, setTodos] = useState([]);

  return (
    <FluentProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="container">
        <nav>
          <Text size={700}>Todo-list App</Text>
          <Switch label="Turn on dark mode" checked={isDarkTheme} value={isDarkTheme} onChange={() => setIsDarkTheme((darkTheme) => !darkTheme)} />
        </nav>

        <div className="todo-container">
          <Addtodo setTodos={setTodos}/>
          <TodoList todos={todos} setTodos={setTodos}/>
        </div>

        

      </div>
    </FluentProvider>
  )
}

export default App



