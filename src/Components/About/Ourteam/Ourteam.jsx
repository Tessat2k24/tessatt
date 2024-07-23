// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Ourteam.css"; // Make sure to adjust the path to your CSS file

// const Ourteam = () => {
//   const teamMembers = [
//     {
//       name: "Arthur Melo",
//       role: "Design Director",
//       image:
//         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
//       socialLinks: {
//         reddit: "#",
//         facebook: "#",
//         github: "#",
//       },
//     },
//     {
//       name: "Amelia Anderson",
//       role: "Lead Developer",
//       image:
//         "https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//       socialLinks: {
//         reddit: "#",
//         facebook: "#",
//         github: "#",
//       },
//     },
//       {
//         name: "Benjamin Carter",
//         role: "UI/UX Designer",
//         image:
//           "https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//         socialLinks: {
//           reddit: "#",
//           facebook: "#",
//           github: "#",
//         },
//       },
//       {
//         name: "Sophia Martinez",
//         role: "Software Engineer",
//         image:
//           "https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//         socialLinks: {
//           reddit: "#",
//           facebook: "#",
//           github: "#",
//         },
//       },
//       {
//         name: "Ethan Johnson",
//         role: "Data Scientist",
//         image:
//           "https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//         socialLinks: {
//           reddit: "#",
//           facebook: "#",
//           github: "#",
//         },
//       },
//       {
//         name: "Olivia Brown",
//         role: "Project Manager",
//         image:
//           "https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//         socialLinks: {
//           reddit: "#",
//           facebook: "#",
//           github: "#",
//         },
//       },
//       {
//         name: "Lucas Taylor",
//         role: "Frontend Developer",
//         image:
//           "https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//         socialLinks: {
//           reddit: "#",
//           facebook: "#",
//           github: "#",
//         },
//       },
//       {
//         name: "Ava Wilson",
//         role: "Marketing Specialist",
//         image:
//           "https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//         socialLinks: {
//           reddit: "#",
//           facebook: "#",
//           github: "#",
//         },
//       },
//       {
//         name: "Liam Moore",
//         role: "Backend Developer",
//         image:
//           "https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//         socialLinks: {
//           reddit: "#",
//           facebook: "#",
//           github: "#",
//         },
//       },
//       {
//         name: "Charlotte Lee",
//         role: "Graphic Designer",
//         image:
//           "https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//         socialLinks: {
//           reddit: "#",
//           facebook: "#",
//           github: "#",
//         },
//       },
//       {
//         name: "Mason Garcia",
//         role: "System Administrator",
//         image:
//           "https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//         socialLinks: {
//           reddit: "#",
//           facebook: "#",
//           github: "#",
//         },
//       },
//       {
//         name: "Amelia Anderson",
//         role: "Lead Developer",
//         image:
//           "https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//         socialLinks: {
//           reddit: "#",
//           facebook: "#",
//           github: "#",
//         },
//       },
//     // Add more team members as needed
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="border-b" style={{ borderColor: "#333" }}>
//       <div className="container px-6 py-10 mx-auto">
//         <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
//           Our Team
//         </h1>

//         <Slider {...settings}>
//           {teamMembers.map((member, index) => (
//             <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
//               <div
//                 key={index}
//                 className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent"
//               >
//                 <img
//                   className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
//                   src={member.image}
//                   alt={member.name}
//                 />

//                 <h1 className="mt-4  font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
//                   {member.name}
//                 </h1>

//                 <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
//                   {member.role}
//                 </p>

//                 <div className="flex mt-3 -mx-2">
//                   <a
//                     href={member.socialLinks.instagram}
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Instagram"
//                   >
//                     <svg
//                       class="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         clip-rule="evenodd"
//                         d="M7.75 2C4.67893 2 2 4.67893 2 7.75V16.25C2 19.3211 4.67893 22 7.75 22H16.25C19.3211 22 22 19.3211 22 16.25V7.75C22 4.67893 19.3211 2 16.25 2H7.75ZM12 5.75C8.96243 5.75 6.5 8.21243 6.5 11.25C6.5 14.2876 8.96243 16.75 12 16.75C15.0376 16.75 17.5 14.2876 17.5 11.25C17.5 8.21243 15.0376 5.75 12 5.75ZM12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8ZM17.625 6.125C17.9107 6.125 18.125 6.33929 18.125 6.625C18.125 6.91071 17.9107 7.125 17.625 7.125H17.624C17.3383 7.125 17.125 6.91071 17.125 6.625C17.125 6.33929 17.3393 6.125 17.625 6.125H17.625Z"
//                       />
//                     </svg>
//                   </a>

