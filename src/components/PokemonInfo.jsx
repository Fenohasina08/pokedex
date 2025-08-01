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
            <h1 className="font-bold uppercase text-2xl">{pokemon.name}</h1>
            <img
                className="mx-auto w-[120px]"
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
            />

            <div className="flex justify-center gap-2 mt-4">
                {pokemon.types.map((t) => (
                    <div key={t.type.name} className="bg-amber-600 px-3 py-1 text-white rounded-lg text-sm">
                        {t.type.name}
                    </div>
                ))}
            </div>

            <div className="mt-6 space-y-1 text-left">
                {pokemon.stats.map((stat) => (
                    <h3 key={stat.stat.name}>
                        {stat.stat.name} : {stat.base_stat}
                    </h3>
                ))}
            </div>
        </div>
    );
};

export default PokemonInfo;
