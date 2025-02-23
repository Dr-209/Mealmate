// 'use client'  //jene aani jarur hoy ene j aapvu bija badha ne server m revadevu saru rese😁
import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
import NavLinkk from "./nav-link";
export default function MainHeader() {

    
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logoImg} alt="A plate with food on it" priority />
                    Mealmate
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLinkk href='/meals'>Browse Meals</NavLinkk>
                        </li>
                        <li>
                            <NavLinkk href="/community" > Foodies Community</NavLinkk>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}