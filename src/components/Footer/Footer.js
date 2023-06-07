import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './Footer.scss';
import { useTranslation } from 'react-i18next';
import Erasmus from "../Img/erasmus.png";
import {t} from "i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="app-footer">
            <div className='app-footer_about-us'>
                <span>
                    ։</span>
                <img className='erasmus' src={Erasmus} alt="footer" />
                    <span>{t('about_us_footer')}</span>
            </div>
            <div className="app-footer_copyright">
                {/* <span>Կայքը ստեղծվել է 2022 թվականին</span> */}
                <span>{t('copyright')}</span>
            </div>

            {/* <div className='app-footer_social'>
                <span>Մeզ կարող եք գտնել Facebook սոցիալական կայքում</span>
                <FacebookOutlinedIcon />

            </div> */}
        </div>
    )
}

export default Footer;
