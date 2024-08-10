import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import router from './router'
import PrimeVue from "primevue/config";
import 'primeicons/primeicons.css'
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';

import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';





const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(Button);
app.use(Avatar);
app.use(TreeTable);
app.use(Column);
app.mount('#app')
