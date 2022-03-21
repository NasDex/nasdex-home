<template>
  <div class="outer">
    <!--  :class="isRightFrame ? 'outer' : 'outers'" -->
    <div class="core">
      <!-- 背景图 -->
      <div class="backgroundThree"></div>
      <div class="backgroundFour"></div>
      <div class="backgroundFive"></div>
      <div class="backgroundSix"></div>
      <div class="backgroundSeven"></div>
      <div class="backgroundEight"></div>
      <div class="backgroundNine"></div>
      <div class="backgroundTen"></div>
      <div class="backgroundOne"></div>
      <div class="backgroundTwo"></div>
      <div class="backgroundMeteor"></div>
      <!-- 头部区域 -->
      <div class="header">
        <div class="svg">
          <a href="##" @click="changeAbout(0)"><img src="../../assets/img/nasdexImg/logo@2x.png" alt="logo"/></a>
        </div>
        <button class="Popout" @click="displayBox()">
            <img src="../../assets/img/nasdexImg/icon-menu@2x.png" alt="">
        </button>
        <div class="nav">
          <div class="navOne navAll"><a href="##" @click="changeAbout(850)">ABOUT</a></div>
          <div class="navTwo navAll"><a href="##" @click="changeAbout(2700)">HOW IT WORKS</a></div>
          <div class="navThree navAll"><a href="##" @click="changeAbout(3300)">TEAM</a></div>
          <div class="navFour navAll"><a href="https://nasdexofficial.gitbook.io/nasdex" target="_blank">DOCS</a></div>
          <div class="navFive navAll"><a href="https://docsend.com/view/ahc6avcpf8qjjkcw" target="_blank">WHITEPAPER</a></div>
          <div class="navSix navAll"><a href="##" @click="changeAbout(8000)">CONTACT US</a></div>
        </div>
        <!-- 右弹框 -->
        <div class="rightFrameAll" v-show="isRightFrame" @mousewheel.prevent @touchmove.prevent>
          <div class="rightFrame">
            <div class="frameTop">
              <img src="../../assets/img/nasdexImg/h5NavOff.png" alt="" @click="isRightFrame=false">
            </div>
            <div class="frameBottom">
              <a href="##" class="navOne" @click="changeAbout(580)">ABOUT</a>
              <a href="##" class="navTwo" @click="changeAbout(2500)">HOW IT WORKS</a>
              <a href="##" class="navThree" @click="changeAbout(2700)">TEAM</a>
              <a href="https://nasdexofficial.gitbook.io/nasdex" target="_blank" @click="isRightFrame = false" class="navFour">DOCS</a>
              <a href="https://docsend.com/view/ahc6avcpf8qjjkcw" target="_blank" @click="isRightFrame = false" class="navFive">WHITEPAPER</a>
              <a href="##" class="navSix" @click="changeAbout(7000)">CONTACT US</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 主体部分 -->
      <div class="main">
        <div class="title">
          <div class="titleOne">
            <span>Welcome to</span>
            <img src="../../assets/img/nasdexImg/logo.png" >
          </div>
          <div class="titleTwo">
            <p class="titleTwoTop">The Premiere Decentralized </p>
            <p>Exchange on Tokenized </p>
            <p>Asset Trading</p>
          </div>
          <a href="https://app.nasdex.xyz/staking" class="titleThree">LAUNCH APP</a>
          <div class="titleFour">
            <div class="left">
              <a href="##">$NSDX Contract Address :</a>
              <a href="https://polygonscan.com/address/0xe8d17b127ba8b9899a160d9a07b69bca8e08bfc6#code" target="_blank">0xe8d17b127ba8b9899a160d9a07b69bca8e08bfc6 <div></div></a>
              <a href="https://bscscan.com/token/0x417871f0682db63924b931fc16ba3ff40343cdcb" target="_blank">0x417871f0682db63924b931fc16ba3ff40343cdcb <div></div></a>
            </div>
          </div>
        </div>
        <div class="barFrame">
          <div class="barFrameLeft">NASDEX is designed to serve as a bridge between the crypto world and the equity world.</div>
          <a href="https://t.me/nasdex_xyz" target="_blank" class="barFrameReight" v-show="!isBarFrame" @mouseenter="isBarFrame = true">Let's Chat</a>
          <a href="https://t.me/nasdex_xyz" target="_blank" class="barFrameReightA" v-show="isBarFrame" @mouseleave="isBarFrame = false">Let's Chat</a>
        </div>
        <div class="titleTopCenter">WHAT IS NASDEX</div>
        <div class="exchange">NASDEX is a decentralized exchange that offers our users the ability to trade tokenized equities on blockchain via our minting and trading mechanism that mimics the offchain economics of the real world equity price.</div>
        <div class="titleExisting">EXISTING CHALLENGES AND OUR SOLUTIONS</div>
        <div class="caseOne">
          <div class="caseOneTop">The legacy pain points of a traditional equity exchange</div>
          <div class="caseOneBottom">
            <div class="caseOneBottomOne">
              <img src="../../assets/img/nasdexImg/icon-Geographic@2x.png" alt="">
              <div>Geographic Limitations</div>
              <p>Difficult and expensive to buy equities outside of an individual's home jurisdiction</p>
            </div>
            <div class="caseOneBottomTwo">
              <img src="../../assets/img/nasdexImg/icon-Portfolio@2x.png" alt="">
              <div>Portfolio Management Limitations</div>
              <p>Inefficient to manage a portfolio containing both crypto as well as equity</p>
            </div>
            <div class="caseOneBottomThree">
              <img src="../../assets/img/nasdexImg/icon-Product@2x.png" alt="">
              <div>Product Limitations</div>
              <p>Investors are mainly limited to the vanilla strategy of only going long on entire shares of stocks</p>
            </div>
          </div>
        </div>
        <div class="down">
          <img src="../../assets/img/nasdexImg/down@2x.png">
        </div>
        <div class="caseTwo">
          <div class="caseOneTop">A tokenized DEX is the solution</div>
          <div class="caseOneBottom">
            <div class="caseOneBottomOne">
              <img src="../../assets/img/nasdexImg/icon-kyc@2x.png" alt="">
              <div>Global Access, Zero KYC</div>
              <p>Retail and institutional investors globally can mint and trade tokenized stocks with no KYC</p>
            </div>
            <div class="caseOneBottomTwo">
              <img src="../../assets/img/nasdexImg/icon-Improved Portfolio@2x.png" alt="">
              <div>Improved Portfolio Management</div>
              <p>Frictionless portfolio allocation adjustments between crypto and tokenized stocks</p>
            </div>
            <div class="caseOneBottomThree">
              <img src="../../assets/img/nasdexImg/icon-Enhanced @2x.png" alt="">
              <div>Enhanced Product</div>
              <p>With tokenized stocks,investors can go long and short, do fractional ownership, and yield farm</p>
            </div>
          </div>
        </div>
        <div class="titleCore">CORE BENEFITS OF THE NASDEX ECOSYSTEM</div>
        <div class="interCut">
          <div class="interCutOne">
            <img src="../../assets/img/nasdexImg/icon-yield@2x.png" alt="">
            <div class="tcp">Yield enhancement through liquidity mining</div>
          </div>
          <div class="interCutTwo">
            <img src="../../assets/img/nasdexImg/icon-asia@2x.png" alt="">
            <div class="tcp">Asia focused with Asian stocks, such as Tencent, Meituan</div>
          </div>
          <div class="interCutThree">
            <img src="../../assets/img/nasdexImg/icon-friction@2x.png" alt="">
            <div class="tcp">Frictionless movement between tokenized stocks and crypto</div>
          </div>
        </div>
        <a name="banner-link"></a>
        <div :class="bannersImg ? 'banners' : 'banner'">
          <div class="bannerLeft" @click="changeBanner()">
            <img src="../../assets/img/nasdexImg/bannerImgY.png" v-show="!bannersImg">
            <img src="../../assets/img/nasdexImg/bannerImgN.png" v-show="bannersImg">
          </div>
          <div class="bannerReight" @click="changeBanner()">
            <img src="../../assets/img/nasdexImg/bannerImgN.png" v-show="!bannersImg">
            <img src="../../assets/img/nasdexImg/bannerImgY.png" v-show="bannersImg">
          </div>
        </div>
        <a name="people-link"></a>
        <!-- <div class="titleOur">OUR TEAM</div>
        <div class="peopleDetail">
          <div class="peopleDetailPage">
            <img src="../../assets/img/nasdexImg/AlvinFoo.png" alt="">
            <div class="detaileTop">Alvin Foo 
              <a class="AF" @mouseenter="isAf = true" v-show="!isAf" href="https://www.linkedin.com/in/alvinfsc/" target="_blank"><img src="../../assets/img/nasdexImg/incircle.png" alt=""></a>
              <a class="AFA" @mouseleave="isAf = false" v-show="isAf" href="https://www.linkedin.com/in/alvinfsc/" target="_blank"><img src="../../assets/img/nasdexImg/LinkedinDis@2x.png" alt=""></a>
            </div>
            <div class="detaileCenter">President</div>
            <div class="detaileBottom"> Previously Google Head of Mobile China, IPG Managing Director, Omnicom Head of Mobile. Advisor for SXSW, SOSventures, Sparklabs Korea. Emerging Tech & Marketing Evangelist.</div>
          </div>
          <div class="peopleDetailPage">
            <img src="../../assets/img/nasdexImg/BelindaZho.png" >
            <div class="detaileTop">Belinda Zhou
              <a class="TT" @mouseenter="isTt = true" v-show="!isTt" href="https://www.linkedin.com/in/belindazhou1/" target="_blank"><img src="../../assets/img/nasdexImg/incircle.png" alt=""></a>
              <a class="TTA" @mouseleave="isTt = false" v-show="isTt" href="https://www.linkedin.com/in/belindazhou1/" target="_blank"><img src="../../assets/img/nasdexImg/LinkedinDis@2x.png" alt=""></a>
            </div>
            <div class="detaileCenter">Chief Marketing Officer</div>
            <div class="detaileBottom">Marketing and community management specialist with 4 years of experience in blockchain. Resourceful in community building and creating project awareness. Ex-DAOventures and Dubai Tourism.</div>
          </div>
          <div class="peopleDetailPage">
            <img src="../../assets/img/nasdexImg/GuruSingh@2x.png" >
            <div class="detaileTop">Guru Singh 
              <a class="AF" @mouseenter="isAf = true" v-show="!isAf" href="https://www.linkedin.com/in/gurujeet-singh-sanghar-587a30194/" target="_blank"><img src="../../assets/img/nasdexImg/incircle.png" alt=""></a>
              <a class="AFA" @mouseleave="isAf = false" v-show="isAf" href="https://www.linkedin.com/in/gurujeet-singh-sanghar-587a30194/" target="_blank"><img src="../../assets/img/nasdexImg/LinkedinDis@2x.png" alt=""></a>
            </div>
            <div class="detaileCenter">Product Lead</div>
            <div class="detaileBottom">Early DeFi Power User with experience as a DeFi strategist, analyst and fund manager with DAOventures and several family offices. Co-Founder & Product Machine at LFG Capital.</div>
          </div>
        </div> -->
        <!-- <div class="peoplePage">
          <div class="peopleTop">
              <div class="peopleTopLeft">
                <div class="peopleTopLeftL">
                  <img src="../../assets/img/nasdexImg/JoshDu@2x.png" >
                  <div class="peoplebtnTop"></div>
                  <div class="peoplebtnBottom"></div>
                </div>
                <div class="peopleTopLeftR">
                  <div class="LeftRtop">Josh Du 
                    <a class="JD" v-show="!isJd" @mouseenter="isJd = true" href="https://www.linkedin.com/in/joshdu/" target="_blank"><img src="../../assets/img/nasdexImg/incircle.png" alt=""></a>
                    <a class="JDA" v-show="isJd" @mouseleave="isJd = false" href="https://www.linkedin.com/in/joshdu/" target="_blank"><img src="../../assets/img/nasdexImg/LinkedinDis@2x.png" alt=""></a>
                  </div>
                  <div class="LeftRcentre">Chief Investment Officer</div>
                  <div class="LeftRbottom">Institutional portfolio manager with over 15 years of investment experience. Managed funds and teams of upwards of USD 1 billion AUM. Knowledgeable in all asset classes including equity, credit, cryptos. Ex-Morgan Stanley, Deutsche Bank.</div>
                </div>
              </div>
              <div class="peopleTopReight">
                <div class="peopleTopLeftL">
                  <img src="../../assets/img/nasdexImg/BelindaZho.png" >
                  <div class="peoplebtnTop"></div>
                  <div class="peoplebtnBottom"></div>
                </div>
                <div class="peopleTopLeftR">
                  <div class="LeftRtop">Belinda Zhou 
                    <a class="BZ" v-show="!isBz" @mouseenter="isBz = true" href="https://www.linkedin.com/in/belindazhou1/" target="_blank"><img src="../../assets/img/nasdexImg/incircle.png" alt=""></a>
                    <a class="BZA" v-show="isBz" @mouseleave="isBz = false" href="https://www.linkedin.com/in/belindazhou1/" target="_blank"><img src="../../assets/img/nasdexImg/LinkedinDis@2x.png" alt=""></a>
                  </div>
                  <div class="LeftRcentre">Chief Marketing Officer</div>
                  <div class="LeftRbottom">Marketing and community management specialist with 4 years of experience in blockchain. Resourceful in community building and creating project awareness. Ex-DAOventures and Dubai Tourism.</div>
                </div>
              </div>
          </div>
          <div class="peopleBottom">
              <div class="peopleBottomLeft">
                <div class="peopleTopLeftL">
                  <img src="../../assets/img/nasdexImg/HenryDu@2x.png" >
                  <div class="peoplebtnTop"></div>
                </div>
                <div class="peopleTopLeftR">
                  <div class="LeftRtop">Henry Du</div>
                  <div class="LeftRcentre">Chief Product Officer</div>
                  <div class="LeftRbottom">IT, Devops, Blockchain. Lead a team of IT talents for blockchain projects including digital exchange, crypto wallet, DeFi program and more.</div>
                </div>
              </div>
              <div class="peopleBottomReight">
                <div class="peopleTopLeftL">
                  <img src="../../assets/img/nasdexImg/GuruSingh@2x.png" >
                </div>
                <div class="peopleTopLeftR">
                  <div class="LeftRtop">Guru Singh 
                    <a class="GS" v-show="!isGs" @mouseenter="isGs = true" href="https://www.linkedin.com/in/gurujeet-singh-sanghar-587a30194/" target="_blank"><img src="../../assets/img/nasdexImg/incircle.png" alt=""></a>
                    <a class="GSA" v-show="isGs" @mouseleave="isGs = false" href="https://www.linkedin.com/in/gurujeet-singh-sanghar-587a30194/" target="_blank"><img src="../../assets/img/nasdexImg/LinkedinDis@2x.png" alt=""></a>
                  </div>
                  <div class="LeftRcentre">Product Lead</div>
                  <div class="LeftRbottom">Early DeFi Power User with experience as a DeFi strategist, analyst and fund manager with DAOventures and several family offices. Co-Founder & Product Machine at LFG Capital.</div>
                </div>
              </div>
          </div>
        </div> -->
        <!-- <div class="titleAdv">ADVISORS</div>
        <div class="peopleDetail">
          <div class="peopleDetailPage">
            <img src="../../assets/img/nasdexImg/JoshDu@2x.png" >
            <div class="detaileTop">Josh Du
              <a class="RW" @mouseenter="isRw = true" v-show="!isRw" href="https://www.linkedin.com/in/joshdu/" target="_blank"><img src="../../assets/img/nasdexImg/incircle.png" alt=""></a>
              <a class="RWA" @mouseleave="isRw = false" v-show="isRw" href="https://www.linkedin.com/in/joshdu/" target="_blank"><img src="../../assets/img/nasdexImg/LinkedinDis@2x.png" alt=""></a>
            </div>
            <div class="detaileCenter">Advisor</div>
            <div class="detaileBottom">Institutional portfolio manager with over 15 years of investment experience. Managed funds and teams of upwards of USD 1 billion AUM. Knowledgeable in all asset classes including equity, credit, cryptos. Ex-Morgan Stanley, Deutsche Bank.</div>
          </div>
          <div class="peopleDetailPage">
            <img src="../../assets/img/nasdexImg/RichardWang@2x.png" alt="">
            <div class="detaileTop">Richard Wang 
              <a class="RW" @mouseenter="isRw = true" v-show="!isRw" href="https://www.linkedin.com/in/richardwang/" target="_blank"><img src="../../assets/img/nasdexImg/incircle.png" alt=""></a>
              <a class="RWA" @mouseleave="isRw = false" v-show="isRw" href="https://www.linkedin.com/in/richardwang/" target="_blank"><img src="../../assets/img/nasdexImg/LinkedinDis@2x.png" alt=""></a>
            </div>
            <div class="detaileCenter">Partner at DraperDragon Fund</div>
            <div class="detaileBottom">Venture Capitalist. Richard's current investments include semiconductors, blockchain and digital assets, including successful investments in projects such as Vechain and Kronos.</div>
          </div>
          <div class="peopleDetailPage">
            <img src="../../assets/img/nasdexImg/TerenceTan@2x.png" alt="">
            <div class="detaileTop">Terence Tan 
              <a class="TT" @mouseenter="isTt = true" v-show="!isTt" href="https://www.linkedin.com/in/terence-tan-5b82073/" target="_blank"><img src="../../assets/img/nasdexImg/incircle.png" alt=""></a>
              <a class="TTA" @mouseleave="isTt = false" v-show="isTt" href="https://www.linkedin.com/in/terence-tan-5b82073/" target="_blank"><img src="../../assets/img/nasdexImg/LinkedinDis@2x.png" alt=""></a>
            </div>
            <div class="detaileCenter">Managing Partner at IPV Capital</div>
            <div class="detaileBottom">Co Founder and Managing Partner of IPV Capital venture funds with $250m under management. Holds board seats on several IPV portfolio companies including Amprius, Giantec and V-Key Inc.</div>
          </div>
        </div> -->
        <div class="titlePar">PARTNERS AND INVESTORS</div>
        <div class="ParTitle">
          <div><img src="../../assets/img/nasdexImg/PlutusVC@2x.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/Firefly-Capital@2x.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/RioFund@2x.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/NexusBlock@2x.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/Zero2Launch@2x.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/polygon@2x.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/Quickswap@2x.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/starter@2x.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/Gate.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/bandProotocol@2x.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/Galaxy.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/xTwentyOne.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/OIG.png" alt=""></div>
          <div><img src="../../assets/img/nasdexImg/Excalibur@2x.png" alt=""></div>
        </div>
        <div class="titleBusi">BUSINESS AND PRODUCT ROADMAP</div>
        <div class="BusiPage">
          <div class="busiLine">
            <img src="../../assets/img/nasdexImg/webline@2x.png" alt="">
          </div>
          <div class="BusiPageOne BusiAll">
            <img src="../../assets/img/nasdexImg/round-icon@2x.png" class="BusiRound">
            <div class="BusiTop">2021 Q3</div>
            <div class="BusiCenter">
                <div class="BusiCenterOne">Business</div>
                <div class="BusiCenterAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Look for potential trader community and business partner</p>
                </div>
                <div class="BusiCenterAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Seed & private round fundraising</p>
                </div>
                <div class="BusiCenterAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Public sales via IDO platforms</p>
                </div>
            </div>
            <div class="BusiBottom">
                <div class="BusiBottomOne">Product</div>
                <div class="BusiBottomAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>System architecture, product UI / UX design and  wireframing</p>
                </div>
                <div class="BusiBottomAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Mobile app development for client-side access, including iOS/Android applications</p>
                </div>
                <div class="BusiBottomAll TopOne">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Infrastructure development with a focus on: security, database integrity, user and data analytics, and digital exchange services</p>
                </div>
                <div class="BusiBottomAll TopTwo">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Blockchain infrastructure initial design and architecture (single ecosystem)</p>
                </div>
            </div>
          </div>
          <div class="BusiPageTwo BusiAll">
            <img src="../../assets/img/nasdexImg/round-icon@2x.png" class="BusiRound">
            <div class="BusiTop">2021 Q4</div>
            <div class="BusiCenter">
                <div class="BusiCenterOne">Business</div>
                <div class="BusiCenterAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Get internal testers for NASDEX MVP version</p>
                </div>
                <div class="BusiCenterAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Roadshows in major cities in Asia</p>
                </div>
            </div>
            <div class="BusiBottom">
                <div class="BusiBottomOne">Product</div>
                <div class="BusiBottomAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Blockchain infrastructure development and integration</p>
                </div>
                <div class="BusiBottomAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Complete infrastructure development focusing on financial modelling, data intelligence, and digital asset management</p>
                </div>
                <div class="BusiBottomAll TopOne Integra">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Integration with 3rd party real-time data feeds</p>
                </div>
                <div class="BusiBottomAll TopTwo">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Web portal development for client- side and administrative access</p>
                </div>
                <div class="BusiBottomAll nasdexMvp">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>NASDEX MVP pilot phasebegins</p>
                </div>
            </div>
          </div>
          <div class="BusiPageThree BusiAll">
            <img src="../../assets/img/nasdexImg/round-icon@2x.png" class="BusiRound">
            <div class="BusiTop">2022 Q1</div>
            <div class="BusiCenter">
                <div class="BusiCenterOne">Business</div>
                <div class="BusiCenterAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Create online trading courses and build a global community</p>
                </div>
                <div class="BusiCenterAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Platform live with top 20 stocks to trade</p>
                </div>
                <div class="BusiCenterAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Cross-promotion and strategic airdrops</p>
                </div>
                <div class="BusiCenterAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Apply licenses</p>
                </div>
            </div>
            <div class="BusiBottom">
                <div class="BusiBottomOne">Product</div>
                <div class="BusiBottomAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>NASDEX officially goes live, with initial user base, partners, and digital exchange services online</p>
                </div>
                <div class="BusiBottomAll refineOne">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Refine the blockchain roadmap and ecosystem into a multichain architecture</p>
                </div>
                <div class="BusiBottomAll TopOne">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Begin blockchain infrastructure expansion development plans</p>
                </div>
                <div class="BusiBottomAll TopTwo">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Continuously refine user experience by updating all mobile applications and web portals</p>
                </div>
                <div class="BusiBottomAll rurtherOne">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Further refine NASDEX financial models, and user and data analytics capabilities</p>
                </div>
            </div>
          </div>
          <div class="BusiPageFour BusiAll">
            <img src="../../assets/img/nasdexImg/round-icon@2x.png" class="BusiRound">
            <div class="BusiTop">2022 Q2</div>
            <div class="BusiCenter">
                <div class="BusiCenterOne">Business</div>
                <div class="BusiCenterAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Continue expansion into SEA markets including India, Korea and Singapore</p>
                </div>
                <div class="BusiCenterAll addTop">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Add >50 Asian stocks for the users to trade</p>
                </div>
            </div>
            <div class="BusiBottom">
                <div class="BusiBottomOne">Product</div>
                <div class="BusiBottomAll">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Promote the growth of NASDEX ecosystem by expanding our number of online entry points through other third-party platforms</p>
                </div>
                <div class="BusiBottomAll implementTop">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>Implement governance model for future protocol improvements</p>
                </div>
                <div class="BusiBottomAll TopOne">
                  <img src="../../assets/img/nasdexImg/ellipse.png" alt="">
                  <p>NASDEX multichain blockchain infrastructure update complete</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="footer" v-show="!isRightFrame">
        <div class="footerTop">
          <img src="../../assets/img/nasdexImg/logo@2x.png" alt="">
        </div>
        <div class="footerTopTwo">support@nasdex.xyz</div>
        <div class="footerEnter">
          <a href="https://twitter.com/nasdex_xyz" target="_blank"><img class="FooImgOne" src="../../assets/img/nasdexImg/icon_twitter@2x.png" alt=""></a>
          <a href="https://t.me/nasdex_xyz" target="_blank"><img class="FooImgTwo" src="../../assets/img/nasdexImg/dianbaoicon@2x.png" alt=""></a>
          <a href="https://medium.com/@nasdex" target="_blank"><img class="FooImgThree" src="../../assets/img/nasdexImg/medium-icon@2x.png" alt=""></a>
          <a href="https://www.linkedin.com/company/nasdextech" target="_blank"><img class="FooImgFour" src="../../assets/img/nasdexImg/medium-icon备份@2x.png" alt=""></a>
        </div>
        <div class="footerBottom">
          <!-- <div class="footerEmail">Email address</div>
          <a href="##" class="footerEmailReight">Get stared</a> -->
          © 2021 NASDEX. All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { setCookie, getCookie } from "~/assets/js/cookie";
