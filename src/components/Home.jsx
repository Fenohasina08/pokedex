import Card from "./card.jsx";
import PokemonInfo from "./PokemonInfo.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokemonSelected, setPokemonSelected] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // Charger seulement les 100 premiers Pokémon
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

    return (
        <div className=" ">
             <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[600px]">
                <input
                    type="text"
                    placeholder="Rechercher un Pokémon..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-gray-600 text-[#0a0c3e] ml-[24vw] font-bold mt-[5vh] shadow-md outline-none"
                />
            </div>

            <div className="w-[90%] mx-auto pt-[140px] flex flex-col md:flex-row gap-6">
                {/* Liste des Pokémon */}
                <div className="md:basis-1/2">
                    <div className="grid gap-[2rem] grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                        <Card
                            pokemon={filteredPokemon}
                            loading={loading}
                            onPokemonClick={setPokemonSelected}
                        />
                    </div>
                </div>

                 <div className="md:basis-1/2 w-full md:w-[50%] text-center text-black md:fixed top-[120px] right-[10px]">
                    <PokemonInfo pokemon={pokemonSelected} />
                </div>
            </div>
        </div>
    );
};

export default Home;
