import { TodoType } from "@/schemas/Todo";
import React from "react";

export default function Todo({ id, title, done }: TodoType) {
  return (
    <div className="Todo">
      <input type="checkbox" id={id} name={id} checked={done} />
      <label htmlFor={id}>{title}</label>
    </div>
  );
}
