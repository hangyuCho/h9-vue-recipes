# H9 Vue Recipes

Vue 3 based Web Component recipe component library.

Vue 3 기반의 Web Component 레시피 컴포넌트 라이브러리입니다.

Vue 3 ベースの Web Component レシピコンポーネントライブラリです。

## Features / 주요 기능 / 主な機能

- Web Component based component library
- Style isolation through Shadow DOM
- Support for ES Module and UMD formats
- Vue 3 Composition API support
- TypeScript based development

- Web Component 기반의 컴포넌트 라이브러리
- Shadow DOM을 통한 스타일 격리
- ES Module과 UMD 형식 지원
- Vue 3 Composition API 지원
- TypeScript 기반 개발

- Web Component ベースのコンポーネントライブラリ
- Shadow DOM によるスタイルの分離
- ES Module と UMD 形式のサポート
- Vue 3 Composition API のサポート
- TypeScript ベースの開発

## Tech Stack / 기술 스택 / 技術スタック

- Vue 3.5.13
- TypeScript
- Vite 6.2.1
- TailwindCSS 3.4.1
- Vue Router 4.5.0

## Installation / 설치 방법 / インストール方法

### npm
```bash
npm install h9-vue-recipes
```

### CDN
```html
<!-- ES Module -->
<script type="module" src="https://cdn.h-9.info/h9-vue-recipes.es.js"></script>

<!-- UMD -->
<script src="https://cdn.h-9.info/h9-vue-recipes.umd.js"></script>
```

## Usage / 사용 방법 / 使用方法

### Direct usage in HTML / HTML에서 직접 사용 / HTMLでの直接使用
```html
<recipe-home></recipe-home>
```

### Usage in React / React에서 사용 / Reactでの使用
```jsx
function App() {
  return (
    <div>
      <recipe-home></recipe-home>
    </div>
  );
}
```

### Usage in Angular / Angular에서 사용 / Angularでの使用
```typescript
@Component({
  template: '<recipe-home></recipe-home>'
})
export class AppComponent {}
```

## Development / 개발 / 開発

### Setup / 환경 설정 / 環境設定

```bash
# Install dependencies / 의존성 설치 / 依存関係のインストール
npm install

# Run development server / 개발 서버 실행 / 開発サーバーの実行
npm run dev

# Build / 빌드 / ビルド
npm run build

# Type check / 타입 체크 / 型チェック
npm run type-check

# Lint / 린팅 / リンティング
npm run lint

# Deploy / 배포 / デプロイ
npm run deploy
```

## TypeScript Support / TypeScript 지원 / TypeScript サポート

### Type Definitions / 타입 정의 / 型定義

The package includes TypeScript definitions in the following file:
- `h9-vue-recipes.es.d.ts`: Type definitions for ES Module format

패키지에는 다음 파일에 타입 정의가 포함되어 있습니다:
- `h9-vue-recipes.es.d.ts`: ES Module 형식용 타입 정의

パッケージには以下のファイルに型定義が含まれています：
- `h9-vue-recipes.es.d.ts`: ES Module 形式用の型定義

### Props Types / Props 타입 / Props の型

```typescript
interface RecipeHomeProps {
  // Access token retrieval function / 액세스 토큰 획득 함수 / アクセストークン取得関数
  getAccessToken: () => Promise<string>
}

// Usage example / 사용 예제 / 使用例
const props: RecipeHomeProps = {
  getAccessToken: async () => {
    return 'your-access-token'
  },
}
```

## Build Output / 빌드 결과물 / ビルド成果物

- `h9-vue-recipes.es.js`: ES Module format / ES Module 형식 / ES Module 形式
- `h9-vue-recipes.umd.js`: UMD format / UMD 형식 / UMD 形式
- `h9-vue-recipes.es.d.ts`: Type definitions for ES Module format / ES Module 형식용 타입 정의 / ES Module 形式用の型定義

Note: Styles are included within the Shadow DOM of the web component. No additional CSS file is required.

스타일은 웹 컴포넌트의 Shadow DOM 내부에 포함되어 있습니다. 별도의 CSS 파일이 필요하지 않습니다.

スタイルはウェブコンポーネントの Shadow DOM 内に含まれています。追加の CSS ファイルは必要ありません。

## Project Structure / 프로젝트 구조 / プロジェクト構造

```
.
├── src/                # Source files
├── public/            # Static files
├── .github/           # GitHub Actions
├── .vscode/           # VSCode settings
├── json-data/         # JSON data files
├── md-recipe/         # Markdown recipe files
└── ...config files    # Configuration files
```

## License / 라이센스 / ライセンス

MIT
