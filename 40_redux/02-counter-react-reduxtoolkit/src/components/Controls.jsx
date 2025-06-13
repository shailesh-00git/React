import { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const dispatch = useDispatch();
  const variableRef = useRef();

  function handleVariableAddition(e) {
    e.preventDefault();
    dispatch({
      type: "VARIABLE_ADDITION",
      payload: { value: Number(variableRef.current.value) },
    });
  }
  function handleVariableSubtraction(e) {
    e.preventDefault();
    dispatch({
      type: "VARIABLE_SUBTRACTION",
      payload: { value: Number(variableRef.current.value) },
    });
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={() => dispatch({ type: "PRIVACY" })}
        >
          Privacy
        </button>

        <div className="d-flex align-items-center ms-2">
          <input
            type="number"
            defaultValue="2"
            ref={variableRef}
            className="form-control me-2"
            style={{ width: "8rem" }}
          />
          <button
            type="button"
            onClick={handleVariableAddition}
            className="btn btn-outline-primary mx-2"
          >
            Add
          </button>
          <button
            type="button"
            onClick={handleVariableSubtraction}
            className="btn btn-outline-primary"
          >
            Subtract
          </button>
        </div>
      </div>
    </>
  );
}

export default Controls;
