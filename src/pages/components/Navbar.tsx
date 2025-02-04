import Link from "next/link"

const NavItem = ({ href, text, isActive }: { href: string; text: string; isActive: boolean }) => (
    <Link
        href={href}
        className={`text-lg font-semibold transition-colors ${isActive ? "text-blue-400" : "text-white hover:text-blue-300"
            }`}
    >
        {text}
    </Link>
)

export default function Navbar({ currentSection }: { currentSection: string }) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="#home" className="text-2xl font-bold">
                    ROY v HEESWIJK
                </Link>
                <div className="space-x-8">
                    <NavItem href="#projects" text="Projects" isActive={currentSection === "projects"} />
                    <NavItem href="#about" text="About" isActive={currentSection === "about"} />
                </div>
            </div>
        </nav>
    )
}
