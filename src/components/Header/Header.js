import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    return (
        <div
            className="dd-header"
            role="button"
            onKeyPress={props.toggle}
            onClick={props.toggle}>
                <div className="dd-header__title">
                    <p className="dd-header__title--bold"> {props.header.join(', ')} </p>
                </div>
                <div className="dd-header__action">
                    <p> {props.open ? <FontAwesomeIcon icon={faCaretUp} />: <FontAwesomeIcon icon={faCaretDown} />} </p>
                </div>
        </div>
    );
};

export default Header;