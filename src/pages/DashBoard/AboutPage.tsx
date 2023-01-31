import './styles.css'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'
import { useSpring } from 'react-spring/web'
const AboutSection = () => {
  const [hidden, sethidden] = useState(true)
  const ScrollY = useScrollPosition()

  const props = useSpring({
    config: { delay: 3000, duration: 1000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 605) {
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
        <div style={{ marginTop: '5vh' }}></div>
        <div className={'flexbox-vertical-container-max-width'}>
          <div className={'contentcenter'}>
            {' '}
            <h1
              style={{ fontFamily: 'Merriweather, serif', fontSize: 'calc(3 * (0.95vw + 0.95vh))', color: '#ffffff' }}
            >
              {' '}
              About Us{' '}
            </h1>
            <p></p>
            <p></p>
            <div className={'AboutUs-card'}>
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
                What started as a passion for web3 and solving problems has turned into an international team of
                developers seeking to create the next future of finance and consumer spending. We are a team who love to
                solve hard problems, and to stretch the bounds of what can be done. Web3 changes the form of the
                Internet, there is a change in the air in the way consumers will spend their money. Consumers spend
                money to preserve their identity, whether its donating to a charity or purchasing a baseball shirt. Our
                world is getting increasingly digital, as are our identities. We see NFTs and web3 as a reaction to
                that. A unique opportunity to capitalize on the future is in our hands, let us help you take advantage
                of it as we do.
              </p>
            </div>
            <p></p>
          </div>
        </div>
      </animated.div>
    </div>
  )
}
export default AboutSection
