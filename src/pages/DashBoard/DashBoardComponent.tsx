import './styles.css'

//import { SupportedChainId } from 'constants/chains'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { TransparentCard } from '../../components/Card'
import AboutSection from './AboutPage'
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
      <div style={{ justifyContent: 'center' }}>
        <StratSection></StratSection>
      </div>
      <AboutSection></AboutSection>
      <p style={{ paddingTop: '50px', marginTop: '50px', marginBottom: '50px' }}></p>
      <TransparentCard></TransparentCard>
      <div>
        <PortfolioSection></PortfolioSection>
        <Footer></Footer>
      </div>
    </>
  )
}
