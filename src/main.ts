import { defineCustomElement } from 'vue'
import HomeView from './views/HomeView.vue'
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)

// 앱 마운트
app.mount('#app')

// Vue 컴포넌트를 웹 컴포넌트로 변환
const VueAppElement = defineCustomElement(HomeView)

// 웹 컴포넌트 등록
if (!customElements.get('vue-app')) {
  customElements.define('vue-app', VueAppElement)
}

// 웹 컴포넌트가 로드될 때 실행되는 함수
function initializeWebComponent() {
  if (!customElements.get('vue-app')) {
    customElements.define('vue-app', VueAppElement)
  }

}

