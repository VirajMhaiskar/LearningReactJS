import React from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
    const data = useLoaderData();

    // const [data, setData] = useState();

    // useEffect(() => {
    //     fetch('https://api.github.com/users/VirajMhaiskar')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    return(
        <div className="text-center m-4 bg-gray-600 text-white text-3xl p-3">Github Followers: {data.followers}
            <img src={data.avatar_url} alt="profile-picture" width="200px" />
        </div>
    )
}

export default GitHub;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/VirajMhaiskar');
    return response.json();
}