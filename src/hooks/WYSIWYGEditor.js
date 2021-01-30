import React, {useState} from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';


const WYSIWYGEditor = ({placeholder, input, meta}) => {
    const [ editorState, setEditorState ] = useState(EditorState.createEmpty());
    const onEditorStateChange = editorState => {
        setEditorState(editorState);
        return input.onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    };

    return (
        <>
            <Editor
                placeholder={placeholder}
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
            />
        </>
    );
};

export default WYSIWYGEditor;