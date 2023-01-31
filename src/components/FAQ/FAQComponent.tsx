import './index.css'
import 'tw-elements'
import 'tailwindcss-elevation'
import 'animate.css'

export default function FAQComponent() {
  return (
    <>
      <div className="flex space-y-8 justify-center w-3/4 flex-col ...">
        <div className="text-center justify-center">
          <h1
            style={{
              fontFamily: 'Merriweather, serif',
              fontSize: 'calc(3 * (0.95vw + 0.95vh))',
              textAlign: 'center',
              color: '#ffffff',
              marginTop: '1vh',
            }}
          >
            FAQ
          </h1>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item bg-grey border border-white-200">
            <h2 className="text-gray-50 antialiased mb-0" id="headingOne">
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
              <div className="text-gray-50 text-lg py-4 px-5">
                <strong>We specialize in building protocols.{''} </strong> {''} Fullstack applications are our strength,
                We are specialized in deisgning web applications using React, Node.js and Tailwindcss to make your web
                application responsive and fast. Our smart contract are written in solidity and tested on the goerli
                testnet thoroughly before release, auditing services are available to all our clients
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
              <div className="text-gray-50 text-lg py-4 px-5">
                <strong>We know most the most popular fontend, and backend languages and frameworks.{''} </strong> {''}{' '}
                For frontend development we are trained in React, Next.js, fetch, javascript, and Tailwindcss, web3.js,
                and ethers.js to produce professional and fast web applications. For backend programming we love working
                with with python, flask or the MERN stack ( MongoDB, Express, Node.js, React) we have also deployed
                subgraphs indexing smart contract events as viewable on our github
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
              <div className="text-gray-50 text-lg py-4 px-5">
                <strong>
                  We find it very important to work with the client so that they understand their platform. {''}
                </strong>
                {''} Upon starting a project with us, we give you safe download access to your codebase so you can keep
                track as we develop your app, deploy to vercel and if applicable; any related testnets so that our
                client can test their app as it progresses. We stick to the plan, and update you when you need
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
