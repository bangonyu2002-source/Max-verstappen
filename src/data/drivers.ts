export interface Driver {
  id: string;
  name: string;
  nickname: string;
  team: string;
  country: string;
  heroImage: string;
  quote: string;
  stats: {
    championships: string;
    wins: string;
    podiums: string;
  };
  description: string;
  timeline: { year: string; event: string }[];
  videoId: string;
  color: string;
}

export const DRIVERS: Record<string, Driver> = {
  // 1. 아일톤 세나
  'ayrton-senna': {
    id: 'ayrton-senna',
    name: 'AYRTON SENNA',
    nickname: 'Magic',
    team: 'McLaren / Williams',
    country: 'Brazil',
    heroImage: '/senna.jpg', 
    quote: "나는 이기기 위해 달린다. 2등, 3등을 하기 위해서가 아니다.",
    stats: {
      championships: '3',
      wins: '41',
      podiums: '80'
    },
    description: "F1 역사상 가장 빠르고, 가장 성스러웠던 드라이버. <br/> 빗속의 모나코 그랑프리에서 보여준 그의 주행은 물리 법칙을 거스르는 듯했다. <br/> 그의 비극적인 사고는 F1의 안전 기준을 영원히 바꿔놓았다.",
    timeline: [
      { year: '1984', event: 'F1 데뷔 (Toleman)' },
      { year: '1988', event: '첫 월드 챔피언 달성 (McLaren)' },
      { year: '1990', event: '프로스트와의 충돌, 두 번째 챔피언' },
      { year: '1994', event: '이몰라 서킷에서 영면' }
    ],
    videoId: 'pMfOcNZOfvc',
    color: 'text-yellow-400'
  },

  // 2. 미하엘 슈마허
  'michael-schumacher': {
    id: 'michael-schumacher',
    name: 'MICHAEL SCHUMACHER',
    nickname: 'The Red Baron',
    team: 'Ferrari',
    country: 'Germany',
    heroImage: '/Michael.jpg',
    quote: "나는 항상 내가 한계를 넘을 수 있다고 믿었다.",
    stats: {
      championships: '7',
      wins: '91',
      podiums: '155'
    },
    description: "페라리의 붉은 황제. <br/> F1을 단순한 레이싱이 아닌 완벽한 기계적 승리로 만들었다. <br/> 미하엘이 없었다면 현대의 페라리 왕조도 없었을 것이다.",
    timeline: [
      { year: '1991', event: '조던 팀에서 충격적인 데뷔' },
      { year: '1994', event: '베네통에서 첫 우승' },
      { year: '2000', event: '페라리에게 21년 만의 우승을 안기다' },
      { year: '2004', event: '7번째 월드 챔피언 달성' }
    ],
    videoId: 'CelApFIyy8A',
    color: 'text-red-600'
  },

  // 3. 루이스 해밀턴
  'lewis-hamilton': {
    id: 'lewis-hamilton',
    name: 'LEWIS HAMILTON',
    nickname: 'Sir Lewis',
    team: 'Mercedes / Ferrari',
    country: 'United Kingdom',
    heroImage: '/Hamilton.jpg',
    quote: "Still I Rise. (그래도 나는 솟아오를 것이다)",
    stats: {
      championships: '7',
      wins: '105',
      podiums: '201'
    },
    description: "살아있는 전설이자 기록 파괴자. <br/> 미하엘 슈마허의 기록을 넘어선 유일한 남자. <br/> 단순한 드라이버를 넘어 패션과 문화의 아이콘이 되었으며, 2025년 페라리로의 이적은 세기를 놀라게 했다.",
    timeline: [
      { year: '2007', event: '맥라렌에서 충격적인 루키 시즌' },
      { year: '2008', event: '마지막 코너에서 극적인 첫 챔피언' },
      { year: '2013', event: '메르세데스로 이적, 전설의 시작' },
      { year: '2025', event: '새로운 도전, 스쿠데리아 페라리' }
    ],
    videoId: 'ehBkzd0cpb4',
    color: 'text-purple-500'
  },

  // 4. 막스 베르스타펜
  'max-verstappen': {
    id: 'max-verstappen',
    name: 'MAX VERSTAPPEN',
    nickname: 'The Lion',
    team: 'Red Bull Racing',
    country: 'Netherlands',
    heroImage: '/verstappen.jpg',
    quote: "나는 4등을 하려고 여기에 온 게 아니다.",
    stats: {
      championships: '3',
      wins: '61',
      podiums: '107'
    },
    description: "새로운 황제의 등극. <br/> F1 역사상 최연소 우승자이자, 압도적인 퍼포먼스로 서킷을 지배하는 현재 진행형 레전드. <br/> 공격적인 드라이빙 스타일과 흔들리지 않는 멘탈은 경쟁자들을 공포에 떨게 한다.",
    timeline: [
      { year: '2015', event: '17세의 나이로 F1 최연소 데뷔' },
      { year: '2016', event: '이적 후 첫 경기에서 최연소 우승' },
      { year: '2021', event: '아부다비의 기적, 해밀턴을 꺾고 첫 챔피언' },
      { year: '2023', event: '한 시즌 19승이라는 불멸의 기록 달성' }
    ],
    videoId: 'ZIsjp5cZ4N4',
    color: 'text-orange-500'
  }
};