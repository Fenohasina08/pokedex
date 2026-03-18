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
                    </div>
                </div>
            ))}
        </>
    );
};

export default Card;