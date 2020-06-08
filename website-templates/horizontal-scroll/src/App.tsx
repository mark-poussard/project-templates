import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Accueil from './Accueil/Accueil';
import './App.scss';
import Contact from './Contact/Contact';
import NavigationBar from './NavigationBar/NavigationBar';
import Nous from './Nous/Nous';
import Photos from './Photos/Photos';
import Content from './Content/Content';
import RouteModel from './RouteModel';

const App : React.FC = props => {
const [active, setActive] = useState<string>("");

  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Content/>
        <Redirect exact path={``} to={RouteModel.ACCUEIL}/>
      </BrowserRouter>
    </div>
  );
}
export default App;
