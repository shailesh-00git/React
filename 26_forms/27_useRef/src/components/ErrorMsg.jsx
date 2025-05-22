const ErrorMsg = ({ task }) => {
  return (
    <>
      {task.length === 0 && (
        <h2>
          No item's in ToDo list<p>Add items</p>
        </h2>
      )}
    </>
  );
};
export default ErrorMsg;
