'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

export default function ImagePicker({ label,name }) {
const [pickedImage,setPickImage]=useState();
    const imageInput = useRef()
    
    function handlePickClick() {
        imageInput.current.click()
    }

    function handleImageChange(e){
const file=e.target.files[0];
if(!file){
    setPickImage(null)
    return;
}

const fileReader=new FileReader();
fileReader.onload=()=>{
    setPickImage(fileReader.result)
}
fileReader.readAsDataURL(file)
    }
    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>    {/* //htmlfor => connect this label to some input and input to name  */}
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
           {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill/>}
            </div>
            <input className={classes.input} ref={imageInput} type="file" name={name} accept="image/png, image/jpeg" required id={name} onChange={handleImageChange}/>
            <button className={classes.button} type="button" onClick={handlePickClick}>Pick an Image</button>
        </div>
    </div>
}