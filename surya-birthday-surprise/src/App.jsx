import React, { useEffect, useState } from 'react';
import { Heart, Sparkles, Play, Music2, ArrowDown, Gift, X, Camera, Film, Mail, MapPin, MessageCircle, Image as ImageIcon } from 'lucide-react';

const memories = [
  { file: 'memory-01.jpg', title: 'Two Little Kids, One Beautiful Destiny', note: 'Two little souls, two different childhoods, and a beautiful story waiting to happen Back then, we didnt know each other existed. We were just two little kids, smiling at the world, unaware that one day we would become each others favourite person.If I could go back in time, I would tell those two little kids,One day, you ll meet someone who will make your world feel so special.And that someone would be you, my Kannaya.From two little childhoods to one beautiful love story… Im so happy our paths crossed. I love you, Surya. Forever my favourite person.' },
  { file: 'memory-02.jpg', title: 'Our First Picture Together', note: 'And here it is, our very first picture together,Maybe it was just a candid moment for the world, but for me, it became one of the sweetest memories of us. No perfect poses, no planned smiles, just us being ourselves,Little did I know that this simple picture would become something I would always look at with a smile. Every time I see this photo, I see my favourite person and a memory I wish I could relive a thousand times.My Surya, I hope we keep capturing little moments like this forever, growing together, laughing together, and making countless beautiful memories along the way ♾️.' },
  { file: 'memory-03.jpg', title: 'Our First Long Journey Together', note: 'From Kakinada to Hyderabad, our first long-distance journey together.It was not just a journey from one city to another, it was a beautiful memory that will always stay close to my heart. Every little moment, every laugh, every conversation, and simply being beside you made that journey so special ,Maybe it was our first long trip together, but deep inside, I wished for a thousand more journeys with you. No matter how far we travel or where life takes us, my favourite destination will always be wherever you are, my Kannaya 🧿😘.Here is to our first journey together and all the beautiful adventures waiting for us 💙♾️.' },
  { file: 'memory-04.jpg', title: 'The Day We Found Our Way Back to Each Other', note: 'After all the distance, the silence, the pain, and the time we spent apart, we finally stood together again.This picture means so much more than just a photo. It holds the emotions we couldn  t explain, the feelings that never completely disappeared and the happiness of seeing each other again after such a long break.Maybe our journey wasnt always beautiful. We had our misunderstandings, our difficult days, and moments when we thought we had lost each other. But seeing you again reminded me how special you are to me .Kannaya, this was our first picture after everything we went through, and I will always keep this moment close to my heart. No matter what our past looked like, I was happy to have this memory with you again.Some moments are not just captured in photos, they stay in our hearts forever 💙🧿.' },
  { file: 'memory-05.jpg', title: 'Still Choosing Each Other After Every Figh', note: 'Not every moment of our love story was perfect. We fought, we got upset, we misunderstood each other, and sometimes our little hearts got hurt. But even after all those fights, we still found our way back to each other.This picture reminds me that love is not about never fighting or never getting angry. It is about learning to understand each other, letting go of our egos, and choosing each other even on the difficult days.Kannaya, we may not always agree, and we may have our silly fights, but deep inside, you will always be someone I never want to lose. I hope we learn to love each other better with every passing day, hold each other a little closer after every argument, and never let temporary anger become bigger than our love.We are not a perfect couple, but we are two imperfect people learning how to love each other better. And I hope this little story of ours continues forever. 💙♾️.' },
  { file: 'memory-06.jpg', title: 'Your Hands Feel Like Home', note: 'There is something about holding your hands that makes me feel a kind of peace I cannot explain.❤️In this little moment, I wasnt just holding your hands. I was holding the hands of the person who means so much to me, the person I want beside me through every beautiful and difficult chapter of life.I dont know what the future holds for us Kannaya, but I know one thing. I want to keep holding your hands through every season of life, through our happiest days, our hardest fights, and all the little moments in between.One day, I hope I can hold these same hands as we look back at all our memories and smile at how far we have come together.Until then, let me hold your hands a little longer because sometimes this is my favourite way of saying I love you♾️.' },
  { file: 'memory-07.jpg', title: 'Just us', note: 'The way you wrote our names on your phone and posed for this picture might look like such a small thing, but to me, it means so much more.It is the little things you do that make me fall for you all over again. Seeing our names together, knowing that you wanted to capture that moment, gave me one more beautiful memory to keep close to my heart.My Kannaya, I dont know if you realize how happy these tiny gestures make me. Sometimes, its not about expensive gifts or grand surprises. Its about seeing a little piece of us in the things you do. 🧿❤️Our names written on your phone, but our story written in my heart. And if I had to choose all over again, I would still choose you. 💋♾️.' },
  { file: 'memory-08.jpg', title: 'A Birthday Prayer, Just for You 🤍', note: 'Your birthday was special, and getting to visit our college temple together made it even more memorable. ❤️I remember standing beside you and feeling happy that I got to share that little moment with you on your special day. I silently wished for all the happiness, success, and beautiful things you deserve in life.I hope that one day, when we look back at these college memories, we will smile at how simple our days were and how much those little moments meant to us.It was just a small visit to the temple, but it became a lovely part of your birthday that I will always remember. 🤍.' },
  { file: 'memory-09.jpg', title: 'A Little Glimpse of Our Future Family', note: 'Kanna, this is honestly one of my favourite pictures of us.❤️ The way we held that little girl and took a picture together, we looked like a tiny little family, and I cant explain how happy that made me feel.I know we were just playing around and taking a cute picture on the train, but a little part of my heart imagined our future in that moment. You and me, our own little family, a tiny baby bringing so much happiness into our lives, and a home filled with love, laughter, and all the dreams we worked so hard for.I dont know exactly what our future will look like, but I hope we get to build a beautiful life together. I hope we become each others biggest support, achieve all our dreams, and one day look at pictures like this with a smile, remembering when it was all just a little dream in our hearts.And maybe someday, Kanna, we will take a real family picture just like this, except that little one will be ours. Until then, this picture will always be a tiny glimpse of the future I secretly dream about with you.' },
  { file: 'memory-10.jpg', title: 'One Ordinary Day, One Special Memory', note: 'Finally done with exams, and all we wanted was to spend some time together without worrying about anything.❤️That afternoon was one of those simple days where we didnt need any big plans. Just going out together, talking about random things, laughing at silly jokes, and enjoying each others company was enough to make me happy.I love how some of my favourite memories with you come from the most ordinary days. Nothing extraordinary happened that day, but having you beside me made it worth remembering.Sometimes, I wish we could go back to these college days for just one more afternoon, with no exams to worry about and nowhere else we needed to be. Just you, me, and a little more time together. 🤍.' },
  { file: 'memory-11.jpg', title: 'My happy place', note: 'This is what happens when you are around me, Kanna. You start making the most ridiculous faces, doing the weirdest things, and somehow make me laugh even when I try not to. 😂❤️I dont think you realize how much I love these silly moments with you. The way you act like a complete crazy person just to make me smile and the way I end up laughing at you instead of taking a proper picture. These are the little things that make being with you so special.Maybe someone else would see just a funny picture, but I see the boy who knows how to turn my mood around without even trying. The one who can make an ordinary moment feel like the happiest part of my day.Kanna, please never stop being this silly around me. I want all your stupid expressions, your nonsense talks, your childish behaviour, and that version of you that comes out only when we are together. Because honestly, some of my happiest memories are simply me laughing like crazy because of you. ❤️.' },
  { file: 'memory-12.jpg', title: 'Forever favourite', note: 'Look at us,😂❤️ I m here making my weirdest expressions while you are busy looking somewhere else in your own little world. How do we even manage to be this silly when we are standing right next to each other? 🤣Honestly, these random moments with you are my favourite. We dont always have to pose perfectly or take the prettiest pictures. Sometimes, its just me being crazy, you doing your own nonsense, and both of us creating the funniest memories without even trying.One day, I want us to look back at all these pictures and laugh at how silly we were. And I hope even after years, youll still be the same crazy boy who makes me laugh over the smallest things.' },
];
const places = [
  { file: 'place-01.jpg', title: 'Our special place', note: 'A place that will always remind me of us.' },
  { file: 'place-02.jpg', title: 'your gestures', note: 'Little things, little memories, but everything reminds me of you..' },
  { file: 'place-03.jpg', title: 'A place to revisit', note: 'One day, let us come back and make another memory.' },
  { file: 'place-04.jpg', title: 'A place on our list', note: 'Saving this space for somewhere we will go together.' },
];
const messages = [
  { title: 'When you need a smile', text: 'A little smile for my Kannaya 💙Even when I m not beside you, remember there s a girl who loves your silly expressions and your smile more than anything. Now smile for me, pichoda ❤️' },
  { title: 'When you miss me', text: 'Imagine me holding your hand, looking at you, and telling you that you are loved more than this little message can ever explain.' },
  { title: 'When you doubt yourself', text: 'I hope you see the good in yourself that I see in you. You are capable of so much, and I will always be proud of you for trying.' },
  { title: 'A random reminder', text: 'This is your reminder that you are my favourite notification, one of my happiest thoughts, and a person who makes ordinary days feel special.' },
  { title: 'For a hard day', text: 'You do not have to have everything figured out today. Rest if you need to, breathe, and try again when you are ready. I am rooting for you.' },
  { title: 'Just because', text: 'No special reason, no occasion. Just wanted to say that I am glad you exist, Surya. The world is better with you in it. 💙' },
];
const videos = [
  { file: 'memory-video-01.mp4', title: 'Our little movie' },

];

