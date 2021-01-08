import React from "react"
import DOMPurify from 'dompurify';


function Note(props){

    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
      }
    return(
        <div>
            <h3>{props.title}</h3>
            <div  dangerouslySetInnerHTML={createMarkup(props.body)} />
            
        </div>
    )
}

export default Note;