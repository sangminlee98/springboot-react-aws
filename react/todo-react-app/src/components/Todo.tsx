import React, { useEffect, useState } from "react";
import {
  ListItem,
  Checkbox,
  ListItemText,
  InputBase,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import { useInput } from "@/hooks/useInput";
import { useCheckbox } from "@/hooks/useCheckbox";
import { enterKeydown } from "@/utils/enterKeydown";

type TodoProps = {
  id: string;
  title: string;
  done: boolean;
  deleteItem: (id: string) => void;
  editItem: (id: string, title: string, done: boolean) => void;
};

export default function Todo({
  id,
  title,
  done,
  deleteItem,
  editItem,
}: TodoProps) {
  const [readOnly, setReadOnly] = useState(true);
  const [check, onChangeCheck] = useCheckbox(done);
  const [value, onChangeValue] = useInput(title);
  const handleDeleteItem = () => {
    deleteItem(id);
  };
  const turnOffReadOnly = () => setReadOnly(false);
  const turnOnReadOnly = (e: React.KeyboardEvent<HTMLInputElement>) => {
    enterKeydown(e, value, () => setReadOnly(true));
  };
  const handleEditItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.type === "textarea") {
      onChangeValue(e);
      editItem(id, value, done);
    }
    if (e.currentTarget.type === "checkbox") {
      onChangeCheck();
    }
  };
  useEffect(() => {
    editItem(id, title, check);
  }, [check]);
  return (
    <ListItem>
      <Checkbox checked={done} onChange={handleEditItem} />
      <ListItemText>
        <InputBase
          inputProps={{ "aria-label": "naked", readOnly: readOnly }}
          onClick={turnOffReadOnly}
          onKeyDown={turnOnReadOnly}
          onChange={handleEditItem}
          type="text"
          id={id}
          name={id}
          value={value}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={handleDeleteItem}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
