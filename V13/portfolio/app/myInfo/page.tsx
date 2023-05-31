import React from 'react'
import styles from './MyInfo.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function MyInfo() {
    return (
        <div className={styles.myInfo}>
            <div className={styles.left}>
                {/* <p>Hi there! I'm</p> */}
                <h1 className={styles.textPop}><span>Caden</span> Wilcox</h1>
                <h2>Full Stack Developer</h2>
                <p>From code to creativity, I build digital dreams with a full-stack flair</p>
                <button className={styles.textPop}>Resume</button>
                <Link target="_blank" href="https://www.linkedin.com/in/caden-wilcox-python/"><img className={styles.smIcon} src="/linkedIn.png" alt="" /></Link>
                <div className='d-flex jc-center ai-center gap'>
                    <Image src="/greenArrow.jpeg" alt="" width={40} height={40} />
                    <Link className={styles.link} href='/projects'>Check out my projects!</Link>
                </div>
            </div>
            <div className={styles.right}>
                <img src="/headshot.jpg" alt="hero" className={styles.headshot}/>
            </div>
        </div>
    )
}