function HeartRain() {
  return <div className="heart-rain" aria-hidden="true">{Array.from({length: 18}, (_, i) =>
    <span key={i} style={{'--left': `${(i * 37 + 7) % 100}%`, '--delay': `${(i % 7) * -1.8}s`, '--duration': `${12 + (i % 5) * 2}s`}}>♥</span>
  )}</div>;
}
function MediaCard({ item, folder, index, onOpen }) {
  const src = `/${folder}/${item.file}`;
  const [missing, setMissing] = useState(false);
  return <button className="media-card" onClick={() => onOpen({ ...item, src, folder })}>
    {!missing ? <img src={src} alt={item.title} onError={() => setMissing(true)} loading="lazy" /> : <div className="media-placeholder">
      <div className="placeholder-icon"><Camera size={24}/></div><span>ADD PHOTO {String(index + 1).padStart(2, '0')}</span><small>{folder}/{item.file}</small>
    </div>}
    <div className="media-caption"><span>{item.title}</span><Heart size={14} fill="currentColor"/></div><p>{item.note}</p>
  </button>;
}
function App() {
  const [revealed, setRevealed] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [activeMedia, setActiveMedia] = useState(null);
  const [openMessage, setOpenMessage] = useState(null);
  useEffect(() => { if (musicOn) document.getElementById('birthday-music')?.play().catch(() => setMusicOn(false)); }, [musicOn]);
  const openSurprise = () => { setRevealed(true); setTimeout(() => document.getElementById('letter')?.scrollIntoView({behavior:'smooth'}), 120); };

  return <main>
    <audio id="birthday-music" loop src="/music/our-song.mp3" />
    <HeartRain/>
    <button className="music-toggle" onClick={() => setMusicOn(v => !v)}><Music2 size={17}/><span>{musicOn ? 'Music on' : 'Our song'}</span></button>
    <section className="hero" id="home">
      <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
      <div className="hero-content"><div className="eyebrow"><Sparkles size={14}/> A LITTLE SKY-BLUE SURPRISE <Sparkles size={14}/></div>
        <div className="tiny-heart"><Heart fill="currentColor" size={20}/></div><p className="script">For my favourite person</p>
        <h1>Happy Birthday,<br/><em>Surya</em><span className="title-heart"> ♥</span></h1>
        <p className="nickname">my Kannaya, my comfort, my favourite hello.</p>
        <p className="hero-description">A little corner of the internet, filled with our memories, our places, and words I hope you keep close.</p>
        <button className="primary-button" onClick={openSurprise}><Gift size={18}/> Open your surprise <Heart size={15} fill="currentColor"/></button>
        <div className="scroll-hint"><span>SCROLL TO FEEL THE LOVE</span><ArrowDown size={15}/></div>
      </div>
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/><span className="floating-word word-one">you + me</span><span className="floating-word word-two">always ♥</span>
    </section>
    <section className="intro section-wrap"><div className="section-kicker">A LITTLE NOTE FOR YOU</div><h2>Today is about <em>you.</em></h2>
      <p className="intro-copy">Out of all the people in this big, busy world, I'm so glad our paths crossed. This little website is a tiny reminder of how much you mean to me.</p>
      <div className="divider-heart"><span/><Heart size={15} fill="currentColor"/><span/></div><p className="handwritten">A little surprise made with all my love.</p>
    </section>
    <section className="memories section-wrap" id="memories"><div className="section-kicker"><Camera size={14}/> OUR PHOTO ALBUM</div><h2>Little moments, <em>big feelings.</em></h2>
      <p className="section-subtitle">Add your real photos to the folders listed below. Every empty frame is waiting for a memory.</p>
      <div className="photo-grid">{memories.map((item,i)=><MediaCard key={item.file} item={item} folder="photos" index={i} onOpen={setActiveMedia}/>)}</div>
    </section>
    <section className="places-section" id="places"><div className="section-wrap"><div className="section-kicker"><MapPin size={14}/> PLACES THAT HOLD OUR STORY</div>
      <h2>Places, <em>feelings & forever memories.</em></h2><p className="section-subtitle">Add photos of places you visited together, your first meeting spot, favourite cafe, or places on your dream list.</p>
      <div className="photo-grid">{places.map((item,i)=><MediaCard key={item.file} item={item} folder="places" index={i} onOpen={setActiveMedia}/>)}</div>
      <p className="folder-tip"><MapPin size={16}/> Place folder: <code>public/places/</code> · Files: <code>place-01.jpg</code> to <code>place-06.jpg</code></p>
    </div></section>
    <section className="film-section" id="videos"><div className="film-inner section-wrap"><div className="section-kicker"><Film size={14}/> PRESS PLAY ON US</div>
      <h2>Our story, <em>in motion.</em></h2><p className="section-subtitle">The laughs, the silly clips, the moments we never want to forget.</p>
      <div className="video-grid">{videos.map(v=><div className="video-card" key={v.file}><video controls playsInline preload="metadata" onError={e=>{e.currentTarget.dataset.missing='true'}} onLoadedMetadata={e=>{e.currentTarget.dataset.ready='true'}}><source src={`/videos/${v.file}`} type="video/mp4"/></video>
        <div className="video-placeholder"><div className="play-circle"><Play size={22} fill="currentColor"/></div><strong>{v.title}</strong><span>Add <code>{v.file}</code> to <code>public/videos/</code></span></div><p>{v.title}</p></div>)}</div>
      <p className="folder-tip"><Film size={16}/> Video folder: <code>public/videos/</code> · Use <code>memory-video-01.mp4</code> to <code>memory-video-03.mp4</code></p>
    </div></section>
    <section className="messages-section section-wrap" id="messages"><div className="section-kicker"><MessageCircle size={14}/> OPEN WHEN YOU NEED IT</div>
      <h2>Little messages <em>for my Kannaya.</em></h2><p className="section-subtitle">Tap a note whenever you want a little reminder from me. You can edit every message in <code>src/App.jsx</code>.</p>
      <div className="message-grid">{messages.map((m,i)=><button className={`message-card ${openMessage===i?'message-open':''}`} key={m.title} onClick={()=>setOpenMessage(openMessage===i?null:i)}>
        <span className="message-number">A LITTLE NOTE · 0{i+1}</span><h3>{m.title}</h3>{openMessage===i?<p className="message-text">{m.text}</p>:<span className="message-cta">Tap to open <Heart size={13}/></span>}
      </button>)}</div>
    </section>
    <section className="letter-section section-wrap" id="letter"><div className="letter-card"><div className="letter-stamp"><Heart fill="currentColor" size={22}/></div>
      <div className="section-kicker"><Mail size={14}/> FROM MY HEART TO YOURS</div><h2>A letter for <em>Kannaya.</em></h2>
      {!revealed?<div className="locked-letter"><p>There's something I want you to read...</p><button className="primary-button" onClick={()=>setRevealed(true)}><Heart size={16} fill="currentColor"/> Read my heart</button></div>:
      <div className="love-letter reveal-in"><p>Happy Birthday Kannaya,  💙</p>
        <p>I hope this new year of your life brings you happiness, peaceful days, exciting adventures, and all the little things your heart has been wishing for.</p>
        <p>Thank you for being someone who makes my world feel a little brighter. If I could give you one thing today, it would be the chance to see yourself through my eyes — so you could understand just how special you are to me.</p>
        <p>
           First of all, I just want to say how special you are to me. I don't know if I can ever explain in words how much you mean to me, but today I want to try .</p>
        <p>
        You know, it's not always the big things that make me happy. Sometimes, it's the smallest things you do, your silly expressions, the way you make me laugh, our little moments together, and even the tiniest gestures that stay in my heart forever. Sometimes, I look at our pictures and smile like a fool, remembering those moments when we were just being ourselves. Those little memories mean more to me than you could ever imagine. ❤️</p>

        <p> I love the way we create memories without even trying. A simple day with you becomes a special memory. A random picture becomes something I want to keep forever. Even writing your name on your laptop feels special to me because it's a little thing that reminds me of you and makes me smile. Maybe these things look small to others, but to me, they hold so much love.</p>

        <p>And Kannaya, there's something I really want you to know. I don't just want to be part of your happy moments or celebrate your birthdays. I want to be there for your whole life. ❤️♾️

I want to celebrate every birthday with you, watch you achieve your dreams, support you when life gets difficult, laugh with you over silly things, and stand beside you when everything feels uncertain. I want to see you grow, succeed, and become the person you've always dreamed of being. And I hope that, through every change life brings, we continue choosing each other.</p>
        <p> I dream of a future where we look back at our old pictures and laugh at how silly we were, remember all our little fights and cute moments, and feel happy that we never stopped trying for each other. I want more pictures, more memories, more adventures, more silly moments, and a lifetime of stories that belong only to us</p>
        <p> 
I'm not saying that our life will always be perfect. We may have misunderstandings, difficult days, and moments when things aren't easy. But my wish is that we always communicate, understand each other, respect each other, and never forget why we chose to be together in the first place.

On your birthday, I wish you all the happiness in the world. I hope your dreams come true, your hard work brings you success, and life gives you countless reasons to smile. And whenever you feel tired or lost, I hope you remember that someone believes in you, feels proud of you, and genuinely wants to see you happy. That's me, your Jyothika.</p>
<p>
Thank you for being a part of my life and for giving me so many little moments that have become big memories in my heart. You may never fully understand how much happiness your presence brings me, but I hope I can show you a little more of it every day.</p>
<p>
Happy Birthday once again, my Surya, my Kannaya, my favourite human, and the person I wish to make a million more memories with. 💙🎂

If life gives me the chance, I want to keep loving you through every season, every change, every ordinary day, and every extraordinary moment. Not just today, not just this year, but for all the birthdays yet to come.</p>
        <p className="letter-signoff">All my love, today and always,<br/><em>your girl ♥</em></p></div>}
    </div></section>
    <section className="finale"><div className="finale-heart"><Heart fill="currentColor" size={30}/></div><p className="script">One last thing...</p>
      <h2>My favourite love story<br/><em>is the one with you.</em></h2><p>Happy birthday, Surya. Here's to more memories, more smiles, more places, and more us.</p>
      <div className="finale-signature">Forever cheering for you <span>♥</span></div><a className="back-top" href="#home">Back to the beginning ↑</a></section>
    <footer>MADE WITH <Heart size={12} fill="currentColor"/> FOR SURYA · WITH LOVE, ALWAYS</footer>
    {activeMedia&&<div className="modal-backdrop" role="dialog" aria-modal="true" onClick={()=>setActiveMedia(null)}><div className="photo-modal" onClick={e=>e.stopPropagation()}>
      <button className="modal-close" onClick={()=>setActiveMedia(null)} aria-label="Close"><X size={20}/></button><img src={activeMedia.src} alt={activeMedia.title} onError={e=>{e.currentTarget.style.display='none'}}/>
      <h3>{activeMedia.title}</h3><p>{activeMedia.note}</p><small>File location: <code>public/{activeMedia.folder}/{activeMedia.file}</code></small>
    </div></div>}
  </main>;
}
export default App;
