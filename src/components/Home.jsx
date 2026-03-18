import Card from "./card.jsx";
import PokemonInfo from "./PokemonInfo.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokemonSelected, setPokemonSelected] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const url = "https://pokeapi.co/api/v2/pokemon?limit=100";

    const pokeFun = async () => {
        setLoading(true);
        const res = await axios.get(url);
        await getPokemon(res.data.results);
        setLoading(false);
    };

    const getPokemon = async (res) => {
        const pokemonData = await Promise.all(
            res.map(async (item) => {
                const result = await axios.get(item.url);
                return result.data;
            })
        );
        setPokeData(pokemonData);
    };

    useEffect(() => {
        pokeFun();
    }, []);

    const filteredPokemon = pokeData.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5f5f5]">
            <div className="sticky top-0 z-40 bg-[#f5f5f5] pt-4 pb-2 shadow-sm">
                <div className="container mx-auto max-w-2xl relative">
                    <input
                        type="text"
                        placeholder="Rechercher un Pokémon..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-red-400 focus:ring-2 focus:ring-red-200 text-gray-700 font-medium shadow-md outline-none transition-all"
                    />
                    <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                            <Card
                                pokemon={filteredPokemon}
                                loading={loading}
                                onPokemonClick={setPokemonSelected}
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:sticky lg:top-24 lg:h-fit">
                        <PokemonInfo pokemon={pokemonSelected} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;