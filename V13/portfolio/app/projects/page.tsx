'use client';
import React, { useState } from 'react'
import './Projects.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Projects() {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    return (
        <main className='projects d-flex jc-center ai-center flex-column '>
            <h1 className='mb-20'>Projects!</h1>
            <div className='d-flex ai-center project p-5 jc-evenly align-self-start'>
                <div>
                    <Image 
                        alt='Project 1'
                        onMouseOver={handleMouseOver} 
                        onMouseOut={handleMouseOut} 
                        src={isHovered ? '/chatSocket2.png' : '/chatSocket.png'} 
                        width={200} height={200}
                        />
                </div>
                <div className='w-50 projectText'>
                    <h2 className='mb-20'>Chat Socket </h2>
                    <p>Secure log in and registration using bcrypt and storing user information in a JSON Web token. Sending messages with socket io 4 rooms to choose from messages stored in a MongoDB Database with the ability to leave and join whichever room you want and chat with friends</p>
                    <Link href='#'>View Demo Of Project</Link>
                </div>
            </div>
            <div className='d-flex ai-center project p-5 jc-evenly align-self-end'>
                <div className='d-flex ai-center gap'>
                    <Image src='/project.png' alt='Project 1' width={200} height={200} />
                </div>
                <div className='w-50 projectText'>
                    <h2 className='mb-20'>Project 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt temporibus a vero dolores. Quas provident pariatur ipsum voluptatem, non, culpa cupiditate nobis quibusdam praesentium ut quam ex in expedita obcaecati.</p>
                    <Link href='#'>View Project</Link>
                </div>
            </div>
            <div className='d-flex ai-center project p-5 jc-evenly align-self-start'>
                <div className='d-flex ai-center gap'>
                    <Image src='/project.png' alt='Project 1' width={200} height={200} />
                </div>
                <div className='w-50 projectText'>
                    <h2 className='mb-20'>Project 3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt temporibus a vero dolores. Quas provident pariatur ipsum voluptatem, non, culpa cupiditate nobis quibusdam praesentium ut quam ex in expedita obcaecati.</p>
                    <Link href='#'>View Project</Link>
                </div>
            </div>
        </main>
    )
}
