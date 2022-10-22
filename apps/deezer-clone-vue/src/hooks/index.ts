import { useQuery } from 'vue-query';


export function usePlaylist() {

	const { data: playlists, isLoading } = useQuery('playlists',
		() => fetch('http://localhost:8000/playlists').then((resp) => resp.json()),
		{
			staleTime: 60 * 1000,
			refetchInterval: 120 * 1000,
		},
	)

	return {playlists, isLoading }
}