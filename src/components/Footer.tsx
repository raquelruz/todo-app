import { FaTrashAlt } from "react-icons/fa";

type FooterProps = {
	onDeleteAll: () => void;
};

export const Footer = ({ onDeleteAll }: FooterProps) => {
	return (
		<footer className="w-full border-t border-border bg-background py-4 px-4 flex items-center justify-center">
			<span className="pr-2 text-red-500">
				<FaTrashAlt />
			</span>
			<button
				onClick={onDeleteAll}
				className="
					text-sm font-medium text-red-500
					hover:text-secondary-hover
					active:text-red
					transition-colors
				"
			>
				Borrar todas las tareas
			</button>
		</footer>
	);
};
