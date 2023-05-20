import { Field, Form, Formik } from "formik";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-full px-24 max-md:px-4">
        <div className="">
          <p className="text-[60px] font-[supportUs]">SUPPORT US</p>
          <div className="flex items-center gap-4">
            <div className="w-12 bg-blue-600 h-[2px] max-md:hidden"></div>
            <p className="text-xl">Your support means empowered lives</p>
          </div>
          <button className="border-2 hover:bg-[#0C1D39] hover:text-white mt-12 border-black px-8 py-2 text-lg">
            Donate
          </button>
        </div>
        <div className="flex max-md:block justify-between">
          <div className="mt-8 max-md:mt-4">
            <p className="text-gray-900 font-thin">Address</p>
            <p className="text-gray-900 font-thin">City, State, Zip Code</p>
            <p className="text-gray-900 font-thin mt-6">(XXX) XXX-XXXX</p>
            <p className="text-gray-900 font-thin">sampleemail@sample.com</p>
          </div>
          <div className="mt-8 max-md:mt-4">
            <p className="text-lg font-semibold">GET INVOLVED</p>
            <p className="text-gray-900 font-thin mt-7">
              Let's combine forces to make a
            </p>
            <p className="text-gray-900 font-thin">difference together</p>
          </div>
          <div className="mt-8 max-md:mt-4">
            <p className="text-lg font-semibold">JOIN THE EMAIL LIST</p>
            <Formik>
                <Form className="flex gap-2 mt-10 max-md:mt-4">
                    <Field type="text" placeholder="Enter Email Address" className="border-2 w-[150px] h-[40px] border-black pl-1 font-thin text-sm outline-none"/>
                    <button className="border-2 hover:bg-[#0C1D39] font-medium hover:text-white border-black h-[40px] px-3">JOIN</button>
                </Form>
            </Formik>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full bg-[#3A4961]">
        <p className="font-thin text-white h-[70px] leading-[70px] pl-24">© 2023 by Suvaidyam, Saran, Bihar</p>
      </div>
    </>
  );
}
