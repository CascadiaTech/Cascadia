import './index.css'
import 'tw-elements'
import 'tailwindcss-elevation'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import BusinessPic from 'assets/images/BusinessPic.jpg'
import Devpic from 'assets/images/Devpic.jpg'
import FamilyPic from 'assets/images/FamilyPic.jpg'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'
export default function DualCardComponent() {
  const [hidden, sethidden] = useState(true)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 4000, duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 700) {
        return sethidden(true)
      } else {
        try {
          return sethidden(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    Ishidden()
  }, [ScrollY])
  return (
    <div>
      <animated.div hidden={hidden} style={props} className={'animate__animated animate__fadeInUp'}>
        <div className="flex space-y-8 justify-center flex-col ...">
          <div className="flex justify-between flex-col md:flex-row ...">
            <div className="flex justify-center mx-7 my-5">
              <div className="rounded-lg shadow-lg elevation-10 bg-white max-w-sm">
                <a href="https://github.com/CascadiaTech" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <div
                    className={'rounded-t-lg'}
                    style={{
                      backgroundPosition: '50%',
                      backgroundImage: `url(${Devpic})`,
                      height: '300px',
                    }}
                  ></div>
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Development Expertise</h5>
                  <p className="text-gray-700 text-base mb-4">
                    Our portfolio shows our understanding of the concepts that will make your web applcition stand out
                    against the rest. Come view our Github profile to see what past projects we have programmed
                  </p>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs 
                    leading-tight uppercase elevation-10 rounded shadow-md hover:bg-blue-700 
                    hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => window.open('https://github.com/CascadiaTech')}
                  >
                    Github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mx-7 my-5">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="https://t.me/+8ZaQrFjaWWgzMTMx" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <div
                    className={'rounded-t-lg'}
                    style={{
                      backgroundPosition: '50%',
                      backgroundImage: `url(${BusinessPic})`,
                      height: '300px',
                    }}
                  ></div>
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Business Development</h5>
                  <p className="text-gray-700 text-base mb-4">
                    When you work with our team you do not just get our development expertise. As veterans in the
                    cryptocurrency industry we help our clients acheive success by optimizing the protocol deisgn to fit
                    the clients buisness needs and offering technical support as they work to use technology to enhance
                    their buisness.
                  </p>
                  <button
                    type="button"
                    onClick={() => window.open('https://t.me/+8ZaQrFjaWWgzMTMx')}
                    className=" inline-block px-6 py-2.5 bg-blue-600  elevation-10 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mx-7 my-5">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="https://t.me/+8ZaQrFjaWWgzMTMx" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <div
                    className={'rounded-t-lg'}
                    style={{
                      backgroundPosition: '50%',
                      backgroundImage: `url(${FamilyPic})`,
                      height: '300px',
                    }}
                  ></div>
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Family owned</h5>
                  <p className="text-gray-700 text-base mb-4">
                    What started with a family in canada who wanted to build a web3 development services company has
                    grown to be a company with a remote team of diverse backgrounds. If you have talent in web3
                    development or related services we would love to hear from you!
                  </p>
                  <button
                    type="button"
                    onClick={() => window.open('https://t.me/+8ZaQrFjaWWgzMTMx')}
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  )
}
