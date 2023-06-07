import React from 'react';
import Donor from '../../components/Donor/Donor';
import UNFPA from '../../components/Img/unfpa_logo.png';
import Miasin from '../../components/Img/miasin_logo.png';
import EU from '../../components/Img/eu_logo.png';
import Women from '../../components/Img/women_logo.png';
import ADC from '../../components/Img/adc_logo.png';
import './Donors.scss';

const Donors = () => {
    return (
        <div className="donors">
            <Donor children={UNFPA} to={"https://armenia.unfpa.org/hy"} />
            <Donor children={Miasin} to={"https://tinyurl.com/2p848yyf"} />
            <Donor children={EU} to={"https://european-union.europa.eu/index_en"} />
            <Donor children={Women} to={"https://www.unwomen.org/en"}/>
            <Donor children={ADC} to={"https://armavirdc.org/"} />
        </div>
    )
}

export default Donors;
