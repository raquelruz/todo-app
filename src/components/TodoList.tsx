import type { TodoComponentActionsProps } from "../types/todo.type";
import { TodoItem } from "./TodoItem";
import { FaTasks } from "react-icons/fa";

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo, onToggleFavorite }: TodoComponentActionsProps ) => {
	return (
		<div className="space-y-4">
			<h2 className="flex items-center gap-2 text-sm font-semibold text-text tracking-tight">
				<span className="text-base"><FaTasks /></span>
				<span>Todas las tareas</span>
				{todos?.length > 0 && (
					<span className="ml-1 rounded-full bg-background-dark px-2 py-0.5 text-xs font-medium text-text">
						{todos.length}
					</span>
				)}
			</h2>

			{!todos?.length && (
				<p className="text-sm text-text-muted italic">
					No hay tareas que mostrar
				</p>
			)}

			{todos?.length > 0 && (
				<div className="flex flex-col gap-2">
					{todos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							onToggleTodo={onToggleTodo}
							onDeleteTodo={onDeleteTodo}
							onToggleFavorite={onToggleFavorite}
						/>
					))}
				</div>
			)}
		</div>
	);
};
