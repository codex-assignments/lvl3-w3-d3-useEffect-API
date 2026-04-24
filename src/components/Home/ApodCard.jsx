import React from 'react'


export default function ApodCard({ date, title, url, explanation, media_type }) {
  return (
    <div className="card">
      <div className="header">
        <h2>{title}</h2>
        <span className="date">{date}</span>
      </div>
{/* renders pic when media type is image and renders video when media type is video */}
      <div className="pic">
        {media_type === "video" ? (
          <iframe
            title={title}
            src={url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="video"
          />
        ) : (
          <img src={url} alt={title} />
        )}
      </div>

      <div className="content">
        <p className="explanation">{explanation}</p>
      </div>
    </div>
  );
}
