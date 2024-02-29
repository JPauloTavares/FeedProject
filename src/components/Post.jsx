import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post ({ author, content}) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/JPauloTavares.png" />
                    <div className={styles.authorInfo}>
                        <strong>{author}</strong>
                        <span>Full Stack developer</span>
                    </div>
                </div>

                <time title='January 12 at 20:00' dateTime='2024-01-13 08:13:23'>Published 1h ago</time>
            </header>

            <div className={styles.content}>
                <p>Hey guys 👋</p>
                <p>I just uploaded another project on my portfolio. It&apos;s a project I did at NLW Return, an event by Rocketseat. The name of the project is DoctorCare 🚀</p>
                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#newproject</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea placeholder='Leave a comment...' />

                <footer>
                    <button type='submit'>Comment</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}