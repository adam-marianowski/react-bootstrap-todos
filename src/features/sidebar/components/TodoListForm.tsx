import { FunctionComponent } from "react";
import { TodoList } from "../types/todoList";
import { useForm, SubmitHandler } from "react-hook-form";
import { todoListsIcons } from "../utilities/constants";
import { v4 as uuidv4 } from "uuid";

type Props = { onSubmit: (list: TodoList) => void };

type Inputs = {
  name: string;
  icon: string;
};

const TodoListForm: FunctionComponent<Props> = (props) => {
  const form = useForm<Inputs>({
    mode: "onChange",
    defaultValues: { icon: "bi bi-list", name: "" },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const list: TodoList = {
      id: uuidv4(),
      name: data.name,
      icon: data.icon ?? "bi bi-list",
    };

    props.onSubmit(list);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="mb-3 d-flex flex-column">
        <label htmlFor="name" className="form-label">
          List name:
        </label>
        <input
          id="name"
          className="form-control"
          type="text"
          placeholder="eg. go shopping"
          {...form.register("name", { required: true })}
        />
      </div>

      {/* create buttons for each list and set input icon on click */}
      <p className="form-label">Select an icon for your list: </p>
      <div className="mb-3 flex-wrap d-flex gap-3">
        {todoListsIcons.map((icon) => (
          <button
            title="icon"
            key={icon}
            type="button"
            className={`btn btn-outline-success ${
              form.watch("icon") === icon ? "active" : ""
            }`}
            onClick={() => form.setValue("icon", icon)}
          >
            <i className={`bi bi-${icon}`}></i>
          </button>
        ))}
      </div>

      <div className="modal-footer">
        <button
          onClick={() => form.reset()}
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          disabled={!form.formState.isValid}
          type="submit"
          className="btn btn-primary"
          data-bs-dismiss="modal"
        >
          Save changes
        </button>
      </div>
    </form>
  );
};

export default TodoListForm;
