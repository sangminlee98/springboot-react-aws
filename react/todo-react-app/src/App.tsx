import "./App.css";
import { useState } from "react";
import Todo from "@/components/Todo";
import { TodoType } from "@/schemas/Todo";
import { TODO_LIST_MOCK_DATA } from "@/constants/todoList";
import { Container, List, Paper } from "@mui/material";
import AddTodo from "@/components/AddTodo";
import * as todoFn from "@/utils/todo";

function App() {
  const [items, setItems] = useState<TodoType[]>(TODO_LIST_MOCK_DATA);
  const addItem = (title: string) => {
    todoFn.addItem(title, setItems);
  };
  const deleteItem = (id: string) => {
    todoFn.deleteItem(id, items, setItems);
  };
  const editItem = (id: string, title: string, done: boolean) => {
    todoFn.editItem(id, title, done, items, setItems);
  };

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            key={item.id}
            {...item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </List>
    </Paper>
  );
  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
