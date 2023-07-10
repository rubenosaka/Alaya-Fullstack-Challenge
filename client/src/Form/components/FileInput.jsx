import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImageRequest } from "../../Post/PostActions";
import { Button, CircularProgress, CardMedia } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function FileInput() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cloudinaryFile, setCloudinaryFile] = useState({});
  const dispatch = useDispatch();

  const handleSelectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setLoading(true);

    try {
      const fileResponse = await dispatch(uploadImageRequest(file));
      console.log(fileResponse);
      if (fileResponse.cloudinaryImage) {
        setCloudinaryFile(fileResponse.cloudinaryImage);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="App" style={{ marginTop: "30px" }}>
      {file && <center>{file.name}</center>}
      {cloudinaryFile.url && (
        <CardMedia
          component="img"
          src={cloudinaryFile.url}
          alt="Uploaded"
          style={{ maxWidth: "100%" }}
        />
      )}
      <input
        id="file"
        type="file"
        onChange={handleSelectFile}
        multiple={false}
        style={{ display: "none" }}
      />

      {file ? (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={loading}
            className="text-white"
            startIcon={loading ? <CircularProgress size={20} /> : <CloudUploadIcon />}
            style={{ marginTop: "10px" }}
          >
            {loading ? "Uploading..." : "Upload to Cloudinary"}
          </Button>
        </>
      ) : (
        <label htmlFor="file">
          <Button
            component="span"
            variant="contained"
            color="primary"
            className="text-white"
            startIcon={<CloudUploadIcon />}
            disabled={loading}
          >
            Select File
          </Button>
        </label>
      )}
    </div>
  );
}

export default FileInput;
