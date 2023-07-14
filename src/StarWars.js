import React from 'react';
import CharacterItems from './CharacterItems'

// Main StarWars Component, renders content on each character:
// eg: name, height, homeworld, image, and affiliations
class StarWars extends React.Component {
    constructor() {
        super()

        this.state = {
            loadedCharacter: false,
            name: null,
            height: null,
            homeworld: null,
            image: null,
            affiliations: [],
        }
    }

    getCharacter() {
        const randomNum = Math.round( Math.random() * 88 )
        const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNum}.json`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loadedCharacter: true,
                    name: data.name,
                    height: data.height,
                    homeworld: data.homeworld,
                    affiliations: data.affiliations,
                    image: data.image,
                })
            })
    }

    render() {
        return (
            <div>
                <button className="generateCharacterBtn" type="button" onClick={() => this.getCharacter()}>Randomize Character</button>

                {/* Gets random character from Star Wars API and displays data */}
                { 
                    this.state.loadedCharacter && 
                    <div>
                        <div>
                            <h1>{this.state.name}</h1>  
                            <p>Height: {this.state.height}</p>
                            <p>Homeworld: {this.state.homeworld}</p>
                            <p>Affiliations:</p>
                            <CharacterItems items={this.state.affiliations} />
                        </div>
                        <img src={this.state.image} alt="Character"></img>
                    </div>
                }
            </div>
        )
    }
}

export default StarWars