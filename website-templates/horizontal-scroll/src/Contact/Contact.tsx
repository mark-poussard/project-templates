import React from 'react';
import './Contact.scss';

const Contact : React.FC = props => {
    return (
        <div className={`contact`}>
            Adresse 22bis rue Jean Jaurès, 94800 Villejuif
            Telephone 01 47 26 28 35
            Email correctoptic@free.fr
        </div>
    );
}

export default Contact;