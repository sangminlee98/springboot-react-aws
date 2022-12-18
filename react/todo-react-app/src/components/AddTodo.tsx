import { useInput } from "@/hooks/useInput";
import { enterKeydown } from "@/utils/enterKeydown";
import { Button, Grid, TextField } from "@mui/material";
import { useCallback, KeyboardEvent } from "react";

type AddTodoProps = {
  addItem: (title: string) => void;
};

export default function AddTodo({ addItem }: AddTodoProps) {
  const [title, onChangeTitle, setTitle] = useInput("");
  const handleAddItem = useCallback(() => {
    addItem(title);
    setTitle("");
  }, [title]);
  const enterKeyAddItem = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      enterKeydown(e, title, handleAddItem);
    },
    [title]
  );
  return (
    <Grid container style={{ marginTop: 20 }}>
      <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Todo here"
          fullWidth
          value={title}
          onChange={onChangeTitle}
          onKeyDown={enterKeyAddItem}
        />
      </Grid>
      <Grid xs={1} md={1} item>
        <Button
          fullWidth
          style={{ height: "100%" }}
          color="secondary"
          variant="outlined"
          onClick={handleAddItem}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
}
