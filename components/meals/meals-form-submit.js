'use client'

import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function MealsFormSubmit(){
    const {pending}=useFormStatus();//  next 13 ma suuport nathi kartu
    // const [pending,setPending]=useState(false)
// const handleClick=()=>{
//     setPending(true);
//     setTimeout(()=>{setPending(false)},2000)
// }
    return <button disabled={pending} >
        {pending ? 'Submitting...':'Share Meal'}
    </button>
}