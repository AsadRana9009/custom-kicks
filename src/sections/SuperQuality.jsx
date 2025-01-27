import { superShoes } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-white'>
          Design your
          <span className='text-[#CD1818]'> Super </span>
          <span className='text-[#CD1818]'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Experience the future of footwear design with our AI-powered 3D modeling
        tool. Customize every detail to craft shoes that reflect your unique style and preferences.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Unleash your creativity and design shoes that are truly yours
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={superShoes}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
