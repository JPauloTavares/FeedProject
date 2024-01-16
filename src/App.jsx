import { Post } from "./Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'

import styles from "./App.module.css"

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            content="Enim aliquip officia veniam incididunt consectetur pariatur excepteur officia nulla."
            author="Tavares"
          />
          <Post
            content="Cillum ex qui fugiat qui do."
            author="Dib"
        />
        </main>
      </div>
    </div>
  )
}

export default App
