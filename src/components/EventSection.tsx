import { Calendar, Users, Sparkles } from "lucide-react";

export function EventsSection() {
	return (
		<section id="events" className="py-24 px-6 bg-gradient-to-b from-accent/10 to-secondary/30">
			<div className="container mx-auto max-w-4xl">
				<div className="text-center mb-12">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
						<Sparkles className="w-8 h-8 text-primary" />
					</div>

					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
						Живые встречи
					</h2>

					<p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
						Приглашаем вас на мастер-классы и встречи, где мы вместе учимся
						организовывать пространство и создавать осознанную жизнь без хаоса.
						Делимся опытом, идеями и вдохновением в уютной атмосфере.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6 mb-12">
					<div className="bg-card p-6 rounded-2xl border border-border">
						<Calendar className="w-8 h-8 text-primary mb-3" />
						<h3 className="font-semibold text-foreground mb-2">Регулярные встречи</h3>
						<p className="text-sm text-foreground/70">
							Каждую неделю проводим встречи по организации пространства и осознанности
						</p>
					</div>

					<div className="bg-card p-6 rounded-2xl border border-border">
						<Users className="w-8 h-8 text-primary mb-3" />
						<h3 className="font-semibold text-foreground mb-2">Камерная атмосфера</h3>
						<p className="text-sm text-foreground/70">
							Небольшие группы до 15 человек для комфортного общения и обмена опытом
						</p>
					</div>
				</div>

				<div className="text-center">
					<button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
						<Calendar className="w-5 h-5" />
						Записаться на встречу
					</button>
				</div>
			</div>
		</section>
	);
}