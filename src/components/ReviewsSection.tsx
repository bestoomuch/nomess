import { Star, Quote } from "lucide-react";

export default function ReviewsSection() {
	const reviews = [
		{
			name: "Анна К.",
			text: "Органайзер изменил мою жизнь! Теперь я всегда знаю, где что лежит в сумке. Качество превосходное, все продумано до мелочей.",
			rating: 5,
			date: "Март 2026"
		},
		{
			name: "Мария С.",
			text: "Купила картхолдер - очень удобный и стильный! Все карты на месте, ничего не теряется. Рекомендую всем подругам.",
			rating: 5,
			date: "Февраль 2026"
		},
		{
			name: "Елена В.",
			text: "Была на живой встрече, получила массу полезных советов по организации пространства. Купила органайзер размера M - идеально подошел!",
			rating: 5,
			date: "Январь 2026"
		}
	];

	return (
		<section id="reviews" className="py-24 px-6 bg-secondary/30">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
						Отзывы наших клиентов
					</h2>
					<p className="text-lg text-foreground/70 max-w-2xl mx-auto">
						Нам важно ваше мнение
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{reviews.map((review, index) => (
						<div key={index} className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow relative">
							<Quote className="absolute top-4 right-4 w-8 h-8 text-accent/30" />

							<div className="flex gap-1 mb-4">
								{Array.from({ length: review.rating }).map((_, i) => (
									<Star key={i} className="w-5 h-5 fill-accent text-accent" />
								))}
							</div>

							<p className="text-foreground/80 mb-6 leading-relaxed">
								"{review.text}"
							</p>

							<div className="flex items-center justify-between pt-4 border-t border-border">
								<div>
									<p className="font-semibold text-foreground">{review.name}</p>
									<p className="text-sm text-foreground/60">{review.date}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
