import React from "react";

const Faq = () => {
  return (
    <div className="lg:w-[1170px] mx-[auto] mt-36">
      <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div
            className="container flex flex-col justify-center p-4 mx-auto md:p-8"
            bis_skin_checked="1"
          >
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
              How it works
            </p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <div
              className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32"
              bis_skin_checked="1"
            >
              <div bis_skin_checked="1">
                <h3 className="font-semibold">How long does shipping take?</h3>
                <p className="mt-1 dark:text-gray-600">
                  Shipping typically takes 3-5 business days for standard
                  delivery. Expedited shipping options are available at checkout
                  for faster delivery.
                </p>
              </div>
              <div bis_skin_checked="1">
                <h3 className="font-semibold">
                  What payment methods do you accept?
                </h3>
                <p className="mt-1 dark:text-gray-600">
                  We accept major credit cards, debit cards, and PayPal. All
                  transactions are secured and encrypted for your safety.
                </p>
              </div>
              <div bis_skin_checked="1">
                <h3 className="font-semibold">
                  Can I return or exchange my order?
                </h3>
                <p className="mt-1 dark:text-gray-600">
                  Yes, we have a 30-day return policy for unopened and unused
                  items. Please contact our customer service team for assistance
                  with returns or exchanges.
                </p>
              </div>
              <div bis_skin_checked="1">
                <h3 className="font-semibold">
                  {" "}
                  Do you require a prescription for all medications?
                </h3>
                <p className="mt-1 dark:text-gray-600">
                  Prescription medications do require a valid prescription from
                  a licensed healthcare provider. Over-the-counter medications
                  do not require a prescription and can be purchased directly
                  from our website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;
