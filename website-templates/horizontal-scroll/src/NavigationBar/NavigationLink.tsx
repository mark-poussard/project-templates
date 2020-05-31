import React from 'react';
import './NavigationLink.scss';
import { Link, NavLink } from 'react-router-dom';

interface INavigationLinkProps {
    link : string;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    return (
        <div className={`navigation-link`}>
            <NavLink to={props.link}>{props.link.toUpperCase()}</NavLink>
        </div>
    );
}

export default NavigationLink;