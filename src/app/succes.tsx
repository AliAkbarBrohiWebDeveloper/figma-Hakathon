
import React from 'react';
import Wrapper from '@/components/shareable/Wrapper'; // Import Wrapper if needed

const SuccessPage = () => {
  return (
    <Wrapper>
      <section className="mt-16">
        <div className="text-center">
          <h2 className="font-bold text-3xl">Your order has been successfully completed!</h2>
          <p className="mt-4 text-lg">
            Thank you for shopping with us. We are processing your order and will notify you once it's shipped.
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

export default SuccessPage;
