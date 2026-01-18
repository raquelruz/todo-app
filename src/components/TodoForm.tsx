import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import type { Todo } from "../types/todo.type";

const INITIAL_FORM_STATE = { todoText: "" };

type TodoFormProps = {
	addTodo: (newTodo: Todo) => void;
}

export const TodoForm = ({ addTodo }: TodoFormProps) => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);
	const [error, setError] = useState(false);

	const onFormSubmit = (event) => {
		event.preventDefault();

		if (!form.todoText.trim()) {
			setError(true);
			return;
		}

		const newTodo: Todo = {
			text: form.todoText.trim(),
			completed: false,
			favorite: false,
			id: Date.now(),
			done: false,
		};

		addTodo(newTodo);
		setForm(INITIAL_FORM_STATE);
		setError(false);
	};

	const onInputChange = ({ target: { name, value } }) => {
		setForm((prev) => ({ ...prev, [name]: value }));
		if (error) setError(false);
	};

	return (
		<div className="mb-6">
			<h2 className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent">
				<span className="text-base"><FaPencilAlt/></span>
				<span>Crear nueva tarea</span>
			</h2>

			<form
				className="flex gap-2 rounded-xl border border-border bg-background px-3 py-2"
				onSubmit={onFormSubmit}
			>
				<input
					type="text"
					name="todoText"
					placeholder="Introduce una tarea..."
					value={form.todoText}
					onChange={onInputChange}
					className={`flex-1 rounded-lg border px-3 py-2 text-sm text-text bg-background-soft outline-none placeholder:text-slate-500 ${
						error
							? "border-red-400"
							: "border-border focus:border-accent focus:ring-2 focus:ring-accent-hover"
					}`}
				/>

				<button
					type="submit"
					className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-background transition hover:accent-accent-hover active:scale-95"
				>
					Añadir
				</button>
			</form>

			{error && <p className="mt-1 text-xs text-red-400">Escribe una tarea antes de añadir</p>}
		</div>
	);
};
