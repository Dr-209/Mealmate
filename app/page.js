// import Link from "next/link";

// export default function Home(){
//   return(
//     <main>
//       <h1>Welcome to this NextJs Course!</h1>
//       <p>Lets get Started</p>
//     {/* <p><Link href="/about">About </Link></p> */}
//    <p><Link href='/meals'>Meals</Link></p>
//    <p><Link href='/meals/share'>Share Meals</Link></p>
//    <p><Link href='/community'>Community</Link></p>
//     </main>
//   )
// }

import Link from 'next/link';

import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';


export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Mealmate is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Mealmate is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Mealmate?</h2>
          <p>
            Mealmate is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Mealmate is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}