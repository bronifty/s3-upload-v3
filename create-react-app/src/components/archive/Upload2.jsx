import React from 'react';

const Upload = () => {
  const [file, setFile] = React.useState(null);
  const [caption, setCaption] = React.useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('caption', caption);
    await fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      body: formData,
    });
    setFile(null);
    setCaption('');
  };

  return (
    <>
      <div className='container'>
        <div>Upload</div>
        <form>
          <div className='input-group'>
            <label for='file'>Your name</label>
            <input
              name='file'
              id='file'
              onChange={(e) => setFile(e.target.files[0])}
              type='file'
              key={file}
            ></input>
          </div>
          <div className='input-group'>
            <label for='caption'>Caption</label>
            <input
              name='caption'
              id='caption'
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              type='text'
              placeholder='Caption'
            ></input>
          </div>
          <button className='submit-btn' onClick={(e) => handleClick(e)}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Upload;
