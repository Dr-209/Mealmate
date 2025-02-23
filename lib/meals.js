// import fs, { createWriteStream } from 'node:fs';
import fs from 'node:fs';

import sql from 'better-sqlite3'
// import e from 'express';
// import { resolve } from 'styled-jsx/css'
import slugify from 'slugify';
import xss from 'xss';  //for server side scripting attack
import { error } from 'node:console';
const db=sql('meals.db')

//run - inser data
//all- fetching data
//get - single row 

export  async function getMeals() {
    await new Promise((resolve)=>setTimeout(resolve,2000))
    // throw new Error('Loading meals failed')
    return db.prepare('SELECT*FROM meals').all();
}
export  function  getMeal(slug) {
    // return db.prepare('SELECT * FROM meals WHERE slug='+slug)  //sql injection -insecure 
    return db.prepare('SELECT * FROM meals where slug=?').get(slug)
}

export async function saveMeal(meal){
    meal.slug=slugify(meal.title,{lower:true}) 
    meal.instructions=xss(meal.instructions);  //for senitize and clean the instrucation

  //image file system ma store thavi joie,databse ma nai , public folder ma store karsu, therefore badha mate availble hoy
  const existingMeal = db.prepare('SELECT slug FROM meals WHERE slug = ?').get(meal.slug);
  if (existingMeal) {
      throw new Error('A meal with this title already exists. Please use a different title.');
  }

const extenstion=meal.image.name.split('.').pop();
const fileName=`${meal.slug}.${extenstion}`;

// const stream=fs.createWriteStream(`public/images/${fileName}`)
// const bufferedImage=await meal.image.arrayBuffer();

// stream.write(Buffer.from(bufferedImage),(error)=>{
//     if(error){
//         throw new Error('Saving image failed!');
//     }
// });
const bufferedImage = Buffer.from(await meal.image.arrayBuffer())
await fs.promises.writeFile(`public/images/${fileName}`, bufferedImage)

//database ma image staore nathi karavni only path store
meal.image=`/images/${fileName}`  //public/image/fileName ; public rakhvani jarur nathi automatic public directory ma j store thase

db.prepare(`
    INSERT INTO meals
    (title,summary,instructions,creator,creator_email,image,slug)
    
    VALUES(
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
       @slug
)
    `).run(meal)
    // VALUES(${}) aa rite nai aapvano data , sql injection attack no khataroooo
}