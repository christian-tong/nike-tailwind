import { Button } from "../components/_index";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

function SpecialOffer() {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col lg:max-w-lg">
        <h2 className="font-palanquin text-4xl capitalize font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text ">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text ">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button iconURL={arrowRight}>Shop Now</Button>
          <Button
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
