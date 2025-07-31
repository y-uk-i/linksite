import React from 'react';
import './App.css';
import LinkCard from './components/LinkCard';
import ComingSoonCard from './components/ComingSoonCard';

function App() {
  const links = [
    {
      id: 1,
      title: 'Xで最新情報を見る',
      url: 'https://x.com/_y_u_ki_yu_k_i_',
      icon: 'x',
      isPR: false
    },
    {
      id: 2,
      title: 'YouTubeチャンネルはこちら',
      url: 'https://www.youtube.com/@cnp-tcg-enjoy',
      icon: 'youtube',
      isPR: false
    },
    {
      id: 3,
      title: 'CNPトレカ公式ショップはこちら',
      url: 'https://shopa.jp/P6EMG66CZ9JF',
      icon: 'shop',
      isPR: true
    },
    {
      id: 4,
      title: 'noteで記事を読む',
      url: 'https://note.com/_y_u_ki_yu_k_i_',
      icon: 'note',
      isPR: false
    }
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>ゆきのリンク集</h1>
      </header>
      
      <main className="main">
        <section className="links-section">
          {links.map(link => (
            <LinkCard 
              key={link.id}
              title={link.title}
              url={link.url}
              icon={link.icon}
              isPR={link.isPR}
            />
          ))}
        </section>
        
        <section className="coming-soon-section">
          <h2>Coming Soon</h2>
          <div className="coming-soon-cards">
            <ComingSoonCard />
            <ComingSoonCard />
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ゆき All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
