import PokemonContext from "../context/PokemonContext"
import PokemonCollection from "./PokemonCollection"
import PokemonCard from "./PokemonCard"
import { useState } from "react"
import { useContext } from "react"
//Tai Was Here


const PokemonForm = () => {
    const {allPokemon, setAllPokemon} = useContext(PokemonContext)
    const [formData, setFormData] = useState({    
        name: "",
        hp: "",
        front: "",
        back: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

        const handleSubmit = async (e) => {
            e.preventDefault()

            const newPokemon = {
                id: allPokemon.length + 1, 
                name: formData.name,
                hp: formData.hp,
                front: formData.front,
                back: formData.back
                
            }
            try {
                // Make a POST request to the JSON server
                const response = await fetch('http://localhost:4000/pokemon', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newPokemon),
                });
        
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
        
                if(response.ok){
                    const data = await response.json();
                    setAllPokemon([...allPokemon, newPokemon.data])
                }
            

            
    
            setFormData({
                name: "",
                hp: "",
                front: "",
                back: ""
            })
        }
            catch (error) {
                console.error('Error:', error)
            }
        }
        // FEEDBACk:
        //     Make sure to make a post request to the json server so that the posting saves on refresh
    
    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name"
                        placeholder="Name" 
                        value={formData.name}
                        onChange={handleChange}/>
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input 
                        type="text" 
                        name="hp" 
                        placeholder="HP" 
                        value={formData.hp}
                        onChange={handleChange}/>
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input 
                        type="text" 
                        name="front" 
                        placeholder="url" 
                        value={formData.front}
                        onChange={handleChange}/>
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input 
                        type="text" 
                        name="back" 
                        placeholder="url" 
                        value={formData.back}
                        onChange={handleChange}/>
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonForm
