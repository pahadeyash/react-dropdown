import React, {useState} from 'react'

function Footer(props) {
    const [term, setTerm] = useState('')
    
    function handleSubmit(e) {
        e.preventDefault();
        if(term === '') return;

        props.handleSubmit(term);
        setTerm('');
      }

    return (
        <div>
            <li className="dd-list-item" >
                <div className="dd-footer">
                    <form onSubmit={handleSubmit}>
                        <input 
                        type='text'
                        className='input'
                        placeholder='Enter New Option'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        />
                    </form>
                    <span onClick={props.selectAll}>Select All</span>
                    <span onClick={props.deSelectAll}>Deselect All</span>
                </div>
            </li>
        </div>
    );
};

export default Footer;