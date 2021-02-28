import React, { useState } from 'react'
import { items } from '../article';

export const data = JSON.parse(localStorage.getItem('article'));
export const NewArticleForm = () => {
    const [form, setForm] = useState({ head: '', date: '', highlight: '', body: '', images: '' })
    const [selectedFile, setSelectedFile] = useState(null);
    const [imgData, setImgData] = useState(null);

    const onChangePicture = e => {
        if (e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
            setForm({ ...form, images: e.target.value })
            console.log(form)
        }
    };

    //Handle Submit & localstorage
    const handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("file", selectedFile);
        data.push(form)
        // data.pop()
        console.log(data)
        localStorage.setItem('article', JSON.stringify(data));
    }
    localStorage.setItem('article', JSON.stringify(items));

    return (
        <div className='NewArticleForm'>
            <h3>Add a new article</h3>
            <form onSubmit={handleSubmit}>
                <div className='FormControl'>
                    <img src={imgData} alt="" />
                    <label className="UploadImage">
                        <i className="icon-file-upload-line"></i> Upload Cover
                    <input
                            id='Upload'
                            accept='image/*'
                            hidden='hidden'
                            // required
                            type='file'
                            onChange={onChangePicture} />
                    </label>
                </div>
                <div className='FormControl'>
                    <label>Article Title <i className='icon-asterisk'></i> </label>
                    <input
                        // required
                        className='input'
                        type='text'
                        value={form.head}
                        placeholder='Input article title'
                        onChange={e => setForm({ ...form, head: e.target.value })}></input>
                </div>
                <div className='FormControl'>
                    <label>Article Tag <i className='icon-asterisk'></i> </label>
                    <input
                        // required
                        className='input'
                        type='text'
                        maxLength='11'
                        value={form.highlight}
                        placeholder='Enter tag e.g UX Writing'
                        onChange={e => setForm({ ...form, highlight: e.target.value })}></input>
                </div>
                <div className='FormControl'>
                    <label>Date <i className='icon-asterisk'></i> </label>
                    <input
                        // required
                        className='input'
                        type='text'
                        value={form.date}
                        placeholder='Date Month, Year. e.g 1st January, 2001'
                        onChange={e => setForm({ ...form, date: e.target.value })}
                    ></input>
                </div>
                <div className='FormControl'>
                    <label>Content <i className='icon-asterisk'></i></label>
                    <textarea name="" id="" rows="10"
                        className='input'
                        type='text'
                        value={form.body}
                        placeholder='Awesome blog article'
                        onChange={e => setForm({ ...form, body: e.target.value })}></textarea>
                </div>
                <div className='FormButton'>
                    <button type="submit">Save & Publish <i className='icon-arrow-right-line'></i> </button>
                </div>
            </form>
        </div>
    )
}
export default NewArticleForm

