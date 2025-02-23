'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache";

function isInvalidText(text){
  return !text || text.trim()==="";
}
export async function shareMeal(prevState,formData){ 
    // 'use server';      // directive :only execute on server like  use client 
  const meal={
    title: formData.get('title'),
    summary:formData.get('summary'),
    instructions:formData.get('instructions'),
    image:formData.get('image'),
    creator:formData.get('name'),
    creator_email:formData.get('email')
  }

  // console.log(meal)
 
 if(isInvalidText(meal.title)||
 isInvalidText(meal.summary)|| 
 isInvalidText(meal.instructions)||
 isInvalidText(meal.creator)||
 isInvalidText(meal.creator_email)||
 !meal.creator_email.includes("@") ||
 meal.image.size===0 || !meal.image
){
  // throw new Error("Invalid input!")
  return {
    message:"Invalid input!"
  }
}
  await saveMeal(meal);
  revalidatePath('/meals')    // revalidatePath('/','layout')=> jo aakhi websiate ne revalidaet karvi hoy to      //for production ready add resume
 redirect('/meals')
  }