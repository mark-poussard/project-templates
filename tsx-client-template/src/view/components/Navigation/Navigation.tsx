import React from 'react';
import Text from '../../../model/Text';
import './Navigation.scss';
import NavigationLink from './NavigationLink';

interface INavigationProps {}

const Navigation : React.FC<INavigationProps> = props => {
    return (
        <div className={`navigation`}>
            <NavigationLink text={new Text('Blog', 'Le blog')} to='/posts?categories=["all"]' linkIndex={0} />
            <NavigationLink text={new Text('About', 'À propos')} to='/about' linkIndex={1} />
            <NavigationLink text={new Text('Contact', 'Contact')} to='/contact' linkIndex={2} />
        </div>
    );
}

export default Navigation;