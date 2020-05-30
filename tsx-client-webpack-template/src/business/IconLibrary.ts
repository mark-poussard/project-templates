import { faPhone, faAt, faUtensils, faCocktail, faWineGlassAlt, faBeer, faAngleLeft, faAngleRight, faAngleDown, faAngleUp, faCircle, faMap, faMugHot, faCoins, faTicketAlt, faMapMarkedAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebookF, faFacebookSquare, faInstagram, faTripadvisor, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faCreditCard, faClock } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

class IconLibrary {
    Init() {
        library.add(faPhone, faAt, faPaperPlane, faFacebookF, faFacebookSquare, faInstagram, faTripadvisor, faUtensils, faCocktail, faWineGlassAlt,
            faBeer, faAngleLeft, faAngleRight, faAngleDown, faAngleUp, faCircle, faMap, faMugHot, faCreditCard, faCoins, faTicketAlt, faClock, 
            faGoogle, faMapMarkerAlt );
    }
}

export default new IconLibrary();