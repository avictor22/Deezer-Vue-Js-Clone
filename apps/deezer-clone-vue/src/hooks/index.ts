import { useQuery } from 'vue-query';


export function usePlaylists() {

	//Mettre en cache le retour d'appelle de l'API Deezer
	//Rendu renouvelable toutes les 60 secondes
	// Sinon se relance toutes les 2 minutes histoire de capter des changements

	//Retour des 20 premieres playlist proposer par Deezer
	const { data: playlists, isLoading } = useQuery('playlists',
		() => fetch('http://localhost:8000/playlists').then((resp) => resp.json()),
		{
			staleTime: 60 * 1000,
			refetchInterval: 120 * 1000,
		},
	)

	return { playlists, isLoading }
}

//Rechercher une playlist via son ID
export function usePlaylist(id: number) {

	const { data: playlist, isLoading } = useQuery(`playlists/${id}`,
		() => fetch(`http://localhost:8000/playlists/${id}`).then((resp) => resp.json()),
		{
			staleTime: 60 * 1000,
		},
	)

	return { playlist, isLoading }
}