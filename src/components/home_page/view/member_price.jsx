function MemberPrice() {
    return (
        <div className="bg-black px-30">
            <h1 className="text-cyan-300 font-mono tracking-widest">Member Pricing</h1>
            <h1 className="text-white text-7xl font-extrabold">One pass,<span className="neon-pink">whole life.</span></h1>
            <p className="pt-5 text-lg text-gray-300 w-180">From RM 25. Enjoy member pricing across evry attraction, a free birthday-month entry and discounts on
                skate gear.
            </p>
            <div>
                <div className="flex gap-4 pt-10">
                    <div className="border border-gray-800 rounded-xl flex-1 p-5  bg-zinc-900">
                        <h2 className="text-pink-600 text-5xl font-bold">RM 25</h2>
                        <p className="text-gray-400 font-mono text-sm mt-2 tracking-wider">STUDENT REGISTRATION</p>
                    </div>
                    <div className="border border-gray-800 rounded-xl flex-1 p-5  bg-zinc-900">
                        <h2 className="text-pink-600 text-5xl font-bold">RM 35</h2>
                        <p className="text-gray-400 font-mono text-sm mt-2 tracking-wider">ADULT REGISTRATION</p>
                    </div>
                    <div className="border border-gray-800 rounded-xl flex-1 p-5 bg-zinc-900">
                        <h2 className="text-pink-600 text-5xl font-bold">∞</h2>
                        <p className="text-gray-400 font-mono text-sm mt-2 tracking-wider">LIFETIME PERKS</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-pink-600 rounded-full px-4 py-3 w-fit mt-10 cursor-pointer justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#db2777]">
                    <div className="text-black font-bold ">
                        See full member benefits
                    </div>
                    <button className="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MemberPrice