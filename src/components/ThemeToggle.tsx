import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeToggle = () => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || "light"
	);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(prev => (prev === "light" ? "dark" : "light"));
	};

	return (
		<button
			onClick={toggleTheme}
			className="
				inline-flex items-center justify-center
				rounded-full border border-border
				bg-background-soft p-2
				text-text
				hover:bg-background-dark
				transition
			"
		>
			{theme === "light" ? (
				<FiMoon className="text-lg" />
			) : (
				<FiSun className="text-lg" />
			)}
		</button>
	);
};
