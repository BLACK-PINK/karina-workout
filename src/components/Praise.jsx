import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Crown, Home as HomeIcon } from 'lucide-react';

const messages = [
  "오늘도 해냈네요!\n자신과의 약속을 지킨 당신이\n가장 멋지고 빛납니다.",
  "정말 대단해요!\n땀 흘린 오늘이 쌓여\n원하는 완벽한 핏을 만들 거예요.",
  "수고했어요!\n오늘 당신이 한 운동이\n몸과 마음을 더 건강하게 만들었어요.",
  "완벽한 하루의 마무리네요!\n이제 푹 쉬고\n내일도 화이팅해요!"
];

export default function Praise({ onGoHome }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);

    const duration = 3500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#b026ff', '#ffffff', '#6d28d9']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#b026ff', '#ffffff', '#6d28d9']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="praise-container animate-pop" style={{ height: '100vh' }}>
      <Crown size={80} className="crown-icon" />
      <h1 className="praise-message" style={{ whiteSpace: 'pre-line' }}>
        {message}
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '15px', lineHeight: '1.5' }}>
        나를 위한 최고의 선물,<br/>오늘의 집중 다이어트 코스 완료!
      </p>
      
      <button 
        className="btn-secondary" 
        onClick={onGoHome} 
        style={{ width: 'auto', padding: '16px 32px', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10 }}
      >
        <HomeIcon size={20} />
        홈으로 돌아가기
      </button>
    </div>
  );
}
