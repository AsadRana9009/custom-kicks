import { arrowRight } from "../assets/icons";
import { offer1 } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      {/* Image Section */}
      <div className='flex-1'>
        <img
          src={offer1}
          alt='AI Custom Shoe Offer'
          width={773}
          height={587}
          className='object-contain w-auto rounded-lg'
        />
      </div>
      
      {/* Text Content */}
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold text-white'>
          <span className='text-[#CD1818]'>AI-Driven </span>
          Special Offer
        </h2>
        <p className='mt-4 text-gray-300'>
          Unlock the future of footwear with our exclusive deals on AI-powered
          custom-designed shoes. Tailor every detail to create your dream pair.
        </p>
        <p className='mt-6 text-gray-300'>
          Take advantage of our limited-time offer to experience the perfect 
          blend of innovation, comfort, and style—designed just for you.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Start Designing' iconURL={arrowRight} />
          <Button
            label='Explore More'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
