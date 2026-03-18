const Card = ({ pokemon, loading, onPokemonClick }) => {
    if (loading) return <div className="text-center col-span-full">Chargement...</div>;

    return (
        <>
            {pokemon.map((p) => (
                <div
                    key={p.id}
                    onClick={() => onPokemonClick(p)}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer p-4 border border-gray-100"
                >
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 flex justify-center">
                        <img
                            src={p.sprites.other['official-artwork'].front_default || p.sprites.front_default}
                            alt={p.name}
                            className="w-32 h-32 object-contain"
                        />
                    </div>
                    <div className="mt-3 text-center">
                        <h2 className="text-lg font-bold text-gray-800 capitalize">{p.name}</h2>
                        <div className="flex gap-2 justify-center mt-2">
                            {p.types.map((type) => (
                                <span
                                    key={type.type.name}
                                    className="px-3 py-1 text-xs font-semibold rounded-full text-white capitalize"
                                    style={{ backgroundColor: typeColors[type.type.name] }}
                                >
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
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

export default Card;