import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLock,
  faWandMagicSparkles,
  faMoon,
  faPause,
  faPlay,
  faPlus,
  faSun,
  faSyncAlt,
  faUndoAlt,
  faQuestion
} from '@fortawesome/free-solid-svg-icons'
import App from './app/app.vue'

library.add(
  faLock,
  faWandMagicSparkles,
  faMoon,
  faPause,
  faPlay,
  faPlus,
  faSun,
  faSyncAlt,
  faUndoAlt,
  faQuestion
)

createApp(App)
  .use(createPinia())
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
