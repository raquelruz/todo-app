import { Tabs } from "../helpers/tabs";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = ({ brand = "To-Do App", activeTab, setActiveTab }) => {
	return (
		<nav className="px-8 py-3 bg-background backdrop-blur-md border-b border-border sticky top-0 z-10">
			<div className="flex items-center justify-between">
				<h4 className="text-lg font-semibold tracking-tight text-accent hover:text-accent-hover">{brand}</h4>

				<div className="flex items-center gap-6">
					{Object.entries(Tabs).map(([property, value]) => {
						return (
							<button
								key={property}
								className={`tab ${activeTab === value ? "active" : ""}`}
								onClick={() => setActiveTab(value)}
							>
								{value}
							</button>
						);
					})}
				</div>

				<div className="flex items-center gap-3">
					<ThemeToggle />
				</div>
			</div>
		</nav>
	);
};
