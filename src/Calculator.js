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

  handleNegateClick = () => {
    const { displayValue } = this.state;
    const negated = `${parseFloat(displayValue) * -1}`;
    this.setState({
      displayValue: negated,
    });
  };

  handlePercentClick = () => {
    const { displayValue } = this.state;
    const percent = `${parseFloat(displayValue) / 100}`;
    this.setState({
      displayValue: percent,
    });
  };

  handlePiClick = () => {
    this.setState({
      displayValue: `${Math.PI}`,
      numberIsDecimal: true,
    });
  };

  handleEClick = () => {
    this.setState({
      displayValue: `${Math.E}`,
      numberIsDecimal: true,
    });
  };

  handleRandomClick = () => {
    const random = Math.random();
    this.setState({
      displayValue: `${random}`,
      numberIsDecimal: true,
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
          {/* Row 1 */}
          <Operation name="(" onAction={this.handleClearClick} />
          <Operation name=")" onAction={this.handleClearClick} />
          <Operation name="m+" onAction={this.handleClearClick} />
          <Operation name="mc" onAction={this.handleClearClick} />
          <Operation name="m-" onAction={this.handleClearClick} />
          <Operation name="mr" onAction={this.handleClearClick} />
          <Operation name="C" onAction={this.handleClearClick} />
          <Operation name="±" onAction={this.handleNegateClick} />
          <Operation name="%" onAction={this.handlePercentClick} />
          <Operation
            name="/"
            className="arithmetic"
            onAction={this.handleOperationClick}
          />
          {/* Row 2 */}
          <Operation name="2nd" onAction={this.handleOperationClick} />
          <Operation name="x2" onAction={this.handleOperationClick} />
          <Operation name="x3" onAction={this.handleOperationClick} />
          <Operation name="xy" onAction={this.handleOperationClick} />
          <Operation name="ex" onAction={this.handleOperationClick} />
          <Operation name="10x" onAction={this.handleOperationClick} />
          <Digit number={7} onAction={this.handleDigitClick} />
          <Digit number={8} onAction={this.handleDigitClick} />{' '}
          <Digit number={9} onAction={this.handleDigitClick} />
          <Operation
            name="*"
            className="arithmetic"
            onAction={this.handleOperationClick}
          />
          {/* Row 3 */}
          <Operation name="1/x" onAction={this.handleOperationClick} />
          <Operation name="x1/2" onAction={this.handleOperationClick} />
          <Operation name="x1/3" onAction={this.handleOperationClick} />
          <Operation name="x1/y" onAction={this.handleOperationClick} />
          <Operation name="ln" onAction={this.handleOperationClick} />
          <Operation name="log10" onAction={this.handleOperationClick} />
          <Digit number={4} onAction={this.handleDigitClick} />
          <Digit number={5} onAction={this.handleDigitClick} />
          <Digit number={6} onAction={this.handleDigitClick} />
          <Operation
            name="-"
            className="arithmetic"
            onAction={this.handleOperationClick}
          />
          {/* Row 4 */}
          <Operation name="x!" onAction={this.handleOperationClick} />
          <Operation name="sin" onAction={this.handleOperationClick} />
          <Operation name="cos" onAction={this.handleOperationClick} />
          <Operation name="tan" onAction={this.handleOperationClick} />
          <Operation name="e" onAction={this.handleEClick} />
          <Operation name="EE" onAction={this.handleOperationClick} />
          <Digit number={1} onAction={this.handleDigitClick} />
          <Digit number={2} onAction={this.handleDigitClick} />
          <Digit number={3} onAction={this.handleDigitClick} />
          <Operation
            name="+"
            className="arithmetic"
            onAction={this.handleOperationClick}
          />
          {/* Row 5 */}
          <Operation name="Rad" onAction={this.handleOperationClick} />
          <Operation name="sinh" onAction={this.handleOperationClick} />
          <Operation name="cosh" onAction={this.handleOperationClick} />
          <Operation name="tanh" onAction={this.handleOperationClick} />
          <Operation name="π" onAction={this.handlePiClick} />
          <Operation name="Rand" onAction={this.handleRandomClick} />
          <Digit number={0} id="zero" onAction={this.handleDigitClick} />
          <Operation name="." id="decimal" onAction={this.handleDecimalClick} />
          <Operation
            name="="
            className="arithmetic"
            id="equals"
            onAction={this.handleEqualsClick}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
