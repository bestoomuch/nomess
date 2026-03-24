import {Sparkles, Instagram, Mail, Send, Copy} from "lucide-react";
import VkIcon from "@/components/CustomIcons/VkIcon.tsx";
import { toast } from "sonner";
import {useEffect, useRef, useState} from "react";

export default function Footer() {
	const [showEmail, setShowEmail] = useState(false);
	const emailRef = useRef<HTMLDivElement>(null);

	const copyEmail = () => {
		const email = "alekseevaksenia2007@yandex.ru";
		navigator.clipboard.writeText(email).then(() => {
			toast.success("Почта скопирована!");
			setShowEmail(false);
		}).catch(() => {
			toast.error("Не удалось скопировать");
		});
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (emailRef.current && !emailRef.current.contains(event.target as Node)) {
				setShowEmail(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<footer className="bg-foreground/5 border-t border-border py-12 px-6">
			<div className="container mx-auto max-w-6xl">
				<div className="grid md:grid-cols-3 gap-12 mb-8">
					<div>
						<div className="flex items-center gap-2 mb-4">
							<Sparkles className="w-6 h-6 text-primary"/>
							<span className="text-xl font-semibold text-foreground"
							      style={{fontFamily: 'Playfair Display, serif'}}>
                NO MESS
              </span>
						</div>
						<p className="text-foreground/60 text-sm mb-4">
							No Mess — no stress
						</p>
						<p className="text-foreground/70 text-sm">
							Создаем порядок в сумке и в голове
						</p>
					</div>

					<div>
						<h4 className="font-semibold text-foreground mb-4">Навигация</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<button
									onClick={() => document.getElementById("about")?.scrollIntoView({behavior: "smooth"})}
									className="text-foreground/70 hover:text-primary transition-colors"
								>
									О нас
								</button>
							</li>
							<li>
								<button
									onClick={() => document.getElementById("products")?.scrollIntoView({behavior: "smooth"})}
									className="text-foreground/70 hover:text-primary transition-colors"
								>
									Продукция
								</button>
							</li>
							<li>
								<button
									onClick={() => document.getElementById("events")?.scrollIntoView({behavior: "smooth"})}
									className="text-foreground/70 hover:text-primary transition-colors"
								>
									Встречи
								</button>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold text-foreground mb-4">Соцсети</h4>
						<div className="flex gap-4 relative">
							<a
								href="https://www.instagram.com/noo_messs"
								className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
								aria-label="Instagram"
							>
								<Instagram className="w-5 h-5"/>
							</a>
							<a
								href="https://t.me/NOmessNOstresss"
								className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
								aria-label="Telegram"
							>
								<Send className="w-5 h-5"/>
							</a>
							<div className="relative flex gap-4 items-center" ref={emailRef}>
								<button
									onClick={() => setShowEmail(!showEmail)}
									className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
									aria-label="Email"
								>
									<Mail className="w-5 h-5" />
								</button>

								{showEmail && (
									<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-20 w-80 max-w-[calc(100vw-3rem)] animate-in slide-in-from-bottom-2">
										<div className="flex items-center gap-2 bg-card border border-border p-3 rounded-lg shadow-lg">
											<Mail className="w-4 h-4 text-primary shrink-0" />
											<span className="text-sm text-foreground/70 truncate">
									          alekseevaksenia2007@yandex.ru
									        </span>
											<div
												onClick={copyEmail}
												className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shrink-0 cursor-pointer"
												aria-label="Скопировать email"
											>
												<Copy className="w-4 h-4" />
											</div>
										</div>
									</div>
								)}
							</div>
							<a
								href="https://vk.com/no_mess"
								className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
								aria-label="VK"
							>
								<VkIcon
									size={40}
								/>
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
					<p>© 2026 No Mess. Все права защищены.</p>
				</div>
			</div>
		</footer>
	);
}