import "./App.css";
import { userState, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

let todoItemId = 0;

const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");
  const onSubmit = () => {
    props.onSubmit(input);
    setInput("");
  }
  return (
    <div>
      <TextField
        label="할일여기다써라"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="outlined" onClick={onSubmit} >전송</Button>
    </div>
  );
};

const TodoItemList = (props) => {
  const todoList = props.todoItemList.map((todoItem, index) => {
    return <li key={index}>{todoItem.todoItemContent}</li>;
  });
  return (<div>
    <ul>{todoList}</ul>
  </div>);
};


function App() {
  const [todoItemList, setTodoItemList] = useState([]);

  const onSubmit = (newTodoItem) => {
    setTodoItemList([...todoItemList, {
      id: todoItemId++,
      todoItemContent: newTodoItem,
      isFinished: false,
    }]);
  };

  return (
    <div className="App">
      <TodoItemInputField onSubmit={onSubmit} />
      <TodoItemList todoItemList={todoItemList} />
    </div>
  );
}


export default App;
