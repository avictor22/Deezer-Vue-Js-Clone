<script lang='ts' setup>

	import { onMounted, ref } from 'vue';

	const playlists = ref([])

	onMounted(async () => {
		const response = await fetch('http://localhost:8000/playlists').then((resp) => resp.json())

		playlists.value = response.data
		console.log(playlists.value)
	})
	// Connection a API DEEZER
	// Aficher dans la vue
</script>

<template>
	<p v-if='playlists.length <= 0'> Loading . . . </p>
	<ul v-else>
		<li v-for='playlist in playlists'>
			<router-link :to="`/playlists/${playlist.id}`">{{ playlist.title }}</router-link>
		</li>
	</ul>
</template>



<style scoped>

</style>