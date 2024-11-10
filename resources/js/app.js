import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MasterComponent from './components/MasterComponent.vue';
import router from './router/index'

const app = createApp({
    components: {
        MasterComponent,
    }
});

app.use(router);
app.mount('#app');