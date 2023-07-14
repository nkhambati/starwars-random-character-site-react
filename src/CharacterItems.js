import React from 'react';

// Not really necessary to separate this out (it could remain in the StarWars.js file),
// But if I were displaying multiple lists, it might be useful to do so
// For now, separating out for coding practice
class CharacterItems extends React.Component {

    render() {
        // console.log(this.props.items)
        const listItems = this.props.items.map((item, i) => {
            return <li key={i}>{item}</li>
        })

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}

export default CharacterItems