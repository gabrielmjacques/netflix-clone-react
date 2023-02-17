import React, { useState, useEffect } from 'react'
import { getMoviesLists } from '../tmdbAPI'
import './css/Row.css'

export default function Row( props )
{
    const [ movies, setMovies ] = useState( [] )
    const imageHost = 'https://image.tmdb.org/t/p/original/'

    const fetchMovies = async () =>
    {
        try
        {
            const data = await getMoviesLists( props.path )
            setMovies( data?.results )
            console.log( data );

        } catch ( error )
        {
            console.log( 'fetchMovies error: ', error );
        }
    }


    useEffect( () =>
    {
        fetchMovies( props.path )
    }, [ props.path ] )

    return (
        <>
            <div className='row-container'>
                <h2 className='row-header'>{ props.title }</h2>
                <div className='row-cards'>

                    { movies.map( ( movie ) =>
                    {
                        return <img
                            key={ movie.id }
                            className={ `card-image ${ props.isLarge && 'card-large' }` }
                            src={ `${ imageHost }${ movie.poster_path } `
                            }
                        />

                    } ) }

                </div>
            </div>
        </>
    )
}