import './Hero.css'

import { PrimaryButton, SecondaryButton } from '../../components/index'

const Hero = () => {
  return (
    <>
        <div className="welcome-page">
          <div className="overlay">
              <div className="container">
                  <div className="intro-text">
                      <div>We Are<span>KON MOSTAKBALAK</span></div>  
                      <div className="intro-specific">Digital Agency</div>
                  </div>
                  <div className="intro-para">
                      We make everything looks as good as you want.
                  </div>
                  <div className="intro-btns">
                      <PrimaryButton  link="#section" linkName="Discover More" />
                      <SecondaryButton link="#" linkName="Get Started" />
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Hero
