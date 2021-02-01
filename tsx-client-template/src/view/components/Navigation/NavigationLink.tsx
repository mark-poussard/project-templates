import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import Text from '../../../model/Text';
import { LocalValueContext } from '../LocalisationContext/LocalContext';
import ScreenDetector from '../ScreenDetector/screenDetector';
import './NavigationLink.scss';

interface INavigationLinkProps {
    text : Text;
    to : string;
    linkIndex : number;
}

const NavigationLink : React.FC<INavigationLinkProps> = props => {
    var localisation = useContext(LocalValueContext);
    const formatText = (text : Text) => {
        return text.getText(localisation).split('').map((t, index) => {
            const delay = index * 0.1 + 1 + props.linkIndex ;
            return <span className={`down ${index}`} >
                        {t}
                        <span className={`moving`} style={{ animationDelay: `${delay}s` }} >{t}</span>
                    </span>
        })
    }

    const ref = useRef<HTMLDivElement>(null);
    const setAnimation = () => {
        if(ref.current != null && !ref.current.classList.contains("animate")){
            ref.current.classList.add("animate");
        }
    }

    return (
        <Link className={`navigation-link`} to={props.to} >
            <div className={`navigation-link-div`} ref={ref}>
                {formatText(props.text)}
                <ScreenDetector className={`screen-detector-navigation-link`} onActive={setAnimation} />
            </div>
        </Link>
    );
}

export default NavigationLink;