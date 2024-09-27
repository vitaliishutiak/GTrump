import './App.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import titleImg from '../src/assets/titleImg.png'
import copyImg from '../src/assets/copy.svg'
import tokenomicsImg from '../src/assets/tokenomicsImg.png'
import artImg1 from '../src/assets/artImg1.png'
import artImg2 from '../src/assets/artImg2.png'
import artImg3 from '../src/assets/artImg3.png'
import dolarImg1 from '../src/assets/dolarImg1.png'
import dolarImg2 from '../src/assets/dolarImg2.png'
import dolarImg3 from '../src/assets/dolarImg3.png'
import dolarImg4 from '../src/assets/dolarImg4.png'
import dolarImg5 from '../src/assets/dolarImg5.png'
import dolarImg6 from '../src/assets/dolarImg6.png'
import dolarImg7 from '../src/assets/dolarImg7.png'
import dolarImg8 from '../src/assets/dolarImg8.png'
import { useRef } from 'react';
import React, { useState } from 'react';

function App() {

  const [isPopupVisible, setPopupVisible] = useState(false);
  const tokenAddress = '******************';

  const aboutRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const howToBuyRef = useRef(null);
  const artRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress).then(() => {
      setPopupVisible(true); // Показуємо попап
      // Приховуємо попап через 3 секунди
      setTimeout(() => {
        setPopupVisible(false);
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };


  
  
  return (
    <div className="App">
      <Header 
         scrollToAbout={() => scrollToSection(aboutRef)}
         scrollToTokenomics={() => scrollToSection(tokenomicsRef)}
         scrollToHowToBuy={() => scrollToSection(howToBuyRef)}
         scrollToArt={() => scrollToSection(artRef)}
      />
      <div className="about_page" ref={aboutRef}>
        <div className="about_left-context">
          <h2 className='about_title'>GIGATRUMP</h2>
          <div className="context_button"><h3>$GTRUMP</h3></div>
          <p className='about_text'>GigaTrump is the bullish narrative of the Trump <br/> meta representing our conviction for the better <br/> future with the right president</p>
          <button className='about_button'>Buy Token</button>
          <p className='about_context-small'>Copy the token adress below and use it to find our token on SunSwap</p>
        </div>
        <div className='about_right-img'>
          <img className='about_img' src={titleImg} alt="" />
        </div>
      </div>
      <div className="tokenomics__wrap" >
        <div className="tokenomics_wrap">
          <div className="token_wrap" ref={tokenomicsRef}>
            <h4 className='token_text'>TOKEN ADDRESS</h4>
            <div className="token_address_container">
              <img className='token_copy' onClick={copyToClipboard} src={copyImg} alt="" />
              <h5 className='token_address'>{tokenAddress}</h5>
              <div className={`popup ${isPopupVisible ? 'show' : ''}`}>Copied to clipboard</div>
            </div>
          </div>
          <div className="tokenomics_content">
            <div className="tokenomics_content_left">
              <h2 className='tokenomics_title1'>WHAT IS</h2>
              <h3 className='tokenomics_title2'>$GTRUMP?</h3>
              <p className='tokenomics_text'>$GTRUMP is the next gem of the Trump meta, <br/> launched on PumpFun with a mission to become the <br/> best Trump related  memecoin on SOL.</p>
              <button className='tokenomics_button'>Buy Token</button>
            </div>
            <div className="tokenomics_content_right">
              <img className='tokenomics_img' src={tokenomicsImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="howToBuy_wrap">
        <img className='dolar1' src={dolarImg1} alt="" />
        <img className='dolar2' src={dolarImg2} alt="" />
        <img className='dolar3' src={dolarImg3} alt="" />
        <img className='dolar4' src={dolarImg4} alt="" />
        <img className='dolar5' src={dolarImg5} alt="" />
        <img className='dolar6' src={dolarImg6} alt="" />
        <img className='dolar7' src={dolarImg7} alt="" />
        <img className='dolar8' src={dolarImg8} alt="" />
          <div className="tokenomics_bottom_blocks" ref={howToBuyRef}>
            <div className="block">
              <h2 className='block_title'>Supply:</h2>
              <h3 className='block_text'>1 B</h3>
            </div>
            <div className="block">
              <h2 className='block_title'>Tax</h2>
              <h3 className='block_text'>0.00%</h3>
            </div>
          </div>
          <h2 className='howToBuy_title'>HOW TO BUY $GTRUMP?</h2>
          <div className="howToBuy_cards_container">
            <div className="howToBuy_container-left">
              <div className="howToBuy_card">
                <h2 className='card_title'>1</h2>
                <h3 className='card_text'>Create a wallet with Phantom</h3>
                <p className='card_description'>Visit phantom.app and follow the simple steps to create a new account with the Phantom app or browser extension.</p>
              </div>
              <div className="howToBuy_card">
              <h2 className='card_title'>2</h2>
                <h3 className='card_text'>Get some $SOL</h3>
                <p className='card_description'>Tap the BUY button in the app to purchase Solana, or deposit $SOL to your Phantom wallet from the crypto exchange of your choice.</p>  
              </div>
            </div>
            <div className="howToBuy_container-right">
              <div className="howToBuy_card">
              <h2 className='card_title'>3</h2>
                <h3 className='card_text'>Swap $SOL for $GIGATRUMP</h3>
                <p className='card_description'>Tap the SWAP icon in your Phantom wallet and paste the $GIGATRUMP token address.Swap your $SOL for $GIGATRUMP.</p>
              </div>
              <div className="howToBuy_card">
              <h2 className='card_title'>4</h2>
                <h3 className='card_text'>You are now a $GIGATRUMP holder!</h3>
                <p className='card_description'>Welcome to the #GigaTrump Army!</p>
              </div>
            </div>
          </div>
      </div>
      <div className="links__wrap" ref={artRef}>
        <div className="links_wrap">
          <div className="links_container-left">
            <h2 className='links_title'>THE ART.</h2>
            <p className='links_text'>We don’t just make content — we create <br/> experiences. Our team is dedicated to <br/> pushing the boundaries of digital art,<br/> ensuring that every image, every design, <br/> and every piece of storytelling reflects the <br/> passion and precision we put into our work.</p>
          </div>
          <div className="links_container-right">
            <img className='links_img1' src={artImg1} alt="" />
            <img className='links_img2' src={artImg2} alt="" />
            <img className='links_img3' src={artImg3} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App

