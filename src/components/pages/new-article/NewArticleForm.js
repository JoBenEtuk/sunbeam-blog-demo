import React, {useState, useEffect} from 'react'
import {items} from '../article';
import { Editor } from '@tinymce/tinymce-react';


export const data = JSON.parse(localStorage.getItem('article'));
export const NewArticleForm = () => {
    const [form, setForm] = useState({head: '', date: '', highlight: '', body: ''})
    const [selectedFile, setSelectedFile] = useState('');
    const [preview, setPreview] = useState()
    const [editor, setEditor] = useState()
    Object.assign(form, {body: editor})

    //Handle Submit & localstorage
    const handleSubmit = event => {
        event.preventDefault()
        // setForm({head: '', date: '', highlight: '', body: ''})
        Object.assign(form, {images: ''})
        Object.assign(form, {body: ''})
        data.push(form)
        // data.pop()
        localStorage.setItem('article',JSON.stringify(data));
        console.log(data)
    }
    localStorage.setItem('article',JSON.stringify(items));        
    
    //Editor Change
    const onEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
        setEditor( e.target.getContent());
      }

    //Image Preview & Upload
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        document.getElementById("UploadImage").style.display = 'none'
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }
    const CustomUpload = () => {
        document.getElementById("Upload").click()
    }
    Object.assign(form, {images: selectedFile})

    return (
        <div className='NewArticleForm'>
            <h3>Add a new article</h3>
            <form onSubmit={handleSubmit}>
                <div className='FormControl'>
                    <input
                        id='Upload'
                        accept='image/*'
                        hidden='hidden'
                        // required
                        type='file' onChange={onSelectFile} />
                    {selectedFile &&  <img alt='preview' src={preview} /> }
                    <button id="UploadImage" className="UploadImage" onClick={CustomUpload}> <i className="icon-file-upload-line"></i> Upload Cover</button>
                </div>
                <div className='FormControl'>
                    <label>Article Title <i className='icon-asterisk'></i> </label>
                    <input
                        // required
                        className='input'
                        type = 'text'
                        value={form.head}
                        placeholder='Input article title'
                        onChange={e => setForm({ ...form, head: e.target.value})}></input>
                </div>
                <div className='FormControl'>
                    <label>Article Tag <i className='icon-asterisk'></i> </label>
                    <input
                        required
                        className='input'
                        type = 'text'
                        maxLength = '11'
                        value={form.highlight} 
                        placeholder='Enter tag e.g UX Writing'
                        onChange={e => setForm({ ...form, highlight: e.target.value})}></input>
                </div>
                <div className='FormControl'>
                    <label>Date <i className='icon-asterisk'></i> </label>
                    <input
                        // required
                        className='input'
                        type = 'text' 
                        value={form.date}
                        placeholder='Date Month, Year. e.g 1st January, 2001' 
                        onChange={e => setForm({ ...form, date: e.target.value})} 
                        ></input>
                </div>
                <div className='FormControl'>
                    <label>Content <i className='icon-asterisk'></i></label>
                        <Editor
                            required
                            apiKey="9ab1daaccrateig2qdcohd4toriis4eqbzmwmuaz1t1ngsim"
                            onChange={onEditorChange} 
                            init={{
                              height: 400,
                              menubar: true,
                              plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                              ],
                              toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help',
                            }}
                        ></Editor>
                </div>
                <div className='FormButton'>
                    <button type="submit">Save & Publish <i className='icon-arrow-right-line'></i> </button>
                </div>
            </form>
        </div>
    )
}

export default NewArticleForm
