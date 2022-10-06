import './styles.css'
import 'animate.css'
import '../../index.css'
import 'tw-elements'

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
            <section className="mb-60">
              <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
                <div className="px-6 w-full flex flex-wrap items-center justify-between">
                  <div className="flex items-center">
                    <button
                      className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContentY"
                      aria-controls="navbarSupportedContentY"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        className="w-5"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                      </svg>
                    </button>
                    <a className="navbar-brand text-blue-600" href="#!">
                      <svg
                        className="w-5 h-5 ml-2 lg:ml-0 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                    <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                      <li className="nav-item">
                        <a
                          className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                          href="#!"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                          href="#!"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Team
                        </a>
                      </li>
                      <li className="nav-item mb-2 lg:mb-0">
                        <a
                          className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                          href="#!"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Projects
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center lg:ml-auto">
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Sign up for free
                    </button>
                  </div>
                </div>
              </nav>

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
                    className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
                    style={{
                      marginTop: '-170px',
                      backgroundColor: 'hsla(0, 0%, 100%, 0.7)',
                      backdropFilter: 'blur(30px)',
                    }}
                  >
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                      The best offer on the market <br />
                      <span className="text-blue-600">for your business</span>
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
