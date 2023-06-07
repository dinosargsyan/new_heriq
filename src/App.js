import logo from './logo.svg';
import i18n from './i18n';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Map from './containers/Map/Map';
import Donors from './containers/Donors/Donors';
import Contactus from './containers/Contactus/Contactus';
import Ngo from './containers/Ngo/Ngo';
import Ngo_Details from './components/Ngo_Details/Ngo_Details';
import { Component, Suspense } from 'react';
import Statistic from './containers/Statistic/Statistic';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import Info from './components/Info/Info';
import MapChart from './components/MapChart/MapChart';
import Input from './components/Input/Input';
import Activities from './containers/Activities/Activities';
import carousel from './components/Carousel/Carousel';
import IndividualIntervalsExample from './components/Carousel/Carousel';
import MyVerticallyCenteredModal from './components/Card_Activity/Card_Activity_Modal';
import i18next from 'i18next';
import { I18nextProvider, withTranslation } from 'react-i18next';
import Team_buildings from './containers/Activities/Team_buildings';
import Error_404 from './components/Error/Error_404';


 

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <I18nextProvider i18n={i18n} >
        <Suspense fallback={<Input />}>
          <BrowserRouter>
            <Layout>
              <Header />
              <Route exact path="/">
                <IndividualIntervalsExample />
                {/* <Map /> */}
                <Info />
                {/* <Donors /> */}
                <Footer />
              </Route>
              <Route exact path="/ngo_base">
                <Ngo />
              </Route>
              <Route path='/ngo_base/:ngoId' render={(matchProps) =>
                <Ngo_Details
                  {...matchProps}
                  {...this.props}
                  handleMatch={this.handleMatch}
                />
              } />
              <Route path='/energizer#:ngoId' render={(matchProps) =>
              <MyVerticallyCenteredModal 
                  {...matchProps}
                  {...this.props}
                  handleMatch={this.handleMatch}
                  onHide={true}
                />
              } />

              <Route exact path="/energizers">
                <Activities />
              </Route>
              <Route exact path="/team_buildings">
                <Team_buildings />
              </Route>
              <Route exact path="/join_us">
                <Contactus />
              </Route>
              <Route exact path="/about_us">
                <About />
              </Route>
            </Layout>
              {/* <Route path='*'>
                <Error_404 />
              </Route> */}
          </BrowserRouter>
        </Suspense>
        </I18nextProvider>
      </div>
    );
  }
}

export default withTranslation()(App);
