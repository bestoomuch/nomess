import { Sparkles } from "lucide-react";

export default function Header() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Sparkles className="w-6 h-6 text-primary" />
						<div className="flex flex-col" style={{ fontFamily: 'Playfair Display, serif' }}>
			              <span className="text-xl font-semibold text-foreground leading-none">
			                NO MESS
			              </span>
							<span className="text-xs text-foreground/60 italic leading-none mt-0.5">
				                No mess - No stress
				              </span>
						</div>
					</div>

					<nav className="hidden md:flex items-center gap-8">
						<button
							onClick={() => scrollToSection("about")}
							className="text-foreground/70 hover:text-primary transition-colors"
						>
							О наc
						</button>
						<button
							onClick={() => scrollToSection("products")}
							className="text-foreground/70 hover:text-primary transition-colors"
						>
							Продукция
						</button>
						<button
							onClick={() => scrollToSection("events")}
							className="text-foreground/70 hover:text-primary transition-colors"
						>
							Встречи
						</button>
					</nav>
				</div>
			</div>
		</header>
	);
}