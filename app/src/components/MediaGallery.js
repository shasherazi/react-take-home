import React from 'react';
import '../styles/MediaGallery.css'
import { FaPlay } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { TfiDownload } from 'react-icons/tfi';

export const MediaGallery = ({
  medias,
}) => {
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
            <FiLink />
            <TfiDownload />
          </div>
        </div>
      ))}
    </div>
  );
}
