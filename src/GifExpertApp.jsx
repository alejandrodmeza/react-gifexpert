import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['Dragon ball z']);

    const onAddCategory = ( onNewCategory ) => {
        const newCategory = onNewCategory.toUpperCase();
        if(categories.includes(newCategory)) return;
        setcategories([newCategory, ...categories]);
    }

    return (
      <>
         <h1>GifExpertApp</h1>

         <AddCategory 
           onNewCategory = { onAddCategory }
         />
        {
            categories.map( (category) => (
                <GifGrid key={category} category={category}/>
            ))
        }
      </>
    )
}