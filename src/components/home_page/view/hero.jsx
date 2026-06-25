function Hero() {
    return (
        <div className="flex flex-col px-30 py-30 pt-10 pb-20">
            <div className="text-white border-1 border-gray-500 rounded-xl text-center w-78 font-mono text-sm py-1">
                YOUR ALL-IN-ONE SPORTS PLAYGROUND
            </div>
            <div className="flex flex-col text-white text-8xl font-bold pt-6">
                <h1 className="font-sans">PLAY.</h1>
                <h1 className="neon-pink font-sans">SKATE.</h1>
                <h1 className="neon-cyan font-sans">CREATE.</h1>
            </div>
            <p className="text-gray-300 pt-8 w-160 tracking-wide text-lg font-sans">
                Arcade games, skating rink, tifting & pixel bean workshops, a haunted
                escape room, birthday packages and neo-bright snacks. All under one roof.
            </p>
            <div className="pt-10 flex gap-4">
                <button className="text-black font-bold px-8 py-3 rounded-4xl bg-pink-600 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#db2777]">
                    Explore the playground
                </button>
                <button className="bg-transparent border border-gray-500 text-white px-6 py-4 rounded-4xl cursor-pointer transition-all duration-300 hover:bg-gray-900">
                    See member pricing
                </button>
            </div>
            <div className="flex gap-4 pt-15 text-white font-sans items-center">
                <div className="border border-gray-500 rounded-xl p-5 bg-black/80 w-44 h-28">
                    <h1 className="text-4xl font-bold">20+</h1>
                    <p className="text-sm text-gray-300 font-light font-mono">ARCADE GAMES</p>
                </div>
                <div className="border border-gray-500 rounded-xl p-5 bg-black/80 w-44 h-28">
                    <h1 className="text-4xl font-bold">6</h1>
                    <p className="text-sm text-gray-300 font-light font-mono">ATTRACTIONS</p>
                </div>
                <div className="border border-gray-500 rounded-xl p-5 bg-black/80 w-44 h-28">
                    <h1 className="text-4xl font-bold">RM25</h1>
                    <p className="text-sm text-gray-300 font-light font-mono">STUDENT MEMBER</p>
                </div>
                <div className="border border-gray-500 rounded-xl p-5 bg-black/80 w-44 h-28">
                    <h1 className="text-4xl font-bold">RM14</h1>
                    <p className="text-sm text-gray-300 font-light font-mono">PIXEL BEAN / PLATE</p>
                </div>
            </div>

        </div>
    )
}

export default Hero