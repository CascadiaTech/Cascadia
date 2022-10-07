import './styles.css'
import 'animate.css'
import '../../index.css'
import 'tw-elements'
import 'tailwindcss-elevation'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'
import styled from 'styled-components/macro'

//import CarouselSlider from '../../components/CarouselSlider/Carsousel'
import HeaderFolder from '../../components/HeaderFolder/LandingHeader'
//padding: 8px 35px;

const StyledHeaderText1 = styled.text`
  font-size: calc(3 * (0.75vw + 0.75vh));
  color: #ffffff;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
`
const StyledHeaderText2 = styled.text`
  font-size: calc(3 * (0.75vw + 0.75vh));
  color: #09008a;
  font-weight: bold;
  text-shadow: 0px 0px 4px #ccceff;
  position: relative;
  left: 15px;
  font-family: Montserrat, sans-serif;
`

const Headernew = () => {
  const [hidden, sethidden] = useState(false)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 10) {
        return sethidden(false)
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

  const imageurl = 'https://mdbootstrap.com/img/new/textures/full/142.jpg'
  return (
    <>
      <div className={'mobileheader'}>
        <animated.div hidden={hidden} style={props} className={'animate__animated animate__bounce'}>
          <div>
            <section className="mb-40 relative top-38">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover bg-[url('https://mdbootstrap.com/img/new/textures/full/142.jpg')] bg-center h-auto w-screen"
                style={{
                  backgroundPosition: '50%',
                  backgroundImage: `url(${imageurl})`,
                  height: '600px',
                }}
              ></div>

              <div className="container mx-auto px-6 md:px-12 xl:px-32">
                <div className="text-center text-gray-800">
                  <div
                    className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12 elevation-10"
                    style={{
                      marginTop: '-170px',
                      backgroundColor: 'hsla(0, 0%, 100%, 0.7)',
                      backdropFilter: 'blur(30px)',
                    }}
                  >
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                      CascadiaTech <br />
                      <span className="text-blue-600">We are here for your needs</span>
                    </h1>
                    <a
                      className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      href="#!"
                      role="button"
                    >
                      Get started
                    </a>
                    <a
                      className="inline-block px-7 py-3 text-white font-medium text-sm leading-snug bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      href="#!"
                      role="button"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <HeaderFolder></HeaderFolder>
        </animated.div>
      </div>
    </>
  )
}
export default Headernew