//                   <a
//                     href={member.socialLinks.facebook}
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Facebook"
//                   >
//                     <svg
//                       class="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
//                     </svg>
//                   </a>

//                   <a
//                     href={member.socialLinks.github}
//                     className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
//                     aria-label="Github"
//                   >
//                     <svg
//                       class="w-6 h-6 fill-current"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Ourteam;





import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Ourteam.css"; // Make sure to adjust the path to your CSS file

// Import the SVG image
import instagramIcon from "./instagram1.svg"; // Update the path to your SVG file
import facebookIcon from "./facebook1.svg"; // Update the path to your SVG file
import linkedinIcon from "./linkdin1.svg"; // Update the path to your SVG file

import edwin from "./ProfileImages/Edwin.jpg";
import blesson from "./ProfileImages/Blesson.jpeg";
import asif from "./ProfileImages/Asif.jpeg";
import navneeth from "./ProfileImages/Navneeth.jpeg";
// import rohan from "./ProfileImages/Blesson.jpeg";
import bijin from "./ProfileImages/Bijin.jpeg";
import bino from "./ProfileImages/Bino.jpeg";
// import blesson from "./ProfileImages/Blesson.jpeg"




const Ourteam = () => {
  const teamMembers = [
    {
      name: "Edwin K Jayesh",
      role: "Team Lead",
      image: edwin,
      socialLinks: {
        email: "edwinkjap11@gmail.com",
        instagram:
          "https://www.instagram.com/edwin.k.jayesh?igsh=MWJib3hnMTRwaTV1cA==",
        linkedin: "https://www.linkedin.com/in/edwinkjayesh",
      },
    },
    {
      name: "Blesson Biji",
      role: "Member",
      image: blesson,
      socialLinks: {
        email: "",
        instagram: "",
        linkedin: "https://www.linkedin.com/in/blesson-biji-544832235",
      },
    },
    {
      name: "Asif Muhammad Sadhik",
      role: "Member",
      image: asif,
      socialLinks: {
        email: "mohammedazif77@gmail.com",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Navneeth Krishnan",
      role: "Member",
      image: navneeth,
      socialLinks: {
        email: "mail.navneethk@gmail.com",
        instagram:
          "https://www.instagram.com/nav____k?igsh=MTQ3a3BqZmRoYmMxOQ==",
        linkedin:
          "https://www.linkedin.com/in/navneeth-k-11b02a229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Bijin Kurian",
      role: "Member",
      image:bijin,
      socialLinks: {
        email: "bijinkalayil@gmail.com",
        instagram: "https://www.instagram.com/bijin_kk?igsh=bHNhb3R3MWZtNnp2",
        linkedin: "https://www.linkedin.com/in/bijin-kurian-306051252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Bino J Panicker",
      role: "Member",
      image:bino ,
      socialLinks: {
        email: "binojp2005@gmail.com",
        instagram: "https://www.instagram.com/binojpanicker?igsh=OXhhN2ZpOTRvNXho",
        linkedin: "https://www.linkedin.com/in/bino-j-panicker-820937257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    // {
    //   name: "Roshan R John",
    //   role: "Member",
    //   image: rohan,
    //   socialLinks: {
    //     email: "roshanrjohn442@gmail.com",
    //     instagram: "https://www.instagram.com/roshan_r_john/",
    //     linkedin: "http://www.linkedin.com/in/roshan-r-johnb3588b235",
    //   },
    // },
    // {
    //   name: "",
    //   role: "Member",
    //   image: ,
    //   socialLinks: {
    //     email: "",
    //     instagram: "",
    //     linkedin: "",
    //   },
    // },
    // Add more team members as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="border-b" style={{ borderColor: "#333" }}>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our Team
        </h1>

        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4"
            >
              <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <img
                  className="object-cover object-top w-32 h-32 rounded-full ring-3 ring-gray-300"
                  src={member.image}
                  alt={member.name}
                />

                <h1 className="mt-4 font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  {member.name}
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  {member.role}
                </p>

                <div className="flex mt-3 -mx-2">
                  <a
                    href={member.socialLinks.instagram}
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Instagram"
                    target="blank"
                  >
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </a>

                  <a
                    href={`mailto:${member.socialLinks.email}`}
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="email"
                    target="blank"
                  >
                    <img src={facebookIcon} alt="email" className="w-6 h-6" />
                  </a>

                  <a
                    href={member.socialLinks.linkedin}
                    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Linkedin"
                    target="blank"
                  >
                    <img
                      src={linkedinIcon}
                      alt="Linkedin"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Ourteam;
