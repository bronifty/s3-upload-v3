import React from 'react';

const Upload = () => {
  const [file, setFile] = React.useState();
  const [caption, setCaption] = React.useState('');

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('caption', caption);
    await fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div className='container'>
      <form onSubmit={submit}>
        <div className='input-group'>
          <input onChange={(e) => setFile(e.target.files[0])} type='file' />
        </div>
        <div className='input-group'>
          <input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            type='text'
            placeholder='Caption'
          />
        </div>
        <button className='submit-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Upload;
