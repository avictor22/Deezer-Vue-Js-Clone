<script lang="ts" setup>
	import { useQueryProvider } from 'vue-query';
	import Player from './components/Player.vue'

	useQueryProvider()

</script>

<template>
	<div class='container'>
		<main>
			<router-view/>
		</main>
		<aside></aside>
		<footer>
			<Player/>
		</footer>
	</div>
</template>

<style lang='scss' scoped>
	.container {
		display: grid;
		grid-template-areas: 'main aside' 'footer footer';
		grid-template-rows: 1fr 100px;
		grid-template-columns: 1fr 300px;
		height: 100vh;
		max-height: 100vh;
	}

	main {
		grid-area: main;
		max-height: 100%;
	}

	aside {
		grid-area: aside;
		border-left: 1px solid var(--darker-grey) ;
	}

	footer {
		grid-area: footer;
		border-top: 1px solid var(--darker-grey) ;
	}
</style>
