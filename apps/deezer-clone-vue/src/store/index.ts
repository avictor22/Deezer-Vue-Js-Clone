import { defineStore } from 'pinia';

export const usePlayerStore = defineStore(
	'player',
	{
		state: () => ({
			currentTrack: null,
			tracksToPlay: new Set(),
		}),

		actions: {
			playTrack(track: any){
				this.currentTrack = track;
			},
		}
	}
)