import NewArrival from "../../components/NewArrival";
import { newArrival } from "../../utils/products";

const NewArrivals = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side */}
        <div className="relative">
          {newArrival.length > 0 && (
            <NewArrival
              image={newArrival[0].image}
              heading={newArrival[0].name}
              text={newArrival[0].description}
            />
          )}
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 md:grid-rows-2 gap-4">
          {/* First item in the right column */}
          <div className="relative">
            {newArrival.length > 1 && (
              <NewArrival
                image={newArrival[1].image}
                heading={newArrival[1].name}
                text={newArrival[1].description}
              />
            )}
          </div>

          {/* Bottom Two Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newArrival.slice(2).map((item) => (
              <div key={item.id} className="relative">
                <NewArrival
                  image={item.image}
                  heading={item.name}
                  text={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
