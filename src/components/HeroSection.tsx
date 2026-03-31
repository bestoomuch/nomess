import { ArrowDown } from "lucide-react";
import heroLogo from '@/assets/images/logo.png'

export function HeroSection() {
	const scrollToProducts = () => {
		const element = document.getElementById("products");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="min-h-screen flex items-center justify-center pt-20 px-6">
			<div className="container mx-auto max-w-4xl text-center">
				<div className="space-y-6">
					<div className="flex justify-center mb-8">
						<img
							src={heroLogo}
							alt="No Mess Logo"
							className="w-full max-w-xl md:max-w-2xl h-auto object-contain"
						/>
					</div>
					<h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
						No Mess — no stress
					</h1>

					<p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
						Мы помогаем девушкам навести порядок — в сумке и в голове
					</p>

					<div className="pt-8">
						<button
							onClick={scrollToProducts}
							className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
						>
							Посмотреть продукты
							<ArrowDown className="w-5 h-5" />
						</button>
					</div>
				</div>

				<div className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
					<div className="p-6 rounded-2xl bg-accent/20 border border-accent/30">
						<div className="text-3xl font-bold text-primary">100+</div>
						<div className="text-sm text-foreground/60 mt-1">Довольных клиентов</div>
					</div>
					<div className="p-6 rounded-2xl bg-accent/20 border border-accent/30">
						<div className="text-3xl font-bold text-primary">5+</div>
						<div className="text-sm text-foreground/60 mt-1">Видов органайзеров</div>
					</div>
					<div className="p-6 rounded-2xl bg-accent/20 border border-accent/30">
						<div className="text-3xl font-bold text-primary">24/7</div>
						<div className="text-sm text-foreground/60 mt-1">Поддержка</div>
					</div>
				</div>
			</div>
		</section>
	);
}