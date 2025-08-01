const Card = ({ pokemon, loading, onPokemonClick }) => {
    return (
        <div className="flex  flex-wrap justify-center gap-6">
            {loading ? (
                <h1 className="text-xl font-semibold text-center">Loading...</h1>
            ) : (
                pokemon.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => onPokemonClick(item)}
                        className="bg-[#0a0c3e] w-[250px] rounded-xl shadow-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition"
                    >
                        <h2 className="text-xl text-white font-bold mb-2">#{item.id}</h2>
                        <img
                            className="w-[80%] h-[50%] object-contain mb-2"
                            src={item.sprites.front_default}
                            alt={item.name}
                        />
                        <h2 className="text-xl capitalize text-white font-semibold">{item.name}</h2>
                    </div>
                ))
            )}
        </div>
    );
};

export default Card;
