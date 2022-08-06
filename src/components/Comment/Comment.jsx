import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLike(){
    setLikeCount((state)=> {
      return state + 1
    })
  }
  return (
    <div className={styles.commet}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <div className={styles.commetBox}>
        <div className={styles.commetContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego fernandes</strong>
              <time
                title="28 de julho de 2022 às 22:40h"
                dateTime="28/07/2022 22:40:35"
              >
                Publicado há 1h
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLike}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
