import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillFacebook, AiFillInstagram, AiFillHtml5} from 'react-icons/ai';
import { DiCss3, DiPython, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiAdobeillustrator } from "react-icons/si";
import { useState } from 'react';
import Image from 'next/image';
import deved from '../public/รูปทำพอต/26.2.jpg';
import deved2 from '../public/รูปทำพอต/19.jpg';
import deved3 from '../public/รูปทำพอต/31.png';
import deved4 from '../public/รูปทำพอต/1.jpg';
import deved5 from '../public/รูปทำพอต/4.jpg';
import deved6 from '../public/รูปทำพอต/12.jpg';
import deved7 from '../public/รูปทำพอต/14.jpg';
import deved8 from '../public/รูปทำพอต/16.jpg';
import deved9 from '../public/รูปทำพอต/18.jpg';
import deved10 from '../public/รูปทำพอต/7.jpg';
import deved11 from '../public/รูปทำพอต/50.png';
import deved12 from '../public/รูปทำพอต/51.png';
import deved13 from '../public/รูปทำพอต/48.png';
import deved14 from '../public/รูปทำพอต/52.png';
import deved15 from '../public/รูปทำพอต/53.png';
import deved16 from '../public/รูปทำพอต/33.png';
import deved17 from '../public/รูปทำพอต/9.jpg';
import deved18 from '../public/รูปทำพอต/11.jpg';
import deved19 from '../public/รูปทำพอต/6.jpg';
import deved20 from '../public/รูปทำพอต/32.png';
import deved21 from '../public/รูปทำพอต/34.png';
import deved22 from '../public/รูปทำพอต/35.png';
import deved23 from '../public/รูปทำพอต/23.jpg';
import deved24 from '../public/รูปทำพอต/38.jpg';
import deved25 from '../public/รูปทำพอต/39.jpg';
import deved26 from '../public/รูปทำพอต/40.jpg';
import deved27 from '../public/รูปทำพอต/41.jpg';
import deved28 from '../public/รูปทำพอต/42.jpg';
import deved29 from '../public/รูปทำพอต/43.jpg';
import deved30 from '../public/รูปทำพอต/44.jpg';
import deved31 from '../public/รูปทำพอต/45.jpg';
import deved32 from '../public/รูปทำพอต/46.jpg';
import deved33 from '../public/รูปทำพอต/47.jpg';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 pt-5 md:px-20 lg:px-40 dark:bg-black'>
        <section className='min-h-screen'>
          <nav className='px-7 py-10 mb-12 flex justify-between bg-black rounded-md ml-0 dark:bg-white'>
            <h1 className='text-xl font-personalF text-white dark:text-black'>Developedbyed</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-lg text-white dark:text-black' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-blue-900 to-teal-500 text-white px-4 py-2 rounded-md ml-8 font-personalF' href='#'>resume</a>
              </li>
            </ul>
          </nav>
          <div className='bg-black rounded-xl pt-5 pb-5 ml-auto mr-auto dark:bg-white'>
            <div className='relative object-scale-down h-25 w-80 mx-auto'>
              <Image src={deved} alt="image" className='rounded-lg object-cover'/>
            </div>
          </div>
          <div className='py-10 font-personalF text-center'>
            <h2 className='text-2xl py-3 text-yellow-500 font-medium md:text-6xl'>
              Thanattouth Niticharoen
            </h2>
            <h3 className='text-xl py-3 text-black md:text-3xl dark:text-white'>
              My nickname is Nampun. I was born on September 17, 2004.
            </h3>
            <p className='text-md py-5 leading-8 text-black md:text-xl max-w-lg mx-auto dark:text-white'>
              I come from Bangpakok Wittayakhom School Science and Mathematics course My hobbies are reading books, listening to music and playing games.
            </p>
          </div>
          <div className='text-2xl flex justify-center gap-20 py-5 pb-1 text-gray-400 cursor-pointer'>
            <a className='bla'  href="https://www.facebook.com/nam.pun.925/">
              <AiFillFacebook />
            </a>
            <a href="https://www.instagram.com/tnt_nimah/">
              <AiFillInstagram />
            </a>
          </div>
        </section>
        <section className='min-h-screen'>
          <div className='pb-10 px-7 py-10 mb-5 bg-black rounded-md mt-5 dark:bg-white'>
            <h3 className='text-3xl py-1 text-white font-personalF text-center md:text-5xl dark:text-black'>
              Skill
            </h3>
            <div className='text-3xl flex justify-center gap-16 py-3 pt-6 text-gray-400 dark:text-gray-800'>
              <AiFillHtml5 />
              <DiCss3 />
              <IoLogoJavascript />
            </div>
            <div className='text-3xl flex justify-center gap-16 py-3 pt-6 text-gray-400 dark:text-gray-800'>
              <DiPython />
              <SiAdobeillustrator />
              <DiReact />
            </div>
          </div>
          <div className='my-0 ml-auto mr-auto text-center pt-7'>
              <h3 className='text-3xl py-1 text-black font-personalF md:text-5xl dark:text-white'>
                Activities
              </h3>
              <p className='font-personalF text-md py-3 text-black leading-8 md:text-xl max-w-lg mx-auto dark:text-white'>
                The activities of my high school life are <span className='text-yellow-500'>very happy and enjoyable.</span>
              </p>
              <div className='lg:flex gap-10 py-5'>
                  <div className='text-black font-personalF shadow-xl p-7 rounded-lg dark:bg-white'>
                    <h3 className='pt-2 text-xl py-5'>
                      ARUNASA
                    </h3>
                    <div className='flex justify-center basic-1 flex-1'>
                      <Image src={deved2} alt="image" width={300} height={300}/>
                    </div>
                  </div>
                  <div className='text-black font-personalF shadow-xl p-7 rounded-lg dark:bg-white'>
                    <h3 className='pt-2 text-xl py-5'>
                      Organizing the ROV Tournament E-sport
                    </h3>
                    <div className='flex justify-center basic-1 flex-1'>
                      <Image src={deved4} alt="image" width={300} height={300}/>
                    </div>
                  </div>
                  <div className='text-black font-personalF shadow-xl p-7 rounded-lg dark:bg-white'>
                    <h3 className='pt-2 text-xl py-5'>
                      Organize a competition to answer technology questions
                    </h3>
                    <div className='flex justify-center basic-1 flex-1'>
                      <Image src={deved5} alt="image" width={300} height={300}/>
                    </div>
                  </div>
                  <div className='text-black font-personalF shadow-xl p-7 rounded-lg dark:bg-white'>
                    <h3 className='pt-2 text-xl py-5'>
                      Arrange Amath booth at BPK Open House 2021
                    </h3>
                    <div className='flex justify-center basic-1 flex-1'>
                      <Image src={deved6} alt="image" width={300} height={300}/>
                    </div>
                  </div>
                </div>
              <div className='lg:flex gap-10 py-10'>
                <div className='text-black font-personalF shadow-xl p-7 rounded-lg dark:bg-white'>
                  <h3 className='pt-2 text-xl py-5'>
                    Liis day
                  </h3>
                  <div className='flex justify-center basic-1 flex-1'>
                    <Image src={deved7} alt="image" width={300} height={300}/>
                  </div>
                </div>
                <div className='text-black font-personalF shadow-xl p-7 rounded-lg dark:bg-white'>
                  <h3 className='pt-2 text-xl py-5'>
                    Learn digital art
                  </h3>
                  <div className='flex justify-center basic-1 flex-1'>
                    <Image src={deved8} alt="image" width={300} height={300}/>
                  </div>
                </div>
                <div className='text-black font-personalF shadow-xl p-7 rounded-lg dark:bg-white'>
                  <h3 className='pt-2 text-xl py-5'>
                    Participate in the ROV Tournament E-sport event
                  </h3>
                  <div className='flex justify-center basic-1 flex-1'>
                      <Image src={deved9} alt="image" width={300} height={300}/>
                  </div>
                </div>
                <div className='text-black font-personalF shadow-xl p-7 rounded-lg dark:bg-white'>
                    <h3 className='pt-2 text-xl py-5'>
                      A-math
                    </h3>
                    <div className='flex justify-center basic-1 flex-1'>
                      <Image src={deved10} alt="image" width={300} height={300}/>
                    </div>
                </div>
              </div>
          </div>
          <div className='my-0 ml-auto mr-auto text-center py-7'>
            <h3 className='text-3xl py-1 text-black font-personalF md:text-5xl dark:text-white'>
              Certificate
            </h3>
            <p className='font-personalF text-md py-3 text-black leading-8 md:text-xl max-w-lg mx-auto dark:text-white'>
              Certificates that I received from <span className='text-yellow-500'>participating in activities and learning</span>
            </p>
              <div className='text-black font-personalF relative mx-auto'>
                <div className='lg:flex gap-10 py-5'>  
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved11} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved13} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved14} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved15} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved16} alt="image" width={300} height={300}/>
                  </div>
                </div>
                <div className='lg:flex gap-10 py-10'>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved18} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved12} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved17} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved19} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved20} alt="image" width={300} height={300}/>
                  </div>
                </div>
                <div className='lg:flex gap-10 py-10'>  
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved21} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved23} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved24} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved25} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved26} alt="image" width={300} height={300}/>
                  </div>
                </div>
                <div className='lg:flex gap-10 py-10'>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved28} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved29} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved30} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved31} alt="image" width={300} height={300}/>
                  </div>
                  <div className='flex justify-center pt-5 py-6 shadow-xl p-7 rounded-lg dark:bg-white'>
                    <Image src={deved32} alt="image" width={300} height={300}/>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </main>
    </div>
  )
}
