import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import RouteModel from './RouteModel';
import Apropos from './view/components/apropos/apropos';
import Background from './view/components/background/background';
import Commander from './view/components/commander/commander';
import Contact from './view/components/contact/contact';
import Evenements from './view/components/evenements/evenements';
import Footer from './view/components/footer/footer';
import Home from './view/components/home/home';
import Menu from './view/components/menu/menu';
import NavigationBar from './view/components/navigation/NavigationBar';

const App : React.FC = props => {
const [active, setActive] = useState<string>("");

  return (
    <div>
      <BrowserRouter>
        <NavigationBar active={active}/>
        <Background/>
        <Home onActive={() => setActive(RouteModel.home.getLink())} isActive={active === RouteModel.home.getLink()}/>
        {/* <Menu onActive={() => setActive(RouteModel.menu.getLink())} isActive={active === RouteModel.menu.getLink()}/> */}
        <Evenements onActive={() => setActive(RouteModel.evenements.getLink())} isActive={active === RouteModel.evenements.getLink()}/>
        <Apropos onActive={() => setActive(RouteModel.apropos.getLink())} isActive={active === RouteModel.apropos.getLink()}/>
        <Contact onActive={() => setActive(RouteModel.contact.getLink())} isActive={active === RouteModel.contact.getLink()}/>
        <Commander onActive={() => setActive(RouteModel.commander.getLink())} isActive={active === RouteModel.commander.getLink()}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
