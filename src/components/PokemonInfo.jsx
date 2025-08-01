const PokemonInfo = ({ pokemon }) => {
    if (!pokemon) {
        return (
            <div className="text-center text-gray-500 mt-10">
                Sélectionne un Pokémon pour voir les détails.
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg w-full max-w-[400px] mx-auto mt-4">
            <h1 className="font-bold uppercase text-2xl text-center">{pokemon.name}</h1>

            <img
                className="mx-auto w-[120px] h-[120px] object-contain"
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
            />

            <div className="flex justify-center gap-2 mt-2 flex-wrap">
                {pokemon.types.map((t) => (
                    <div
                        key={t.type.name}
                        className="bg-amber-600 px-3 py-1 text-white rounded-lg text-sm capitalize"
                    >
                        {t.type.name}
                    </div>
                ))}
            </div>

            {/* Stats avec barres de progression */}
            <div className="mt-6 space-y-4">
                {pokemon.stats.map((stat) => (
                    <div key={stat.stat.name}>
                        <div className="flex justify-between text-sm font-semibold">
                            <span className="capitalize">{stat.stat.name.replace('-', ' ')}</span>
                            <span>{stat.base_stat}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-amber-600 h-2.5 rounded-full"
                                style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Moves (3 premiers) */}
            <div className="mt-6 text-left">
                <h2 className="text-md font-bold mb-2">Moves</h2>
                <div className="flex flex-wrap gap-2">
                    {pokemon.moves.slice(0, 3).map((move, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium capitalize"
                        >
                            {move.move.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonInfo;
