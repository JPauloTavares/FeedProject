import { Post } from "./Post"
import { Header } from "./components/Header"

import './styles.css'

export function App() {

  return (
    <div>
      <Header />

      <Post
        content="Enim aliquip officia veniam incididunt consectetur pariatur excepteur officia nulla."
        author="Tavares"
      />
      <Post
        content="Cillum ex qui fugiat qui do."
        author="Dib"
      />
    </div>
  )
}

export default App
