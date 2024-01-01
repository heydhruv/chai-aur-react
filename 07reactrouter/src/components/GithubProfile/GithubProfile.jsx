import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData} from 'react-router-dom'

function GithubProfile() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/heydhruv")
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })

    // }, [])
    const data = useLoaderData()

    return (
        <div className="text-center m4 bg-gray-300 p-2 text-2xl">Github Followers ~ {data.followers}
            <img src={data.avatar_url} width={300} />
        </div>
    )
}


export default GithubProfile

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/heydhruv")
    return response.json()
}
