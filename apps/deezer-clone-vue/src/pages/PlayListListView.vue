<script lang='ts' setup>

	import { usePlaylist } from '../hooks'

	const { playlists, isLoading } = usePlaylist()

</script>

<template>
	<p v-if='isLoading'> Loading . . . </p>
	<ul v-else>
		<li v-for='playlist in playlists.data'>
			<router-link :to="`/playlists/${playlist.id}`">{{ playlist.title }}</router-link>
		</li>
	</ul>
</template>



<style scoped>

</style>