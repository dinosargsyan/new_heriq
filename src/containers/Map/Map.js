import React from 'react';
import './Map.scss';
import Wallpaper from '../../components/Img/wallpaper.jpg';
import Statistic from '../Statistic/Statistic';


const Map = () => {
    return (
        <div className="app-map">
            <img src={Wallpaper} to={Statistic} />
        </div>
    )
}

export default Map
