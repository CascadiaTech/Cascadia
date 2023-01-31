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
                    Our portfolio demonstrates our understanding of the concepts that will set your web application
                    apart from others. Come see our Github profile to see what past projects we have programmed.
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
                    When you work with our team, you benefit from more than just our development expertise. As veterans
                    in the Cryptocurrency industry, we help our clients achieve success by optimizing the protocol
                    design to fit the clients business needs and offering technical support as they work to use
                    technology to enhance their business.
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
                    What began with a family in Canada wanting to build a Web3 development services business became a
                    business with a remote team of highly experienced developers with diverse backgrounds. If you have
                    talent in Web3 development or related services, we would love to hear from you!
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
