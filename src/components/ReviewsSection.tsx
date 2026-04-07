import { Star, Quote } from "lucide-react"

export default function ReviewsSection() {
	const reviews = [
		{
			name: "Анна К.",
			initials: "АК",
			avatarColor: "bg-gradient-to-br from-pink-400 to-rose-500",
			text: "Органайзер изменил мою жизнь! Теперь я всегда знаю, где что лежит в сумке. Качество превосходное, все продумано до мелочей.",
			rating: 5,
			date: "Март 2026",
			image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=400&fit=crop"
		},
		{
			name: "Мария С.",
			initials: "МС",
			avatarColor: "bg-gradient-to-br from-purple-400 to-indigo-500",
			text: "Купила картхолдер - очень удобный и стильный! Все карты на месте, ничего не теряется. Рекомендую всем подругам.",
			rating: 5,
			date: "Февраль 2026",
			image: null
		},
		{
			name: "Елена В.",
			initials: "ЕВ",
			avatarColor: "bg-gradient-to-br from-amber-400 to-orange-500",
			text: "Была на живой встрече, получила массу полезных советов по организации пространства. Купила органайзер размера M - идеально подошел!",
			rating: 5,
			date: "Январь 2026",
			image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&h=400&fit=crop"
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
						<div key={index} className="bg-card rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow overflow-hidden">
							{review.image && (
								<div className="aspect-video w-full overflow-hidden">
									<img
										src={review.image}
										alt={`Фото от ${review.name}`}
										className="w-full h-full"
									/>
								</div>
							)}

							<div className="p-6 sm:p-8 relative">
								<Quote className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 text-accent/30" />

								<div className="flex gap-1 mb-4">
									{Array.from({ length: review.rating }).map((_, i) => (
										<Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
									))}
								</div>

								<p className="text-sm sm:text-base text-foreground/80 mb-6 leading-relaxed">
									"{review.text}"
								</p>

								<div className="flex items-center gap-3 pt-4 border-t border-border">
									<div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${review.avatarColor} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-semibold text-sm sm:text-base">
                      {review.initials}
                    </span>
									</div>
									<div className="flex-1 min-w-0">
										<p className="font-semibold text-foreground text-sm sm:text-base truncate">
											{review.name}
										</p>
										<p className="text-xs sm:text-sm text-foreground/60">
											{review.date}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
