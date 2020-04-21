import React, {useState} from 'react'
import Header from '../Header/Header'
import ListItem from '../ListItem/ListItem'

function Dropdown(props) {
    const [open, setOpen] = useState(false)
    const [allSelected, setAllSelected] = useState(false)
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
        if (allSelected == false){
            let itemValues = items.map(item => item.value)
            setSelection([...itemValues])
            console.log(selection)
            setAllSelected(true)
        } else {
            setSelection([])
            console.log(selection)
            setAllSelected(false)
        }
    }


    return (
        <div className="dd-wrapper">
            <Header header={selection} toggle={toggeDropdown} open={open} />
            { open && (
                <ul className="dd-list">
                    {props.items.map(item => (
                        <ListItem 
                            key={item.id} 
                            value={item.value} 
                            handleOnClick={() => handleOnClick(item)} 
                            isItemSelected={isItemInSelection(item)}
                            selectAll= {selectAll}
                        /> 
                    ))}
                </ul>
            )}
        </div>
      );
};

export default Dropdown;