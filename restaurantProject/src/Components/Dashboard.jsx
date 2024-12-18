import React, { useEffect , useState} from 'react'

const Dashboard = () => {
    const [recipes,setRecipes]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect( ()=>{
        const url='https://dummyjson.com/recipes';
        const res=fetch(url)
        res.then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setRecipes(data.recipes);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false);
            console.error("error:",err);
        })
    })
  return (
    <div>
        <h1>Menu</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!error && !loading && (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>&nbsp</th>
                            <th>Recipe Name</th>
                            <th>Cuisine</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map((recipe) => (
                        <tr>
                            <td><img src={recipe.image} alt="" width={50}/></td>
                            <td>{recipe.name}</td>
                            <td>{recipe.cuisine}</td>
                            <td>{recipe.rating}</td>
                            <td>123</td>
                            <td><button>Add to Cart</button></td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        )}
    </div>

  )
}

export default Dashboard