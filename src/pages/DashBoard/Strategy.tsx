import './styles.css'
import 'animate.css'
import 'tailwindcss-elevation'
import '../../index.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'

import citysunset from '../../assets/images/citysunset.jpeg'

const StratSection = () => {
  const [hidden, sethidden] = useState(true)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 2000, duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 500) {
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
    <animated.div hidden={hidden} style={props} className={'animate__animated animate__fadeInUp'}>
      {' '}
      <div className="flex-row w-screen text-center justify-center">
        <h1 style={{ fontFamily: 'Merriweather, serif', fontSize: 'calc(3 * (0.95vw + 0.95vh))', color: '#ffffff' }}>
          Our Services
        </h1>
      </div>
      <p></p>
      <p></p>
      <p
        style={{
          textShadow: '0px 1px 0px rgba(0, 0, 0, 0.2)',
          fontSize: 'calc(3 * (0.4vw + 0.4vh))',
          textAlign: 'center',
          lineHeight: 1.4,
          fontWeight: 550,
          justifyContent: 'center',
          marginLeft: '2vw',
          marginRight: '2vw',
          paddingLeft: '2vw',
          paddingRight: '2vw',
          fontFamily: 'montserrat, sans-serif',
          marginBottom: '20px',
          color: '#ffffff',
        }}
      >
        Our team has combined experience in taking applications from idea to a finished masterpiece. From designing the
        initial concept, to deploying to your production environment, we have done it. Our specialization is in Web3
        projects, our preferred front-end language ReactJS is used throughout the industry so your app can scale. We
        also pride ourselves on writing innovative smart contracts to suit your unique business idea.
      </p>
      <p></p>
      <div className="container my-24 px-6 mx-auto"></div>
      <div className="mb-32 text-gray-800 text-center lg:text-left"></div>
      <div className="container mx-auto xl:px-32 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 flex items-center">
          <div className="mb-12 lg:mb-0">
            <div
              className=" elevation-15 relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 z-1"
              style={{ backgroundColor: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}
            >
              <h2 className="text-4xl font-bold mb-4 display-5">Why us?</h2>
              <p className="text-black text-lg mb-12">
                We work very hard to earn our clients respect and show the world what limits we can push. If you want
                work with experienced and dedicated people, you want us on your team.
              </p>

              <div className="grid md:grid-cols-3 gap-x-6">
                <div className="mb-12 md:mb-0">
                  <h2 className="text-4xl font-bold text-dark mb-4">Frontend</h2>
                  <h5 className="text-xl font-medium text-gray-900 mb-0">React.js and TailwindCSS</h5>
                </div>

                <div className="mb-12 md:mb-0">
                  <h2 className="text-4xl font-bold text-dark mb-4">Backend</h2>
                  <h5 className="text-xl font-medium text-gray-900 mb-0">Node.js or Python</h5>
                </div>

                <div className="">
                  <h2 className="text-4xl font-bold text-dark mb-4">Smart Contracts</h2>
                  <h5 className="text-xl font-medium text-gray-900 mb-0">Solidity</h5>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src={citysunset}
              className="w-full shadow-lg rotate-lg-6 elevation-10 blur-2xl"
              style={{ borderRadius: '53% 47% 52% 48% / 36% 41% 59% 64%' }}
              alt=""
            />
          </div>
        </div>
      </div>
    </animated.div>
  )
}
export default StratSection
