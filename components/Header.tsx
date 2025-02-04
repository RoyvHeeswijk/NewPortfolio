export function Header() {
    return (
        <header className="bg-gray-800 py-4">
            <nav className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-teal-400">Your Name</h1>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#projects" className="hover:text-purple-400 transition-colors">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-purple-400 transition-colors">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-purple-400 transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

