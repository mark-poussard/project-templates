import React from 'react';
import './Header.scss';

interface IHeaderProps {}

const Header : React.FC<IHeaderProps> = props => {
    return (
        <div className={`header`}>
            Header
        </div>
    );
}

export default Header;