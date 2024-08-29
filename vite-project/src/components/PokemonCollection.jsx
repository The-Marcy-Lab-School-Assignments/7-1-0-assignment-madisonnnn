import PokemonCard from './PokemonCard';
import PokemonContext from '../context/PokemonContext';
import { useContext } from 'react';

// TODO: import the PokemonContext and useContext

const PokemonCollection = ({pokemonData}) => {
    const {allPokemon, setAllPokemon} = useContext(PokemonContext)
    // TODO: Replace this to get the pokemon from PokemonContext
    

    return (
        <div className="ui six cards">
            {allPokemon?.map((pokemon) => (
                <PokemonCard 
                key={pokemon.id} 
                name = {pokemon.name}
                hp = {pokemon.hp}
                image={pokemon.front}
                />)
            )}
        </div>
    )
}

export default PokemonCollection