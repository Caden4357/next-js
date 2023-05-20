import { ReactNode } from "react";
import styles from './layout.module.css'
type Children = {
    children:ReactNode
}
export default function Layout({ children }:Children) {
    return <div className={styles.container}>{children}</div>;
}