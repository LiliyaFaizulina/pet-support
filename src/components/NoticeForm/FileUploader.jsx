import React, { useRef } from 'react';

function FileUploader({ onFileSelectError, onFileSelectSuccess }) {
  const fileInput = useRef(null);

  const handleFileInput = e => {
    const file = e.target.files[0];
    if (file.size > 1024)
      onFileSelectError({ error: 'File size cannot exceed more than 1MB' });
    else onFileSelectSuccess(file);
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput} />
      <button
        onClick={e => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      ></button>
    </div>
  );
}

export default FileUploader;
