import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
    //with Intl:
    //'28 de julho de 2022 às 22:40h'
    // const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
        //     day: '2-digit',
        //     month: 'long',
        //     hour: '2-digit',
        //     minute: '2-digit',
        // }).format(publishedAt)
        
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'de' uuuu 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelateveFromNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentInvalid() {
    event.target.setCustonValidty('Este campo é obrigatório')
  }

  function  handleNewCommentChange() {
    setNewCommentText(event.target.value)
    console.log(newCommentText)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelateveFromNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={ handleCreateNewComment } className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name='comment' 
          placeholder="Deixe um comentário" 
          value={ newCommentText }
          onChange={ handleNewCommentChange } 
          onInvalid={ handleNewCommentInvalid }
          required
        />

        <footer>
          <button 
            type="submit" 
            disabled={ isNewCommentEmpty }
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  );
}
