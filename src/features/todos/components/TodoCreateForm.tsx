import { FormEvent, FunctionComponent, useState } from "react";

type Props = { onSubmit: (text: string) => void };

const TodoCreateForm: FunctionComponent<Props> = (props) => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData: FormData = new FormData(event.currentTarget);
    const text = formData.get("text") as string;

    if (!text.trim()) {
      setError("Todo text cannot be empty!");
      return;
    }

    props.onSubmit(text.trim());
    event.currentTarget.reset();
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 d-flex align-items-center gap-2 w-100">
      <input
        type="text"
        placeholder="Add todo"
        className="form-control"
        name="text"
        id="text"
        aria-label="Add new todo"
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
      {error && <p className="text-danger mt-2">{error}</p>}
    </form>
  );
};

export default TodoCreateForm;
