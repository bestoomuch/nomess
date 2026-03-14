import { Sparkles, Target, Heart } from "lucide-react";

export function AboutSection() {
	return (
		<section id="about" className="py-24 px-6 bg-secondary/30">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
						О нас
					</h2>
					<p className="text-lg text-foreground/70 max-w-2xl mx-auto">
						Занимаемся реорганизацией пространства в сумках, продаем удобные,
						многофункциональные органайзеры-вкладыши, картхолдеры
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					<div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
						<div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
							<Sparkles className="w-6 h-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							Минимализм
						</h3>
						<p className="text-foreground/70">
							Создаем продукты с чистым, современным дизайном, которые легко вписываются в любой стиль жизни
						</p>
					</div>

					<div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
						<div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
							<Target className="w-6 h-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							Функциональность
						</h3>
						<p className="text-foreground/70">
							Каждый элемент продуман до мелочей, чтобы сделать вашу жизнь организованнее и проще
						</p>
					</div>

					<div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
						<div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
							<Heart className="w-6 h-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							С заботой
						</h3>
						<p className="text-foreground/70">
							Мы создаем продукты с любовью и вниманием к деталям, думая о комфорте каждой девушки
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}