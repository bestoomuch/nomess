import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Link } from "react-router";
import { ArrowLeft, Check } from "lucide-react";
import cardholderImage from "@/assets/images/cardholder.png";
import {useState} from "react";
import ContactModal from "@/components/ContactsModal.tsx";

export default function CardholderPage() {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-1 pt-24 pb-16 px-6">
				<div className="container mx-auto max-w-6xl">
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-8"
					>
						<ArrowLeft className="w-4 h-4" />
						Назад к продукции
					</Link>

					<div className="grid md:grid-cols-2 gap-12 items-start">
						{/* Изображение */}
						<div>
							<div className="aspect-square rounded-2xl overflow-hidden bg-secondary/20 border border-border">
								<img
									src={cardholderImage}
									alt="Картхолдер на карабине"
									className="w-full h-full"
								/>
							</div>
						</div>

						{/* Информация */}
						<div>
							<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
								Картхолдер на карабине
							</h1>

							<div className="flex items-baseline gap-4 mb-6">
								<span className="text-3xl font-bold text-primary">500 ₽</span>
							</div>

							<p className="text-lg text-foreground/70 mb-8 leading-relaxed">
								Практичный держатель для пропуска, проездного и банковской карты с удобным карабином.
								Идеальное решение для тех, кто ценит удобство и стиль.
							</p>

							{/* Характеристики */}
							<div className="mb-8 p-6 bg-secondary/20 rounded-2xl border border-border">
								<h3 className="font-semibold text-foreground mb-4">Характеристики:</h3>
								<ul className="space-y-3">
									<li className="flex items-start gap-3">
										<Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
										<span className="text-foreground/80">Надежный карабин для крепления</span>
									</li>
									<li className="flex items-start gap-3">
										<Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
										<span className="text-foreground/80">Вмещает 3 карты и наличку</span>
									</li>
									<li className="flex items-start gap-3">
										<Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
										<span className="text-foreground/80">Прозрачное окошко для пропуска</span>
									</li>
									<li className="flex items-start gap-3">
										<Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
										<span className="text-foreground/80">Компактный и стильный дизайн</span>
									</li>
									<li className="flex items-start gap-3">
										<Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
										<span className="text-foreground/80">Доступен в нескольких цветах</span>
									</li>
								</ul>
							</div>

							{/* Преимущества */}
							<div className="mb-8">
								<h3 className="font-semibold text-foreground mb-4">Почему картхолдер No Mess?</h3>
								<div className="space-y-4">
									<div className="p-4 bg-card rounded-xl border border-border">
										<h4 className="font-medium text-foreground mb-1">Удобство в использовании</h4>
										<p className="text-sm text-foreground/70">
											Быстрый доступ к картам и пропуску без необходимости доставать из сумки
										</p>
									</div>
									<div className="p-4 bg-card rounded-xl border border-border">
										<h4 className="font-medium text-foreground mb-1">Качественные материалы</h4>
										<p className="text-sm text-foreground/70">
											Износостойкий карабин и прочный корпус обеспечивают долгий срок службы
										</p>
									</div>
									<div className="p-4 bg-card rounded-xl border border-border">
										<h4 className="font-medium text-foreground mb-1">Минималистичный стиль</h4>
										<p className="text-sm text-foreground/70">
											Элегантный дизайн, который подходит к любому образу
										</p>
									</div>
								</div>
							</div>

							{/* Кнопка заказа */}
							<button onClick={() => setShowModal(true)} className="w-full cursor-pointer bg-primary text-primary-foreground py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
								Заказать за 500 ₽
							</button>

							<p className="text-sm text-foreground/60 text-center mt-4">
								Доставка по Москве и всей России
							</p>
						</div>
					</div>
				</div>

				<ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
			</main>
		</div>
	);
}
