import React from 'react';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import MoveFocusInside from 'react-focus-lock';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Logo from '../Img/youthworker_logo_png.png';
import './Header.scss';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import i18n from '../../i18n';
import LocaleContext from '../../LocaleContext';
import Flag from 'react-world-flags'
import i18next, { t } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';








// const Header = () => {

//     const FocusPage =({onClick}) =>{
//        <MoveFocusInside>
//             <Footer />
//             </MoveFocusInside>
//     }

// //    const  listenScrollEvent = (e)=>{
// //         if(window.scrollY>=100){

// //             setClassName('app-header_scrolled')
// //         }else{
// //             setClassName('app-header')
// //         }
// //     }
//  //   window.addEventListener('scroll',listenScrollEvent);
//     return (
//         <>

//         <div className={className}>

//             <nav className="app-header_nav">
//                 <div className='language'>
//             <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//          value={<Flag code={"am"}/>}
//           label="Age"
//          // onChange={}
//         >

//           <MenuItem onClick={() => changeLocale('pl')}>2019</MenuItem>
//           <MenuItem onClick={() => changeLocale('am')}>{<Flag code={"am"}/>}</MenuItem>


//         </Select>
//         </div>
//         <LocaleContext.Provider value={{locale, setLocale}}>
//                 {/* <div className="app-header_nav_logo">
//                 <Link to="/" onClick={FocusPage}> <img src={Logo} alt="logo" /></Link>
//                 </div> */}
//                 <ul className="app-header_nav_ul">
//                     <li><Link to="/" onClick={FocusPage}> {t('home_page')} </Link></li>
//                     <li><Link to="/activities" > {t('activities')} </Link></li>
//                     <li><Link to="/ngo_base"> {t('ngo_base')} </Link></li>
//                     {/* <li><Link to="/calendar"> {t('calendar')} </Link></li> */}
//                     <li><Link to="/about_us"> {t('about_us')} </Link></li>
//                     <li><Link to="/join_us"> {t('join_us')} </Link></li>
//                 </ul>
//         </LocaleContext.Provider>

//             </nav>
//         </div>
//         </>
//     )
// }

// export default Header;


function Header() {
  const { locale1 } = useContext(LocaleContext);
  const [locale, setLocale] = useState(i18n.language);
  const [language, setLanguage] = useState('');
  const [className, setClassName] = useState('app-header');
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  function changeLocale(event) {
    if (locale !== event.target.value) {
      i18n.changeLanguage(event.target.value);
      setLanguage(event.target.value);
    }
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="color-nav">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">{t('home_page')}</Nav.Link>

              <NavDropdown title={t('activities')} id="collasible-nav-dropdown">
                <NavDropdown.Item href="energizers">{t('energizers')}</NavDropdown.Item>
                <NavDropdown.Item href="team_buildings">
                  {t('team_buildings')}
                </NavDropdown.Item>



              </NavDropdown>
              {/* <Nav.Link href="ngo_base">{t('ngo_base')}</Nav.Link> */}
              <Nav.Link href="about_us">{t('about_us')}</Nav.Link>
              <Nav.Link eventKey={2} href="join_us">{t('join_us')}</Nav.Link>
            </Nav>
            <Nav>
              <Form.Select
                onChange={changeLocale}
                value={locale}
              >
                <option value={'am'}>Armenian</option>
                <option value={'en'}>English</option>
                {/* <option value={'es'}>Estonian</option>
                <option value={'pl'}>Polish</option>
                <option value={'lt'}>Lithuanian</option> */}
              </Form.Select>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </LocaleContext.Provider>
  );
}

export default Header;
