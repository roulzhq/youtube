import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

interface Todo {
  id: number;
  label: string;
  description?: string;
  done: boolean;
}

const todos: Todo[] = [
  { id: 0, label: "Buy groceries", description: "Doritos, Milk, Whisky", done: true },
  { id: 1, label: "Clean the kitchen", done: false },
  { id: 2, label: "Subscribe to ROULZ", done: false },
]

todos.forEach(todo => {
  const div = document.createElement("div")
  div.innerHTML = `label: <b>${todo.label}</b> - done: <b>${todo.done}</b> - description: <b>${todo?.description ?? "none"}</b>`;

  app.appendChild(div);
})