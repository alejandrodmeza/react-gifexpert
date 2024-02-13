import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setinputValue] = useState('');

  const onInputChange = (e) => {
    setinputValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const inputText = inputValue.trim();
    if(inputText.length < 1) return;
    onNewCategory(inputText);
    setinputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
            type="text" 
            placeholder='Buscar' 
            value={inputValue}
            onChange={ onInputChange}
        />
    </form>
  )
}