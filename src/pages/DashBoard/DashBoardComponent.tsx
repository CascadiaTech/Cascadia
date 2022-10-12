import './styles.css'

import DualCardComponent from 'components/DualCards/DualCardComponent'
import FAQComponent from 'components/FAQ/FAQComponent'
import FooterComponent from 'components/Footer/FooterComponent'

//import { SupportedChainId } from 'constants/chains'
//import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { TransparentCard } from '../../components/Card'
import AboutSection from './AboutPage'
import Headernew from './Newheader'
import StratSection from './Strategy'
export default function DashBoardComponent() {
  //const { account, chainId } = useActiveWeb3React()
  //const showConnectAWallet = Boolean(!account)
  //const propernetwork = Boolean(!chainId)
  //const isNotOnMainnet = Boolean(chainId && chainId !== SupportedChainId.MAINNET)

  return (
    <>
      <Headernew></Headernew>
      <StratSection></StratSection>
      <AboutSection></AboutSection>
      <DualCardComponent></DualCardComponent>
      <p style={{ paddingTop: '2vh', marginTop: '2vh', marginBottom: '2vh' }}></p>
      <FAQComponent></FAQComponent>
      <p style={{ paddingTop: '2vh', marginTop: '2vh', marginBottom: '2vh' }}></p>
      <TransparentCard></TransparentCard>
      <FooterComponent></FooterComponent>
    </>
  )
}
