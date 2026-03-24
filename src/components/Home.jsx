import React, { useState } from 'react';
import { Flame, Mountain, ArrowRight } from 'lucide-react';

const routines = {
  karina: {
    id: 'karina',
    title: '카리나 고강도 다이어트',
    desc: '땀복을 입고 진행하는 고강도 유산소 + 근력 루틴. 오늘 의욕이 넘친다면 도전해보세요!',
    icon: <Flame size={28} color="#b026ff" />
  },
  mountain: {
    id: 'mountain',
    title: '마이 마운틴 걷기',
    desc: '경사도를 높여 걷는 저충격 힐링 유산소. 조금 지친 오늘, 부담 없이 땀 흘리기 좋아요.',
    icon: <Mountain size={28} color="#10b981" />
  }
};

export default function Home({ onStart }) {
  const [condition, setCondition] = useState(null);

  const recommendedId = condition === 'good' ? 'karina' : condition === 'tired' ? 'mountain' : null;

  return (
    <div className="container" style={{ justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '34px', letterSpacing: '-0.5px' }}>
          Karina Diet
        </h1>
        <p className="subtitle" style={{ fontSize: '15px', marginTop: '8px' }}>당신의 완벽한 하루를 위한 맞춤 루틴</p>
      </div>

      <h2>오늘 컨디션은 어떤가요?</h2>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
        <button 
          className={`btn-secondary ${condition === 'good' ? 'animate-pop' : ''}`}
          style={{ 
            borderColor: condition === 'good' ? 'var(--accent-purple)' : '', 
            background: condition === 'good' ? 'rgba(176, 38, 255, 0.1)' : '',
            color: condition === 'good' ? '#fff' : '' 
          }}
          onClick={() => setCondition('good')}
        >
          🔥 의욕 충만해요
        </button>
        <button 
          className={`btn-secondary ${condition === 'tired' ? 'animate-pop' : ''}`}
          style={{ 
            borderColor: condition === 'tired' ? '#10b981' : '', 
            background: condition === 'tired' ? 'rgba(16, 185, 129, 0.1)' : '',
            color: condition === 'tired' ? '#fff' : '' 
          }}
          onClick={() => setCondition('tired')}
        >
          😌 조금 지쳐있어요
        </button>
      </div>

      {condition && (
        <div className="animate-pop" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <h2>오늘의 추천 루틴</h2>
          {Object.values(routines).map(r => {
            const isRecommended = r.id === recommendedId;
            return (
              <div 
                key={r.id} 
                className={`card ${isRecommended ? 'selected' : ''}`}
                onClick={() => onStart(r.id)}
              >
                {isRecommended && (
                  <div style={{ 
                    position: 'absolute', top: 0, right: 0, 
                    background: 'var(--accent-gradient)', fontSize: '12px', 
                    padding: '4px 14px', borderBottomLeftRadius: '16px', fontWeight: '800', letterSpacing: '0.5px' 
                  }}>
                    추천
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ background: 'var(--surface-light)', padding: '14px', borderRadius: '16px', display: 'flex' }}>
                    {r.icon}
                  </div>
                  <div style={{ flex: 1, paddingRight: '8px' }}>
                    <div className="card-title">{r.title}</div>
                    <div className="card-desc">{r.desc}</div>
                  </div>
                  <ArrowRight size={20} color={isRecommended ? 'var(--accent-purple)' : 'var(--text-secondary)'} />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
}
