"use client";

import { useState } from "react";
import TodoList from "@/components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-stone-800 to-zinc-900 p-4">
      <div className="bg-stone-900/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md border border-amber-900/50">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-500 mb-2">☕ Coffee Todo</h1>
          <p className="text-stone-400">Fuel your productivity</p>
        </div>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What's brewing today?"
            className="flex-1 px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          <button
            onClick={addTodo}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
          >
            Add
          </button>
        </div>

        <TodoList todos={todos} onRemove={removeTodo} />

        {todos.length === 0 && (
          <div className="text-center py-12 text-stone-500">
            <p className="text-5xl mb-4">☕</p>
            <p>No todos yet. Time to get brewing!</p>
          </div>
        )}
      </div>
    </main>
  );
}
