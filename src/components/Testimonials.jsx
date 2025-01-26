import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b">
          <h2 className="text-2xl font-bold">
            "Kristina is hands down the most creative and skilled designer I've
            ever worked with."
          </h2>
        </div>
        <div className="px-6 py-4 flex items-center space-x-4">
          <img
            src="/diana-prohoda.png"
            alt="Diana Prohoda"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="text-lg font-medium">Diana Prohoda</h3>
            <p className="text-gray-500">Head of Design at Sweatcoin</p>
          </div>
        </div>
        <div className="px-6 py-4 flex items-center space-x-4 border-t">
          <img
            src="/jessica-ibbotson.png"
            alt="Jessica Ibbotson"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="text-lg font-medium">Jessica Ibbotson</h3>
            <p className="text-gray-500">Education Coordinator at Dribbble</p>
            <p className="text-gray-500 mt-2">
              "In everything Kristina does, you can see that Product Design and
              supporting people is a passion of hers...Students are over the
              moon, and they specifically ask for her as their mentor."
            </p>
          </div>
        </div>
        <div className="px-6 py-4 flex items-center space-x-4 border-t">
          <img
            src="/amit-shabtay.png"
            alt="Amit Shabtay"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="text-lg font-medium">Amit Shabtay</h3>
            <p className="text-gray-500">Chief Product Officer at Flooz</p>
            <p className="text-gray-500 mt-2">
              "Kristina is a gem - a very talented designer, with deep product
              understanding, who puts the user front and center and is just
              amazing to work with. Honestly it is really rare to see someone
              who cares so much about her craft and about every detail."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
