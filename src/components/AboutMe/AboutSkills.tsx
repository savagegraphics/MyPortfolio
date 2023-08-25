import React, { useState } from 'react';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const accordionData = [
    { title: 'Problem-Solving', content: 'The ability to analyze challenges and find creative, efficient solutions for both technical and design issues.' },
    { title: 'Responsive Design', content: 'Ensuring web applications work well and look appealing on various devices and screen sizes.' },
    { title: 'Cross-Browser Compatibility', content: 'Ensuring the functionality and appearance of websites are consistent across different browsers.' },
    { title: 'Performance Optimization', content: 'Optimizing code and assets to improve website speed and overall performance.' },
    { title: 'Version Control', content: 'Proficiency with Git and GitHub for version control and collaboration.' },
    { title: 'API Design and Integration', content: 'Creating well-designed APIs and integrating third-party APIs into applications.' },
    { title: 'State Management', content: 'Mastery of state management libraries like Redux for handling complex application states.' },
    { title: 'Database Management', content: 'Strong understanding of SQL databases (MySQL, PostgreSQL) and ORM libraries like Sequelize.' },
  ];  

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Problem-Solving</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The ability to analyze challenges and find creative, efficient solutions for both technical and design issues.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
			</details>
		</div>
	</div>
</section>
//     <div className="hs-accordion-group">
//       {accordionData.map((item, index) => (
//        <div  key={index}  className="flex flex-col m-2  max-w-md gap-2 p-6 rounded-md shadow-md bg-violet-400 text-zinc-100">
//         <div className={`hs-accordion ${activeAccordion === index ? 'active' : ''}`} key={index}>
//         <button
//   className={`flex justify-between items-center hs-accordion-toggle ${activeAccordion === index ? 'hs-accordion-active:text-blue-600 group hover:text-zinc-100 dark:hs-accordion-active:text-blue-600 dark:hover:text-gray-400' : 'text-gray-200 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400'}`}
//   onClick={() => toggleAccordion(index)}
//   aria-controls={`hs-basic-collapse-${index}`}
// >
//   <span className="whitespace-nowrap text-zinc-100">{item.title}</span>
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-4 ml-8">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
// </svg>

// </button>

//           <div
//             id={`hs-basic-collapse-${index}`}
//             className={`hs-accordion-content ${activeAccordion === index ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}
//           >
//             <div className="pb-4 px-6">
//               <p className="text-md mt-8 text-zinc-100 dark:text-gray-200">{item.content}</p>
//             </div>
//           </div>
//         </div>
//         </div>
//       ))}
//     </div>
  );
};

export default Accordion;
