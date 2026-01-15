import { TodoItem } from "./TodoItem";
import { FaStar } from "react-icons/fa";

export const Favorites = ({ todos, onToggleTodo, onDeleteTodo, onToggleFavorite }) => {
	const favorites = todos.filter((todo) => todo.favorite);

	return (
		<div className="space-y-4">
			<h2 className="flex items-center gap-2 text-sm font-semibold text-accent tracking-tight">
				<span className="text-base text-secondary"><FaStar/></span>
				<span>Favoritos</span>
			</h2>

			{favorites.length === 0 && (
				<p className="text-sm text-text italic">
					No hay favoritos que mostrar
				</p>
			)}

			{favorites.length > 0 && (
				<div className="flex flex-col gap-2">
					{favorites.map((todo) => (
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
