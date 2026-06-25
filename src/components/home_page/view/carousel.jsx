function Carousel() {
    const items = [
        "PIXEL BEAN",
        "HAUNTED HOUSE",
        "LASER STRIKE",
        "COMING SOON",
        "BIRTHDAY PACKAGE",
        "ARCADE GAMES",
        "SKATING RINK",
        "WORKSHOPS"
    ]

    return (
        <div className="bg-pink-600 py-4 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap items-center">
                {[...items, ...items].map((item, index) => (
                    <span key={index} className="mx-4 text-black font-extrabold text-3xl flex items-center">
                        {item}
                        <span className="mx-4 text-black text-3xl">•</span>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Carousel