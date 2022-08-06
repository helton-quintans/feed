import styles from './Header.module.css'

import igniteLogo from '../../images/ignite-logo.svg'

export function Header({title}){
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt='igniteLogo' />
            <h2>{title}</h2>
        </header>
    )
}