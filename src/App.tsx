'use client';

import React, { useState } from 'react';
import { Heart, Gift, Sparkles, Camera } from 'lucide-react';

// Interface for heart animation
interface HeartItem {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

// Main Anniversary Component
function AnniversaryPage({ audioRef, isPlaying, toggleMusic }: { 
  audioRef: React.RefObject<HTMLAudioElement>, 
  isPlaying: boolean, 
  toggleMusic: () => void 
}) {
  const [hearts, setHearts] = React.useState<HeartItem[]>([]);
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
    
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 3
      };
      setHearts(prev => [...prev.slice(-15), newHeart]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Array foto memories - Ganti dengan foto lo sendiri!
  const memoryPhotos = [
    { id: 1, src: '/4.jpeg', caption: 'Firts Time kamu ke pondok akuh' },
    { id: 2, src: '/2.jpeg', caption: 'Foto Di rumah kamu ' },
    { id: 3, src: '/7.jpeg', caption: 'Tahun Baruan Maren' },
    { id: 4, src: '/9.jpeg', caption: 'Kata nya mau lari tapi ga tau dah ya' },
    { id: 5, src: '/6.jpeg', caption: 'ENJOYY YOUR SEVEN TEEN' },
    // Bisa tambahin lebih banyak foto di sini!
  ];

  const collagePhotos = [
    { id: 1, rotation: 5, top: '5%', left: '5%', size: 'w-32 h-32' },
    { id: 2, rotation: -3, top: '15%', right: '8%', size: 'w-28 h-28' },
    { id: 3, rotation: 8, top: '45%', left: '3%', size: 'w-36 h-36' },
    { id: 4, rotation: -5, top: '60%', right: '5%', size: 'w-32 h-32' },
    { id: 5, rotation: 3, bottom: '10%', left: '10%', size: 'w-30 h-30' },
    { id: 6, rotation: -8, bottom: '15%', right: '12%', size: 'w-28 h-28' },
    { id: 7, rotation: 6, top: '25%', left: '15%', size: 'w-24 h-24' },
    { id: 8, rotation: -4, top: '70%', left: '20%', size: 'w-26 h-26' },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 overflow-hidden relative">
        
        {/* Infinite scrolling polaroid background */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {/* Row 1 - Scroll Right */}
          <div className="absolute top-0 left-0 right-0 h-40 flex animate-scroll-right">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 px-3">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div
                    key={`row1-${setIndex}-${num}`}
                    className="flex-shrink-0 w-32 h-36 bg-white p-2 shadow-lg transform"
                    style={{ transform: `rotate(${(num % 3 - 1) * 8}deg)` }}
                  >
                    <div className="w-full h-28 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                      <img 
                        src="/1.jpeg" 
                        className="w-full h-full object-cover" 
                        alt={`Polaroid ${num}`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-pink-200', 'to-pink-300');
                        }}
                      />
                    </div>
                    <p className="text-xs text-center mt-1 font-bold text-pink-400">#{num}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 2 - Scroll Left */}
          <div className="absolute top-44 left-0 right-0 h-40 flex animate-scroll-left">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 px-3">
                {[9, 10, 11, 12, 13, 14, 15, 16].map((num) => (
                  <div
                    key={`row2-${setIndex}-${num}`}
                    className="flex-shrink-0 w-32 h-36 bg-white p-2 shadow-lg transform"
                    style={{ transform: `rotate(${(num % 3 - 1) * -6}deg)` }}
                  >
                    <div className="w-full h-28 bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                      <img 
                        src="/2.jpeg" 
                        className="w-full h-full object-cover" 
                        alt={`Polaroid ${num}`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-pink-200', 'to-pink-300');
                        }}
                      />
                    </div>
                    <p className="text-xs text-center mt-1 font-bold text-pink-400">#{num}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 3 - Scroll Right */}
          <div className="absolute top-[22rem] left-0 right-0 h-40 flex animate-scroll-right-slow">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 px-3">
                {[17, 18, 19, 20, 21, 22, 23, 24].map((num) => (
                  <div
                    key={`row3-${setIndex}-${num}`}
                    className="flex-shrink-0 w-32 h-36 bg-white p-2 shadow-lg transform"
                    style={{ transform: `rotate(${(num % 3 - 1) * 7}deg)` }}
                  >
                    <div className="w-full h-28 bg-gradient-to-br from-pink-300 to-pink-200 flex items-center justify-center">
                      <img 
                        src="/3.jpeg" 
                        className="w-full h-full object-cover" 
                        alt={`Polaroid ${num}`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-pink-200', 'to-pink-300');
                        }}
                      />
                    </div>
                    <p className="text-xs text-center mt-1 font-bold text-pink-400">#{num}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 4 - Scroll Left */}
          <div className="absolute bottom-44 left-0 right-0 h-40 flex animate-scroll-left-slow">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 px-3">
                {[25, 26, 27, 28, 29, 30, 31, 32].map((num) => (
                  <div
                    key={`row4-${setIndex}-${num}`}
                    className="flex-shrink-0 w-32 h-36 bg-white p-2 shadow-lg transform"
                    style={{ transform: `rotate(${(num % 3 - 1) * -5}deg)` }}
                  >
                    <div className="w-full h-28 bg-gradient-to-br from-pink-100 to-pink-300 flex items-center justify-center">
                      <img 
                        src="/5.jpeg" 
                        className="w-full h-full object-cover" 
                        alt={`Polaroid ${num}`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-pink-200', 'to-pink-300');
                        }}
                      />
                    </div>
                    <p className="text-xs text-center mt-1 font-bold text-pink-400">#{num}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 5 - Scroll Right */}
          <div className="absolute bottom-0 left-0 right-0 h-40 flex animate-scroll-right">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 px-3">
                {[33, 34, 35, 36, 37, 38, 39, 40].map((num) => (
                  <div
                    key={`row5-${setIndex}-${num}`}
                    className="flex-shrink-0 w-32 h-36 bg-white p-2 shadow-lg transform"
                    style={{ transform: `rotate(${(num % 3 - 1) * 6}deg)` }}
                  >
                    <div className="w-full h-28 bg-gradient-to-br from-pink-200 to-pink-100 flex items-center justify-center">
                      <img 
                        src="/6.jpeg" 
                        className="w-full h-full object-cover" 
                        alt={`Polaroid ${num}`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-pink-200', 'to-pink-300');
                        }}
                      />
                    </div>
                    <p className="text-xs text-center mt-1 font-bold text-pink-400">#{num}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {hearts.map(heart => (
          <div
            key={heart.id}
            className="absolute bottom-0 animate-float opacity-30 z-20"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`
            }}
          >
            <Heart className="text-pink-400" fill="currentColor" size={16} />
          </div>
        ))}

        {collagePhotos.map(photo => (
          <div
            key={photo.id}
            className={`hidden md:block absolute ${photo.size} opacity-20 blur-[2px] z-10`}
            style={{
              top: photo.top,
              bottom: photo.bottom,
              left: photo.left,
              right: photo.right,
              transform: `rotate(${photo.rotation}deg)`,
            }}
          >
            <div className="w-full h-full bg-white p-2 shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <Heart className="text-pink-300" fill="currentColor" size={24} />
              </div>
            </div>
          </div>
        ))}

        <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-12">
          <div className={`max-w-5xl w-full transition-all duration-1000 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            
            <div className="text-center mb-8">
              <div className="inline-block relative">
                <Camera className="text-pink-400 mx-auto mb-4 animate-bounce-slow" size={48} />
                <h1 className="text-6xl md:text-8xl font-script text-pink-500 mb-2" style={{
                  fontFamily: 'cursive',
                  textShadow: '3px 3px 6px rgba(255,182,193,0.3)'
                }}>
                  Happy Anniversary!
                </h1>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-12 h-1 bg-pink-400 rounded"></div>
                  <Heart className="text-pink-400" fill="currentColor" size={20} />
                  <div className="w-12 h-1 bg-pink-400 rounded"></div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="bg-white p-6 md:p-8 shadow-2xl max-w-2xl mx-auto border-8 border-white" style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,192,203,0.1)'
              }}>
                <div className="relative mb-6 bg-gradient-to-br from-pink-100 to-pink-200 p-4 rounded-lg">
                  <div className="absolute -top-3 -right-3 bg-pink-500 text-white rounded-full p-2">
                    <Gift size={20} />
                  </div>
                  <div className="absolute -top-3 -left-3 bg-pink-400 text-white rounded-full p-2">
                    <Sparkles size={20} />
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border-2 border-pink-300">
                    <p className="text-xl md:text-2xl text-pink-600 font-bold text-center mb-4">
                      Sayang, sumpahh maaf banget pliss klo aku emng kelupaan banget ancies aku emng pikunan banget banget banget,kamuuu mau maafin aku gaa klo aku bikinin kamu ginian maaf yaa aku ga bisa ngasih kamu yang lebih ancies tapi usahaain aku bakal ngasih kamu yang terbaik kok for youu and youu alwayss to you my kekasih ku sayang kuh cintakuh maniskuh yang imup nya akuh yang amayy aku cintai sayangi dan tujuan hidup nya akuh
                    </p>
                    <p className="text-lg md:text-xl text-pink-500 text-center mb-4">
                    Jujur aku ga bakalan ngulangin lagi plikss jadii maafin aku yaa sayang kuh maaf banget banget banget banget 
                    </p>
                    <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700 text-center mb-4">
                      I LOVE YOU SO MUCH! 💕
                    </p>
                    <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed">
                      SEMOGAAA KITAA DI TAHUN ESOK AKU GA LUPAA HARI ANIVERSERY LAGI PLISSSS 🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺💐💐💐💐💐💐💐💐💐💐💐💐🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-lg md:text-xl text-gray-600 italic" style={{fontFamily: 'cursive'}}>
                    "to one of the best people you could ever meet. I love and appreciate you more than you will ever know!" ❤️
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-300 rounded-full blur-xl opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>

            <div className="mt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-2" style={{fontFamily: 'cursive'}}>
                  Our Beautiful Moments 📸
                </h2>
              </div>

              <div className="relative bg-gray-900 p-4 rounded-lg shadow-xl overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gray-900 flex flex-col justify-around py-2">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white rounded-full mx-auto"></div>
                  ))}
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-gray-900 flex flex-col justify-around py-2">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white rounded-full mx-auto"></div>
                  ))}
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 px-6 scrollbar-hide">
                  {memoryPhotos.map((photo) => (
                    <div key={photo.id} className="flex-shrink-0 group">
                      <div className="w-48 h-64 bg-white p-2 transform hover:scale-105 transition-transform duration-300 relative">
                        <div className="w-full h-48 bg-white relative overflow-hidden">
                          <img 
                            src={photo.src} 
                            className="w-full h-full object-cover" 
                            alt={photo.caption}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-pink-100', 'to-pink-200');
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-pink-300/30 to-transparent pointer-events-none"></div>
                          <div className="absolute bottom-2 left-2 right-2 text-center">
                            <p className="text-xs text-pink-600 font-bold bg-white/80 rounded px-2 py-1">
                              {photo.caption}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 text-center">
                          <p className="text-xs font-bold text-gray-700">Frame {photo.id}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-2">
                  <p className="text-white text-xs font-mono">► KODAK 400 | ISO 400 | 35mm ◄</p>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{animationDelay: '0.9s'}}>
              {[
                { id: 1, src: '/11.jpeg', label: 'You & Me', rotation: -3 },
                { id: 2, src: '/12.jpeg', label: 'Always', rotation: 2 },
                { id: 3, src: '/13.jpeg', label: 'Forever', rotation: -2 },
                { id: 4, src: '/14.jpeg', label: 'Together', rotation: 3 },
              ].map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                  style={{ transform: `rotate(${item.rotation}deg)` }}
                >
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 aspect-square flex items-center justify-center mb-2 overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.label} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <p className="text-center text-sm font-bold text-pink-600">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center animate-fade-in" style={{animationDelay: '1.2s'}}>
              <div className="inline-block bg-white px-8 py-4 rounded-full shadow-lg border-4 border-pink-200">
                <p className="text-xl md:text-2xl font-bold text-pink-600">
                  SG INN GAAA!😤😤😤😠😠🥵🥵
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Music control button - Fixed position */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-pink-500 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        )}
      </button>
    </>
  );
}

