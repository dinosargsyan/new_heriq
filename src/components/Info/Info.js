import React from 'react';
import { useTranslation } from 'react-i18next';
import team_building from '../Img/team_building.svg';
import energizer from '../Img/energizer.svg';
import Button from 'react-bootstrap/Button';
import './info.scss';

import { t } from 'i18next';

const Info = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className='info'>
                <img src={energizer} />
                {/* <span className='info_span'>Էներջայզերները թարմեցնող վարժություններ են,
                    որոնք օգտագործվում են սեմինարներում և խմբային իրավիճակներում՝
                    օգնելու մասնակիցներին լինել ավելի զգոն և ակտիվ․
                    դրանք կարող են լինել նաև մարդկանց միմյանց ճանաչելու
                    և հասկանալու կարևոր միջոց։ Գոյություն ունեն տարբեր տևողության,
                    բարդության, ջանքերի և հնարամտությունների կիրառմամբ էներջայզերներ։

                </span> */}
                <span className='info_span'>
                    {t('energizer_description')}
                </span>
            </div>
            <div className='info_second'>
                {/* <span className='info_second_span'>
                   
                    


                </span> */}
                {/* <img src={team_building} /> */}
                <span className='info_second_span'>
                   
                {t('team_buildings_description')}


                </span>
                <img src={team_building} />
            </div>
            {/* <div className='info_third'>
                <span className='info_third_span'>
                    {t('energizer_description')}
                </span>
            </div> */}
        </>
    )
}

export default Info;
