import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const CartContent = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 35%;
  background-color: ${({theme}) => theme.colors.blue};
  box-shadow: -4px 8px 30px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  h2{
    max-width: 90%;
    font-weight: bold;
    font-size: ${({theme}) => theme.fontSize['2xl']};
    color: ${({theme}) => theme.colors.white};
    padding: 2.5rem;
  };
  > section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: auto;
    padding: 0 2.5rem 2.5rem 2.5rem;
    flex: 1;
    .texto{
      color: ${({theme}) => theme.colors.white};
    }
  }
  @media (max-width: 992px){
    width: 100%;
  }
`

export const CartClose = styled(Dialog.Close)`
  background: ${({theme}) => theme.colors.black};
  border-radius: 100%;
  padding: 0.25rem;
  color: ${({theme}) => theme.colors.white};
  position: absolute;
  width: 2.5rem;
  top: 2.5rem;
  right: 2.5rem;
`

export const CartButtonContainer = styled.button`
  width: fit-content;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  border-radius: 8px;
  border: none;
  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  svg {
    font-size: 1.65rem;
  }

  span{
    font-size: ${({theme}) => theme.fontSize.xl};
    color: ${({theme}) => theme.colors.black};
    font-weight: 700;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  };
`

export const CartProduct = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.white};
  padding: 1rem;
  gap: 1.25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 5.8125rem;
  position: relative;
`
 
export const CartProductImage = styled.div`
  width: 100%;
  height: 5.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  img {
    object-fit: contain;
  }
`

export const CartProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: "space-between";
  p {
    color: ${({theme}) => theme.colors.gray100};
    font-size: ${({theme}) => theme.fontSize.lg};
  };
  strong {
    color: ${(props) => props.theme.colors.black};
    margin-top: 4px;
    font-size: ${({theme}) => theme.fontSize.lg};
    font-weight: bold;
  };
  button {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    margin-top: auto;
    width: max-content;
    border: none;
    background: none;
    color: ${({theme}) => theme.colors.white};
    font-size: 1rem;
    font-weight: bold;
  }`

export interface QuantityInputContainerProps {
  size: "medium" | "small";
}

export const ContainerQuantity = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 0.25rem;

strong{
  font-size: ${({theme}) => theme.fontSize.md};
  color: ${({theme}) => theme.colors.black};
}
`

export const ButtonsContainer = styled.div`
width: 100%;
grid-template-columns: repeat(3, 1fr);
border: 1px solid ${(props) => props.theme.colors.gray};
border-radius: 8px;

button{
  width: 100%;
  border-radius: 0 8px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

span{
  font-size: ${({theme}) => theme.fontSize.md};
  color: ${({theme}) => theme.colors.black};
}
`

export const CartFinalization = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  button {
    width: 100%;
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize['2xl']};
    height: 100px;
    border: 0;
    font-weight: bold;
    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    };
    &:not(:disabled):hover {
      background: ${({theme}) => theme.colors.black};
    }
  }
`

export const FinalizationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1.5rem;
  padding: 0 2.5rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: ${({theme}) => theme.fontSize['2xl']};
      color: ${({theme}) => theme.colors.white};
    };
    span{
      color: ${({theme}) => theme.colors.white};
      font-size: ${({theme}) => theme.fontSize['2xl']};
    }
  }
`