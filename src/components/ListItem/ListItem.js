import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function ListItem(props) {
    return (
        <div>
            <li className="dd-list-item" >
                <button type="button" onClick={props.handleOnClick}>
                    <span> {props.value}</span>
                    <span> {props.isItemSelected && <FontAwesomeIcon icon={faCheckCircle} />} </span>
                </button>
            </li>
        </div>
    );
};

export default ListItem;