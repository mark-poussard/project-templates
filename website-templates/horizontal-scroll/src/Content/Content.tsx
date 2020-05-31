import React from 'react';
import './Content.scss';
import Accueil from '../Accueil/Accueil';
import Contact from '../Contact/Contact';
import Photos from '../Photos/Photos';
import Nous from '../Nous/Nous';
import { useRouteMatch } from 'react-router-dom';
import RouteModel from '../RouteModel';

const Content : React.FC = props => {
    const accueilMatch = useRouteMatch(`/` + RouteModel.ACCUEIL);
    const nousMatch = useRouteMatch(`/` + RouteModel.NOUS);
    const photosMatch = useRouteMatch(`/` + RouteModel.PHOTOS);
    const contactMatch = useRouteMatch(`/` + RouteModel.CONTACT);
    const currentIdx = [accueilMatch, nousMatch, photosMatch, contactMatch].findIndex(x => x != null);
    return (
        <div className={`content-wrapper`}>
            <div className={`content`} style={{
                left : `${-currentIdx*100}vw`
            }}>
                <div className={`content-page`}>
                    <Accueil/>
                </div>
                <div className={`content-page`}>
                    <Nous/>
                </div>
                <div className={`content-page`}>
                    <Photos/>
                </div>
                <div className={`content-page`}>
                    <Contact/>
                </div>
            </div>
        </div>
    );
}

export default Content;