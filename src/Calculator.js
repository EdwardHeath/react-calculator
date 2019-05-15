import React from 'react';
import Display from './Display';
import Operation from './Operation';
import Digit from './Digit';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      storedValue: 0,
      currentOperation: '',
      userIsEnteringANumber: false,
      numberIsDecimal: false,
    };
  }

  handleDigitClick = e => {
    const digit = e.target.innerHTML;
    const { displayValue, userIsEnteringANumber } = this.state;
    const newValue = userIsEnteringANumber
      ? `${displayValue}${digit}`
      : `${digit}`;
    this.setState({
      displayValue: newValue,
      userIsEnteringANumber: true,
    });
  };

  handleOperationClick = e => {
    const currentOperation = e.target.innerHTML;
    this.setState(state => ({
      currentOperation,
      storedValue: parseFloat(state.displayValue),
      userIsEnteringANumber: false,
      numberIsDecimal: false,
    }));
  };

  handleClearClick = () => {
    this.setState({
      displayValue: '0',
      storedValue: 0,
      currentOperation: '',
      userIsEnteringANumber: false,
      numberIsDecimal: false,
    });
  };

  handleDecimalClick = () => {
    const { displayValue, numberIsDecimal } = this.state;
    if (numberIsDecimal) return;
    const newValue = `${displayValue}.`;
    this.setState({
      numberIsDecimal: true,
      displayValue: newValue,
      userIsEnteringANumber: true,
    });
  };

  handleEqualsClick = () => {
    const { storedValue, currentOperation, displayValue } = this.state;
    if (currentOperation === '') return;
    const evalStr = `${storedValue} ${currentOperation} ${parseFloat(
      displayValue
    )}`;
    const newValue = eval(evalStr);
    this.setState({
      displayValue: newValue,
      storedValue: evalStr,
      currentOperation: '',
      userIsEnteringANumber: false,
    });
  };

  render() {
    const { displayValue, storedValue, currentOperation } = this.state;

    return (
      <div className="calculator">
        <Display
          value={storedValue}
          operation={currentOperation}
          id="history"
        />
        <Display value={displayValue} />
        <div className="calculator-buttons">
          <Operation name="+" onAction={this.handleOperationClick} />
          <Operation name="-" onAction={this.handleOperationClick} />
          <Operation name="*" onAction={this.handleOperationClick} />
          <Operation name="/" onAction={this.handleOperationClick} />
          <Digit number={7} onAction={this.handleDigitClick} />
          <Digit number={8} onAction={this.handleDigitClick} />
          <Digit number={9} onAction={this.handleDigitClick} />
          <Digit number={4} onAction={this.handleDigitClick} />
          <Digit number={5} onAction={this.handleDigitClick} />
          <Digit number={6} onAction={this.handleDigitClick} />
          <Digit number={1} onAction={this.handleDigitClick} />
          <Digit number={2} onAction={this.handleDigitClick} />
          <Digit number={3} onAction={this.handleDigitClick} />
          <Digit number={0} onAction={this.handleDigitClick} />
          <Operation name="." id="decimal" onAction={this.handleDecimalClick} />
          <Operation name="C" id="clear" onAction={this.handleClearClick} />
          <Operation name="=" id="equals" onAction={this.handleEqualsClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
