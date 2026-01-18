export type Todo = {
	text: string;
	completed: boolean;
	favorite: boolean;
	id: number;
	done: boolean;
};

// export type TodoItemProps = {
// 	todo: Todo;
// 	onToggleTodo: (id: number) => void;
// 	onDeleteTodo: (id: number) => void;
// 	onToggleFavorite: (id: number) => void;
// };

export type TodoComponentActionsProps = {
	todos: Todo[];
	onToggleTodo: (id: number) => void;
	onDeleteTodo: (id: number) => void;
	onToggleFavorite: (id: number) => void;
}
