import { useState } from "react"




export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState([])


    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.length <= 1) return
        onNewCategory(inputValue)
        setInputValue('')
    }

    const onChange = ({ target }) => {
        setInputValue(target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onChange}
            />
        </form>
    )
}













/* export const AddCategory = ({ onAddNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChanged = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return
        onAddNewCategory(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={onInputChanged} //
            />
        </form>

    )
}
 */