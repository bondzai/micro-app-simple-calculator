import '../App.css';
import {useState} from 'react';

const Calculator = () => {
    const [inputValue, setInputValue] = useState('0')
    const display = (value) => {
       if (inputValue.toString().charAt(0) === '0') {
            setInputValue(value)
       } else {
            setInputValue(inputValue + value)
       }
    }
    const clear = () => {
        setInputValue('0')
    }
    const calculate = () => {
        let result = eval(inputValue)
        setInputValue(result)
    }

    return (
        <div className = "calculator">
            <div className = "calculator-display">
                <h1> {inputValue} </h1>
            </div>
            <div className = "calculator-button">
                <button className = "button-operation" onClick={(e) => display('+')}> + </button>
                <button className = "button-operation" onClick={(e) => display('-')}> - </button>
                <button className = "button-operation" onClick={(e) => display('*')}> x </button>
                <button className = "button-operation" onClick={(e) => display('/')}> / </button>
                <button className = "button-number" onClick={(e) => display('7')}>7</button>
                <button className = "button-number" onClick={(e) => display('8')}>8</button>
                <button className = "button-number" onClick={(e) => display('9')}>9</button>
                <button className = "button-number" onClick={(e) => display('4')}>4</button>
                <button className = "button-number" onClick={(e) => display('5')}>5</button>
                <button className = "button-number" onClick={(e) => display('6')}>6</button>
                <button className = "button-number" onClick={(e) => display('1')}>1</button>
                <button className = "button-number" onClick={(e) => display('2')}>2</button>
                <button className = "button-number" onClick={(e) => display('3')}>3</button>
                <button className = "button-number" onClick={(e) => display('.')}>.</button>
                <button className = "button-number" onClick={(e) => display('0')}>0</button>
                <button className = "button-clear" onClick={(e) => clear()}>c</button>
                <button className = "button-equal" onClick={(e) => calculate()}>=</button>
            </div>
        </div>
    )
}

export default Calculator;