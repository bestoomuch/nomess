import { Link } from "react-router"
import { useState } from "react"
import cardholderImage from "@/assets/images/cardholder.png"
import organizerBeige from "@/assets/images/organaizer.png"

export function ProductsSection() {
	const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L'>('M');

	const sizeOptions = [
		{ size: 'S' as const, price: '600 ₽', dimensions: '17.5 × 8.5 см' },
		{ size: 'M' as const, price: '700 ₽', dimensions: '24.5 × 11 см' },
		{ size: 'L' as const, price: '800 ₽', dimensions: '31 × 15 см' }
	];

	const currentSize = sizeOptions.find(opt => opt.size === selectedSize)!;

	return (
		<section id="products" className="py-24 px-6">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
						Наша продукция
					</h2>
					<p className="text-lg text-foreground/70 max-w-2xl mx-auto">
						Каждый продукт создан с вниманием к деталям и заботой о вашем комфорте
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{/* Картхолдер */}
					<div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
						<div className="aspect-square overflow-hidden bg-secondary/20">
							<img
								src={cardholderImage}
								alt="Картхолдер на карабине"
								className="w-full h-full object-cover"
							/>
						</div>

						<div className="p-6">
							<div className="flex items-start justify-between mb-3">
								<h3 className="text-xl font-semibold text-foreground">
									Картхолдер на карабине
								</h3>
								<span className="text-xl font-bold text-primary">
                  500 ₽
                </span>
							</div>

							<p className="text-foreground/70 mb-4">
								Практичный держатель для пропуска, проездного и банковской карты с карабином
							</p>

							<Link
								to="/product/cardholder"
								className="block w-full bg-primary text-primary-foreground py-3 rounded-full hover:bg-primary/90 transition-colors text-center"
							>
								Подробнее
							</Link>
						</div>
					</div>

					{/* Органайзер */}
					<div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
						<div className="aspect-square overflow-hidden bg-secondary/20">
							<img
								src={organizerBeige}
								alt="Органайзер для сумки"
								className="w-full h-full object-cover"
							/>
						</div>

						<div className="p-6">
							<div className="flex items-start justify-between mb-3">
								<h3 className="text-xl font-semibold text-foreground">
									Органайзер для сумки
								</h3>
								<span className="text-xl font-bold text-primary">
                  {currentSize.price}
                </span>
							</div>

							<p className="text-foreground/70 mb-4">
								Вкладыш для сумки с 5 карманами из войлока • {currentSize.dimensions}
							</p>

							{/* Выбор размера */}
							<div className="mb-4">
								<p className="text-sm text-foreground/60 mb-2">Выберите размер:</p>
								<div className="flex gap-2">
									{sizeOptions.map((option) => (
										<button
											key={option.size}
											onClick={() => setSelectedSize(option.size)}
											className={`flex-1 py-2 px-4 rounded-full border transition-all ${
												selectedSize === option.size
													? 'bg-primary text-primary-foreground border-primary'
													: 'bg-background border-border text-foreground hover:border-primary/50'
											}`}
										>
											<div className="font-semibold">{option.size}</div>
											<div className="text-xs opacity-80">{option.price}</div>
										</button>
									))}
								</div>
							</div>

							<Link
								to={`/product/organizer?size=${selectedSize}`}
								className="block w-full bg-primary text-primary-foreground py-3 rounded-full hover:bg-primary/90 transition-colors text-center"
							>
								Подробнее
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
