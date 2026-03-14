// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from "./pages/HomePage.tsx"
import CardholderPage from "@/pages/CardHolderPage.tsx"
import OrganizerPage from "@/pages/OrganaizerPage.tsx"
import NotFoundPage from "@/pages/NotFoundPage.tsx"

function About() {
    return <h1 className="min-h-[60vh]">About</h1>
}

export default function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>

            {/* основной контент растягивается */}
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/product/cardholder" element={<CardholderPage/>}/>
                    <Route path="/product/organizer" element={<OrganizerPage/>}/>

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>

            <Footer/>
        </div>
    );
}
