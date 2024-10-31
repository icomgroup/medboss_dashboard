import React, { useRef, useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import axios from 'axios';
import { API_BASE_URL } from '@/config/serverApiConfig';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.withCredentials = true;
const token = 'Bearer ' + JSON.parse(window.localStorage.getItem('auth'))?.current?.token;
axios.defaults.headers.common.Authorization = token;

const VideoStreamComponent = ({ fileId }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfBlob, setPdfBlog] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`/stream/files/${fileId}`, {
          responseType: 'blob',
        });
        const file = new Blob([response.data], { type: 'application/pdf' });
        const url = URL.createObjectURL(file);
        const iframe = document.querySelector('iframe');
        iframe.src = url;
        setPdfBlog(() => {
          return { url: url };
        });
      } catch (error) {
        console.error('Error streaming video:', error);
      }
    };

    fetchVideo();
  }, [fileId]);

  return (
    <div style={{ margin: '10px' }}>
      <iframe title="PDF Viewer" width="100%" height="300px"></iframe>
    </div>
  );
};

export default VideoStreamComponent;
