const PokemonInfo = ({ pokemon }) => {
    if (!pokemon) {
        return (
            <div className="text-center text-gray-500 mt-10">
                Sélectionne un Pokémon pour voir les détails.
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 bg-[#0a0c3e] p-6 rounded-xl shadow-lg w-full max-w-[400px] mx-auto mt-4">
            <h1 className="font-bold text-white  uppercase text-2xl text-center">{pokemon.name}</h1>

            <img
                className="mx-auto w-[120px] h-[120px] object-contain"
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
            />

            <div className="flex justify-center gap-2 mt-2 flex-wrap">
                {pokemon.types.map((t) => (
                    <div
                        key={t.type.name}
                        className="bg-[#f68b14] px-5 py-3 text-black font-bold rounded-lg text-sm capitalize"
                    >
                        {t.type.name}
                    </div>
                ))}
            </div>

             <div className="mt-6 space-y-4">
                {pokemon.stats.map((stat) => (
                    <div key={stat.stat.name}>
                        <div className="flex justify-between text-sm font-semibold text-white">
                            <span className="capitalize">{stat.stat.name.replace('-', ' ')}</span>
                            <span>{stat.base_stat}</span>
                        </div>
                        <div className="w-full bg-[#ccc] rounded-full h-2.5">
                            <div
                                className="bg-[#79460c] h-2.5 rounded-full"
                                style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

             <div className="mt-6 text-left">
                <h2 className="text-md font-bold mb-2 text-white">Moves</h2>
                <div className="flex flex-wrap gap-2">
                    {pokemon.moves.slice(0, 3).map((move, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-400 text-black rounded-full text-xs font-medium capitalize"
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
