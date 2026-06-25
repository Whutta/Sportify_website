function ContactUs() {
    return (
        <div className="bg-black px-30 py-40">
            <div className="border border-pink-600 p-12 rounded-xl">
                <p className="text-cyan-300 text-sm font-mono">READY TO PLAY?</p>
                <div className="flex flex-row text-white gap-12 items-center">
                    <h1 className="text-6xl w-240 font-extrabold">Book your spot, throw a <span className="neon-pink">party</span>, or just say hi.</h1>
                    <button className="border bg-cyan-300 text-black h-14 rounded-full px-5 font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#06b6d4]">Contact us</button>
                </div>
            </div>
        </div>

    )
}

export default ContactUs