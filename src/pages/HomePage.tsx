import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { ProductsSection } from "../components/ProductsSection"
import DeliverySection from "@/components/DeliverySection.tsx";
import PastEventsSection from "@/components/PastEventsSection.tsx";
import ReviewsSection from "@/components/ReviewsSection.tsx";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ProductsSection />
			<ReviewsSection />
			<DeliverySection />
			<PastEventsSection />
		</>
	)
}
