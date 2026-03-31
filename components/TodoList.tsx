interface TodoListProps {
  todos: string[];
  onRemove: (index: number) => void;
}

export default function TodoList({ todos, onRemove }: TodoListProps) {
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex items-center gap-3 p-4 bg-stone-800 rounded-lg group hover:bg-stone-700 transition-colors"
        >
          <span className="flex-1 text-white">{todo}</span>
          <button
            onClick={() => onRemove(index)}
            className="opacity-0 group-hover:opacity-100 px-3 py-1 text-red-400 hover:text-red-300 hover:bg-red-900/50 rounded transition-all"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}
