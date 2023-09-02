import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers </span>Say?
      </h3>
      <p className="info-text mt-4 text-center m-auto max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptas
        laboriosam quia molestias quidem est necessitatibus officiis assumenda
        numquam explicabo!
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
