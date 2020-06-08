import React from 'react';
import './Logo.scss';

const Logo : React.FC = props => {
    return (
        <div className={`navigation-bar-logo`}>
            <div className={`logo-correct`}>Correct</div>
            <div className={`logo-optic`}>OPTIC</div>
        </div>
    );
}

export default Logo;