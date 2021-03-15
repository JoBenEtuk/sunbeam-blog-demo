import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../../../App';

export const NewArticleForm = () => {
    const items = useContext(ItemContext);
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
        }
    };
    //Handle Change
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };
    //Handle Submit & localstorage
    const handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("file", selectedFile);
        items.push(form)
        console.log(items)
        localStorage.setItem('article', JSON.stringify(items));
    }

    useEffect(() => {
        localStorage.getItem('articleItem');
        localStorage.setItem('articleItem', JSON.stringify(items));
    }, [items])

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
                    <label htmlFor='head'>Article Title <i className='icon-asterisk'></i> </label>
                    <input
                        required
                        className='input'
                        type='text'
                        name='head'
                        id='head'
                        value={form.head}
                        placeholder='Input article title'
                        onChange={handleChange}
                    />
                </div>
                <div className='FormControl'>
                    <label htmlFor='highlight'>Article Tag <i className='icon-asterisk'></i> </label>
                    <input
                        required
                        className='input'
                        name='highlight'
                        id='highlight'
                        type='text'
                        maxLength='11'
                        value={form.highlight}
                        placeholder='Enter tag e.g UX Writing'
                        onChange={handleChange}></input>
                </div>
                <div className='FormControl'>
                    <label htmlFor='date'>Date <i className='icon-asterisk'></i> </label>
                    <input
                        required
                        className='input'
                        type='text'
                        name='date'
                        id='date'
                        value={form.date}
                        placeholder='Date Month, Year. e.g 1st January, 2001'
                        onChange={handleChange}
                    ></input>
                </div>
                <div className='FormControl'>
                    <label htmlFor='body'>Content <i className='icon-asterisk'></i></label>
                    <textarea
                        name="body"
                        id="body"
                        rows="10"
                        className='input'
                        type='text'
                        required
                        value={form.body}
                        placeholder='Awesome blog article'
                        onChange={handleChange}></textarea>
                </div>
                <div className='FormButton'>
                    <button type="submit">Save & Publish <i className='icon-arrow-right-line'></i> </button>
                </div>
            </form>
        </div>
    )
}
export default NewArticleForm

