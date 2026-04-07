import { Calendar, MapPin, Users } from "lucide-react"
import event1 from "@/assets/images/event_1.jpg"
import event2 from "@/assets/images/event_2.jpg"

export default function PastEventsSection() {
	const events = [
		{
			title: "Весенняя перезагрузка",
			date: "1 марта",
			location: "м. Пражская",
			participants: "16 участников",
			description: "Провели йогу и составление карты желаний для наведения порядка в голове. Познакомили клиентов с нашим брендом и дали ознакомиться вживую с продукцией.",
			imageUrl: event1
		},
		{
			title: "Арт-вечер с No Mess",
			date: "21 марта",
			location: "м. Бауманская",
			participants: "15 участников",
			description: "Провели мастер-класс по кастомизации наших картхолдеров, а также по созданию обвесов на сумку. Предложили к покупке наши органайзеры.",
			imageUrl: event2
		},
	];

	return (
		<section id="past-events" className="py-24 px-6 bg-card">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
						Наши прошедшие мероприятия
					</h2>
					<p className="text-lg text-foreground/70 max-w-2xl mx-auto">
						Посмотрите, как проходили наши встречи
					</p>
				</div>

				<div className="space-y-12">
					{events.map((event, index) => (
						<div
							key={index}
							className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 bg-secondary/30 rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow`}
						>
							<div className="md:w-1/2">
								<img
									src={event.imageUrl}
									alt={event.title}
									className="w-full h-full object-cover min-h-[300px]"
								/>
							</div>

							<div className="md:w-1/2 p-8 flex flex-col justify-center">
								<h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
									{event.title}
								</h3>

								<div className="space-y-3 mb-6">
									<div className="flex items-center gap-2 text-foreground/70">
										<Calendar className="w-5 h-5 text-primary" />
										<span>{event.date}</span>
									</div>
									<div className="flex items-center gap-2 text-foreground/70">
										<MapPin className="w-5 h-5 text-primary" />
										<span>{event.location}</span>
									</div>
									<div className="flex items-center gap-2 text-foreground/70">
										<Users className="w-5 h-5 text-primary" />
										<span>{event.participants}</span>
									</div>
								</div>

								<p className="text-foreground/80 leading-relaxed">
									{event.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
