import { FormEvent, FunctionComponent } from "react";

type Props = { onSubmit: (text: string) => void };

const TodoCreateForm: FunctionComponent<Props> = (props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData: FormData = new FormData(event.currentTarget);
    const text = formData.get("text") as string;

    if (!text) return;

    props.onSubmit(text);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 w-100">
      <input
        type="text"
        placeholder="Add todo"
        className="form-control"
        name="text"
        id="text"
      />
    </form>
  );
};

export default TodoCreateForm;
