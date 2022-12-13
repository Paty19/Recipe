function MyRecipesComponent({id, label, image, calories, ingredients }) {
    return (
        <div className="list" key={id}>
            <div className="container">
                <h2>{label}</h2>
            </div>
                <div className="container ">
                    <img  src = {image} alt = "food"  />
                </div>
                <div>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li><img src="https://img.freepik.com/free-icon/flash_318-663402.jpg?size=338&ext=jpg" alt="icons" width='20px'/>
                                
                                {ingredient}
                            </li>)
                        )}
                        
                    </ul>
                </div>
                <div className="container">
                    <p>{calories.toFixed()} calories</p>
                    
                </div>
        </div>
    )
}
export default MyRecipesComponent