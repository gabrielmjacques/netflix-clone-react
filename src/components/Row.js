import React, { useState, useEffect } from 'react'
import { getMoviesLists } from '../tmdbAPI'
import './css/Row.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Row( props )
{
    const [ movies, setMovies ] = useState( [] )
    const [ scrollX, setScrollX ] = useState( 60 )
    const [ moviesLength, setMoviesLength ] = useState()
    const imageHost = 'https://image.tmdb.org/t/p/original/'

    const fetchMovies = async () =>
    {
        try
        {
            const data = await getMoviesLists( props.path )
            setMovies( data?.results )
            setMoviesLength( data?.results.length )

        } catch ( error )
        {
            console.log( 'fetchMovies error: ', error );
        }
    }

    const handleArrowLeft = () =>
    {
        let x = scrollX + Math.round( window.innerWidth / 3 )
        if ( x > 60 )
        {
            x = 60
        }

        setScrollX( x )
        console.log( moviesLength );
    }

    const handleArrowRight = () =>
    {
        let x = scrollX - Math.round( window.innerWidth / 3 )
        let moviesWidth = moviesLength * 150
        if ( ( window.innerWidth - moviesWidth ) > x )
        {
            x = ( window.innerWidth - moviesWidth ) - 70
        }

        setScrollX( x )
    }


    useEffect( () =>
    {
        fetchMovies( props.path )
    }, [ props.path ] )

    return (
        <>
            <div className='row-container'>
                <h2 className='row-header'>{ props.title }</h2>
                <div className='row-main'>

                    <div
                        className='arrow-left'
                        onClick={ () => handleArrowLeft() }>
                        <NavigateBeforeIcon
                            style={ { fontSize: 50 } } />
                    </div>

                    <div
                        className='arrow-right'
                        onClick={ () => handleArrowRight() }>
                        <NavigateNextIcon
                            style={ { fontSize: 50 } } />
                    </div>

                    <div style={ { marginLeft: scrollX, transitionDuration: '0.5s' } }>

                        <div
                            className='row-cards'>
                            { movies.map( ( movie ) =>
                            {
                                return <img
                                    key={ movie.id }
                                    className={ `card-image` }
                                    src={ `${ imageHost }${ movie.poster_path } ` }
                                    alt={ movie.name }
                                />
                            } ) }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}