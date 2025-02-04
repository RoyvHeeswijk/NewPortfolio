export function Hero() {
    return (
        <section className="py-20 bg-gray-800">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
                <p className="text-xl mb-8">I'm a passionate developer creating amazing web experiences</p>
                <a
                    href="#projects"
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
                >
                    View My Work
                </a>
            </div>
        </section>
    )
}

