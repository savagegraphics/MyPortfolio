import React, { useState } from 'react';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const accordionData = [
    { title: 'Authentication and Authorization', content: 'Implementing secure user authentication and authorization mechanisms.' }, 
    { title: 'Serverless Architecture', content: 'Familiarity with serverless computing and platforms like AWS Lambda.' },
    { title: 'Testing and Debugging', content: 'Experience with unit testing, integration testing, and debugging techniques.' },
    { title: 'Web Security', content: 'Understanding of common web vulnerabilities and best practices for securing applications.' },
    { title: 'DevOps Tools', content: 'Knowledge of CI/CD pipelines, Docker, Kubernetes, and cloud deployment.' },
  ];  

  return (
    <div className="hs-accordion-group">
    {accordionData.map((item, index) => (
     <div className="flex flex-col m-2  max-w-md gap-2 p-6 rounded-md shadow-md bg-violet-400 text-zinc-100">
      <div className={`hs-accordion ${activeAccordion === index ? 'active' : ''}`} key={index}>
      <button
className={`flex justify-between items-center hs-accordion-toggle ${activeAccordion === index ? 'hs-accordion-active:text-blue-600 group hover:text-zinc-100 dark:hs-accordion-active:text-blue-600 dark:hover:text-gray-400' : 'text-gray-200 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400'}`}
onClick={() => toggleAccordion(index)}
aria-controls={`hs-basic-collapse-${index}`}
>
<span className="whitespace-nowrap text-zinc-100">{item.title}</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-4 ml-8">
<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
</svg>

</button>

        <div
          id={`hs-basic-collapse-${index}`}
          className={`hs-accordion-content ${activeAccordion === index ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}
        >
          <div className="pb-4 px-6">
            <p className="text-md mt-8 text-zinc-100 dark:text-gray-200">{item.content}</p>
          </div>
        </div>
      </div>
      </div>
    ))}
  </div>
  );
};

export default Accordion;
