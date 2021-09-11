import { React } from "./dep.ts";
interface AppProps {
  todos?: Todo[];
}
interface Todo {
  task: string;
}

function App({ todos = [] }: AppProps) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">ToDo's App</h1>
          <p className="lead">This is our simple todo app.</p>
          <ListTodos items={todos} />
        </div>
      </div>
    </div>
  );
}
interface ListTodos{
  items: Todo[]
}
function ListTodos({ items = [] }: ListTodos) {
  const [deletedIdxs, setDeletedIdxs] = (React as any).useState([]);
  return (
    <div>
      <ul className="list-group">
        {items.map((todo: any, index: number) => {
          const deleted = deletedIdxs.indexOf(index) !== -1;
          return (
            <li
              key={index}
              className="list-group-item"
              style={{ color: deleted ? "red" : "green" }}
            >
              {todo.task}
              <button
                type="button"
                className="ml-2 mb-1 close"
                aria-label="Close"
                onClick={() => setDeletedIdxs([...deletedIdxs, index])}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
