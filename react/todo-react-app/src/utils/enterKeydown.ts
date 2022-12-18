export const enterKeydown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  value: string,
  callback: () => void
) => {
  if (
    value.length !== 0 &&
    e.key === "Enter" &&
    !e.shiftKey &&
    e.nativeEvent.isComposing === false
  ) {
    e.preventDefault();
    callback();
  }
};
