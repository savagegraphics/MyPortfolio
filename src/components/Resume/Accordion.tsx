import React from 'react'

type Props = {}

const Accordion = (props: Props) => {
  return (
<section className="bg-gray-800 text-gray-100">
<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
  <div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Problem-Solving:</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">TProficiency in analyzing challenges and creatively devising efficient solutions for both technical and design hurdles.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Responsive Design:</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Skill in ensuring web applications are visually appealing and function smoothly on various devices and screen sizes.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Performance Optimization: </summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Expertise in enhancing website speed and overall performance through optimized code and assets. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">API Integration: </summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Ability to craft well-designed APIs and seamlessly incorporate third-party APIs into applications. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">State Management: </summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Mastery of state management frameworks, such as Redux, to handle intricate application states. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Authentication & Security:  </summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400"> Implementation of robust user authentication and authorization mechanisms, with a grasp of web security best practices. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Version Control & Collaboration: </summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Proficiency with Git and GitHub for efficient version control and collaborative development. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Continuous Learning: </summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">A dedicated commitment to staying updated with the latest technologies and trends in frontend development. </p>
			</details>
		</div>
	</div>
</section>
  )
}

export default Accordion