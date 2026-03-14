import { Sparkles, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-foreground/5 border-t border-border py-12 px-6">
			<div className="container mx-auto max-w-6xl">
				<div className="grid md:grid-cols-3 gap-12 mb-8">
					<div>
						<div className="flex items-center gap-2 mb-4">
							{/*<Sparkles className="w-6 h-6 text-primary" />*/}
							<span className="text-xl font-semibold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                NO MESS
              </span>
						</div>
						<p className="text-foreground/60 text-sm mb-4">
							No Mess — no stress
						</p>
						<p className="text-foreground/70 text-sm">
							Создаем порядок в сумке и в голове
						</p>
					</div>

					<div>
						<h4 className="font-semibold text-foreground mb-4">Навигация</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<button
									onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
									className="text-foreground/70 hover:text-primary transition-colors"
								>
									О нас
								</button>
							</li>
							<li>
								<button
									onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
									className="text-foreground/70 hover:text-primary transition-colors"
								>
									Продукция
								</button>
							</li>
							<li>
								<button
									onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
									className="text-foreground/70 hover:text-primary transition-colors"
								>
									Встречи
								</button>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold text-foreground mb-4">Соцсети</h4>
						<div className="flex gap-4">
							<a
								href="#"
								className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
								aria-label="Instagram"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
								aria-label="Facebook"
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
								aria-label="Email"
							>
								<Mail className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
					<p>© 2026 No Mess. Все права защищены.</p>
				</div>
			</div>
		</footer>
	);
}