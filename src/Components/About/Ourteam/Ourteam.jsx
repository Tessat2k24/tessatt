import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Ourteam.css"; // Make sure to adjust the path to your CSS file

// Import the SVG image
import instagramIcon from "./instagram1.svg"; // Update the path to your SVG file
import emailIcon from "./email1.svg"; // Update the path to your SVG file
import linkedinIcon from "./linkdin1.svg"; // Update the path to your SVG file

import edwin from "./ProfileImages/Edwin.jpg";
import blesson from "./ProfileImages/Blesson.jpeg";
import asif from "./ProfileImages/Asif.jpeg";
import navneeth from "./ProfileImages/Navneeth.jpeg";
import bijin from "./ProfileImages/Bijin.jpeg";
import bino from "./ProfileImages/Bino.jpeg";
import roshan from "./ProfileImages/Roshan.jpeg"
import rohan from "./ProfileImages/Rohan.jpeg"
import nobin from "./ProfileImages/Nobin.jpeg"
import meekhal from "./ProfileImages/Meekhal .jpeg"
import vyshnavi from "./ProfileImages/Vyshnavi.jpeg"
import gopika from "./ProfileImages/Gopika.jpg"
import sidharth from "./ProfileImages/Sidharth.jpg"
import rahul from "./ProfileImages/Rahul.jpeg";

