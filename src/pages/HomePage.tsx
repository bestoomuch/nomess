import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { ProductsSection } from "../components/ProductsSection"
import { EventsSection } from "../components/EventSection"
import DeliverySection from "@/components/DeliverySection.tsx";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ProductsSection />
			<DeliverySection />
			<EventsSection />
		</>
	)
}
