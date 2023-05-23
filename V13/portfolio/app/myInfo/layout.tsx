import React from 'react'
import styles from './MyInfo.module.css'
export default function ComponentsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}