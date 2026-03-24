import { Truck, MapPin, User } from "lucide-react";

export default function DeliverySection() {
	return (
		<section id="delivery" className="py-24 px-6 bg-card">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
						Доставка
					</h2>
					<p className="text-lg text-foreground/70 max-w-2xl mx-auto">
						Выберите удобный для вас способ получения заказа
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					<div className="bg-secondary/30 p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
						<div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
							<MapPin className="w-6 h-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							Самовывоз
						</h3>
						<p className="text-foreground/70 mb-2">
							м. Серпуховская
						</p>
						<p className="text-sm text-foreground/60">
							1-2 дня по договоренности с менеджером
						</p>
					</div>

					<div className="bg-secondary/30 p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
						<div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
							<Truck className="w-6 h-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							Яндекс.доставка
						</h3>
						<p className="text-foreground/70 mb-2">
							Оплачивается отдельно
						</p>
						<p className="text-sm text-foreground/60">
							Рассчитывается в зависимости от адреса доставки. День в день
						</p>
					</div>

					<div className="bg-secondary/30 p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
						<div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
							<User className="w-6 h-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold text-foreground mb-3">
							Доставка курьером
						</h3>
						<p className="text-foreground/70 mb-2">
							До двери одним из наших сотрудников
						</p>
						<p className="text-sm text-foreground/60">
							Рассчитаем стоимость в зависимости от адреса. 3-5 дней по договоренности с менеджером
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
