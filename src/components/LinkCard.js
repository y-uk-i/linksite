import React from 'react';
import './LinkCard.css';

// SVG icons as components
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF0000">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const ShopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

const NoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
    <path d="M18.7 3.3H5.3C4 3.3 3 4.3 3 5.6v12.8c0 1.3 1 2.3 2.3 2.3h13.4c1.3 0 2.3-1 2.3-2.3V5.6c0-1.3-1-2.3-2.3-2.3zm-6.7 12.8H7.6v-1.5h4.4v1.5zm4.4-3H7.6v-1.5h8.8v1.5zm0-3H7.6V8.6h8.8v1.5z"/>
  </svg>
);

const PortfolioIcon = () => (
  <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '50%', border: '2px solid #e0e0e0'}}>
    <span style={{fontSize: '20px'}}>ポ</span>
  </div>
);

const CertificateIcon = () => (
  <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <span role="img" aria-label="certificate" style={{fontSize: '24px'}}>🎓</span>
  </div>
);

const FinanceIcon = () => (
  <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <span role="img" aria-label="finance" style={{fontSize: '24px'}}>💹</span>
  </div>
);

function LinkCard({ title, url, icon, isPR, comingSoon }) {
  const getIcon = () => {
    switch (icon) {
      case 'x':
        return <XIcon />;
      case 'youtube':
        return <YouTubeIcon />;
      case 'shop':
        return <ShopIcon />;
      case 'note':
        return <NoteIcon />;
      case 'portfolio':
        return <PortfolioIcon />;
      case 'certificate':
        return <CertificateIcon />;
      case 'finance':
        return <FinanceIcon />;
      default:
        return null;
    }
  };

  return (
    <a 
      href={url} 
      target={comingSoon || icon === 'portfolio' ? "_self" : "_blank"} 
      rel="noopener noreferrer" 
      className={`link-card ${isPR ? 'pr-card' : ''} ${comingSoon ? 'coming-soon-card' : ''} ${icon === 'portfolio' ? 'portfolio-card' : ''}`}
      onClick={comingSoon ? (e) => e.preventDefault() : undefined}
    >
      <div className="card-icon">
        {getIcon()}
      </div>
      <div className="card-content">
        {isPR && <span className="pr-label">【PR】</span>}
        <h3>{title}</h3>
        {comingSoon && <p className="coming-soon-notice">Coming Soon...</p>}
        {isPR && <p className="affiliate-notice">※アフィリエイトリンクを含みます</p>}
      </div>
    </a>
  );
}

export default LinkCard;
