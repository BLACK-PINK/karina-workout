import React, { useState } from 'react';
import { ChevronLeft, Check } from 'lucide-react';

const routineData = {
  karina: {
    title: '카리나 고강도 다이어트',
    exercises: [
      { id: 'k1', title: '땀복 착용하기', time: '운동 시작 전 준비', desc: '체온을 빠르게 높여 땀 배출과 칼로리 소모를 극대화합니다.' },
      { id: 'k2', title: '유산소 운동 (런닝머신)', time: '40분 ~ 1시간', desc: '가벼운 조깅 속도로 충분히 땀을 내며 심폐지구력을 기릅니다.' },
      { id: 'k3', title: '복근 및 코어 근력 운동', time: '15분', desc: '크런치, 플랭크 등 매트 운동으로 탄탄한 복부를 만듭니다.' },
      { id: 'k4', title: '전신 스트레칭', time: '10분', desc: '폼롤러를 이용해 뭉친 근육을 부드럽게 풀어주세요.' }
    ]
  },
  mountain: {
    title: '마이 마운틴 걷기 루틴',
    exercises: [
      { id: 'm1', title: '워밍업 평지 걷기', time: '경사도 0% / 속도 4.0 / 5분', desc: '가볍게 걸으며 굳은 몸에 열을 냅니다.' },
      { id: 'm2', title: '마이 마운틴 파워 워킹', time: '경사도 15~20% / 속도 4.5 / 20분', desc: '경사도를 높여 허벅지와 엉덩이에 강한 자극을 느끼며 걷습니다.' },
      { id: 'm3', title: '고강도 클라이밍 버티기', time: '경사도 25% / 속도 4.0 / 10분', desc: '가장 힘든 구간! 자세가 흐트러지지 않게 코어에 힘을 주고 걸으세요.' },
      { id: 'm4', title: '가벼운 쿨다운', time: '경사도 0% / 속도 3.0 / 5분', desc: '심박수를 서서히 낮추며 호흡을 정리합니다.' }
    ]
  }
};

export default function Routine({ routineType, onComplete, onBack }) {
  const [completedItems, setCompletedItems] = useState([]);
  const routine = routineData[routineType];

  const handleToggle = (id) => {
    setCompletedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const isAllDone = completedItems.length === routine.exercises.length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-color)' }}>
      <div className="top-nav">
        <button className="back-btn" onClick={onBack}>
          <ChevronLeft size={32} />
        </button>
        <div style={{ flex: 1, textAlign: 'center', marginRight: '32px', fontSize: '18px', fontWeight: '700' }}>
          오늘의 루틴
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '120px' }}>
        <h1 style={{ marginBottom: '8px', fontSize: '26px' }}>{routine.title}</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '15px' }}>
          차근차근 하나씩 달성해 보세요!
        </p>
        
        {routine.exercises.map((ex, index) => {
          const isDone = completedItems.includes(ex.id);
          return (
            <div 
              key={ex.id} 
              className={`check-item ${isDone ? 'done' : ''}`}
              onClick={() => handleToggle(ex.id)}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="check-box">
                {isDone && <Check size={18} color="#fff" strokeWidth={3} />}
              </div>
              <div className="check-content">
                <div className="check-title">{index + 1}. {ex.title}</div>
                <div className="check-info" style={{ color: isDone ? 'var(--text-secondary)' : 'var(--accent-purple)', marginBottom: '6px', fontWeight: '600' }}>
                  {ex.time}
                </div>
                <div className="check-info">{ex.desc}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '480px', padding: '24px', background: 'linear-gradient(transparent, var(--bg-color) 40%, var(--bg-color) 100%)', zIndex: 20 }}>
        <button 
          className="btn-primary flex justify-center items-center" 
          disabled={!isAllDone}
          onClick={onComplete}
        >
          {isAllDone ? '모든 운동 완료! 🎉' : `${completedItems.length} / ${routine.exercises.length} 개 완료`}
        </button>
      </div>
    </div>
  );
}
