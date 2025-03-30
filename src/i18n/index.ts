import { createI18n } from 'vue-i18n'

const messages = {
  ko: {
    recipes: {
      title: '커피 레시피',
      difficulty: '난이도',
      'difficulty.easy': '쉬움',
      'difficulty.medium': '보통',
      'difficulty.hard': '어려움',
      hoffmann: {
        name: '제임스 호프만 V60',
        description: '부드럽고 밸런스가 좋은 기본에 충실한 V60 레시피',
      },
      tetsu: {
        name: '테츠 카츠야 4:6 메소드',
        description: '산미와 단맛의 밸런스를 조절할 수 있는 4:6 메소드',
      },
      kalita: {
        name: '칼리타 웨이브',
        description: '안정적인 추출이 가능한 웨이브 드리퍼 레시피',
      },
      scottrao: {
        name: '스캇 라오',
        description: '블룸과 펄스 기법을 활용한 레시피',
      },
      bluebottle: {
        name: '블루보틀',
        description: '깔끔하고 밝은 산미가 특징적인 레시피',
      },
    },
  },
  ja: {
    recipes: {
      title: 'コーヒーレシピ',
      difficulty: '難易度',
      'difficulty.easy': '簡単',
      'difficulty.medium': '普通',
      'difficulty.hard': '難しい',
      hoffmann: {
        name: 'ジェームズホフマン V60',
        description: 'バランスの取れた基本的なV60レシピ',
      },
      tetsu: {
        name: 'テツカツヤ 4:6メソッド',
        description: '酸味と甘みのバランスを調整できる4:6メソッド',
      },
      kalita: {
        name: 'カリタウェーブ',
        description: '安定した抽出が可能なウェーブドリッパーレシピ',
      },
      scottrao: {
        name: 'スコットラオ',
        description: 'ブルームとパルス技法を活用したレシピ',
      },
      bluebottle: {
        name: 'ブルーボトル',
        description: 'クリーンで明るい酸味が特徴的なレシピ',
      },
    },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'ko',
  fallbackLocale: 'ja',
  messages,
})
