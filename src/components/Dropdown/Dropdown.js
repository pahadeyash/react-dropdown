import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

function Dropdown() {
    const [open, setOpen] = useState(false);
    const [selection, selectSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {}

    return (
        <div className="dd-wrapper">
            <div
                tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}>
                <div className="dd-header__title">
                    <p className="dd-header__title--bold">   </p>
                </div>
                <div className="dd-header__action">
                    <p> {open ? <FontAwesomeIcon icon={faCaretUp} />: <FontAwesomeIcon icon={faCaretDown} />} </p>
                </div>
            </div>
        </div>
      );
};

export default Dropdown;