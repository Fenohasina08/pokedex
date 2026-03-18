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
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-mono text-gray-400">#{pokemon.id.toString().padStart(3, '0')}</span>
                <h2 className="text-3xl font-bold text-gray-800 capitalize">{pokemon.name}</h2>
                <div className="w-8"></div>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 flex justify-center mb-6">
                <img
                    src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="w-48 h-48 object-contain drop-shadow-lg"
                />
            </div>

            {/* Types colorés */}
            <div className="flex gap-3 justify-center mb-6">
                {pokemon.types.map((t) => (
                    <span
                        key={t.type.name}
                        className="px-6 py-2 rounded-full text-white font-semibold capitalize shadow-md"
                        style={{ backgroundColor: typeColors[t.type.name] }}
                    >
                        {t.type.name}
                    </span>
                ))}
            </div>

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

// Définition des couleurs par type
const typeColors = {
    normal: '#A8A77A', fire: '#EE8130', water: '#6390F0', electric: '#F7D02C',
    grass: '#7AC74C', ice: '#96D9D6', fighting: '#C22E28', poison: '#A33EA1',
    ground: '#E2BF65', flying: '#A98FF3', psychic: '#F95587', bug: '#A6B91A',
    rock: '#B6A136', ghost: '#735797', dragon: '#6F35FC', dark: '#705746',
    steel: '#B7B7CE', fairy: '#D685AD',
};

export default PokemonInfo;