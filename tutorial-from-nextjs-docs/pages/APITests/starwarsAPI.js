import React from 'react'


export default function StarWarsAPI(props) {
    const {allPosts, starWarsChar} = props;
    return (
        <div>StarWarsAPI

            {
                starWarsChar.map((char, idx) => (
                    <div key={idx}>
                        <h3>Name: {char.name}</h3>
                        <h5>Height: {char.height}</h5>
                    </div>
                ))
            }


        </div>
    )
}
