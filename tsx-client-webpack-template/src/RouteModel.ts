const RouteModel = {
    index : {
        getLink : () => "/",
        getPath : () => "/"
    },
    home : {
        getLink : () => "/#home-screen",
        getPath : () => "/#home-screen"
    },
    menu : {
        getLink : () => "#menu-screen",
        getPath : () => "#menu-screen",
    },
    evenements : {
        getLink : () => "#evenements-screen",
        getPath : () => "#evenements-screen",
    },
    apropos : {
        getLink : () => "#apropos-screen",
        getPath : () => "#apropos-screen",
    },
    contact : {
        getLink : () => "#contact-screen",
        getPath : () => "#contact-screen",
    },
    commander : {
        getLink : () => "#commander-screen",
        getPath : () => "#commander-screen",
    },
}
export default RouteModel;