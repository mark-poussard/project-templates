import React from 'react';
import Logo from './Logo';
import './NavigationBar.scss';
import NavigationLink from './NavigationLink';
import RouteModel from '../RouteModel';

interface INavigationBarProps {
}

const NavigationBar : React.FC<INavigationBarProps> = props => {
    const links = [RouteModel.ACCUEIL, RouteModel.NOUS, RouteModel.PHOTOS, RouteModel.CONTACT];
    return (
        <div className={`navigation-bar`}>
            <Logo />
            <div className={`navigation-bar-content`}>
                {links.map(t => <NavigationLink link={t}/>)}
            </div>
        </div>
    );
}

export default NavigationBar;