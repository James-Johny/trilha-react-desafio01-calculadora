import { ButtonContainer } from './styles';

const Button = ({ label, onClick, isZero, className }) => {
    return (
      <ButtonContainer 
        onClick={onClick} 
        type="button" 
        isZero={isZero} 
        className={className}
      >
       {label}
      </ButtonContainer>
    );
}

export default Button;