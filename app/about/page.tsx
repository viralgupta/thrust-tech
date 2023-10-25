import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section
        id="section-a"
        className=""
        style={{ backgroundImage: `url(/img/section-b.webp)` }}
      >
        <div
          className={`section-inner about overflow-x-auto overflow-scroll w-full md:w-11/12 p-3 md:p-10 max-h-[35rem] lg:max-h-[30rem] xl:max-h-[35rem] bg-opacity-50 backdrop-blur-sm bg-black `}
        >
          <h4 className="text-3xl mb-3 lg:mb-10 font-bold">About Us</h4>
          <div className="text-xs md:text-xl mb-3">
            Thrust Tech is a leading provider of model rocketry parts and
            aerospace products. We are committed to providing innovative, safe,
            and high-quality products that exceed our customers' expectations.
            Our team of experts designs and manufactures products that meet the
            highest standards of quality and safety, while our exceptional
            customer service ensures that our customers receive customized
            solutions to meet their specific needs. We are passionate about the
            aerospace industry and are dedicated to giving back through
            community involvement and charitable initiatives. Choose Thrust Tech
            as your trusted partner in the exciting world of model rocketry and
            aerospace!
          </div>
          <h4 className="text-3xl mb-3 lg:mb-10 font-bold">Founder Note</h4>
          <div className="text-xs md:text-xl mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsa
            dolore cumque nobis id libero, ullam vero culpa adipisci. Facilis
            voluptas temporibus est amet quam voluptatum esse eius, ex accusamus
            architecto quis dolorum placeat vero blanditiis. Odio accusamus quo
            obcaecati minima ullam explicabo quos eos ratione, quibusdam sed.
            Sequi, fugiat?
          </div>
          <Link href={`/contactus`} className="btn">
            <div className="hover"></div>
            <span className="">contact us</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default page;