// Intro/Landing Page
export default function AnniversaryWebsite() {
  const [showAnniversary, setShowAnniversary] = useState(false);
  const [giftShake, setGiftShake] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    const shakeInterval = setInterval(() => {
      setGiftShake(true);
      setTimeout(() => setGiftShake(false), 500);
    }, 3000);

    return () => clearInterval(shakeInterval);
  }, []);

  // Function to play music
  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  };

  // Toggle music
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleOpenGift = () => {
    playMusic(); // Play music when opening gift
    setShowAnniversary(true);
  };

  if (showAnniversary) {
    return <AnniversaryPage audioRef={audioRef} isPlaying={isPlaying} toggleMusic={toggleMusic} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Background Music */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
      >
        <source src="/music.mp3" type="audio/mpeg" />
        <source src="/music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating hearts background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            <Heart 
              className="text-pink-300 opacity-20" 
              fill="currentColor" 
              size={20 + Math.random() * 30} 
            />
          </div>
        ))}
      </div>

      {/* Main intro content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        
        {/* Animated gift box */}
        <div className={`inline-block mb-8 ${giftShake ? 'animate-shake' : ''}`}>
          <div className="relative">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 border-8 border-white">
              <Gift className="text-white" size={80} />
            </div>
            
            {/* Sparkles around gift */}
            <Sparkles className="absolute -top-2 -right-2 text-pink-400 animate-pulse" size={32} />
            <Sparkles className="absolute -bottom-2 -left-2 text-pink-500 animate-pulse" style={{animationDelay: '0.5s'}} size={28} />
            <Heart className="absolute top-0 -left-4 text-pink-400 animate-bounce-slow" fill="currentColor" size={24} />
            <Heart className="absolute -top-4 right-0 text-pink-500 animate-bounce-slow" fill="currentColor" size={20} style={{animationDelay: '0.3s'}} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700 mb-6 animate-fade-in" style={{
          fontFamily: 'cursive',
          textShadow: '2px 2px 4px rgba(255,182,193,0.2)'
        }}>
          Ada Sesuatu Buat Kamu...
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-pink-600 mb-4 font-semibold animate-fade-in" style={{animationDelay: '0.3s'}}>
          Sayang... ❤️
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
          Aku tau aku sempet lupa hal yang penting...
          <br />
          Tapi aku udah siapin sesuatu buat kamu! 💝
        </p>

        {/* Open button */}
        <button
          onClick={handleOpenGift}
          className="group relative px-12 py-5 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xl md:text-2xl font-bold rounded-full shadow-2xl hover:shadow-pink-300 hover:scale-110 transition-all duration-300 animate-fade-in border-4 border-white"
          style={{animationDelay: '0.9s'}}
        >
          <span className="relative z-10 flex items-center gap-3">
            Buka Hadiah 🎁
            <Heart className="animate-heartbeat" fill="currentColor" size={24} />
          </span>
          
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
        </button>

        {/* Bottom hint */}
        <p className="mt-8 text-pink-400 text-sm animate-bounce-slow italic">
          ↑ Klik di sini ya sayang ↑
        </p>

      </div>

      <style>{`
        @keyframes float-random {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) translateX(50px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-5deg); }
          20%, 40%, 60%, 80% { transform: rotate(5deg); }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.15);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) scale(1.3);
            opacity: 0;
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes scroll-right-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes scroll-left-slow {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-float-random {
          animation: float-random linear infinite;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right-slow {
          animation: scroll-right-slow 50s linear infinite;
        }

        .animate-scroll-left-slow {
          animation: scroll-left-slow 50s linear infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .font-script {
          font-family: 'Brush Script MT', cursive;
        }
      `}</style>
    </div>
  );
}