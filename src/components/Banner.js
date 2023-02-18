import React, { useState, useEffect } from "react";
import tmdbAPI, { getMoviesLists } from '../tmdbAPI'
import './css/Banner.css'
import playIcon from '../medias/playIcon.png'

function Banner()
{
    const [ movieTitle, setMovieTitle ] = useState( '' )
    const [ movieOverview, setMovieOverview ] = useState( '' )
    const [ movieBackdrop, setMovieBackdrop ] = useState( '' )
    const [ movieYear, setMovieYear ] = useState( '' )
    const [ movieAverage, setMovieAverage ] = useState( '' )

    const imageHost = 'https://image.tmdb.org/t/p/original/'

    const fetchRandomMovie = async () =>
    {
        try
        {
            const API_KEY = 'fac2b2cff0a17ac53f4ba4e8cb64c341'
            const trendingPath = `/trending/all/week?api_key=${ API_KEY }&language=pt-BR`

            const trending = tmdbAPI.find(
                ( cat ) => cat.name == 'topRated'
            )

            const data = await getMoviesLists( trending.path )
            const movies = data?.results
            const randomIndex = Math.floor( Math.random() * movies.length )
            console.log( movies[ randomIndex ] );

            setMovieTitle( movies[ randomIndex ]?.title )
            setMovieOverview( movies[ randomIndex ].overview )
            setMovieBackdrop( movies[ randomIndex ].backdrop_path )
            setMovieYear( movies[ randomIndex ].release_date )
            setMovieAverage( movies[ randomIndex ].vote_average )

        } catch ( error )
        {
            console.log( 'fetchRandomMovie error: ', error );
        }
    }


    useEffect( () =>
    {
        fetchRandomMovie()
    }, [] )

    return (
        <>
            <div
                className="banner-container">

                <div className="banner-fadeVertical"></div>

                <div className="banner-info">
                    <h2 className="banner-title">{ movieTitle }</h2>

                    <div className="extras">
                        <p className="voteAverage">{ movieAverage.toString().slice( 0, 3 ) } pontos</p>
                        <p className="year">{ movieYear.slice( 0, 4 ) }</p>
                    </div>

                    <p className="banner-overview">{ movieOverview }</p>

                    <div className="banner-buttons">
                        <button>
                            <img width={ '20px' } src={ playIcon } />
                            Assistir</button>
                        <button>Mais Informações</button>
                    </div>
                </div>

                <div className="banner-image">
                    <img src={ `${ imageHost }${ movieBackdrop }` } />
                </div>

            </div>
        </>
    )
}

export default Banner