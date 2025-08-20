import React from 'react';
import './App.css';
import LinkCard from './components/LinkCard';
import ComingSoonCard from './components/ComingSoonCard';
import ProfileCard from './components/ProfileCard';
import EventCard from './components/EventCard';

function App() {
  const events = [
    {
      id: 1,
      title: 'CNPトレカ交流会in東京・蒲田',
      date: '2025年8月10日(日)',
      location: '東京・蒲田',
      description: '参加人数：9名',
      isPast: true,
      eventUrl: null
    },
    {
      id: 2,
      title: 'CNPトレカ体験会in横浜・あざみ野',
      date: '2025年9月23日(火・祝)',
      location: '横浜・あざみ野',
      description: 'レイエスフィエスタ2025のブース出店',
      isPast: false,
      eventUrl: null, // 体験会のURLは後日追加予定
      relatedLinks: [
        {
          title: 'レイエスフィエスタ2025公式サイト',
          url: 'https://www.tokyu-sports.com/football/reyes/news_list/event/2025_year/Reyes_Fiesta2025.html'
        }
      ]
    }
  ];

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
      title: '『【CNPトレカ】楽しみチャン』はこちら',
      url: 'https://www.youtube.com/@cnp-tcg-enjoy',
      icon: 'youtube',
      isPR: false
    },
    {
      id: 3,
      title: 'noteで記事を読む',
      url: 'https://note.com/_y_u_ki_yu_k_i_',
      icon: 'note',
      isPR: false
    },
    {
      id: 4,
      title: 'ポートフォリオサイト',
      url: '#', // リンク無効化
      icon: 'portfolio',
      isPR: false,
      comingSoon: true // Coming Soon表示用フラグ
    },
    {
      id: 5,
      title: 'CNPトレカ公式ショップはこちら',
      url: 'https://shopa.jp/P6EMG66CZ9JF',
      icon: 'shop',
      isPR: true
    }
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>ゆきのリンク集</h1>
      </header>
      
      <section className="profile-section">
        <ProfileCard 
          name="ゆき" 
          description="CNPトレカ、IVEが好きです。" 
        />
      </section>
      
      <main className="main">
        <section className="links-section">
          {links.map(link => (
            <LinkCard 
              key={link.id}
              title={link.title}
              url={link.url}
              icon={link.icon}
              isPR={link.isPR}
              comingSoon={link.comingSoon}
            />
          ))}
        </section>

        <section className="events-section">
          <h2>CNPトレカイベント情報</h2>
          <div className="event-cards">
            {events.map(event => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                isPast={event.isPast}
                eventUrl={event.eventUrl}
                relatedLinks={event.relatedLinks}
              />
            ))}
          </div>
        </section>

        <section className="contact-form-section">
          <div className="contact-form-card">
            <h3 className="contact-form-title">CNPトレカについてゆきにお問い合わせ</h3>
            <p className="contact-form-description">イベントやCNPトレカについてのご質問、ご相談はこちらからお願いします</p>
            <div className="contact-form-button-container">
              <a href="https://forms.gle/6zbKP6FgQXMQes9R6" target="_blank" rel="noopener noreferrer" className="contact-form-button">問い合わせフォームはこちら</a>
            </div>
          </div>
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
