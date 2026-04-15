import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #032736;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    cursor: pointer; /* Adicionado para melhor UX */

    ${({ isZero }) => isZero && `
        flex: 3.8; 
    `}
    
    &:hover {
        opacity: 0.8;
        filter: invert(90%) brightness(20%);
        color: #79ebff;
    }
`;