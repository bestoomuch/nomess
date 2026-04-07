import { Star, Quote } from "lucide-react"
import maria from '@/assets/images/reviews/maria.jpg'
import olga from '@/assets/images/reviews/olga.jpg'
import alex from '@/assets/images/reviews/alex.jpg'
import mariaPhoto from '@/assets/images/reviews/maria_photo.jpg'
import olgaPhoto from '@/assets/images/reviews/olga_photo.jpg'
import alexPhoto from '@/assets/images/reviews/alex_photo.jpg'
import evgenPhoto from '@/assets/images/reviews/evgen_photo.jpg'

export default function ReviewsSection() {
	const reviews = [
		{
			name: "Мария",
			initials: "АК",
			avatarColor: "bg-gradient-to-br from-pink-400 to-rose-500",
			text: "Недавно приобрела потрясающий картхолдер и органайзер от бренда No Mess, очень практичные и минималистичные по дизайну отлично подошли для моей сумки) Теперь все лежит на своих местах, больше не приходиться тратить время на поиски какой-то вещи и пользоваться сумкой стало намного приятнее. Спасибо бренду No Mess за хорошее качество и внимание к деталям!\n" +
				"Теперь это одни из моих самых любимых аксессуаров\n",
			rating: 5,
			date: "Март 2026",
			image: mariaPhoto,
			avatar: maria,
		},
		{
			name: "Ольга",
			initials: "МС",
			avatarColor: "bg-gradient-to-br from-purple-400 to-indigo-500",
			text: "Огромное спасибо.\n" +
				"Теперь, за счет цепочки намного удобнее в час пик искать проездной в сумке",
			rating: 5,
			date: "Февраль 2026",
			image: olgaPhoto,
			avatar: olga,
		},
		{
			name: "Александра",
			initials: "ЕВ",
			avatarColor: "bg-gradient-to-br from-amber-400 to-orange-500",
			text: "Купила картхолдер для себя, но дочка быстро его отвоевала:)\n" +
				"Очень удобно, что есть возможность пристегнуть к сумке/рюкзаку, тогда точно не потеряется. Карточка лежит плотно, не выскальзывает. Сам картохолдер легкий, не утяжеляет сумку.",
			rating: 5,
			date: "Январь 2026",
			image: alexPhoto,
			avatar: alex,
		},
		{
			name: "Евгения",
			initials: "ЕВ",
			avatarColor: "bg-gradient-to-br from-amber-400 to-orange-500",
			text: "После приобретения органайзеров у NO Mess действительно в сумке появился порядок,\n" +
				"достаточно легко и просто поменять сумку утром когда торопишься на работу",
			rating: 5,
			date: "Январь 2026",
			image: evgenPhoto,
			avatar: null,
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

				<div className="flex gap-8 overflow-x-auto py-4">
					{reviews.map((review, index) => (
						<div key={index} className="flex-shrink-0 max-w-[400px] bg-card rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow overflow-hidden">
							{review.image && (
								<div className="aspect-video w-full overflow-hidden">
									<img
										src={review.image}
										alt={`Фото от ${review.name}`}
										className="w-full h-full object-cover"
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
									{review.avatar ? (
										<img
											src={review.avatar}
											alt={`Аватар ${review.name}`}
											className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
										/>
									) : (
										<div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${review.avatarColor} flex items-center justify-center flex-shrink-0`}>
									      <span className="text-white font-semibold text-sm sm:text-base">
									        {review.initials}
									      </span>
										</div>
									)}

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
