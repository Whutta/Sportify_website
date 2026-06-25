import { Link } from 'react-router-dom';
import Footer from '../../home_page/view/footer';

function ContactView() {
    return (
        <>
        <div className="bg-black min-h-screen text-white">

            {/* Hero Section */}
            <div className="relative border-b-1 border-zinc-800 px-24 pt-52 pb-32 overflow-hidden -mt-20"
                style={{ background: 'radial-gradient(ellipse at 60% 40%, #f1057b98 0%, #0a0a0a 65%)' }}>
                <p className="text-gray-300 font-mono tracking-wider">VISIT & BOOK</p>
                <h1 className="text-white text-7xl font-sans font-extrabold tracking-tight">
                    Come play with <span className="text-7xl font-sans font-extrabold neon-pink tracking-tight">us.</span>
                </h1>
                <p className="text-gray-300 tracking-wide font-sans pt-6 text-lg w-170">
                    Questions, bookings or birthday planning, our crew replies fast. Drop a message and we'll hit you back.
                </p>
            </div>

            <div className="bg-zinc-950 px-24 py-26">
                <div className="flex gap-8 items-start">

                    <div className="flex flex-col gap-4 w-120 shrink-0">
                        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-pink-700 flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-mono">VISIT US</p>
                                <p className="text-white font-bold text-2xl">Sportify Arena, Malaysia</p>
                            </div>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-pink-700 flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.01z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-mono">CALL</p>
                                <p className="text-white font-bold text-2xl">+60 12 345 6789</p>
                            </div>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-pink-700 flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-mono">EMAIL</p>
                                <p className="text-white font-bold text-2xl">hello@sportify.my</p>
                            </div>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-pink-700 flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.541 5.875L.057 23.428a.75.75 0 0 0 .921.921l5.553-1.484A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 0 1-4.964-1.355l-.355-.213-3.684.984.985-3.595-.232-.372A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-mono">WHATSAPP</p>
                                <p className="text-white font-bold text-2xl">+60 123 456 789</p>
                            </div>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-pink-700 flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-mono">Instagram</p>
                                <p className="text-white font-bold text-2xl">@sportify.playground</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex-1 bg-zinc-900 border border-pink-800 rounded-2xl p-8">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-gray-500 text-xs font-mono mb-2">NAME</p>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-3 text-white text-base placeholder-gray-600 focus:outline-none focus:border-pink-600 transition-colors"
                                />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-mono mb-2">EMAIL</p>
                                <input
                                    type="email"
                                    placeholder="you@email.com"
                                    className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-3 text-white text-base placeholder-gray-600 focus:outline-none focus:border-pink-600 transition-colors"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <p className="text-gray-500 text-xs font-mono mb-2">PHONE (OPTIONAL)</p>
                                <input
                                    type="tel"
                                    placeholder="+60 12 345 6789"
                                    className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-3 text-white text-base placeholder-gray-600 focus:outline-none focus:border-pink-600 transition-colors"
                                />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-mono mb-2">SUBJECT</p>
                                <select className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-3 text-white text-base focus:outline-none focus:border-pink-600 transition-colors cursor-pointer">
                                    <option value="" disabled selected className="text-gray-600">Select a subject...</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="birthday">Birthday Package</option>
                                    <option value="workshop">Workshop Booking</option>
                                    <option value="haunted">Haunted House Booking</option>
                                    <option value="membership">Membership Registration</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-6">
                            <p className="text-gray-500 text-xs font-mono mb-1">MESSAGE</p>
                            <textarea
                                rows={6}
                                placeholder="Tell us what you need..."
                                className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-lg px-4 py-3 text-white text-base placeholder-gray-600 focus:outline-none focus:border-pink-600 transition-colors resize-none"
                            />
                        </div>
                        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition-colors duration-300 cursor-pointer">
                            Send Message
                        </button>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ContactView