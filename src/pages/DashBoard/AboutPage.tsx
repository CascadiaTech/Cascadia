import './styles.css'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
import React, { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'

const AboutSection = () => {
  const [hidden, sethidden] = useState(true)
  const ScrollY = useScrollPosition()

  const transitions = useTransition(!hidden, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000, delay: 1000 },
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 200) {
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
      {!hidden ? (
        <div>
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div style={props} key={key}>
                  <div className={'animate__animated animate__animate__fadeInDown'}>
                    <div style={{ marginTop: '5vh' }}></div>
                    <div className={'flexbox-vertical-container-max-width'}>
                      <div className={'contentcenter'}>
                        {' '}
                        <h1 style={{ fontSize: 'calc(3 * (0.8vw + 0.8vh))' }} className={'whitetext'}>
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
                            AnimeVerse ($ANIME) is an ERC20 token built on the Ethereum (ETH) blockchain. AnimeVerse is
                            tradable via the token itself or by our unique original NFT collection. Our Eco-System is
                            designed to be a crypto asset that rewards investors in ETH for simply holding $ANIME
                            tokens. The AnimeVerse website has a Dashboard that will enable investors to claim their ETH
                            rewards, mint AnimeVerse NFTs and stake $ANIME tokens including NFTs for additional token
                            rewards yielding passive income.
                          </p>
                        </div>
                        <p></p>
                      </div>
                    </div>
                    <div className={'flexbox-vertical-container-max-width'}>
                      <div className={'contentcenter'}>
                        <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
                          <div className={'flexbox-vertical-container'}>
                            <div
                              className={'HoverCard'}
                              style={{
                                marginRight: '2vw',
                                marginTop: 10,
                              }}
                            ></div>
                            <h1
                              style={{
                                lineHeight: '0.9',
                                color: '#ffffff',
                                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                                paddingRight: '2vw',
                              }}
                            >
                              Community <br /> based
                            </h1>
                          </div>
                          <div className={'flexbox-vertical-container'}>
                            <div
                              className={'HoverCard'}
                              style={{
                                marginRight: '2vw',
                                marginTop: 10,
                              }}
                            ></div>
                            <h1
                              style={{
                                color: '#ffffff',
                                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                                textAlign: 'center',
                                lineHeight: '0.9',
                                paddingRight: '2vw',
                              }}
                            >
                              No Team <br /> Tokens
                            </h1>
                          </div>
                          <div className={'flexbox-vertical-container'}>
                            <div
                              className={'HoverCard'}
                              style={{
                                marginTop: 10,
                              }}
                            ></div>
                            <h1
                              style={{
                                fontSize: 'calc(3 * (0.3vw + 0.3vh))',
                                textAlign: 'center',
                                color: '#ffffff',
                                lineHeight: '0.9',
                                paddingRight: '3vw',
                              }}
                            >
                              KYC <br /> & Audit
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </animated.div>
              )
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
export default AboutSection
