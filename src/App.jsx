import { Post } from './components/PostFeed/Post'
import { Header } from './components/Header/Header'
import { Sidebar } from './components/SideBar/SideBar'

import styles from './App.module.css'
import '../styles/global.css'

// author: {avatar: '', name: '', role: ''}
// publishedAt: Date
// content: ''

const posts = [
  {
    id: 1,
    author: {
      name: 'Helton Quintãns',
      avatarUrl: 'https://github.com/helton-quintans.png',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: '👉jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-30 20:28:00')
  },

  {
    id: 2,
    author: {
      name: 'Mayk Brito',
      avatarUrl: 'https://github.com/maykbrito.png',
      role: 'Educator',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: '👉jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-31 18:28:00')
  },
]

export function App() {

  return (
    <>
      <Header title='Helton Quintãns'/>

      <div className={styles.wrapper}>
          <Sidebar/>

          <main>
           {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
           })}
          </main>
      </div>

    </>
  )
}

