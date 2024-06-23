import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "./Checkoutform";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK);
const Payment = () => {
  const [paymentData, setPaymentData] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("paymentData");
    if (data) {
      setPaymentData(JSON.parse(data));
    }
  }, []);

  const {
    name,
    total,
    per_price,
    quantity,
    seller_email,
    buyer_email,
    company,
    id,
  } = paymentData;

  

  return (
    <div>
      <div className="mb-6">
        <div className="border-b-2 p-4 mb-[50px]">
          <h3 className="text-3xl font-semibold">Payment</h3>
        </div>

        <div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>Company : {company}</p>
              <p>Per Price : {per_price}</p>
              <p>Quantity : {quantity}</p>
              <div className="card-actions justify-end">
                Total Price : {total}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <Checkoutform paymentData={paymentData}></Checkoutform>
      </Elements>
    </div>
  );
};

export default Payment;
