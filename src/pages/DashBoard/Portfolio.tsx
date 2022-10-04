import './styles.css'
import 'animate.css'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import useScrollPosition from '@react-hook/window-scroll'
//import LinePic from 'assets/LinePic.png'
//import fundIcon from 'assets/icons/fund-icon-6.png'
import React, { useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
//import styled from 'styled-components/macro'

const RoadmapSection = () => {
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
      if (ScrollY < 900) {
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
                    {' '}
                    <p></p>
                    <div className={'flexbox-vertical-container'} style={{ justifyContent: 'center' }}>
                      <h1
                        style={{
                          fontSize: 'calc(3 * (0.8vw + 0.8vh))',
                          color: '#ffffff',
                        }}
                      >
                        Portfolio
                      </h1>
                    </div>
                    <div className={'flexbox-container'} style={{ justifyContent: 'center' }}>
                      <div className={'flexbox-container-roadmap'}>
                        <div className={'flexbox-vertical-container'}>
                          <div
                            className={'RoadmapHoverCard'}
                            style={{
                              marginRight: '2vw',
                              justifyContent: 'left',
                              paddingRight: '1vw',
                              paddingLeft: '1vw',
                              marginBottom: '4vh',
                            }}
                          >
                            <p
                              onClick={() =>
                                window.open('https://anime-verse-livid.vercel.app/#/DashBoard?chain=mainnet')
                              }
                              className={'PortfolioLinks'}
                            >
                              AnimeVerse
                            </p>
                          </div>
                        </div>

                        <div className={'flexbox-vertical-container'}>
                          <div
                            className={'RoadmapHoverCard'}
                            style={{
                              marginRight: '2vw',
                              paddingRight: '1vw',
                              paddingLeft: '1vw',
                            }}
                          >
                            <p
                              onClick={() =>
                                window.open('https://ape-motor-cycle-club.vercel.app/#/Dapp?chain=mainnet')
                              }
                              className={'PortfolioLinks'}
                            >
                              ApeMotorcycleClub
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={'flexbox-container-roadmap'}>
                        <div className={'flexbox-vertical-container'}>
                          <div
                            className={'RoadmapHoverCard'}
                            style={{
                              marginRight: '2vw',
                              paddingRight: '1vw',
                              paddingLeft: '1vw',
                              paddingBottom: '2vh',
                              marginBottom: '4vh',
                            }}
                          >
                            <p
                              onClick={() => window.open('https://github.com/CascadiaTech/StakingContract')}
                              className={'PortfolioLinks'}
                            >
                              Staking Contract
                            </p>
                          </div>
                        </div>

                        <div className={'flexbox-vertical-container'}>
                          <div
                            className={'RoadmapHoverCard'}
                            style={{
                              marginRight: '2vw',
                              paddingRight: '1vw',
                              paddingLeft: '1vw',
                            }}
                          >
                            <p
                              onClick={() =>
                                window.open('https://github.com/CascadiaTech/Backend-App-for-UserInformation')
                              }
                              className={'PortfolioLinks'}
                            >
                              Backend Application
                            </p>
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
export default RoadmapSection
