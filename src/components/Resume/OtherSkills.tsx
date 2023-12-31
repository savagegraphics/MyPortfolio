import React from 'react';
import { SiTailwindcss, SiRedux,SiWebpack, SiCss3, SiBootstrap, SiHtml5} from 'react-icons/si';


const Index: React.FC = () => {
  return (
    <div className="w-full max-w-[85rem] p-4 border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-3 text-base font-semibold text-gray-50 md:text-xl dark:text-white">
     Frontend Fusion
      </h5>
      <p className="text-sm font-normal text-gray-50 dark:text-gray-400">Merging creativity, code, and user-centric design to craft seamless, captivating digital experiences.</p>
      <ul className="my-4 space-y-3 rounded-lg bg-gray-800">
        <li>
          <a href="#" className="flex items-center p-3 text-base font-bold text-gray-100 hover:text-gray-700 hover:bg-gray-300 rounded-lg bg-gray-800">
        <SiHtml5/>
            <span className="flex-1 ml-3 whitespace-nowrap">HTML</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-50 bg-gray-600 rounded">Proficient</span>
          </a>
        </li>
        <li>
        <a href="#" className="flex items-center p-3 text-base font-bold text-gray-100 hover:text-gray-700 hover:bg-gray-300 rounded-lg bg-gray-800">
         <SiCss3 />
         <span className="flex-1 ml-3 whitespace-nowrap">CSS Styled & SCSS</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-50 bg-gray-600 rounded ">Skilled</span>
     </a>
        </li>
        <li>
        <a href="#" className="flex items-center p-3 text-base font-bold text-gray-100 hover:text-gray-700 hover:bg-gray-300 rounded-lg bg-gray-800">
         <SiBootstrap/>
            <span className="flex-1 ml-3 whitespace-nowrap">Bootstrap</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-50 bg-gray-600 rounded ">Advanced</span>
 </a>
        </li>
        <li>
        <a href="#" className="flex items-center p-3 text-base font-bold text-gray-100 hover:text-gray-700 hover:bg-gray-300 rounded-lg bg-gray-800">
          	<SiTailwindcss className='w-12 h-6'/>
            <span className="flex-1 ml-3 whitespace-nowrap">TailwindCSS</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-50 bg-gray-600 rounded ">Proficient</span>
 </a>
        </li>
        <li>
        <a href="#" className="flex items-center p-3 text-base font-bold text-gray-100 hover:text-gray-700 hover:bg-gray-300 rounded-lg bg-gray-800">
           	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="React" className="w-12 h-6 fill-current lg:m-0 dark:text-gray-400">
				<title>React</title>
				<path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z"></path>
			</svg>
            <span className="flex-1 ml-3 whitespace-nowrap">React</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-50 bg-gray-600 rounded ">Proficient</span>
  </a>
        </li>
        <li>
        <a href="#" className="flex items-center p-3 text-base font-bold text-gray-100 hover:text-gray-700 hover:bg-gray-300 rounded-lg bg-gray-800">
           	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Next.js" className="w-12 h-6 fill-current lg:m-0 dark:text-gray-400">
				<title>Next.js</title>
				<path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"></path>
			</svg>
            <span className="flex-1 ml-3 whitespace-nowrap">NEXTjs</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-50 bg-gray-600 rounded ">Advanced</span>
 </a>
        </li>
        <li>
        <a href="#" className="flex items-center p-3 text-base font-bold text-gray-100 hover:text-gray-700 hover:bg-gray-300 rounded-lg bg-gray-800">
          <SiRedux className='w-12 h-6'/>
            <span className="flex-1 ml-3 whitespace-nowrap">Redux</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-50 bg-gray-600 rounded ">Intermediate</span>
 </a>
        </li>
        
        <li>
          <a href="#" className="flex items-center p-3 text-base font-bold text-gray-100 hover:text-gray-700 hover:bg-gray-300 rounded-lg bg-gray-800">
         <SiWebpack className='w-12 h-6'/>
            <span className="flex-1 ml-3 whitespace-nowrap">Webpack</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-50 bg-gray-600 rounded ">Skilled</span>
 </a>
        </li>
        
      </ul>
      <div>
        <a href="#" className="inline-flex items-center text-xs font-normal text-gray-50 hover:underline dark:text-gray-400">
       
          Connecting the dots between innovation and user satisfaction. Ready to elevate your digital landscape?.
        </a>
      </div>
    </div>
  );
};

export default Index;
