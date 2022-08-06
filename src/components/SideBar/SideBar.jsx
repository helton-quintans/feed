import styles from './SideBar.module.css'
import { PencilLine} from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />
        
        <div className={styles.profile}>
            <Avatar src="https://github.com/helton-quintans.png"/>

            <strong>Helton Quintãns</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar Perfil
            </a>
        </footer>
        </aside>
    )
}