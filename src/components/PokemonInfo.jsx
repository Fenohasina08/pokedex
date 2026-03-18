const PokemonInfo = ({ pokemon }) => {
    if (!pokemon) {
        return (
            <div className="text-center text-gray-500 mt-10">
                Sélectionne un Pokémon pour voir les détails.
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md mx-auto border border-gray-100">
            {/* En-tête avec ID et nom */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-mono text-gray-400">#{pokemon.id.toString().padStart(3, '0')}</span>
                <h2 className="text-3xl font-bold text-gray-800 capitalize">{pokemon.name}</h2>
                <div className="w-8"></div>
            </div>

            {/* Image principale */}
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 flex justify-center mb-6">
                <img
                    src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="w-48 h-48 object-contain drop-shadow-lg"
                />
            </div>

            {/* Types (provisoire) */}
            <div className="flex gap-3 justify-center mb-6">
                {pokemon.types.map((t) => (
                    <span
                        key={t.type.name}
                        className="px-6 py-2 rounded-full bg-gray-300 text-gray-800 font-semibold capitalize shadow-md"
                    >
                        {t.type.name}
                    </span>
                ))}
            </div>

            {/* Stats (provisoire) */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-700 mb-3">Stats de base</h3>
                <div className="space-y-3">
                    {pokemon.stats.map((stat) => (
                        <div key={stat.stat.name}>
                            <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
                                <span className="capitalize">{stat.stat.name.replace('-', ' ')}</span>
                                <span>{stat.base_stat}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="h-2.5 rounded-full bg-blue-500"
                                    style={{ width: `${Math.min((stat.base_stat / 255) * 100, 100)}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Moves (provisoire) */}
            <div>
                <h3 className="text-xl font-bold text-gray-700 mb-3">Capacités</h3>
                <div className="flex flex-wrap gap-2">
                    {pokemon.moves.slice(0, 4).map((move, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium capitalize"
                        >
                            {move.move.name.replace('-', ' ')}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonInfo;