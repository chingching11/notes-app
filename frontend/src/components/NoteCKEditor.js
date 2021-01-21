import React from "react"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const NoteCKEditor = (props) => {
    const handleChange = ((e, editor) => {
        const data = editor.getData()
        props.setText(data)
    })
    return(
        <div>
            <CKEditor 
                editor={ ClassicEditor }
                onChange = {handleChange}
                data = {props.data}
            />
        </div>
        
    )
}

export default NoteCKEditor;