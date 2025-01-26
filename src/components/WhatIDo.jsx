// import React from "react";
// import img1 from "../assets/wtd/3.png";
// import img2 from "../assets/wtd/4.png";
// import img3 from "../assets/wtd/5.png";

// const WhatIDo = () => {
//   const services = [
//     {
//       image: img1, // Image for Web Development
//       title: "Web Development",
//       description:
//         "I specialize in creating responsive, modern websites using the MERN stack. Whether it's a business website or a personal portfolio, I deliver high-quality and scalable solutions.",
//       cta: "Let's chat →",
//     },
//     {
//       image: img3, // Image for System Design
//       title: "System Design",
//       description:
//         "Designing scalable and robust system architectures tailored to your needs. From high-level designs to deep technical solutions, I can help build a strong foundation.",
//       cta: "Learn more →",
//     },
//     {
//       image: img2, // Image for DevOps
//       title: "DevOps",
//       description:
//         "Streamlining deployments and operations with tools like Docker, Jenkins, and AWS. I ensure your applications are efficient, secure, and ready to scale.",
//       cta: "Get a quote →",
//     },
//   ];

//   return (
//     <div className="bg-[#F9F5F2] py-16">
//       <div className="w-[80%] mx-auto">
//         <h2 className="text-[50px] text-[#282825] font-extrabold text-center mb-10">
//           What I Can Do for You
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-3xl border-2 border-[#242424] shadow-[3px_3px_0px_#242424] transition-all duration-300 transform hover:shadow-[6px_6px_0px_#242424] hover:translate-x-[-4px] hover:translate-y-[-4px] p-4"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="mb-4 w-[120px] object-cover"
//               />
//               <h3 className="text-[24px] font-bold text-[#52514E] mb-4">
//                 {service.title}
//               </h3>
//               <p className="text-gray-700 mb-6">{service.description}</p>
//               <button className="text-[#52514E] font-semibold hover:underline py-7">
//                 {service.cta}
//               </button>
//             </div>
//           ))}
//         </div>

//         <h2 className="text-[50px] text-[#282825] font-extrabold text-center mb-6 mt-20">
//           Featured projects
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default WhatIDo;
import React from "react";
import img1 from "../assets/wtd/3.png";
import img2 from "../assets/wtd/4.png";
import img3 from "../assets/wtd/5.png";

const WhatIDo = () => {
  const services = [
    {
      image: img1,
      title: "Web Development",
      description:
        "I specialize in creating responsive, modern websites using the MERN stack. Whether it's a business website or a personal portfolio, I deliver high-quality and scalable solutions.",
      cta: "Let's chat →",
    },
    {
      image: img3,
      title: "System Design",
      description:
        "Designing scalable and robust system architectures tailored to your needs. From high-level designs to deep technical solutions, I can help build a strong foundation.",
      cta: "Learn more →",
    },
    {
      image: img2,
      title: "DevOps",
      description:
        "Streamlining deployments and operations with tools like Docker, Jenkins, and AWS. I ensure your applications are efficient, secure, and ready to scale.",
      cta: "Get a quote →",
    },
  ];

  return (
    <div className="bg-[#F9F5F2]">
      <div className="bg-[#F9F5F2] py-12 md:py-16">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <h2 className="text-[30px] md:text-[50px] text-[#282825] font-extrabold text-center mb-8 md:mb-10">
            What I Can Do for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border-2 border-[#242424] shadow-[3px_3px_0px_#242424] transition-all duration-300 transform hover:shadow-[6px_6px_0px_#242424] hover:translate-x-[-4px] hover:translate-y-[-4px] p-4 md:p-6"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="mb-4 w-[80px] md:w-[120px] mx-auto md:mx-0 object-cover"
                />
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#52514E] mb-4 text-center md:text-left">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 text-center md:text-left">
                  {service.description}
                </p>
                <div className="text-center md:text-left">
                  <button className="text-[#52514E] font-semibold hover:underline">
                    {service.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-[30px] md:text-[50px] text-[#282825] font-extrabold text-center pb-12 md:mt-20">
        Experience
      </h2>
    </div>
  );
};

export default WhatIDo;
