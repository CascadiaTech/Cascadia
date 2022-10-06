import './index.css'
import 'tw-elements'
import 'tailwindcss-elevation'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'
export default function DualCardComponent() {
  const [hidden, sethidden] = useState(true)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 1000, duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 45) {
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
          <div className="flex space-x-4 justify-between flex-col md:flex-row ...">
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg elevation-10 bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Development Expertise</h5>
                  <p className="text-gray-700 text-base mb-4">
                    Our portfolio shows our understanding of the concepts that will make your web applcition stand out
                    against the rest
                  </p>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase elevation-10 rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
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
                    className=" inline-block px-6 py-2.5 bg-blue-600  elevation-10 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Conact us
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
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
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h1 style={{ marginTop: '10px', fontSize: 'calc(3 * (0.8vw + 0.8vh))' }} className={'whitetext'}>
            {' '}
            FAQ{' '}
          </h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item bg-grey border border-white-200">
              <h2 className="accordion-header mb-0" id="headingOne">
                <button
                  className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-white-800 text-left
        bg-grey
        border-1
        rounded-10
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What applications have you built?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body py-4 px-5">
                  <strong>We specialize in building protocols.{''} </strong> {''} Fullstack applications are our
                  strength, We are specialized in deisgning web applications using React, Node.js and Tailwindcss to
                  make your web application responsive and fast. Our smart contract are written in solidity and tested
                  on the goerli testnet thoroughly before release, auditing services are available to all our clients
                </div>
              </div>
            </div>
            <div className="accordion-item bg-grey border border-gray-200">
              <h2 className="accordion-header mb-0" id="headingTwo">
                <button
                  className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What frameworks and languages do you know?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body py-4 px-5">
                  <strong>We know most of the popular frontend, and backend languages and frameworks.{''} </strong> {''}{' '}
                  For frontend development we are masters at React, Next.js, fetch, javascript, and Tailwindcss,
                  web3.js, and ethers.js to produce sleex and fast web applications. For backend programming we love
                  working with python, flask or the MERN stack ( MongoDB, Express, Node.js, React) we have also deployed
                  subgraphs for indexing smart contract events as viewable on our github
                </div>
              </div>
            </div>
            <div className="accordion-item bg-grey border border-gray-200">
              <h2 className="accordion-header mb-0" id="headingThree">
                <button
                  className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Whats your process?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body py-4 px-5">
                  <strong>
                    We find it very important to work with the client so that they understand their platform. {''}
                  </strong>
                  {''} Upon commencing a project with us we give you safe download access to your codebase so you can
                  keep track as we develop, We deploy to vercel, and if applicable related testnets so that our client
                  can test their app as it progresses. We stick to the plan, and update you when you need
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  )
}