const Ourteam = () => {
  const teamMembers = [
    {
      name: "Edwin K Jayesh",
      role: "CEO",
      image: edwin,
      socialLinks: {
        email: "edwinkjap11@gmail.com",
        instagram:
          "https://www.instagram.com/edwin.k.jayesh?igsh=MWJib3hnMTRwaTV1cA==",
        linkedin: "https://www.linkedin.com/in/edwinkjayesh",
      },
    },
    {
      name: "Rohan Binu Abraham",
      role: "Lead Mechanical Engineer",
      image: rohan,
      socialLinks: {
        email: "rohanabraham.237@gmail.com",
        instagram:
          "https://www.instagram.com/rohan_i.am?igsh=MWRvZTI4dW9tOWE4dQ==",
        linkedin: "https://www.linkedin.com/in/rohanbinuabraham",
      },
    },
    {
      name: "Bijin Kurian",
      role: "Managing Director",
      image: bijin,
      socialLinks: {
        email: "bijinkalayil@gmail.com",
        instagram: "https://www.instagram.com/bijin_kk?igsh=bHNhb3R3MWZtNnp2",
        linkedin:
          "https://www.linkedin.com/in/bijin-kurian-306051252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Asif Muhammad Sadhik",
      role: "Chief Technical Officer",
      image: asif,
      socialLinks: {
        email: "mohammedazif77@gmail.com",
        instagram:
          "https://www.instagram.com/aziffeh?igsh=MWE4OGliaWF0NjA3dQ==",
        linkedin:
          "https://www.linkedin.com/in/asif-muhammad-sadhik-51a6a9255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Bino J Panicker",
      role: "Web Head",
      image: bino,
      socialLinks: {
        email: "binojp2005@gmail.com",
        instagram:
          "https://www.instagram.com/binojpanicker?igsh=OXhhN2ZpOTRvNXho",
        linkedin:
          "https://www.linkedin.com/in/bino-j-panicker-820937257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Blesson Biji",
      role: "Lead Sensor System Engineer",
      image: blesson,
      socialLinks: {
        email: "",
        instagram:
          "https://www.instagram.com/blesson_bji?igsh=dmV3bTBiNno0aW50",
        linkedin: "https://www.linkedin.com/in/blesson-biji-544832235",
      },
    },

    {
      name: "Navneeth Krishnan",
      role: "Hardware and Software Design Lead",
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
      name: "Meekhal Anna Mathew ",
      role: "Entry,Descent,Landing Lead",
      image: meekhal,
      socialLinks: {
        email: "mathewmeekhal@gmail.com",
        instagram: "https://www.instagram.com/meekhal_m?igsh=d3JkbzRhZzA0OGFy",
        linkedin: "https://www.linkedin.com/in/meekhal-mathew-004957235",
      },
    },
    {
      name: "Nobin Jo Jaime Jose",
      role: "Communications Engineer Lead",
      image: nobin,
      socialLinks: {
        email: "nobinjo431@gmail.com",
        instagram:
          "https://www.instagram.com/nobin_jo?igsh=MWVodjhtazR4Y2k0cQ==",
        linkedin:
          "https://www.linkedin.com/in/nobin-jo-jaime-jose-6a3967235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    //              {
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
  const Members = [
    {
      name: "Gopika S",
      role: "Member",
      image: gopika,
      socialLinks: {
        email: "gopikas.ec2226@saintgits.org",
        instagram: "https://www.instagram.com/gopsiam?igsh=aXVrdXBwNGFqOWpw",
        linkedin:
          "https://www.linkedin.com/in/gopika-s-prolinku?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Roshan R John",
      role: "Member",
      image: roshan,
      socialLinks: {
        email: "roshanrjohn442@gmail.com",
        instagram: "https://www.instagram.com/roshan_r_john/",
        linkedin: "http://www.linkedin.com/in/roshan-r-johnb3588b235",
      },
    },
    {
      name: "Vyshnavi Dipu",
      role: "Member",
      image: vyshnavi,
      socialLinks: {
        email: "yshnavyd@gmail.com",
        instagram:
          "https://www.instagram.com/__yshnavy__?igsh=MTZ6NnY3MjNpMTN4NA==",
        linkedin:
          "https://www.linkedin.com/in/vyshnavi-dipu-694969235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },

    {
      name: "Sidharth V Menon",
      role: "Member",
      image: sidharth,
      socialLinks: {
        email: "svm.ec2125@saintgits.org",
        instagram: "",
        linkedin: "",
      },
    },
    {
      name: "Rahul Krishnan",
      role: "Member",
      image: rahul,
      socialLinks: {
        email: "rahulkrishnan4002@gmail.com",
        instagram:
          "https://www.instagram.com/mr_rahulkrishnan_05?utm_source=qr&igsh=dDk0dWtvY2w4aTl1",
        linkedin:
          "https://www.linkedin.com/in/rahul-krishnan-b9a1132b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },

    //              {
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



  const settings1 = {
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
    <>
      <section className="border-b" style={{ borderColor: "#333" }}>
        <div className="container px-3 py-3 pb-0 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl ">
            EXECUTIVE PANEL{" "}
          </h1>

          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-8 mt-4 xl:mt-16 md:grid-cols-2 xl:grid-cols-4"
              >
                <div className="flex flex-col items-center pb-8 transition-colors duration-300 transform  cursor-pointer rounded-xl">
                  <img
                    className="object-cover object-top w-32 h-32 rounded-full ring-3 ring-gray-300"
                    src={member.image}
                    alt={member.name}
                  />

                  <h1 className="mt-4 font-semibold text-white capitalize ">
                    {member.name}
                  </h1>

                  <p className="mt-2 text-white capitalize ">
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
                      <img src={emailIcon} alt="email" className="w-6 h-6" />
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
      <section className="border-b" style={{ borderColor: "#333" }}>
        <div className="container px-3 py-3 pb-0 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl ">
            MEMBERS{" "}
          </h1>

          <Slider {...settings}>
            {Members.map((member, index) => (
              <div
                key={index}
                className="grid grid-cols-1 gap-8 mt-4 xl:mt-16 md:grid-cols-2 xl:grid-cols-4"
              >
                <div className="flex flex-col items-center pb-8 transition-colors duration-300 transform  cursor-pointer rounded-xl">
                  <img
                    className="object-cover object-top w-32 h-32 rounded-full ring-3 ring-gray-300"
                    src={member.image}
                    alt={member.name}
                  />

                  <h1 className="mt-4 font-semibold text-white capitalize ">
                    {member.name}
                  </h1>

                  {/* <p className="mt-2 text-gray-10 capitalize dark:text-gray-10 group-hover:text-gray-10 role">
                    {member.role}
                  </p> */}

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
                      <img src={emailIcon} alt="email" className="w-6 h-6" />
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
    </>
  );
};

export default Ourteam;
