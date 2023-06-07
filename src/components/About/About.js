import React from 'react';
import i18next from 'i18next';
import {t} from 'i18next';
import './About.scss';


const About = () => {
    return (
        
        <div className='about'>
           <span className='title'>{t('about_us1')} </span>
<br></br>
<br></br>
           <span>{t('about_us2')}<a href="https://tntk.tartu.ee/en/tartu-noorsootoo-keskus/"> Tartu Youth Work Centre</a>-ի, {t('about_us3')}  <a href="https://robotikosmokykla.lt/" >Robotikos Mokykla</a>-ի, {t('about_us4')} <a href="https://armavirdc.org">{t('adc')}</a> {t('about_us5')} <a href="https://twitter.com/EuroFrc">EuroFRC</a> {t('cooperation')}</span>

<br></br>
<br></br>

        </div>
    )
}

export default About;
