import React,{ useState } from 'react'
import { AddressBar } from '@/components/address-bar';
import Link from 'next/link';
import Byline from '@/app/ui/byline'
import 'tailwindcss/tailwind.css';
import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer';

type Props = {}

const IndexPage = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <div className="overflow-hidden bg-gray-900 overflow-y-scroll pb-36">
    <div className="mt-4 flex justify-space-around h-14 items-center px-4 py-4 lg:h-auto">
      <Link
        href="/"
        className="group flex w-full items-center gap-x-2.5"
        onClick={close}
      >
             <div className="grid">
             <h4 className="mx-2 mt-2 font-medium text-blue-400 dark:text-gray-200 sm:ml-4">
            Toheeb Olawale RAJI
          </h4>
          <p className="mx-2 mt-2 lg:ml-4 text-sm font-medium text-gray-300 dark:text-gray-400">
            Front End Developer
          </p>
        </div>
      </Link>

      <Link href="https://drive.google.com/file/d/1_Ui_A9XJx33CzLZwnA6iO93YHX-jIe1u/view?usp=drivesdk">
      <button type="button" className="flex text-right m-6 px-3 py-2.5 font-medium text-sm whitespace-nowrap rounded-xl bg-blue-500 hover:bg-blue-400 text-gray-200">Download CV</button>
      </Link>
    </div>

        <div className="mx-auto max-w-8xl space-y-8 px-2 pt-6 lg:px-8 lg:py-8">
            <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar />
              </div>
            </div>
        </div>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default IndexPage