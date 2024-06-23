import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
// import useCart from "../../Hooks/useCart";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Checkoutform = ({ paymentData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const { user } = useContext(AuthContext);

  //TODO: Use Effect with intent


// const { name, total, per_price, quantity, seller_email, buyer_email, company, id } = paymentData;

  console.log(paymentData.name);
  console.log(paymentData.quantity);
  console.log(paymentData.total);




  const [clientSecret, setClientSecret] = useState("");
  const [transactionsId, setTransactionId] = useState("");
  //    const [cart,refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  //    const totalPrice = cart?.reduce((total,item)=>total+item.price,0)
  const totalPrice = 100;
  // const quantity =50;
  // const per_price = 20 ;

  
    if(totalPrice>0){
      useEffect(() => {
        axiosSecure
          .post("/create-payment-intent", { price: totalPrice })
          .then((res) => {
            setClientSecret(res.data.clientSecret);
          });
      }, [axiosSecure, totalPrice]);
    }
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setErrorMessage(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setErrorMessage("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymus",
            name: user?.displayName || "anonymus",
          },
        },
      });

    if (confirmError) console.log(confirmError);
    else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        // console.log(paymentIntent.id);
        const payment = {
          name: paymentData.name,
          buyer_email: user.email,
          seller_email: paymentData.seller_email,
          company: paymentData.company,
          price: paymentData.per_price,
          transactionId: paymentIntent.id,
          date: new Date(),
          quantity: paymentData.quantity,
          total: paymentData.total,
          //   cartIds: cart.map(item=>item._id),
          //   menuItemIds: cart.map(item=>item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payment", payment);
        // refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successful!!",
            showConfirmButton: false,
            timer: 1500,
          });
          //navigate('/dashboard/paymentHistory')
          navigate("/");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="btn btn-primary my-6 "
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600"> {errorMessage}</p>
      {transactionsId && (
        <p className="text-emerald-600">Your Transaction Id {transactionsId}</p>
      )}
    </form>
  );
};

export default Checkoutform;
