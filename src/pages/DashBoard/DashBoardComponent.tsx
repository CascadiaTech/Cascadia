import './styles.css'

//import { SupportedChainId } from 'constants/chains'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
import JpegBackground2 from '../../assets/videos/JpegBackground2.mp4'
import { TransparentCard } from '../../components/Card'
import Footer from './Footer'
import Headernew from './Newheader'
import PortfolioSection from './Portfolio'
import StratSection from './Strategy'

export default function DashBoardComponent() {
  //const { account, chainId } = useActiveWeb3React()
  //const showConnectAWallet = Boolean(!account)
  //const propernetwork = Boolean(!chainId)
  //const isNotOnMainnet = Boolean(chainId && chainId !== SupportedChainId.MAINNET)

  return (
    <>
      <Headernew></Headernew>
      <p style={{ paddingTop: '10px', marginTop: '10px', marginBottom: '10px' }}></p>
      <video autoPlay loop muted playsInline className="video">
        <source src={JpegBackground2} type="video/mp4" />
      </video>{' '}
      <div style={{ justifyContent: 'center' }}>
        <StratSection></StratSection>
      </div>
      <p style={{ paddingTop: '50px', marginTop: '50px', marginBottom: '50px' }}></p>
      <TransparentCard></TransparentCard>
      <div>
        <PortfolioSection></PortfolioSection>
        <Footer></Footer>
      </div>
    </>
  )
}
