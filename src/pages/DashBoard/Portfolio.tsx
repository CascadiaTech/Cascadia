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
                      <h1 style={{ fontSize: 'calc(3 * (0.8vw + 0.8vh))' }} className={'Animeverseblackheadertext'}>
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
                            <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>AnimeVerse</h1>
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
                            <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>
                              ApeMotorcycleClub
                            </h1>
                            <p style={{ maxWidth: '20vw', color: '#FFFFFF', textAlign: 'left', lineHeight: 1.4 }}>
                              •&nbsp;AnimeVerse theme song
                              <br />
                              •&nbsp;Token Staking
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
                            <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>
                              Staking Contract
                            </h1>
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
                            <h1 style={{ color: '#ffffff', fontSize: 'calc(3 * (0.3vw + 0.3vh))' }}>
                              Backend application
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
export default RoadmapSection
