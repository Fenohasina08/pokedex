const Header = () => {
    return (
        <header className="bg-gradient-to-r from-red-600 to-red-500 py-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-center gap-3">
                <span className="text-3xl filter brightness-0 invert">⚪</span> {/* emoji Pokéball */}
                <h1 className="text-center text-3xl font-bold text-white tracking-wide">
                    Pokédex
                </h1>
            </div>
        </header>
    )
}
export default Header