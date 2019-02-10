import React from "react"
import M from 'materialize-css';
import HeaderAnimate from './HeaderAnimate';

class Header extends React.Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }

    render() {
        return (
            <HeaderAnimate></HeaderAnimate>
        )
    }
}

export default Header
