import React, {useRef} from 'react'

const FileUploader = ({onFileSelectError, onFileSelectSuccess}) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        if (file.size > 10240)
          onFileSelectError({ error: "File size cannot exceed more than 10MB" });
        else onFileSelectSuccess(file);
      };


    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput}/>
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"></button>
        </div>
    )
}

export default FileUploader;

// const submitForm = () => {
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("file", selectedFile);
  
//     axios
//       .post(UPLOAD_URL, formData)
//       .then((res) => {
//         alert("File Upload success");
//       })
//       .catch((err) => alert("File Upload Error"));
//   };