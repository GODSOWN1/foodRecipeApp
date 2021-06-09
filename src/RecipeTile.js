import React from "react"
import "./RecipeTile.css"
export default function RecipeTile({recipe}) {
    return (
        <div className="recipeTile">
            <img className="recipeTile_image" src={recipe["recipe"]["image"]} />
            <p className="recipeTile_name"  >{recipe["recipe"]["label"]} </p>
        </div>
    )
}
