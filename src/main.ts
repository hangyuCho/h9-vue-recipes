import { defineCustomElement } from 'vue'
import HomeView from './views/HomeView.vue'

// Vue 컴포넌트를 웹 컴포넌트로 변환
const VueAppElement = defineCustomElement(HomeView)

// 웹 컴포넌트 등록
if (!customElements.get('recipe-home')) {
  customElements.define('recipe-home', VueAppElement)
}

