import React from 'react';
import '../styles/MediaGallery.css'
import { FaPlay } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { TfiDownload } from 'react-icons/tfi';
import { toast } from 'react-toastify';

export const MediaGallery = ({
  medias,
}) => {
  // copy link to clipboard
  const handleLinkOnClick = (idx) => {
    const link = medias[idx].tracking_link;
    navigator.clipboard.writeText(link);
    toast.success('Link copied to clipboard!', { autoClose: 1000 });
  }

  // download media
  const handleDownloadOnClick = async (idx) => {
    const link = medias[idx].download_url;

    const response = await fetch(link);

    if (response.status !== 200) {
      toast.error('Download failed!', { autoClose: 1000 });
      return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "download";
    document.body.appendChild(a);
    a.click();

    toast.success('Download started!', { autoClose: 1000 });

    setTimeout(() => {
      URL.revokeObjectURL(a.href);
      document.body.removeChild(a);
    }, 0);
  }

  return (
    <div className='media-gallery'>
      {medias.map((media, index) => (
        <div key={index}>
          <div className='media-gallery-cover-wrapper'>
            <img src={media.cover_photo_url} className='media-gallery-cover' />
            <div className='media-gallery-play-icon'>
              <FaPlay />
            </div>
          </div>
          <div className='media-gallery-copy-and-download-icons'>
            <FiLink onClick={() => handleLinkOnClick(index)} />
            <TfiDownload onClick={() => handleDownloadOnClick(index)} />
          </div>
        </div>
      ))}
    </div>
  );
}
