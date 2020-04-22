import React from 'react'

function Footer(props) {
    return (
        <div>
            <li className="dd-list-item" >
                <div className="dd-footer">
                    <span onClick={props.selectAll}>Select All</span>
                    <span onClick={props.deSelectAll}>Deselect All</span>
                </div>
            </li>
        </div>
    );
};

export default Footer;