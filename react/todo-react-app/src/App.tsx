import "./App.css";
import { useState } from "react";
import Todo from "@/components/Todo";
import { TodoType } from "@/schemas/Todo";
import { TODO_LIST_MOCK_DATA } from "@/constants/todoList";

function App() {
  const [items, setItems] = useState<TodoType[]>(TODO_LIST_MOCK_DATA);
  let todoItems = items.length > 0 && items.map((item) => <Todo {...item} />);
  return <div className="App">{todoItems}</div>;
}

export default App;
