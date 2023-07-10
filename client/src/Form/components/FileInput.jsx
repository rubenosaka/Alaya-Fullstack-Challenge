import { useState } from "react";
import { useDispatch } from 'react-redux';
import { uploadImageRequest } from '../../Post/PostActions';

function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});
  const dispatch = useDispatch();

  const handleSelectFile = (e) => {
    console.log(e.target.files[0]);

    setFile(e.target.files[0]);
    console.log(file);
};


  const handleUpload = async () => {
    setLoading(true);

   

    dispatch(uploadImageRequest(file));   
  };

  return (
    <div className="App">
      <label htmlFor="file" className="btn-grey">
        {" "}
        select file
      </label>
      {file && <center> {file.name}</center>}
      <input
        id="file"
        type="file"
        onChange={handleSelectFile}
        multiple={false}
      />
      <code>
        {Object.keys(res).length > 0
          ? Object.keys(res).map((key) => (
              <p className="output-item" key={key}>
                <span>{key}:</span>
                <span>
                  {typeof res[key] === "object" ? "object" : res[key]}
                </span>
              </p>
            ))
          : null}
      </code>
      {file && (
        <>
          <button onClick={handleUpload} className="btn-green">
            {loading ? "uploading..." : "upload to cloudinary"}
          </button>
        </>
      )}
    </div>
  );
}
export default App;
