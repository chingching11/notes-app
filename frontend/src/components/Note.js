import React from "react"
import DOMPurify from 'dompurify';

const Note = (props) => {
    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
      }
    return(
        <div className="note-container">
            <h3 style={{textAlign: 'center'}}>{props.title}</h3>
            <br></br>
            <div dangerouslySetInnerHTML={createMarkup(props.body)} />           
        </div>
    )
}

export default Note;