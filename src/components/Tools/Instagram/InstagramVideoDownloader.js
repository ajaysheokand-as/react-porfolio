import React, { useState } from 'react';
import axios from 'axios';

function InstagramVideoDownloader() {
  const [url, setUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const videoUrl = `https://cors-anywhere.herokuapp.com/${url}?__a=1`;
      fetch(videoUrl)
        .then((response) => response.json())
        .then((data) => {
          const videoSrc =
            data.graphql.shortcode_media.video_url ||
            data.graphql.shortcode_media.display_url;
          setDownloadUrl(videoSrc);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='m-5 p-5'>
     <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Instagram post URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Download</button>
      </form>
      {downloadUrl && (
        <div>
          <a href={downloadUrl} download>
            Download Link
          </a>
        </div>
      )}
    </div>
  );
}

export default InstagramVideoDownloader;
