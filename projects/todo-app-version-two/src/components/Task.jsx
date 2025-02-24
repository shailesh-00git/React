import DeleteButton from "./DeleteButton";
import style from "./SingleRow.module.css";
function Tasks({ task, onDeleteClick }) {
  return (
    <>
      {task.map((task) => (
        <div key={task.Date} className={`${style.row} row`}>
          <div className="col-6">{task.Task}</div>
          <div className="col-4">{task.Date}</div>
          <DeleteButton
            task={task.Task}
            onDeleteClick={onDeleteClick}
          ></DeleteButton>
        </div>
      ))}
    </>
  );
}
export default Tasks;
