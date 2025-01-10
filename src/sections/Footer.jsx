import { copyrightSign } from "../assets/icons";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container py-10 bg-dark-gray'>
      {/* Main Footer Section */}
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        {/* Brand Section */}
        <div className='flex flex-col items-start'>
          <a 
            href='/' 
            className='text-[#CD1818] font-bold text-3xl' 
            style={{ fontFamily: 'Sarina, sans-serif' }}
          >
            Custom Kicks
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Revolutionize your footwear experience with our AI-powered custom design tool. 
            Unleash creativity and craft shoes tailored to your unique style.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-coral-red'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='flex justify-between items-center text-white-400 mt-16 border-t border-white-100 pt-8 max-sm:flex-col max-sm:items-center'>
        <div className='flex justify-start items-center gap-2 font-montserrat'>
          <img
            src={copyrightSign}
            alt='Copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>© 2024 Custom Kicks Shoes. All rights reserved.</p>
        </div>
        <div className='flex gap-8 mt-4 max-sm:mt-6'>
          <a href='/terms' className='hover:text-coral-red'>Terms & Conditions</a>
          <a href='/privacy' className='hover:text-coral-red'>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
