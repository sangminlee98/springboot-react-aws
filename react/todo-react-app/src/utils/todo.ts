import { Dispatch, SetStateAction } from "react";
import { TodoType } from "@/schemas/Todo";

export const addItem = (
  title: string,
  update: Dispatch<SetStateAction<TodoType[]>>
) => {
  if (title.length === 0) return;
  const newItem: TodoType = {
    id: new Date().getTime().toString(),
    title,
    done: false,
  };
  update((prev) => [...prev, newItem]);
};

export const deleteItem = (
  id: string,
  items: TodoType[],
  update: Dispatch<SetStateAction<TodoType[]>>
) => {
  const newItems = items.filter((item) => item.id !== id);
  update(newItems);
};

export const editItem = (
  id: string,
  title: string,
  done: boolean,
  items: TodoType[],
  update: Dispatch<SetStateAction<TodoType[]>>
) => {
  const newItems = items.map((item) =>
    item.id === id ? { ...item, title, done } : item
  );
  update(newItems);
};
