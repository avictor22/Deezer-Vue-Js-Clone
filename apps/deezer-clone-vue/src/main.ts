import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	routes: [
		{
			path: '/playlists/:id',
			//Code splitting -> Charger a l'appel de la route
			component: import('./pages/PlayListView.vue'),
		},
		{
			path: '/',
			component: import('./pages/PlayListListView.vue'),
		},
	],
	history: createWebHistory(import.meta.env.BASE_URL),
})

const app = createApp(App)
app.use(router)
app.mount('#app')
