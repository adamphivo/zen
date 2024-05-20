import { Fragment } from "react/jsx-runtime";
import { trpc } from "./trpc";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const { data, isLoading, refetch } = trpc.task.findTask.useQuery();

  const mutation = trpc.task.createTask.useMutation({
    onSuccess: () => refetch(),
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setTitle("");
    mutation.mutate({ title });
    event.preventDefault();
  };

  if (isLoading) return <div>loading</div>;

  if (data) {
    return (
      <>
        {data.map((item) => (
          <Fragment key={item.id}>
            <div>{item.title}</div>
            <div>{item.createdAt}</div>
          </Fragment>
        ))}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Title:</label>
          <input id="name" type="text" value={title} onChange={handleChange} />

          <button type="submit">Create</button>
        </form>
      </>
    );
  }
}

export default App;
