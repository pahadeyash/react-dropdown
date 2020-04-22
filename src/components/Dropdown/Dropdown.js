import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import ListItem from '../ListItem/ListItem'
import Footer from '../Footer/Footer'

function Dropdown(props) {
    const [open, setOpen] = useState(false)
    const [selection, setSelection] = useState([])
    const [items, setItems] = useState(props.items)
    const toggle = () => setOpen(!open)

    function toggeDropdown() {
        toggle(!open)    
    }

    function handleOnClick(item) {
        if(!selection.some(current => current === item.value)){
            setSelection([...selection, item.value])
        } else {
            let selectionAfterRemoval = selection
            selectionAfterRemoval = selectionAfterRemoval.filter(current => current !== item.value)
            setSelection([...selectionAfterRemoval])
        }
    }

    function isItemInSelection(item){
        if(selection.find(current => current === item.value)){
            return true
        }
        return false
    }

    function selectAll(){
        let itemsValues = []
        for (let i = 0; i < items.length; i++){
            console.log(items[i])
            itemsValues.push(items[i].value)
        }
        setSelection([...itemsValues])
    }

    function deSelectAll(){
        setSelection([])
    }

    return (
        <div className="dd-wrapper">
            <Header header={selection} toggle={toggeDropdown} open={open} />
            { open && (
                <ul className="dd-list">
                    {items.map(item => (
                        <ListItem 
                            key={item.id}
                            value={item.value} 
                            handleOnClick={() => handleOnClick(item)} 
                            isItemSelected={isItemInSelection(item)}
                        /> 
                    ))}
                    <Footer selectAll={selectAll} deSelectAll={deSelectAll}/>
                </ul>
            )}
        </div>
      );
};


export default Dropdown;