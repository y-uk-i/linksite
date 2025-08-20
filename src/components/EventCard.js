import React from 'react';
import './EventCard.css';

function EventCard({ title, date, location, description, isPast, eventUrl, relatedLinks }) {
  return (
    <div className={`event-card ${isPast ? 'past-event' : 'upcoming-event'}`}>
      <div className="event-header">
        <span className="event-badge">{isPast ? '開催済み' : '開催予定'}</span>
        <h3 className="event-title">{title}</h3>
      </div>
      <div className="event-details">
        <p className="event-date"><strong>日時:</strong> {date}</p>
        <p className="event-location"><strong>場所:</strong> {location}</p>
        {description && <p className="event-description">{description}</p>}
        
        {eventUrl && (
          <div className="event-link-container">
            <a href={eventUrl} target="_blank" rel="noopener noreferrer" className="event-link">
              イベント詳細を見る
            </a>
          </div>
        )}
        
        {relatedLinks && relatedLinks.length > 0 && (
          <div className="related-links">
            <p className="related-links-title">関連リンク:</p>
            <ul className="related-links-list">
              {relatedLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="related-link">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventCard;
