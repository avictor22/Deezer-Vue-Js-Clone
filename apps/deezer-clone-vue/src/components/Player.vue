<script lang='ts' setup>
	import { storeToRefs } from 'pinia';
	import { usePlayerStore } from '../store';

	const store = usePlayerStore()
	const { currentTrack } = storeToRefs(store)

</script>

<template>
	<div class='player'>
		<p v-if='currentTrack === null'>
			You don't have any track to play
		</p>
		<template v-else>
			<p>{{ currentTrack.title }}</p>
<!--			autoplay-->
			<audio  controls :src='currentTrack.preview'></audio>
		</template>

	</div>
</template>



<style lang='scss' scoped>
	.player {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

</style>