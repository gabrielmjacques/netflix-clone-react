const API_KEY = 'fac2b2cff0a17ac53f4ba4e8cb64c341'

const categories = [
    {
        title: 'trending',
        title: 'Em Alta',
        path: `/trending/all/week?api_key=${ API_KEY }&language=pt-BR`,
        isLarge: true
    },
    {
        title: 'topRated',
        title: 'Populares',
        path: `/movie/top_rated?api_key=${ API_KEY }&language=pt-BR`,
        isLarge: false
    },
    {
        title: 'originals',
        title: 'Originais Netflix',
        path: `/discover/tv?api_key=${ API_KEY }&with_networks=213`,
        isLarge: false
    },
    {
        title: 'comedy',
        title: 'Comédias',
        path: `/discover/tv?api_key=${ API_KEY }&with_genres=35`,
        isLarge: false
    },
    {
        title: 'documentaries',
        title: 'Documentários',
        path: `/discover/tv?api_key=${ API_KEY }&with_genres=99`,
        isLarge: false
    },
    {
        title: 'romance',
        title: 'Romances',
        path: `/discover/tv?api_key=${ API_KEY }&with_genres=10759`,
        isLarge: false
    }
]

export default categories

export const getMoviesLists = async ( path ) =>
{
    try
    {
        const URL = `https://api.themoviedb.org/3${ path }`

        let response = await fetch( URL )
        return await response.json()

    } catch ( error )
    {
        console.log( 'getMoviesLists error', error );
    }
}