import React from 'react'
import {useState} from "react"

const RecipieInput = () => {
    const [recipeName , setRecipeName] = useState("")
    const [recipeIngredients , setRecipeIngredents] = useState("")
    const [instructions , setInstruction] = useState("")
    const [type , setType] = useState("")
  return (
    <div>
        <form className='modal_form'>
            <label>Recipes name : </label>
            <input type = "text" autoComplete='off' value = {recipeName} onChange={(e) => setRecipeName(e.target.value)}/>
            <label>Recipes ingredients : </label>
            <input type = "text" value = {recipeIngredients} onChange={(e) =>setRecipeIngredents(e.target.value) }/>
            <label>Recipes instructions : </label>
            <input type = "text" value = {instructions} onChange={(e) => setInstruction(e.target.value)}/>
            <label>Recipes type : </label>
            <input type = "text" value = {type} onChange={(e) => setType(e.target.value)}/>
          </form>
    </div>
  )
}

export default RecipieInput