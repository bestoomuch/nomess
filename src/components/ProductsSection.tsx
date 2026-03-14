// import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Product {
	id: number;
	name: string;
	description: string;
	price: string;
	image: string;
}

const products: Product[] = [
	{
		id: 1,
		name: "Органайзер Classic",
		description: "Многофункциональный вкладыш для сумки с отделениями для всего необходимого",
		price: "2 990 ₽",
		image: "https://images.unsplash.com/photo-1722236525367-00a4ff86ec00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwYmFnJTIwb3JnYW5pemVyJTIwaW5zZXJ0fGVufDF8fHx8MTc3MzMzNzIzNnww&ixlib=rb-4.1.0&q=80&w=1080"
	},
	{
		id: 2,
		name: "Картхолдер Minimal",
		description: "Компактный держатель для карт с минималистичным дизайном",
		price: "1 490 ₽",
		image: "https://images.unsplash.com/photo-1678554832890-2ea5d37278af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2FyZCUyMGhvbGRlciUyMHdhbGxldHxlbnwxfHx8fDE3NzMzMzcyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
	},
	{
		id: 3,
		name: "Органайзер Premium",
		description: "Элегантный органайзер из премиальных материалов для роскошных сумок",
		price: "4 290 ₽",
		image: "https://images.unsplash.com/photo-1696774772895-013333d6d7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kYmFnJTIwb3JnYW5pemVyfGVufDF8fHx8MTc3MzMzNzIzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
	},
	{
		id: 4,
		name: "Картхолдер Leather",
		description: "Кожаный картхолдер ручной работы с бежевым оттенком",
		price: "2 290 ₽",
		image: "https://images.unsplash.com/photo-1740842028123-56fd319de33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWlnZSUyMGxlYXRoZXIlMjBjYXJkaG9sZGVyfGVufDF8fHx8MTc3MzMzNzIzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
	}
];

export function ProductsSection() {
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

				<div className="grid md:grid-cols-2 gap-8">
					{products.map((product) => (
						<div
							key={product.id}
							className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
						>
							<div className="aspect-[4/3] overflow-hidden bg-secondary/20">
								Fallback
								{/*<ImageWithFallback*/}
								{/*	src={product.image}*/}
								{/*	alt={product.name}*/}
								{/*	className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"*/}
								{/*/>*/}
							</div>

							<div className="p-6">
								<div className="flex items-start justify-between mb-3">
									<h3 className="text-xl font-semibold text-foreground">
										{product.name}
									</h3>
									<span className="text-xl font-bold text-primary">
                    {product.price}
                  </span>
								</div>

								<p className="text-foreground/70 mb-4">
									{product.description}
								</p>

								<button className="w-full bg-primary text-primary-foreground py-3 rounded-full hover:bg-primary/90 transition-colors">
									Подробнее
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}