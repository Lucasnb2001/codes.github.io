import React from 'react';
import { Link } from 'react-router-dom';

export const TopBar = () => {
  
  const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-black z-50 pt-10 pb-8 font-josefin'>
      <div className='mx-20 flex justify-between'>
      <Link to="/" id='image' className='cursor-pointer'>
          <svg
            
            className='cursor-pointer'
            width="195"
            height="64"
            viewBox="0 0 195 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="72" cy="32" r="15.5" stroke="white" strokeWidth="5" />
            <path d="M60 44L49 55" stroke="white" strokeWidth="7" strokeLinecap="round" />
            <path d="M72 23.002C72 23.002 74.8214 22.8591 77.5 25.002C80.1786 27.1449 81 30.002 81 30.002" stroke="white" strokeWidth="3" />
            <path d="M40.64 44.544C39.872 45.056 38.8267 45.632 37.504 46.272C36.1813 46.912 34.624 47.4453 32.832 47.872C31.0827 48.2987 29.1627 48.512 27.072 48.512C23.488 48.4693 20.2453 47.8293 17.344 46.592C14.4853 45.3547 12.0533 43.6693 10.048 41.536C8.04267 39.4027 6.48533 36.9493 5.376 34.176C4.30933 31.36 3.776 28.3733 3.776 25.216C3.776 21.76 4.33067 18.5813 5.44 15.68C6.592 12.736 8.192 10.1973 10.24 8.064C12.288 5.888 14.6987 4.20267 17.472 3.008C20.288 1.81333 23.36 1.216 26.688 1.216C29.4613 1.216 31.9787 1.6 34.24 2.368C36.5013 3.09333 38.4427 3.968 40.064 4.992L37.568 10.752C36.288 9.89866 34.7307 9.088 32.896 8.32C31.104 7.552 29.0987 7.168 26.88 7.168C24.6187 7.168 22.4853 7.616 20.48 8.512C18.4747 9.408 16.704 10.6667 15.168 12.288C13.632 13.9093 12.416 15.808 11.52 17.984C10.6667 20.1173 10.24 22.4213 10.24 24.896C10.24 27.4133 10.624 29.76 11.392 31.936C12.2027 34.0693 13.3333 35.9253 14.784 37.504C16.2773 39.0827 18.0693 40.32 20.16 41.216C22.2507 42.112 24.5973 42.56 27.2 42.56C29.5467 42.56 31.6373 42.1973 33.472 41.472C35.3067 40.7467 36.8213 39.936 38.016 39.04L40.64 44.544Z" fill="#BFF205" />
            <path d="M98.656 48V1.728H111.264C115.829 1.728 119.712 2.432 122.912 3.84C126.155 5.248 128.757 7.104 130.72 9.408C132.683 11.712 134.112 14.272 135.008 17.088C135.947 19.8613 136.416 22.6347 136.416 25.408C136.416 28.9067 135.797 32.0427 134.56 34.816C133.365 37.5893 131.701 39.9573 129.568 41.92C127.435 43.8827 124.981 45.3973 122.208 46.464C119.477 47.488 116.576 48 113.504 48H98.656ZM104.864 42.048H112.288C114.848 42.048 117.195 41.664 119.328 40.896C121.504 40.128 123.381 39.0187 124.96 37.568C126.581 36.1173 127.84 34.3467 128.736 32.256C129.632 30.1227 130.08 27.712 130.08 25.024C130.08 22.1653 129.611 19.6693 128.672 17.536C127.733 15.36 126.453 13.5467 124.832 12.096C123.211 10.6453 121.376 9.55733 119.328 8.832C117.28 8.064 115.125 7.68 112.864 7.68H104.864V42.048Z" fill="#BFF205" />
            <path d="M157.32 48.448C154.845 48.448 152.627 47.8933 150.664 46.784C148.744 45.632 147.208 44.096 146.056 42.176C144.947 40.2133 144.392 38.0373 144.392 35.648C144.392 33.2587 144.968 31.0827 146.12 29.12C147.272 27.1573 148.829 25.6 150.792 24.448C152.755 23.296 154.931 22.72 157.32 22.72C160.179 22.72 162.568 23.552 164.488 25.216C166.451 26.8373 167.88 28.928 168.776 31.488L146.888 40.192L146.248 38.592L166.92 30.4L166.408 31.168C165.597 29.376 164.403 27.8187 162.824 26.496C161.288 25.1733 159.411 24.512 157.192 24.512C155.187 24.512 153.373 25.0027 151.752 25.984C150.131 26.9653 148.829 28.3093 147.848 30.016C146.909 31.68 146.44 33.536 146.44 35.584C146.44 37.504 146.888 39.3173 147.784 41.024C148.723 42.688 150.003 44.032 151.624 45.056C153.245 46.08 155.144 46.592 157.32 46.592C158.771 46.592 160.136 46.336 161.416 45.824C162.739 45.2693 163.891 44.5653 164.872 43.712L166.088 45.184C164.893 46.1653 163.528 46.9547 161.992 47.552C160.499 48.1493 158.941 48.448 157.32 48.448ZM182.764 48.512C181.441 48.512 180.033 48.2773 178.54 47.808C177.047 47.296 175.809 46.464 174.828 45.312L175.916 43.904C176.641 44.7573 177.601 45.4613 178.796 46.016C179.991 46.528 181.271 46.784 182.636 46.784C183.66 46.784 184.62 46.6347 185.516 46.336C186.455 45.9947 187.223 45.4613 187.82 44.736C188.417 43.968 188.716 42.944 188.716 41.664C188.716 40.4267 188.375 39.4667 187.692 38.784C187.052 38.0587 186.199 37.504 185.132 37.12C184.108 36.6933 183.041 36.288 181.932 35.904C180.225 35.3493 178.775 34.6027 177.58 33.664C176.428 32.7253 175.852 31.3173 175.852 29.44C175.852 28.0747 176.172 26.9227 176.812 25.984C177.452 25.0027 178.305 24.256 179.372 23.744C180.439 23.232 181.612 22.976 182.892 22.976C184.044 22.976 185.26 23.1893 186.54 23.616C187.82 24.0427 188.951 24.768 189.932 25.792L188.908 27.2C188.225 26.304 187.308 25.6853 186.156 25.344C185.004 24.96 184.001 24.7467 183.148 24.704C182.423 24.704 181.655 24.8747 180.844 25.216C180.033 25.5147 179.329 26.0053 178.732 26.688C178.177 27.328 177.9 28.16 177.9 29.184C177.9 30.208 178.156 31.04 178.668 31.68C179.223 32.32 179.927 32.832 180.78 33.216C181.633 33.6 182.529 33.9627 183.468 34.304C184.663 34.7307 185.815 35.2 186.924 35.712C188.076 36.1813 189.015 36.8427 189.74 37.696C190.465 38.5493 190.828 39.7013 190.828 41.152C190.828 42.6027 190.508 43.8827 189.868 44.992C189.271 46.1013 188.375 46.976 187.18 47.616C186.028 48.2133 184.556 48.512 182.764 48.512Z" fill="#BFF205" />
          </svg>
        </Link>
        <div id='option-menu' className='hidden md:flex gap-10 my-4 font-semibold font-josefin'>
        <div>
          <a className='text-white hover:text-custom-green' href='#sobre' onClick={(e) => handleScroll(e, 'sobre')}>Sobre</a>
        </div>
        <div>
          <a className='text-white hover:text-custom-green' href='#time' onClick={(e) => handleScroll(e, 'time')}>Time</a>
        </div>
        <div>
          <a className='text-white hover:text-custom-green' href='#projetos' onClick={(e) => handleScroll(e, 'projetos')}>Projetos</a>
        </div>
        <div>
          <a className='text-white hover:text-custom-green' href='#noticias' onClick={(e) => handleScroll(e, 'noticias')}>Notícias</a>
        </div>
        <div>
          <a className='text-white hover:text-custom-green' href='#contato' onClick={(e) => handleScroll(e, 'contato')}>Contato</a>
        </div>
      </div>

      </div>
    </div>
  );
};
