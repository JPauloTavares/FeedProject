import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/JPauloTavares.png"  alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Tavares</strong>
              <time title='January 12 at 20:00' dateTime='2024-01-13 08:13:23'>Published 1h ago</time>
            </div>

            <button title='Delete commentary'>
              <Trash size={24} />
            </button>
          </header>

          <p>Very good Devon, congratulations!! 👏👏</p>
        </div>  
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>     
    </div>
  )
}