import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => {
      if (prev === '0' && num !== '.') return String(num);
      if (num === '.' && prev.includes('.')) return prev;
      return `${prev}${num}`;
    });
  }

  const setOperator = (op) => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation(op);
    } else {
      handleEquals();
      setOperation(op);
    }
  }

  const handleReverseNumber = () => {
    setCurrentNumber(prev => {
      if (prev === '0') return prev;

      const result = Number(prev) * -1;
      return String(result);
    });
  };

  const handleSumNumbers = () => setOperator('+');
  const handleMinusNumbers = () => setOperator('-');
  const handleMultiplyNumbers = () => setOperator('x');
  const handleDividedNumbers = () => setOperator('/');

  const handlePercentNumbers = () => {
    const current = Number(currentNumber);
    const first = Number(firstNumber);

    if (first === 0) {
      setCurrentNumber(String(current / 100));
    } else {
      let result = 0;
      if (operation === '+') result = first + (first * current / 100);
      if (operation === '-') result = first - (first * current / 100);
      if (operation === 'x') result = (first * current / 100);
      if (operation === '/') result = first / (current / 100);

      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '') {
      const n1 = Number(firstNumber);
      const n2 = Number(currentNumber);
      let result;

      switch (operation) {
        case '+':
          result = n1 + n2;
          break;
        case '-':
          result = n1 - n2;
          break;
        case 'x':
          result = n1 * n2;
          break;
        case '/':
          result = n1 / n2;
          break;
        default:
          return;
      }

      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperation('');
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="+-" onClick={handleReverseNumber} />
          <Button label="%" onClick={handlePercentNumbers} />
          <Button label="/" onClick={handleDividedNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} isZero />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;