import React from 'react'

type Props = {}

const Skill = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col m-2 max-w-md gap-1 p-6 rounded-md shadow-md bg-gray-400 text-gray-700">
	 <h2 className="flex items-center gap-2 text-xl font-semibold leadi tracki">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current shrink-0 dark:text-violet-400">
			<path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
			<rect width="32" height="136" x="240" y="112"></rect>
			<rect width="32" height="32" x="240" y="280"></rect>
		</svg>Problem-Solving
	</h2>
	<p className="flex-1 dark:text-gray-400">
  The ability to analyze challenges and find creative, efficient solutions for both technical and design issues.</p>
</div>
<div className="flex flex-col m-2  max-w-md gap-2 p-6 rounded-md shadow-md bg-gray-400 text-gray-700">
	 <h2 className="flex items-center gap-2 text-xl font-semibold leadi tracki">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current shrink-0 dark:text-violet-400">
			<path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
			<rect width="32" height="136" x="240" y="112"></rect>
			<rect width="32" height="32" x="240" y="280"></rect>
		</svg>Responsive Design
	</h2>
	<p className="flex-1 dark:text-gray-400">
  Ensuring web applications work well and look appealing on various devices and screen sizes.  </p>
</div>
<div className="flex flex-col m-2  max-w-md gap-2 p-6 rounded-md shadow-md bg-gray-400 text-gray-700">
	 <h2 className="flex items-center gap-2 text-xl font-semibold leadi tracki">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current shrink-0 dark:text-violet-400">
			<path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
			<rect width="32" height="136" x="240" y="112"></rect>
			<rect width="32" height="32" x="240" y="280"></rect>
		</svg>Cross-Browser Compatibility
	</h2>
	<p className="flex-1 dark:text-gray-400">
  Ensuring the functionality and appearance of websites are consistent across different browsers.  </p>
</div>
<div className="flex flex-col m-2 max-w-md gap-2 p-6 rounded-md shadow-md bg-gray-400 text-gray-700">
	 <h2 className="flex items-center gap-2 text-xl font-semibold leadi tracki">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current shrink-0 dark:text-violet-400">
			<path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
			<rect width="32" height="136" x="240" y="112"></rect>
			<rect width="32" height="32" x="240" y="280"></rect>
		</svg>Performance Optimization
	</h2>
	<p className="flex-1 dark:text-gray-400">
  Optimizing code and assets to improve website speed and overall performance.  </p>
</div>
  </div>
  )
}

export default Skill


// import React from 'react'


// type Props = {}

// const index = (props: Props) => {
//   return (
// <div>
// <div className='m-8'>
// <div className="flex justify-between mb-1">
//   <span className="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
//   <span className="text-sm font-medium text-blue-700 dark:text-white">70%</span>
// </div>
// <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//   <div className="bg-blue-600 h-2.5 rounded-full"  style={{ width: `70%` }}></div>
// </div>
//     </div>
//     <div className='m-8'>
// <div className="flex justify-between mb-1">
//   <span className="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
//   <span className="text-sm font-medium text-blue-700 dark:text-white">70%</span>
// </div>
// <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//   <div className="bg-blue-600 h-2.5 rounded-full"  style={{ width: `70%` }}></div>
// </div>
//     </div>
//     <div className='m-8'>
// <div className="flex justify-between mb-1">
//   <span className="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
//   <span className="text-sm font-medium text-blue-700 dark:text-white">70%</span>
// </div>
// <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//   <div className="bg-blue-600 h-2.5 rounded-full"  style={{ width: `70%` }}></div>
// </div>
//     </div>
//     <div className='m-8'>
// <div className="flex justify-between mb-1">
//   <span className="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
//   <span className="text-sm font-medium text-blue-700 dark:text-white">70%</span>
// </div>
// <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//   <div className="bg-blue-600 h-2.5 rounded-full"  style={{ width: `70%` }}></div>
// </div>
//     </div>
//     <div className='m-8'>
// <div className="flex justify-between mb-1">
//   <span className="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
//   <span className="text-sm font-medium text-blue-700 dark:text-white">70%</span>
// </div>
// <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//   <div className="bg-blue-600 h-2.5 rounded-full"  style={{ width: `70%` }}></div>
// </div>
//     </div>
//     <div className='m-8'>
// <div className="flex justify-between mb-1">
//   <span className="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
//   <span className="text-sm font-medium text-blue-700 dark:text-white">70%</span>
// </div>
// <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//   <div className="bg-blue-600 h-2.5 rounded-full"  style={{ width: `70%` }}></div>
// </div>
//     </div>
//     <div className='m-8'>
// <div className="flex justify-between mb-1">
//   <span className="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
//   <span className="text-sm font-medium text-blue-700 dark:text-white">70%</span>
// </div>
// <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//   <div className="bg-blue-600 h-2.5 rounded-full"  style={{ width: `70%` }}></div>
// </div>
//     </div>
// </div>
//   )
// }

// export default index

