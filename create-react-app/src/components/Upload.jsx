import React from 'react';

const Upload = () => {
  const [files, setFiles] = React.useState();
  const [name, setName] = React.useState('');

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('files', files);
    formData.append('name', name);
    await fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <>
      <div className='container'>
        <div>Upload</div>
        <form onSubmit={submit}>
          <input
            onChange={(e) => setFiles(e.target.files[0])}
            type='file'
          ></input>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Caption'
          ></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Upload;
