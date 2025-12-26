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
    quote: "나를 막을 수 있는 사람은 없다.",
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
  },

  // 5. 아드리안 뉴이 (엔지니어)
  'adrian-newey': {
    id: 'adrian-newey',
    name: 'ADRIAN NEWEY',
    nickname: 'The Wind Whisperer',
    team: 'Williams / McLaren / Red Bull',
    country: 'United Kingdom',
    heroImage: '/newey.jpg', 
    quote: "나는 공기의 흐름을 볼 수 있다.",
    stats: {
      championships: '25', // 드라이버+컨스트럭터 통합
      wins: '200+',
      podiums: 'Legend'
    },
    description: "속도 과학의 아인슈타인. <br/> 윌리엄스, 맥라렌, 레드불을 거치며 F1카의 교과서를 만든 천재 엔지니어. <br/> 그가 손을 댄 차는 언제나 가장 빨랐으며, 세나, 만셀, 베텔, 베르스타펜 등 수많은 챔피언을 탄생시켰다.",
    timeline: [
      { year: '1992', event: '윌리엄스 FW14B, 압도적 우승' },
      { year: '1998', event: '맥라렌 MP4-13, 하키넨 챔피언 등극' },
      { year: '2010', event: '레드불 RB6, 첫 컨스트럭터 챔피언' },
      { year: '2023', event: '레드불 RB19, 역사상 가장 압도적인 시즌' }
    ],
    videoId: 'vaai8JPIeu0', 
    color: 'text-blue-400'
  },

  // 6. 로스 브런 (엔지니어)
  'ross-brawn': {
    id: 'ross-brawn',
    name: 'ROSS BRAWN',
    nickname: 'The Mastermind',
    team: 'Ferrari / Brawn GP / Mercedes',
    country: 'United Kingdom',
    heroImage: '/brawn.jpg', 
    quote: "가장 빠른 차가 이기는 게 아니라, 끝까지 달리는 차가 이긴다.",
    stats: {
      championships: '16',
      wins: '100+',
      podiums: 'Legend'
    },
    description: "슈마허의 페라리 왕조를 설계한 천재 전략가이자 엔지니어. <br/> 2009년, 자신의 이름을 딴 'Brawn GP' 팀을 창단해 1년 만에 기적 같은 우승을 차지한 전설적인 인물.",
    timeline: [
      { year: '1994', event: '베네통에서 슈마허와 첫 우승' },
      { year: '2000', event: '페라리 황금기의 시작' },
      { year: '2009', event: '브라운 GP 창단 및 챔피언 달성' },
      { year: '2017', event: 'F1 모터스포츠 관리 디렉터 취임' }
    ],
    videoId: 'jt0egAofGTs', 
    color: 'text-red-500'
  },

  // 7. 고든 머레이 (엔지니어)
  'gordon-murray': {
    id: 'gordon-murray',
    name: 'GORDON MURRAY',
    nickname: 'The Innovator',
    team: 'Brabham / McLaren',
    country: 'South Africa',
    heroImage: '/murray.jpg', 
    quote: "디자인은 단순할수록 완벽하다.",
    stats: {
      championships: '5',
      wins: '50+',
      podiums: 'Legend'
    },
    description: "F1 역사상 가장 혁신적인 설계를 보여준 디자이너. <br/> 팬카(Fan Car)로 불리는 BT46B와 전설적인 맥라렌 MP4/4를 설계했으며, 로드카 맥라렌 F1의 아버지이기도 하다.",
    timeline: [
      { year: '1978', event: '브라밤 BT46B (팬카) 논란과 우승' },
      { year: '1981', event: '피케와 함께 첫 챔피언' },
      { year: '1988', event: '맥라렌 MP4/4, 16전 15승 신화' },
      { year: '1992', event: '맥라렌 F1 로드카 공개' }
    ],
    videoId: 'hPLtcdl07l0',
    color: 'text-gray-400'
  },

  // 8. 크리스티안 호너 (감독)
  'christian-horner': {
    id: 'christian-horner',
    name: 'CHRISTIAN HORNER',
    nickname: 'The Boss',
    team: 'Red Bull Racing',
    country: 'United Kingdom',
    heroImage: '/horner.jpg', 
    quote: "위험을 감수하지 않으면 샴페인을 마실 수 없다.",
    stats: {
      championships: '13',
      wins: '113+',
      podiums: '260+'
    },
    description: "레드불 레이싱의 심장. <br/> 에너지 음료 회사를 세계 최고의 레이싱 팀으로 만든 최연소 팀 감독. <br/> 베텔과 베르스타펜이라는 두 명의 천재를 발굴해 왕조를 건설했다.",
    timeline: [
      { year: '2005', event: '레드불 레이싱 최연소 감독 취임' },
      { year: '2010', event: '첫 더블 챔피언 달성 (베텔)' },
      { year: '2021', event: '메르세데스 왕조를 무너뜨린 우승' },
      { year: '2023', event: 'F1 역사상 가장 압도적인 시즌 지휘' }
    ],
    videoId: 'cqKKy429GgM',
    color: 'text-blue-800'
  },
  'rory-byrne': {
    id: 'rory-byrne',
    name: 'RORY BYRNE',
    nickname: 'The Silent Genius',
    team: 'Benetton / Ferrari',
    country: 'South Africa',
    heroImage: '/byrne.jpg', 
    quote: "혁명보다는 진화가 낫다. (Evolution not Revolution)",
    stats: {
      championships: '7',
      wins: '99',
      podiums: 'Legend'
    },
    description: "미하엘 슈마허의 모든 챔피언십 우승(7회)을 함께한 전설적인 엔지니어. <br/> 본래 화학자 출신으로 소재에 대한 이해도가 남달랐으며, 로스 브런과 함께 '페라리 황금기'를 이끌었다. <br/> 그가 설계한 'Ferrari F2004'는 아직도 F1 역사상 가장 완벽하고 빠른 머신 중 하나로 꼽힌다.",
    timeline: [
      { year: '1991', event: '베네통 수석 디자이너 취임' },
      { year: '1994', event: '베네통 B194, 슈마허 첫 우승' },
      { year: '1997', event: '페라리 이적, 드림팀 결성' },
      { year: '2004', event: 'F2004, 18전 15승 압도적 기록' }
    ],
    videoId: 'DFMXzjKOUAc', 
    color: 'text-red-700'
  }
};