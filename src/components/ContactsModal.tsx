import { useState } from "react";
import VkIcon from "@/components/CustomIcons/VkIcon.tsx";
import {Mail, Send} from "lucide-react";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
				<div className="bg-white rounded-2xl p-6 max-w-sm w-full relative">
					{/* Кнопка закрытия */}
					<button
						onClick={onClose}
						className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
					>
						✕
					</button>

					<h2 className="text-xl font-bold mb-4">Связаться с менеджером</h2>

					<div className="flex flex-col gap-3">
						<a
							href="https://t.me/No_Mess_manager"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2  hover:underline text-base ml-1"
						>
							<Send className="w-5 h-5 shrink-0" />
							Telegram: @No_Mess_manager
						</a>

						<a
							href="https://vk.com/nomess_manager"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2  hover:underline text-base"
						>
							<VkIcon size={30} className="shrink-0" />
							VK: @nomess_manager
						</a>

						<a
							href="tel:+79000000000"
							className="flex items-center gap-2  hover:underline text-base ml-1"
						>
							<Mail className="w-4 h-4 shrink-0" />
							Телефон: +7 (900) 000-00-00
						</a>
					</div>
				</div>
			</div>
	);
}