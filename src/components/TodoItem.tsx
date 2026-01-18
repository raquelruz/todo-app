import { FaTrashAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import type { Todo } from "../types/todo.type";

/**
 * Cuando usar interface:
 * - Tipando o modelando objetos grandes
 * - Tipando una API
 * Tipando una estructura muy estable
 */

interface TodoItemProps {
	todo: Todo;
	onToggleTodo: (id: number) => void;
	onDeleteTodo: (id: number) => void;
	onToggleFavorite: (id: number) => void;
};

export const TodoItem = ({ todo, onToggleTodo, onDeleteTodo, onToggleFavorite }: TodoItemProps) => {
	return (
		<div
			onClick={() => onToggleTodo(todo.id)}
			className={`
				flex items-center justify-between gap-3
				rounded-lg border px-3 py-2 mb-2
				cursor-pointer select-none
				transition
				${todo.done ? "bg-background border-border opacity-70" : "bg-background-soft border-border hover:border-accent-hover"}
			`}
		>
			<span
				className={`
					text-sm flex-1
					${todo.done ? "line-through text-text-muted" : "text-text"}
				`}
			>
				{todo.text}
			</span>

			<div className="flex items-center gap-2">
				<button
					type="button"
					className={`
						text-base transition
						${todo.favorite ? "text-yellow-500 hover:text-yellow-600" : "text-yellow-500 hover:text-yellow-600"}
					`}
					onClick={(event) => {
						event.stopPropagation();
						onToggleFavorite(todo.id);
					}}
					title={todo.favorite ? "Quitar de favoritos" : "Marcar como favorita"}
				>
					{todo.favorite ? <FaStar/> : <FaRegStar/>}
				</button>

				<button
					type="button"
					className="text-sm text-red-500 hover:text-red-600 transition"
					title="Eliminar"
					onClick={(event) => {
						event.stopPropagation();
						onDeleteTodo(todo.id);
					}}
				>
					<FaTrashAlt/>
				</button>
			</div>
		</div>
	);
};
