import React from 'react';
import loader from '../../public/images/loader.gif'

const LoadingPage = () => (
    <div className='loaderGif'>
        <img className="loader__image" src={loader} alt="Page loading gif"/>
    </div>
)

export default LoadingPage
