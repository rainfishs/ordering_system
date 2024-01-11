import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
if(document.getElementById('test-dom').value == '{{parm_value}}'){
    document.getElementById('test-dom').value = 'b11017000';
}
createApp(App).mount('#app')
