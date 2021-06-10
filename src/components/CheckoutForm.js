import React from "react";
import styled from "styled-components";
import { useCheckoutContext } from "../context/CheckoutContext";

const CheckoutForm = () => {
  const { handleSubmit, handleChange, state } = useCheckoutContext();

  return (
    <Wrapper>
      <article className="container">
        <h3>checkout</h3>
        <form className="form" onSubmit={handleSubmit}>
          {/* BILLING */}
          <h5>Billing details</h5>
          <div className="form-control">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              id="Nme"
              placeholder="John Doe"
              value={state.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email Address </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@yahoo.de"
              value={state.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone">phone number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="(+49)-176-2222-7939"
              value={state.phone}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* END OF BILLING */}
          {/* SHIPPING INFO */}
          <h5>Shipping info</h5>
          <div className="form-control">
            <label htmlFor="address">your address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Siegfried Strasse 16"
              value={state.address}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              name="zip"
              id="zip"
              placeholder="14378"
              value={state.zip}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="city">city</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="BERLIN"
              value={state.city}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="country">country</label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="GERMANY"
              value={state.country}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* END OF SHIPPING INFO */}
          {/* PAYMENT DETAILS */}
          <h5>payment details</h5>
          {/* <p>payment method</p> */}
          <div className="form-control">
            <p>payment method</p>
            <div className="payment">
              <input
                type="radio"
                name="paymentMethod"
                id="emoney"
                value={state.paymentMethod}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="emoney">e-Money</label> <br />
              <input
                type="radio"
                name="paymentMethod"
                id="cash"
                value={state.paymentMethod}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="cash">Cash On Delivery</label>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="eMoney">e-Money Number</label>
            <input
              type="text"
              name="emoneynumber"
              id="emoneynumber"
              placeholder="22334455"
            />
          </div>
          <div className="form-control">
            <label htmlFor="eMoneyPin">e-Money Pin</label>
            <input
              type="text"
              name="eMoneyPin"
              id="eMoneyPin"
              placeholder="1234"
            />
          </div>
        </form>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  .container {
    h3 {
      text-transform: uppercase;
      margin: 1rem 0;
      letter-spacing: 2px;
      font-weight: 900;
    }
    h5 {
      color: var(--clr-primary-1);
      text-transform: uppercase;
      margin: 1rem 0;
    }
  }
  .form {
    ${"" /* max-width: var(--fixed-width); */}
    margin: 2rem 0;
    margin-bottom: 4rem;
  }
  .form label {
    margin-bottom: 0.1rem;
    text-transform: capitalize;
    font-weight: 600;
  }
  .form input,
  .payment {
    border: 1px solid var(--clr-primary-4);
    border-radius: var(--radius);
    padding: 0.75rem 0.75rem;
    margin: 0.5rem 0 1.5rem 0;
  }
  .form-control {
    display: grid;
    p {
      text-transform: uppercase;
      font-weight: 600;
      margin: 1rem 0 0 0;
    }
  }
  .payment {
    ${
      "" /* display: flex;
    justify-contents: center;
    align-items: center; */
    }
    input {
      margin: 0 0.5rem 0.5rem 0;
      border-radius: 50%;
    }
    label {
      text-transform: none;
    }
  }
  @media (min-width: 992px) {
    margin: 0 5rem 0 0;
  }
`;
export default CheckoutForm;


