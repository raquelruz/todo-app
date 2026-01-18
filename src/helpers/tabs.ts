export const Tabs = {
	TODOS: "Lista de tareas",
	FAVORITES: "Favoritas",
	NEW_TODO: "Crear tarea",
} as const;

export type TabType = "Lista de tareas" | "Favoritas" | "Crear tarea";