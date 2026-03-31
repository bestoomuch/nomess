import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Link, useSearchParams } from "react-router"
import { ArrowLeft, Check } from "lucide-react"
import { useState } from "react"
import organizerBeige from "@/assets/images/organaizer.png"
import organizerBrown from "@/assets/images/organaizer_dark.png"
import sizeGrid from "@/assets/images/organaizer_size_net.png"

const sizeOptions = [
	{
		size: 'S' as const,
		price: 600,
		priceStr: '600 ₽',
		dimensions: '17.5 × 8.5 см',
		description: 'Компактный размер для небольших сумок и клатчей'
	},
	{
		size: 'M' as const,
		price: 700,
		priceStr: '700 ₽',
		dimensions: '24.5 × 11 см',
		description: 'Универсальный размер для средних сумок'
	},
	{
		size: 'L' as const,
		price: 800,
		priceStr: '800 ₽',
		dimensions: '31 × 15 см',
		description: 'Большой размер для просторных сумок и рюкзаков'
	}
];

export default function OrganizerPage() {
	const [searchParams] = useSearchParams();
	const initialSize = (searchParams.get('size') as 'S' | 'M' | 'L') || 'M';
	const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L'>(initialSize);

	const currentSize = sizeOptions.find(opt => opt.size === selectedSize)!;

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
						{/* Изображения */}
						<div className="space-y-4">
							<div className="aspect-square rounded-2xl overflow-hidden bg-secondary/20 border border-border">
								<img
									src={organizerBeige}
									alt="Органайзер для сумки"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="aspect-square rounded-xl overflow-hidden bg-secondary/20 border border-border">
									<img
										src={organizerBrown}
										alt="Органайзер коричневый"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="aspect-square rounded-xl overflow-hidden bg-secondary/20 border border-border">
									<img
										src={sizeGrid}
										alt="Размерная сетка"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>

						{/* Информация */}
						<div>
							<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
								Органайзер для сумки
							</h1>

							<div className="flex items-baseline gap-4 mb-6">
								<span className="text-3xl font-bold text-primary">{currentSize.priceStr}</span>
								<span className="text-foreground/60">• {currentSize.dimensions}</span>
							</div>

							<p className="text-lg text-foreground/70 mb-8 leading-relaxed">
								Многофункциональный вкладыш из войлока с 5 карманами для организации пространства в сумке.
								Поддерживает форму сумки и защищает содержимое.
							</p>

							{/* Выбор размера */}
							<div className="mb-8 p-6 bg-secondary/20 rounded-2xl border border-border">
								<h3 className="font-semibold text-foreground mb-4">Выберите размер:</h3>
								<div className="space-y-3">
									{sizeOptions.map((option) => (
										<button
											key={option.size}
											onClick={() => setSelectedSize(option.size)}
											className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
												selectedSize === option.size
													? 'bg-primary/5 border-primary'
													: 'bg-card border-border hover:border-primary/50'
											}`}
										>
											<div className="flex items-center justify-between mb-1">
												<span className="font-semibold text-foreground">Размер {option.size}</span>
												<span className="font-bold text-primary">{option.priceStr}</span>
											</div>
											<div className="text-sm text-foreground/70">{option.dimensions}</div>
											<div className="text-sm text-foreground/60 mt-1">{option.description}</div>
										</button>
									))}
								</div>
							</div>

							{/* Характеристики */}
							<div className="mb-8 p-6 bg-card rounded-2xl border border-border">
								<h3 className="font-semibold text-foreground mb-4">Характеристики:</h3>
								<ul className="space-y-3">
									<li className="flex items-start gap-3">
										<Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
										<span className="text-foreground/80">5 внутренних карманов разного размера</span>
									</li>
									<li className="flex items-start gap-3">
										<Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
										<span className="text-foreground/80">Материал: прочный войлок</span>
									</li>
									<li className="flex items-start gap-3">
										<Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
										<span className="text-foreground/80">Поддерживает форму сумки</span>
									</li>
									<li className="flex items-start gap-3">
										<Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
										<span className="text-foreground/80">Легко достается и вставляется</span>
									</li>
									<li className="flex items-start gap-3">
										<Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
										<span className="text-foreground/80">Доступен в нескольких цветах</span>
									</li>
								</ul>
							</div>

							{/* Что поместится */}
							<div className="mb-8">
								<h3 className="font-semibold text-foreground mb-4">Что поместится в карманы?</h3>
								<div className="grid grid-cols-2 gap-3">
									<div className="p-3 bg-accent/10 rounded-lg border border-accent/30">
										<p className="text-sm text-foreground/80">📱 Телефон</p>
									</div>
									<div className="p-3 bg-accent/10 rounded-lg border border-accent/30">
										<p className="text-sm text-foreground/80">💄 Косметика</p>
									</div>
									<div className="p-3 bg-accent/10 rounded-lg border border-accent/30">
										<p className="text-sm text-foreground/80">🔑 Ключи</p>
									</div>
									<div className="p-3 bg-accent/10 rounded-lg border border-accent/30">
										<p className="text-sm text-foreground/80">💳 Карты</p>
									</div>
									<div className="p-3 bg-accent/10 rounded-lg border border-accent/30">
										<p className="text-sm text-foreground/80">🎧 Наушники</p>
									</div>
									<div className="p-3 bg-accent/10 rounded-lg border border-accent/30">
										<p className="text-sm text-foreground/80">📝 Блокнот</p>
									</div>
								</div>
							</div>

							{/* Кнопка заказа */}
							<button className="w-full bg-primary text-primary-foreground py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
								Заказать {currentSize.size} за {currentSize.priceStr}
							</button>

							<p className="text-sm text-foreground/60 text-center mt-4">
								Доставка по Москве и всей России
							</p>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
