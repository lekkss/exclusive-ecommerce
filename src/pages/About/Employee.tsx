import Slider from "react-slick";
import employee1 from "../../assets/employee/employee1.png";
import employee2 from "../../assets/employee/employee2.png";
import employee3 from "../../assets/employee/employee3.png";
import EmployeeCard from "../../components/EmployeeCard";

const Employee = () => {
  const settings = {
    dots: true,
    arrows: false,
    className: "",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="py-20">
      <Slider {...settings}>
        <div className="p-3">
          <EmployeeCard
            image={employee1}
            name="Tom Cruise"
            position="Founder & Chairman"
            socials={{ twitter: "", instagram: "", linkedin: "" }}
          />
        </div>
        <div className="p-3">
          <EmployeeCard
            image={employee2}
            name="Emma Watson"
            position="Managing Director"
            socials={{ twitter: "", instagram: "", linkedin: "" }}
          />
        </div>
        <div className="p-3">
          <EmployeeCard
            image={employee3}
            name="Will Smith"
            position="Product Designer"
            socials={{ twitter: "", instagram: "", linkedin: "" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Employee;
