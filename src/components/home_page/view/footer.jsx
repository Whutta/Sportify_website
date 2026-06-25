function Footer() {
    return (
        <div className="bg-black px-30 pt-15 pb-5 border-t-1 border-gray-800">
            <div className="flex flex-row justify-between">
                <div>
                    <div className="flex items-center gap-3 pb-3">
                        <div className="rounded-2xl w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-900 flex items-center justify-center text-white text-3xl font-bold">
                            S
                        </div>
                        <h1 className="text-white text-2xl font-bold">SPORTIFY</h1>
                    </div>
                    <p className="text-gray-300 w-80 font-sans text-sm">Your all in one sports playground, arcade, games, worksups, haunted house and more.</p>
                    <div className="flex gap-3 mt-4">
                        <a href="#" className="w-10 h-10 rounded-full border-zinc-600 border flex items-center justify-center hover:bg-zinc-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border-zinc-600 border flex items-center justify-center hover:bg-zinc-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border-zinc-600 border flex items-center justify-center hover:bg-zinc-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border-zinc-600 border flex items-center justify-center hover:bg-zinc-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border-zinc-600 border flex items-center justify-center hover:bg-zinc-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <p className="text-gray-500 pb-2 font-mono">EXPLORE</p>
                    <ul className="flex flex-col gap-4 text-gray-300 text-sm">
                        <li>Arcade</li>
                        <li>Workshops</li>
                        <li>Birthday</li>
                        <li>Membership</li>
                    </ul>
                </div>
                <div className="">
                    <p className="text-gray-500 pb-2 font-mono">ACTIVITIES</p>
                    <ul className="flex flex-col gap-4 text-gray-300 text-sm">
                        <li>Skating</li>
                        <li>Haunted House</li>
                        <li>Food & Drinks</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="">
                    <p className="text-gray-500 pb-2 font-mono">HOURS</p>
                    <p className="text-gray-300 text-sm">Mon - Fri: 11:30am - 10pm</p>
                    <p className="text-gray-300 text-sm">Sat - Sun/Holidays: 10 AM - late</p>
                </div>
            </div>
            <div className="pt-20">
                <p className="text-gray-500 text-sm font-mono">© 2026 Sportify. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer