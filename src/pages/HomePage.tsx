import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { ProductsSection } from "../components/ProductsSection"
import { EventsSection } from "../components/EventSection"

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ProductsSection />
			<EventsSection />
		</>
	)
}
