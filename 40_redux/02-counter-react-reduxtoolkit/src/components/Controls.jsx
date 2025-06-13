import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

function Controls() {
  const dispatch = useDispatch();
  const variableRef = useRef();
  const handleVariable_addition = () => {
    dispatch(
      counterActions.variable_addition({
        value: Number(variableRef.current.value),
      })
    );
    variableRef.current.value = "";
  };
  const handleVariable_subtraction = () => {
    dispatch(
      counterActions.variable_subtraction({
        value: Number(variableRef.current.value),
      })
    );
    variableRef.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch(counterActions.reset())}
        >
          reset
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(counterActions.increment())}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(counterActions.decrement())}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={() => dispatch(privacyActions.toggle())}
        >
          Privacy
        </button>

        <div className="d-flex align-items-center ms-2">
          <input
            type="text"
            defaultValue="2"
            ref={variableRef}
            placeholder="enter number"
            className="form-control me-2"
            style={{ width: "8rem" }}
          />
          <button
            type="button"
            onClick={handleVariable_addition}
            className="btn btn-outline-primary mx-2"
          >
            Add
          </button>
          <button
            type="button"
            onClick={handleVariable_subtraction}
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
