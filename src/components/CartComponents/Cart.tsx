import React from 'react'
import styled from 'styled-components'
import empty_img from '../../images/cart-is-empty.svg'

import { CartCard } from "./CartCard"
import { Error } from "./Error"

import { Link } from 'react-router-dom';
import {Fragment} from 'react';


type CounterProps = {
  backgroundcolor: boolean;
}

const CartCount = styled.span<CounterProps>`
  height: 28px;
  width: 28px;
  background-color: ${({ backgroundcolor }) => backgroundcolor ? '#3262a8' : '#7a7a7a'};
  border-radius: 10%;
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-weight: 500;
`

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`

const CartTitle = styled.h2`
  font-size: 35px;
`

type EmptyContainerProps = {
  visibile: boolean;
}

const EmptyContainer = styled.div<EmptyContainerProps>`
  display: ${({ visibile }) => visibile ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${({ visibile }) => visibile ? 'visible' : 'hidden'};
  margin-top: 40px;
`

const EmptyCartImage = styled.img`
  max-width: 250px;
  max-height: 250px;
`

const CheckOutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

export const CheckoutButton = styled.button`
  background-color: #3bb8af;  
  border: 1px solid white;
  box-shadow: 0px 2px 0 white, 2px 4px 6px #eee;
  font-weight: 800;
  font-size: 18px;
  color: white;
  letter-spacing: 1px;
  -webkit-transition: all 150ms linear;
  transition: all 150ms linear;
  border-radius: 10%;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.2);
    text-decoration: none;
    -webkit-transition: all 250ms linear;
    transition: all 250ms linear;
  }
`;

type courseType = {
  dept: string;
  number: number;
  title: string;
  crosslisted?: string[];
  prereqs?: string[];
  description: string;
};





type CartProps = {
  cart: String[];
  setCart: React.Dispatch<React.SetStateAction<String[]>>;
  error: boolean;
  errorMsg: string;
  removeCourse: (course: courseType) => void;
}

const Cart = ({
  cart,
  setCart,
  error,
  errorMsg,
  removeCourse}: CartProps) => {

  return (
    <>
    <Error error={error} errorMsg={errorMsg}></Error>

    <CartContainer>
      <TitleContainer>
        <CartCount backgroundcolor={cart.length > 0}>{cart.length}</CartCount>
        <CartTitle>Course Cart</CartTitle>
      </TitleContainer>
      
      {/* If cart is not empty, show all courses in cart.
          If cart is empty, show empty cart image */}
      {cart.length > 0 ? (Array.from(cart).map( (course: any) => (
        <Fragment>
            <CartCard cart={cart} setCart={setCart} course={course} dept={JSON.parse(course).dept}  number={JSON.parse(course).number} 
            title={JSON.parse(course).title} description={JSON.parse(course).description} 
            crosslisted={JSON.parse(course).crosslisted} prereqs={JSON.parse(course).prereqs} removeCourse={removeCourse}></CartCard>
        </Fragment>

      ))) : 
      (<EmptyContainer visibile={true}>
          <EmptyCartImage src={empty_img}></EmptyCartImage>
          <p>Your cart is empty!</p>
        </EmptyContainer>  )
    
      }

      {cart.length > 0 &&
      <Link to={{pathname: "/receipt", state: cart}}>
      <CheckOutContainer>
        <CheckoutButton>Checkout</CheckoutButton>
      </CheckOutContainer>
      </Link>

      }

    </CartContainer>
    </>
  );
};

export default Cart;