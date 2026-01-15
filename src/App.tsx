import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Tabs } from "./helpers/tabs";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Favorites } from "./components/Favorites";
import { storage } from "./helpers/storage";
import { Footer } from "./components/Footer";

const STORAGE_TODOS_KEY = "todos";

const INITIAL_TODOS = storage.get(STORAGE_TODOS_KEY);

export const App = () => {
	const [activeTab, setActiveTab] = useState(Tabs.TODOS);
	const [todos, setTodos] = useState(INITIAL_TODOS || []);

	const addTodo = (newTodo) => {
		setTodos((prev) => {
			const newTodos = [...prev, newTodo];
			storage.save(STORAGE_TODOS_KEY, newTodos);
			return newTodos;
		});
	};

	const onToggleTodo = (id) => {
		const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));

		setTodos(updatedTodos);
		storage.save(STORAGE_TODOS_KEY, updatedTodos);
	};

	const onToggleFavorite = (id) => {
		const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, favorite: !todo.favorite } : todo));

		setTodos(updatedTodos);
		storage.save(STORAGE_TODOS_KEY, updatedTodos);
	};

	const onDeleteTodo = (id) => {
		const filtered = todos.filter((todo) => todo.id !== id);
		setTodos(filtered);
		storage.save(STORAGE_TODOS_KEY, filtered);
	};

	const onDeleteAll = () => {
		setTodos([]);
		storage.remove(STORAGE_TODOS_KEY);
	};

	return (
		<div className="flex flex-col min-h-screen bg-background text-text">
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

			<main className="flex-1 w-full px-20 py-6 space-y-6">
				<h1 className="text-lg font-semibold tracking-tight text-accent flex items-center gap-2 justify-center text-center">
					<span>Mi lista de tareas</span>
				</h1>

				{activeTab === Tabs.TODOS && (
					<TodoList
						todos={todos}
						onToggleTodo={onToggleTodo}
						onDeleteTodo={onDeleteTodo}
						onToggleFavorite={onToggleFavorite}
					/>
				)}

				{activeTab === Tabs.FAVORITES && (
					<Favorites
						todos={todos}
						onToggleTodo={onToggleTodo}
						onDeleteTodo={onDeleteTodo}
						onToggleFavorite={onToggleFavorite}
					/>
				)}

				{activeTab === Tabs.NEW_TODO && <TodoForm addTodo={addTodo} />}
			</main>

			<Footer onDeleteAll={onDeleteAll} />
		</div>
	);
};
