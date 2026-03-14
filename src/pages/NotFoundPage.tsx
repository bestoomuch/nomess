import { Link } from 'react-router-dom'

export default function NotFoundPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#F7E9DE] px-6 text-center">
			<h1 className="text-6xl md:text-7xl font-bold text-[#8B4E3C] mb-4">404</h1>
			<h2 className="text-2xl md:text-3xl font-semibold text-[#8B4E3C] mb-6">
				Страница не найдена
			</h2>
			<p className="text-[#8B4E3C] mb-8 max-w-md">
				Упс! Похоже, такой страницы не существует. Вернитесь на главную страницу или попробуйте другой раздел.
			</p>
			<Link
				to="/"
				className="px-6 py-3 bg-[#8B4E3C] text-[#F7E9DE] font-medium rounded hover:bg-[#B36B4C] transition-colors"
			>
				На главную
			</Link>
		</div>
	)
}
