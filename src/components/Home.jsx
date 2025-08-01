import Card from "./card.jsx";
import PokemonInfo from "./PokemonInfo.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokemonSelected, setPokemonSelected] = useState(null);
    const [searchTerm, setSearchTerm] = useState(""); // <-- barre de recherche

    const pokeFun = async () => {
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
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
    }, [url]);

    const handleNext = () => {
        if (nextUrl) {
            setUrl(nextUrl);
            setPokeData([]);
        }
    };

    const handlePrevious = () => {
        if (prevUrl) {
            setUrl(prevUrl);
            setPokeData([]);
        }
    };

    // 🔍 filtre les Pokémon selon le terme tapé
    const filteredPokemon = pokeData.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-[#FCEE] min-h-screen">
            <div className="w-[90%] mx-auto pt-[100px] flex flex-col md:flex-row">
                {/* SECTION GAUCHE */}
                <div className="md:basis-1/2">

                    {/* 🔍 Barre de recherche */}
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Rechercher un Pokémon..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                    </div>

                    {/* Affichage des cartes */}
                    <div className="grid gap-[2rem] grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                        <Card
                            pokemon={filteredPokemon}
                            loading={loading}
                            onPokemonClick={setPokemonSelected}
                        />

                        <div className="flex justify-center gap-4 col-span-full">
                            <button
                                onClick={handlePrevious}
                                className="w-[150px] px-2 py-2 text-white bg-amber-600 rounded-lg font-bold text-[17px]"
                                disabled={!prevUrl}
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-[150px] px-2 py-2 text-white bg-amber-600 rounded-lg font-bold text-[17px]"
                                disabled={!nextUrl}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                {/* SECTION DROITE */}
                <div className="md:basis-1/2 w-full md:w-[50%] text-center text-black md:fixed top-[100px] right-[10px]">
                    <PokemonInfo pokemon={pokemonSelected} />
                </div>
            </div>
        </div>
    );
};

export default Home;
