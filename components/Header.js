import Link from "next/link"

const Header = () => {
    return (
        <header className= "px-2 flex justify-between items-center bg-amber-100 shadow-md">
            <h1> Inversiones QLQ</h1>
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="contacto">Contacto</Link>
                <Link href="/nosotros">Nosotros</Link>
            </nav>
        </header>
    )
}

export default Header