import React, { useState, useEffect } from 'react';
import { ref, uploadBytes, deleteObject, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [fileToUpdate, setFileToUpdate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState(null);

    // Fetch uploaded files on component mount
    useEffect(() => {
        fetchUploadedFiles();
    }, []);

    const fetchUploadedFiles = async () => {
        setLoading(true);
        try {
            const filesRef = ref(storage, 'uploads/');
            const fileList = await listAll(filesRef);
            const files = await Promise.all(
                fileList.items.map(async (item) => {
                    const url = await getDownloadURL(item);
                    return { name: item.name, url };
                })
            );
            setUploadedFiles(files);
        } catch (error) {
            console.error("Error fetching files: ", error);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setMessage(null);
        setProgress(0);
    };

    const handleUpload = async () => {
        if (!file) return;

        const fileRef = ref(storage, `uploads/${file.name}`);
        setLoading(true);
        try {
            await uploadBytes(fileRef, file).then((snapshot) => {
                const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(percent);
            });
            setMessage({ type: 'success', text: 'File uploaded successfully!' });
            setFile(null);
            fetchUploadedFiles(); // Refetch the updated list
        } catch (error) {
            setMessage({ type: 'danger', text: 'Error uploading file!' });
            console.error("Error uploading file: ", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (fileName) => {
        const fileRef = ref(storage, `uploads/${fileName}`);
        setLoading(true);
        try {
            await deleteObject(fileRef);
            setMessage({ type: 'success', text: 'File deleted successfully!' });
            fetchUploadedFiles(); // Refetch the updated list
        } catch (error) {
            setMessage({ type: 'danger', text: 'Error deleting file!' });
            console.error("Error deleting file: ", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateFile = async () => {
        if (!file || !fileToUpdate) return;

        const fileRef = ref(storage, `uploads/${fileToUpdate}`);
        setLoading(true);
        try {
            await deleteObject(fileRef);
            await uploadBytes(ref(storage, `uploads/${file.name}`), file);
            setMessage({ type: 'success', text: 'File updated successfully!' });
            setFile(null);
            setFileToUpdate(null);
            fetchUploadedFiles(); // Refetch the updated list
        } catch (error) {
            setMessage({ type: 'danger', text: 'Error updating file!' });
            console.error("Error updating file: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h4 className="card-title text-center mb-4">File Upload</h4>
                    
                    {message && (
                        <div className={`alert alert-${message.type} mt-2`} role="alert">
                            {message.text}
                        </div>
                    )}
                    
                    <div className="mb-3">
                        <input
                            type="file"
                            className="form-control"
                            onChange={handleFileChange}
                        />
                    </div>
                    
                    {progress > 0 && (
                        <div className="progress mb-3">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${progress}%` }}
                                aria-valuenow={progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {progress}%
                            </div>
                        </div>
                    )}
                    
                    <button
                        onClick={fileToUpdate ? handleUpdateFile : handleUpload}
                        disabled={loading || !file}
                        className="btn btn-primary w-100 mb-3"
                    >
                        {loading ? (
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        ) : (
                            <i className={`bi ${fileToUpdate ? 'bi-arrow-repeat' : 'bi-upload'} me-2`}></i>
                        )}
                        {fileToUpdate ? 'Update File' : 'Upload'}
                    </button>

                    <h5 className="mb-3">Uploaded Files</h5>
                    
                    <ul className="list-group">
                        {uploadedFiles.map((file, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>
                                    <i className="bi bi-file-earmark me-2"></i>
                                    <a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
                                    <span className="badge bg-secondary ms-2">Uploaded</span>
                                </span>
                                <div>
                                    <button
                                        onClick={() => handleDelete(file.name)}
                                        className="btn btn-danger btn-sm me-2"
                                        disabled={loading}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                    <button
                                        onClick={() => setFileToUpdate(file.name)}
                                        className="btn btn-warning btn-sm"
                                        disabled={loading}
                                    >
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UploadFile;