export default {
  data() {
    return {
      iosItem: "",
      androidItem: "",
      isShow: false,
      isShow1: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isRightFrame:false,
      showActive: 1,
      bannersImg:false,
      isTitleThree:false,
      isBarFrame:false,
      isHeightTop:false,
      isbfcShow:false,
      isCurrency:false,
      isCircular:false,
      isJd:false,
      isBz:false,
      isGs:false,
      isRw:false,
      isTt:false,
      isAf:false,
      localeList: [
        {
          label: "English",
          key: "en",
        },
        {
          label: "简体中文",
          key: "zh",
        },
      ],
      localObj: {
        en: {
          key: "English",
        },
        zh: {
          key: "简体中文",
        },
      },
      // locale: "简体中文",
    };
  },
  computed: {
    locale() {
      return this.$store.state.locale;
    },
    version() {
      if (this.androidItem) {
        if (this.isAndroidOrIOS() === 3) {
          return this.androidItem.version;
        }
      }
      if (this.iosItem) {
        if (this.isAndroidOrIOS() === 2) {
          return this.iosItem.version;
        }
      }
      return "xx.xx.xx";
    },
  },
  mounted() {},
  methods: {
    changeAbout(e){
      this.isRightFrame = false;
      window.scrollTo({
        top:e,
        behavior:'smooth'
      })
    },
    displayBox(){
      this.isRightFrame = true;
    },
    changeBanner(){
      if(this.bannersImg){
        this.bannersImg = false
      }else{
        this.bannersImg = true
      }
    },
    mouseOver() {
      this.openList();
    },
    mouseLeave() {
      this.hideList();
    },
    openList() {
      this.isShow = true;
    },
    hideList() {
      this.isShow = false;
    },
    toggle() {
      this.isShow = !this.isShow;
    },
    switchLanguage(lang, index) {
      this.showActive = index;
      setCookie("lang", lang);
      // console.log('this.$route####', this.$route);
      this.$store.dispatch("setLanguage", lang);
      this.$i18n.locale = lang;
    },
    goUrl(type) {
      if (type == "android") {
        window.location.href = this.androidItem.url;
        // "https://archive.kkwallet.org/upload/package/1617767590768594342.apk";
      }
    },
    isAndroidOrIOS() {
      if (process.client) {
        const h5_type = {
          web: 1,
          ios: 2,
          android: 3,
        };
        let _type = h5_type.web;
        var u = window.navigator.userAgent;
        if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          // android终端
          _type = h5_type.android;
        }
        if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          // ios终端
          _type = h5_type.ios;
        }
        return _type;
      }
    },
  },
  watch:{
    handleScroll() {
        //获取滚动时的高度
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let oneHeight = this.$refs.scrollOne.offsetHeight ;
        let twoHeight = this.$refs.scrollTwo.offsetHeight + oneHeight;
        let threeHeight = this.$refs.scrollThree.offsetHeight + twoHeight;
        // 
        // console.log(scrollTop)
        if (scrollTop > 0) {
          //滚动大于0的时
        }
    }
  }
};
</script>
<style lang="scss" scoped>
@import './nasdex.less';
</style>