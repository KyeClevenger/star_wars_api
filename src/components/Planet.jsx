import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Planet(props) {
    const [data, setData] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(resp => {
                console.log(resp)
                setData(resp.data)
            })
            .catch(err => console.log(err))
        console.log(id)
    }, [id])

    return (
        <div>
            {
                data ?
                    <div>
                        <h1>Name: {data.name}</h1>
                        <p>Climate: {data.climate} </p>
                        <p>Terrain: {data.terrain} </p>
                        <p>Surface Water: {data.surface_water}</p>
                        <p>Population: {data.population}</p>
                    </div> :
                    <p>Loading...</p>
            }
        </div>
    )
}