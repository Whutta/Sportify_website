function Services() {
    return (
        <div className="bg-black px-30 py-30">
            <p className="text-cyan-400 font-mono tracking-wider">WHAT WE OFFER</p>
            <h1 className="text-white text-7xl font-sans font-extrabold tracking-tight">Every play,one</h1>
            <h1 className="text-white text-7xl font-sans font-extrabold neon-pink tracking-tight">playground</h1>
            <p className="text-gray-300 tracking-wide font-sans pt-6 text-lg w-170">From retro arcade cabinets to hands-on craft workshops and screaming escape rooms, tap any card to dive
                into full details
            </p>
            <div className="grid grid-cols-4 gap-4 text-white auto-rows-fr pt-12">
                <div className="service-card col-span-2 row-span-2" style={{ backgroundImage: 'url(/images/arcade_game.jpeg)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-black/60" />
                    <div className="z-10">
                        <span className="text-sm text-pink-600 font-mono">20+ MACHINES</span>
                        <div className="flex flex-row justify-between">
                            <span className="text-3xl font-bold">Arcade & Coin Games</span>
                            <button className="service-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="service-card col-span-2" style={{ backgroundImage: 'url(/images/haunted_house.jpeg)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-black/60" />
                    <div className="z-10">
                        <span className="text-sm text-cyan-600 font-mono">SPINE-TINGLING</span>
                        <div className="flex flex-row justify-between">
                            <span className="text-3xl font-bold">Haunted House</span>
                            <button className="service-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="service-card" style={{ backgroundImage: 'url(/images/pixel_bean_workshop.jpeg)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-black/60" />
                    <div className="z-10">
                        <span className="text-sm text-green-600 font-mono">CREATE YOUR OWN</span>
                        <div className="flex flex-row justify-between">
                            <span className="text-3xl font-bold">Pixel Bean</span>
                            <button className="service-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="service-card" style={{ backgroundImage: 'url(/images/scratch_win.jpeg)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-black/60" />
                    <div className="z-10">
                        <span className="text-sm text-yellow-600 font-mono">WIN BIG!</span>
                        <div className="flex flex-row justify-between">
                            <span className="text-3xl font-bold">Scratch & Win</span>
                            <button className="service-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="service-card" style={{ backgroundImage: 'url(/images/tufting_workshop.jpeg)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-black/60" />
                    <div className="z-10">
                        <span className="text-sm text-purple-600 font-mono">DIY YOUR RUG</span>
                        <div className="flex flex-row justify-between">
                            <span className="text-2xl font-bold">Tufting Workshop</span>
                            <button className="service-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="service-card" style={{ backgroundImage: 'url(/images/birthday_package.jpeg)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-black/60" />
                    <div className="z-10">
                        <span className="text-sm text-red-600 font-mono">PRIVATE BIRTHDAY</span>
                        <div className="flex flex-row justify-between">
                            <span className="text-3xl font-bold">Birthday Party</span>
                            <button className="service-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="service-card" style={{ backgroundImage: 'url(/images/food.jpeg)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-black/60" />
                    <div className="z-10">
                        <span className="text-sm text-orange-600 font-mono">30+ OPTIONS</span>
                        <div className="flex flex-row justify-between">
                            <span className="text-3xl font-bold">Food & Drinks</span>
                            <button className="service-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="service-card" style={{ backgroundImage: 'url(/images/laser_strike.jpeg)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-black/60" />
                    <div className="z-10">
                        <span className="text-sm text-pink-600 font-mono">COMING SOON</span>
                        <div className="flex flex-row justify-between">
                            <span className="text-3xl font-bold">Laser Strike</span>
                            <button className="service-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services