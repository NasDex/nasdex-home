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
          <div class="navOne" v-show="!isNavFontOne" @mouseenter="isNavFontOne = true" ><a href="##">ABOUT</a></div>
          <div class="navOneA" v-show="isNavFontOne" @mouseleave="isNavFontOne = false"><a href="##" @click="changeAbout(850)">ABOUT</a></div>
          <div class="navTwo" v-show="!isNavFontTwo" @mouseenter="isNavFontTwo = true" ><a href="##">HOW IT WORKS</a></div>
          <div class="navTwoA" v-show="isNavFontTwo" @mouseleave="isNavFontTwo = false"><a href="##" @click="changeAbout(2700)">HOW IT WORKS</a></div>
          <div class="navThree" v-show="!isNavFontThree" @mouseenter="isNavFontThree = true"><a href="##">TEAM</a></div>
          <div class="navThreeA" v-show="isNavFontThree" @mouseleave="isNavFontThree = false"><a href="##" @click="changeAbout(3300)">TEAM</a></div>
          <div class="navFour" v-show="!isNavFontFour" @mouseenter="isNavFontFour = true" ><a href="##">DOCS</a></div>
          <div class="navFourA" v-show="isNavFontFour" @mouseleave="isNavFontFour = false"><a href="https://nasdexofficial.gitbook.io/nasdex" target="_blank">DOCS</a></div>
          <div class="navFive" v-show="!isNavFontFive" @mouseenter="isNavFontFive = true" ><a href="##">WHITEPAPER</a></div>
          <div class="navFiveA" v-show="isNavFontFive" @mouseleave="isNavFontFive = false"><a href="https://docsend.com/view/ahc6avcpf8qjjkcw" target="_blank">WHITEPAPER</a></div>
          <div class="navSix" v-show="!isNavFontSix" @mouseenter="isNavFontSix = true"><a href="##">CONTACT US</a></div>
          <div class="navSixA" v-show="isNavFontSix" @mouseleave="isNavFontSix = false"><a href="##" @click="changeAbout(8000)">CONTACT US</a></div>
        </div>
        <!-- 右弹框 -->
        <div class="rightFrameAll" v-show="isRightFrame" @mousewheel.prevent @touchmove.prevent>
          <div class="leftFrame"></div>
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
          <a href="#" class="titleThree" v-show="!isTitleThree" @mouseenter="isTitleThree = true">
            LAUNCH APP
          </a>
          <a href="https://app.nasdex.xyz/staking" target="_blank" class="titleThreeA" v-show="isTitleThree" @mouseleave="isTitleThree = false">
            LAUNCH APP
          </a>
          <div class="titleFour">
            <div class="left">
              <a href="https://polygonscan.com/address/0xe8d17b127ba8b9899a160d9a07b69bca8e08bfc6#code">$NSDX Contract Address :</a>
              <a href="https://polygonscan.com/address/0xe8d17b127ba8b9899a160d9a07b69bca8e08bfc6#code" target="_blank" class="leftOne" v-show="!isbfcShow" @mouseenter="isbfcShow = true" >0xe8d17b127ba8b9899a160d9a07b69bca8e08bfc6 <img src="../../assets/img/nasdexImg/polygon-logo@2x.png" ></a>
              <a href="https://polygonscan.com/address/0xe8d17b127ba8b9899a160d9a07b69bca8e08bfc6#code" target="_blank" class="leftOneA" v-show="isbfcShow" @mouseleave="isbfcShow = false">0xe8d17b127ba8b9899a160d9a07b69bca8e08bfc6 <img src="../../assets/img/nasdexImg/skip@2x.png" ></a>
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
        <div class="titleOur">OUR TEAM</div>
        <div class="peoplePage">
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
                  <div class="LeftRbottom">IT, Devops, Blockchain. Co-founder of crypto exchange ABIT.com. Lead a team of IT talents for blockchain projects including digital exchange, crypto wallet, DeFi program and more.</div>
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
        </div>
        <div class="titleAdv">ADVISORS</div>
        <div class="peopleDetail">
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
          <div class="peopleDetailPage">
            <img src="../../assets/img/nasdexImg/AlvinFoo.png" alt="">
            <div class="detaileTop">Alvin Foo 
              <a class="AF" @mouseenter="isAf = true" v-show="!isAf" href="https://www.linkedin.com/in/alvinfsc/" target="_blank"><img src="../../assets/img/nasdexImg/incircle.png" alt=""></a>
              <a class="AFA" @mouseleave="isAf = false" v-show="isAf" href="https://www.linkedin.com/in/alvinfsc/" target="_blank"><img src="../../assets/img/nasdexImg/LinkedinDis@2x.png" alt=""></a>
            </div>
            <div class="detaileCenter">Co-founder at DAOventures</div>
            <div class="detaileBottom"> Previously Google Head of Mobile China, IPG Managing Director, Omnicom Head of Mobile. Advisor for SXSW, SOSventures, Sparklabs Korea. Emerging Tech & Marketing Evangelist.</div>
          </div>
        </div>
        <div class="titlePar">PARTNERS AND INVESTORS</div>
        <div class="ParTitle">
          <img src="../../assets/img/nasdexImg/PlutusVC@2x.png" alt="">
          <img src="../../assets/img/nasdexImg/Firefly-Capital@2x.png" alt="">
          <img src="../../assets/img/nasdexImg/RioFund@2x.png" alt="">
          <img src="../../assets/img/nasdexImg/NexusBlock@2x.png" alt="">
          <img src="../../assets/img/nasdexImg/Zero2Launch@2x.png" alt="">
          <img src="../../assets/img/nasdexImg/polygon@2x.png" alt="">
          <img src="../../assets/img/nasdexImg/Quickswap@2x.png" alt="">
          <img src="../../assets/img/nasdexImg/starter@2x.png" alt="">
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
      isNavFontOne:false,
      isNavFontTwo:false,
      isNavFontThree:false,
      isNavFontFour:false,
      isNavFontFive:false,
      isNavFontSix:false,
      isBtn:false,
      isTitleThree:false,
      isBarFrame:false,
      isHeightTop:false,
      isbfcShow:false,
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
        // if (scrollTop > 200) {
        //   //大于200的时
        // }
        // if (scrollTop > oneHeight) {
        //   //这是滑动到scrollTwo的距离要做的操作

        // }
        // if (scrollTop > twoHeight) {
        //   //这是滑动到scrollThree要做的操作
        // }
    }
  }
};
</script>
<style lang="scss" scoped>
.outer {
  width: 100%;
  height: 6390px;
  background-color: #041425;
  ::-webkit-scrollbar{
    width: 5px;
  }
  // 定义滚动条轨道内阴影与圆角
  ::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
  }
  // 定义滑块 内阴影+圆角
  ::-webkit-slider-thumb{
    border-radius: 10px;
    -webkit-box-shadow:inset 0 0 6px rgba(16,15,15,0.3);
    background-color: #000;
  }
  .core {
    width: 100%;
    position: relative;
    .backgroundThree{
        position:absolute;
        width: 390px;
        height: 682px;
        background: linear-gradient(180deg,#041425,#00D2E3);
        opacity: 0.09;
        filter: blur(50px);
        right: 0;
        top: 96px;
    }
    .backgroundFour{
        position:absolute;
        width: 626px;
        height: 553px;
        background: url('../../assets/img/nasdexImg/tuoyuanxing@2x(1).png') no-repeat;
        background-size: cover;
    }
    .backgroundFive{
        position:absolute;
        width: 965px;
        height: 1019px;
        background: url('../../assets/img/nasdexImg/tuoyuanxingbefen3@2x.png') no-repeat;
        background-size: cover;
        top: 232px;
    }
    .backgroundSix{
        position:absolute;
        width: 743px;
        height: 930px;
        background: url('../../assets/img/nasdexImg/tuoyuanxingbefen4@2x.png') no-repeat;
        background-size: cover;
        top: 1496px;
    }
    .backgroundSix{
        position:absolute;
        width: 555px;
        height: 613px;
        background: url('../../assets/img/nasdexImg/tuoyuanxingbefen9@2x.png') no-repeat;
        background-size: cover;
        top: 2397px;
        right: 0;
    }
    .backgroundEight{
        position:absolute;
        right: 0;
        top: 2998px;
        width: 623px;
        height: 1019px;
        opacity: 0.64;
        background: url('../../assets/img/nasdexImg/crossSection.png') no-repeat;
        background-size: cover;
    }
    .backgroundNine{
      position:absolute;
      width: 487px;
      height: 489px;
      background: linear-gradient(180deg,#041425,#076CEE);
      filter: blur(50px);
      left: 113px;
      top: 4042px;
      opacity: 0.1;
    }
    .backgroundTen{
      position:absolute;
      z-index: 20;
      width: 682px;
      height: 682px;
      background: linear-gradient(180deg,#041425,#00D2E3);
      filter: blur(50px);
      right: 138px;
      top: 4531px;
      opacity: 0.09;
    }
    .backgroundOne{
      position:absolute;
      width: 949px;
      height: 678px;
      background: url('../../assets/img/nasdexImg/tuoyuanxing@2x.png') no-repeat;
      background-size: cover;
      z-index: 5;
      right: 0;
    }
    .backgroundTwo{
        position:absolute;
        width: 100%;
        height: 315px;
        background: url('../../assets/img/nasdexImg/AbitTechMeteor.png') no-repeat;
        background-size: cover;
        z-index: 6;
        left: 0;
        top: 92px;
    }
    .backgroundMeteor{
        position: absolute;
        width: 730px;
        height: 730px;
        background: url('../../assets/img/nasdexImg/smallMeteo.png') no-repeat;
        background-size: cover;
        z-index: 6;
        right: 90px;
    }
    .header {
      margin: 0 auto;
      width: 100%;
      height: 64px;
      line-height: 74px;
      display: flex;
      justify-content: space-between;
      // position: relative;
      background: #041425;
      position: fixed;
      top: 0;
      z-index: 1000;
      .svg{
        margin-left: 40px;
      }
      img {
        width: 125px;
        height: 24px;
      }
      .nav {
        width: 600px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // position: relative;
        // background: #000;
        z-index: 80;
        font-size: 14px;
        height: 64px;
        // position: fixed;
        // top: 0;
        // right: 0;
        // z-index: 1000;
        font-family: 'Rubik-Regular';
        img {
          height: 12px;
        }
        .navOne {
          width: 96px;
          display: inline-block;
          a{
            color: #fff;
            opacity: 0.5;
          }
        }
        .navOneA{
          display: inline-block;
          width: 96px;
          a{
            color: #fff;
            opacity: 1;
          }
        }
        .navTwo {
          display: inline-block;
          width: 155px;
          a{
            color: #fff;
            opacity: 0.5;
          }
        }
        .navTwoA {
          display: inline-block;
          width: 155px;
          a{
            color: #fff;
            opacity: 1;
          }
        }
        .navThree {
          display: inline-block;
          width: 88px;
          a{
            color: #fff;
            opacity: 0.5;
          }
        }
        .navThreeA {
          display: inline-block;
          width: 88px;
          a{
            color: #fff;
            opacity: 1;
          }
        }
        .navFour {
          display: inline-block;
          width: 88px;
          a{
            color: #fff;
            opacity: 0.5;
          }
        }
        .navFourA {
          display: inline-block;
          width: 88px;
          a{
            color: #fff;
            opacity: 1;
          }
        }
        .navFive {
          display: inline-block;
          width: 136px;
          a{
            color: #fff;
            opacity: 0.5;
          }
        }
        .navFiveA {
          display: inline-block;
          width: 136px;
          a{
            color: #fff;
            opacity: 1;
          }
        }
        .navSix {
          display: inline-block;
          width: 126px;
          a{
            color: #fff;
            opacity: 0.5;
          }
        }
        .navSixA {
          display: inline-block;
          width: 126px;
          a{
            color: #fff;
            opacity: 1;
          }
        }
        .btnA{
          width: 138px;
          height: 40px;
          line-height: 40px;
          background: linear-gradient(236deg,#00D4E3,#0082FF);
          display: inline-block;
          border-radius: 30px;
          text-align: center;
          opacity: 0.8;
          span{
            color: #fff;
          }
        }
        .btnB{
          width: 138px;
          height: 40px;
          line-height: 40px;
          background: linear-gradient(236deg,#00D4E3,#0082FF);
          display: inline-block;
          border-radius: 30px;
          text-align: center;
          opacity: 1;
          span{
            color: #fff;
          }
        }
      }
      .Popout{
        display: none;
      }
      .rightFrameAll{
        display: none;
      }
    }
    .main {
      width: 1120px;
      height: 5800px;
      margin: 0 auto;
      margin-top: 30px;
      .title{
        width: 600px;
        height: 438px;
        padding: 60px 0 0 0;
        position: relative;
        z-index: 200;
        margin-top: 64px;
        .titleOne{
          width: 439px;
          height: 46px;
          display: flex;
          align-items: center;
          span{
            height: 46px;
            width: 153px;
            font-size: 26px;
            color: #fff;
            margin: 18px 10px 0 0;
            font-family: 'Rubik-Regular';
          }
          img{
            width: 276px;
            height: 46px;
          }
        }
        .titleTwo{
          margin-top: 30px;
          p{
            font-size: 40px;
            font-weight: bold;
            color: #fff;
            font-family: 'Rubik-Regular';
            margin-top: 15px;
          }
        }
        .titleThree{
          margin-top: 30px;
          width: 220px;
          height: 64px;
          font-family: 'Rubik-Regular';
          background: linear-gradient(236deg,#0082FF,#00D4E3);
          border-radius: 37px;
          text-align: center;
          display: inline-block;
          line-height: 64px;
          opacity: 1;
          color: #fff;
          font-size: 22px;
        }
        .titleThreeA{
          margin-top: 30px;
          width: 220px;
          height: 64px;
          font-family: 'Rubik-Regular';
          display: inline-block;
          background: linear-gradient(236deg,#00D4E3,#0082FF);
          border-radius: 37px;
          text-align: center;
          line-height: 64px;
          opacity: 1;
          color: #fff;
          font-size: 22px;
        }
        .titleFour{
          margin-top: 37px;
          display: flex;
          width: 410px;
          a{
            font-size: 18px;
            color: #fff;
            font-family: 'Rubik-Regular';
          }
          .leftOne{
            width: 415px;
            height: 16px;
            font-size: 16px;
            color: #A3A3A3;
            display: block;
            margin-top: 14px;
            display: flex;
            justify-content: space-between;
            img{
              width: 19px;
              height: 16px;
              margin: 1px 8px 0 0;
            }
          }
          .leftOneA{
            width: 415px;
            height: 16px;
            font-size: 16px;
            color: #fff;
            display: block;
            margin-top: 14px;
            display: flex;
            justify-content: space-between;
            img{
              width: 19px;
              height: 16px;
              margin: 1px 8px 0 0;
            }
          }
        }
      }
      .barFrame{
        width: 1060px;
        height: 140px;
        background: url('../../assets/img/nasdexImg/juxing@2x.png') no-repeat;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        padding: 34px 70px 38px 90px;
        position: relative;
        z-index: 200;
        margin: 188px auto 0;
        // font-family: 'Rubik-Bold';
        .barFrameLeft{
          width: 602px;
          height: 68px;
          line-height: 32px;
          font-size: 24px;
          color: #fff;
          // font-weight: bold;
          font-family: 'Rubik-Bold';
        }
        .barFrameReight{
          width: 220px;
          height: 64px;
          line-height: 64px;
          background: linear-gradient(236deg,#0082FF,#00D4E3);
          border-radius: 37px;
          text-align: center;
          opacity: 1;
          display: inline-block;
          color: #fff;
          font-size: 22px;
          font-family: 'Rubik-Regular';
        }
        .barFrameReightA{
          width: 220px;
          height: 64px;
          line-height: 64px;
          background: linear-gradient(236deg,#00D4E3,#0082FF);
          border-radius: 37px;
          text-align: center;
          opacity: 1;
          display: inline-block;
          color: #fff;
          font-size: 22px;
          font-family: 'Rubik-Regular';
        }
      }
      .titleTopCenter{
        width: 380px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        font-size: 36px;
        color: #fff;
        font-weight: bold;
        font-family: 'Rubik-Bold';
        margin: 0 auto;
        margin-top: 108px;
        position: relative;
        z-index: 200;
      }
      .exchange{
        text-align: center;
        width: 836px;
        height: 78px;
        font-size: 20px;
        color: #c8c8c8;
        margin: 0 auto;
        margin-top: 22px;
        position: relative;
        z-index: 200;
        font-family: 'Rubik-Regular';
        // font-family: 'Rubik-Bold';
      }
      .titleExisting{
        width: 809px;
        height: 36px;
        font-size: 36px;
        color: #fff;
        margin-top: 160px;
        font-family: 'Rubik-Bold';
        position: relative;
        z-index: 600;
      }
      .caseOne{
        margin-top: 51px;
        background: url('../../assets/img/nasdexImg/juxingbeifen2@2x.png') no-repeat;
        background-size: cover;
        width: 1120px;
        height: 432px;
        padding: 29px 51px 52px;
        .caseOneTop{
          width: 662px;
          height: 24px;
          font-size: 24px;
          color: #fff;
          margin: 0 auto;
          font-family: 'Rubik-Bold';
        }
        .caseOneBottom{
          width: 1018px;
          height: 326px;
          display: flex;
          justify-content: space-between;
          .caseOneBottomOne{
            height: 206px;
            width: 260px;
            margin-top: 121px;
            text-align: center;
            img{
              width: 83px;
              height: 83px;
            }
            div{
              margin-top: 13px;
              font-size: 20px;
              color: #fff;
              font-family: 'Rubik-Regular';
              // font-weight: bold;
            }
            p{
              margin-top: 14px;
              font-size: 16px;
              color: #c8c8c8;
              font-family: 'Rubik-Regular';
            }
          }
          .caseOneBottomTwo{
            height: 206px;
            width: 260px;
            margin-top: 53px;
            text-align: center;
            img{
              width: 83px;
              height: 83px;
            }
            div{
              margin-top: 13px;
              font-size: 20px;
              color: #fff;
              // font-weight: bold;
              font-family: 'Rubik-Regular';
            }
            p{
              margin-top: 14px;
              font-size: 16px;
              color: #c8c8c8;
              font-family: 'Rubik-Regular';
            }
          }
          .caseOneBottomThree{
            height: 206px;
            width: 260px;
            margin-top: 121px;
            text-align: center;
            img{
              width: 83px;
              height: 83px;
            }
            div{
              margin-top: 13px;
              font-size: 20px;
              color: #fff;
              // font-weight: bold;
              font-family: 'Rubik-Regular';
            }
            p{
              margin-top: 14px;
              font-size: 16px;
              color: #c8c8c8;
              font-family: 'Rubik-Regular';
            }
          }
        }
      }
      .down{
        width: 31px;
        height: 40px;
        margin: 0 auto;
        img{
          width: 31px;
          height: 40px;
        }
      }
      .caseTwo{
        background: url('../../assets/img/nasdexImg/juxingbeifen2@2x.png') no-repeat;
        background-size: cover;
        width: 1120px;
        height: 432px;
        padding: 29px 51px 52px;
        .caseOneTop{
          width: 376px;
          height: 24px;
          font-size: 24px;
          color: #fff;
          font-family: 'Rubik-Bold';
          margin: 0 auto;
        }
        .caseOneBottom{
          width: 1018px;
          height: 326px;
          display: flex;
          justify-content: space-between;
          .caseOneBottomOne{
            height: 206px;
            width: 260px;
            margin-top: 121px;
            text-align: center;
            img{
              width: 83px;
              height: 83px;
            }
            div{
              margin-top: 13px;
              font-size: 20px;
              color: #fff;
              font-family: 'Rubik-Regular';
              // font-weight: bold;
            }
            p{
              margin-top: 14px;
              font-size: 16px;
              color: #c8c8c8;
              font-family: 'Rubik-Regular';
            }
          }
          .caseOneBottomTwo{
            height: 206px;
            width: 260px;
            margin-top: 53px;
            text-align: center;
            img{
              width: 83px;
              height: 83px;
            }
            div{
              margin-top: 13px;
              font-size: 20px;
              color: #fff;
              font-family: 'Rubik-Regular';
              // font-weight: bold;
            }
            p{
              margin-top: 14px;
              font-size: 16px;
              color: #c8c8c8;
              font-family: 'Rubik-Regular';
            }
          }
          .caseOneBottomThree{
            height: 206px;
            width: 260px;
            margin-top: 121px;
            text-align: center;
            img{
              width: 83px;
              height: 83px;
            }
            div{
              margin-top: 13px;
              font-size: 20px;
              color: #fff;
              font-family: 'Rubik-Regular';
              // font-weight: bold;
            }
            p{
              margin-top: 14px;
              font-size: 16px;
              color: #c8c8c8;
              font-family: 'Rubik-Regular';
            }
          }
        }
      }
      .titleCore{
        width: 809px;
        height: 36px;
        font-size: 36px;
        color: #fff;
        font-family: 'Rubik-Bold';
        margin-top: 100px;
      }
      .interCut{
        height: 240px;
        width: 980px;
        margin: 0 auto;
        margin-top: 70px;
        position: relative;
        font-family: 'Rubik-Bold';
        .interCutOne{
          background: url('../../assets/img/nasdexImg/juxing@2x(1).png') no-repeat;
          background-size: cover;
          width: 532px;
          height: 80px;
          display: flex;
        }
        .interCutTwo{
          background: url('../../assets/img/nasdexImg/juxing@2x(1).png') no-repeat;
          background-size: cover;
          width: 530px;
          height: 80px;
          position: absolute;
          right: 0;
          top: 80px;
          display: flex;
        }
        .interCutThree{
          background: url('../../assets/img/nasdexImg/juxing@2x(1).png') no-repeat;
          background-size: cover;
          width: 532px;
          height: 80px;
          position: absolute;
          top: 160px;
          display: flex;
        }
        img{
          width: 70px;
          height: 70px;
          margin: 5px 0 0 6px;
        }
        .tcp{
          width: 280px;
          height: 52px;
          line-height: 30px;
          color: #fff;
          font-size: 16px;
          margin: 9px 0 0 17px;
          font-family: 'Rubik-Regular';
        }
      }
      .banners{
        // marshallingSeven.png
        background: url('../../assets/img/nasdexImg/banners.png') no-repeat;
        background-size: cover;
        width: 1125px;
        height: 572px;
        margin-top: 90px;
        position: relative;
        z-index: 300;
        .bannerLeft{
          position: absolute;
          bottom: 30px;
          left: 527px;
          img{
            width: 13px;
            height: 13px;
          }
        }
        .bannerReight{
          position: absolute;
          bottom: 30px;
          left: 554px;
          img{
            width: 13px;
            height: 13px;
          }
        }
      }
      .banner{
        // marshallingSeven.png
        background: url('../../assets/img/nasdexImg/banner.png') no-repeat;
        background-size: cover;
        width: 1125px;
        height: 572px;
        margin-top: 90px;
        position: relative;
        z-index: 300;
        .bannerLeft{
          position: absolute;
          bottom: 30px;
          left: 527px;
          img{
            width: 13px;
            height: 13px;
          }
        }
        .bannerReight{
          position: absolute;
          bottom: 30px;
          left: 554px;
          img{
            width: 13px;
            height: 13px;
          }
        }
      }
      .titleOur{
        width: 210px;
        height: 36px;
        font-size: 36px;
        font-weight: bold;
        color: #fff;
        font-family: 'Rubik-Bold';
        margin-top: 90px;
      }
      .peoplePage{
        background: url('../../assets/img/nasdexImg/juxingbeifen7@2x.png') no-repeat;
        background-size: cover;
        width: 1120px;
        height: 600px;
        margin-top: 48px;
        padding: 53px 60px 59px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        position: relative;
        z-index: 300;
        .peopleTop{
          width: 1000px;
          height: 216px;
          display: flex;
          justify-content: space-between;
          .peopleTopLeft{
            width: 444px;
            height: 216px;
            display: flex;
            justify-content: space-between;
            .peopleTopLeftL{
              width: 120px;
              height: 216px;
              img{
                width: 120px;
                height: 120px;
              }
              .peoplebtnTop{
                width: 82px;
                height: 24px;
                border-radius: 12px;
                background: url('../../assets/img/nasdexImg/Deutsche.png') no-repeat;
                background-size: cover;
                margin: 20px auto 0;
              }
              .peoplebtnBottom{
                width: 82px;
                height: 24px;
                border-radius: 12px;
                background: url('../../assets/img/nasdexImg/Morgan.png') no-repeat;
                background-size: cover;
                margin: 16px auto 0;
              }
            }
            .peopleTopLeftR{
              width: 304px;
              display: flex;
              flex-wrap: wrap;
              align-content: space-around;
              .LeftRtop{
                font-size: 20px;
                font-weight: bold;
                color: #fff;
                width: 130px;
                display: flex;
                align-items: flex-end;
                font-family: 'Rubik-Regular';
                .JD{
                  height: 24px;
                  img{
                    width: 26px;
                    height: 24px;
                    margin-left: 9px;
                    opacity: 0.9;
                  }
                }
                .JDA{
                  height: 24px;
                  img{
                    width: 26px;
                    height: 24px;
                    margin-left: 9px;
                    opacity: 1;
                  }
                }
              }
              .LeftRcentre{
                width: 195px;
                font-size: 16px;
                color: #c8c8c8;
                font-family: 'Rubik-Regular';
              }
              .LeftRbottom{
                width: 304px;
                line-height: 25px;
                font-size: 14px;
                color: #fff;
                font-family: 'Rubik-Regular';
              }
            }
          }
          .peopleTopReight{
            width: 444px;
            height: 192px;
            display: flex;
            justify-content: space-between;
            .peopleTopLeftL{
              width: 120px;
              height: 216px;
              img{
                width: 120px;
                height: 120px;
              }
              .peoplebtnTop{
                width: 82px;
                height: 24px;
                border-radius: 12px;
                background: url('../../assets/img/nasdexImg/dadventures.png') no-repeat;
                background-size: cover;
                margin: 20px auto 0;
              }
              .peoplebtnBottom{
                width: 82px;
                height: 24px;
                border-radius: 12px;
                background: url('../../assets/img/nasdexImg/Dubri.png') no-repeat;
                background-size: cover;
                margin: 16px auto 0;
              }
            }
            .peopleTopLeftR{
              width: 304px;
              display: flex;
              flex-wrap: wrap;
              align-content: space-around;
              .LeftRtop{
                font-size: 20px;
                font-weight: bold;
                color: #fff;
                width: 180px;
                display: flex;
                align-items: flex-end;
                font-family: 'Rubik-Regular';
                .BZ{
                  height: 24px;
                  img{
                    width: 26px;
                    height: 24px;
                    margin-left: 9px;
                    opacity: 0.9;
                  }
                }
                .BZA{
                  height: 24px;
                  img{
                    width: 26px;
                    height: 24px;
                    margin-left: 9px;
                    opacity: 1;
                  }
                }
              }
              .LeftRcentre{
                width: 195px;
                font-size: 16px;
                color: #c8c8c8;
                font-family: 'Rubik-Regular';
              }
              .LeftRbottom{
                width: 304px;
                line-height: 25px;
                font-size: 14px;
                color: #fff;
                font-family: 'Rubik-Regular';
              }
            }
          }
        }
        .peopleBottom{
          width: 1000px;
          height: 216px;
          display: flex;
          justify-content: space-between;
          .peopleBottomLeft{
            width: 444px;
            height: 192px;
            display: flex;
            justify-content: space-between;
            .peopleTopLeftL{
              width: 120px;
              height: 216px;
              img{
                width: 120px;
                height: 120px;
              }
              .peoplebtnTop{
                width: 82px;
                height: 24px;
                border-radius: 12px;
                background: url('../../assets/img/nasdexImg/AbitTech.png') no-repeat;
                background-size: cover;
                margin: 20px auto 0;
              }
            }
            .peopleTopLeftR{
              width: 304px;
              display: flex;
              flex-wrap: wrap;
              align-content: space-around;
              .LeftRtop{
                font-size: 20px;
                font-weight: bold;
                color: #fff;
                width: 130px;
                font-family: 'Rubik-Regular';
              }
              .LeftRcentre{
                width: 195px;
                font-size: 16px;
                color: #c8c8c8;
                font-family: 'Rubik-Regular';
              }
              .LeftRbottom{
                width: 304px;
                line-height: 25px;
                font-size: 14px;
                color: #fff;
                font-family: 'Rubik-Regular';
              }
            }
          }
          .peopleBottomReight{
            width: 444px;
            height: 168px;
            display: flex;
            justify-content: space-between;
            .peopleTopLeftL{
              width: 120px;
              height: 216px;
              img{
                width: 120px;
                height: 120px;
              }
            }
            .peopleTopLeftR{
              width: 304px;
              display: flex;
              flex-wrap: wrap;
              align-content: space-around;
              .LeftRtop{
                font-size: 20px;
                font-weight: bold;
                color: #fff;
                width: 150px;
                display: flex;
                align-items: flex-end;
                font-family: 'Rubik-Regular';
                .GS{
                  height: 24px;
                  img{
                    width: 26px;
                    height: 24px;
                    margin-left: 9px;
                    opacity: 0.9;
                  }
                }
                .GSA{
                  height: 24px;
                  img{
                    width: 26px;
                    height: 24px;
                    margin-left: 9px;
                    opacity: 1;
                  }
                }
              }
              .LeftRcentre{
                width: 195px;
                font-size: 16px;
                color: #c8c8c8;
                font-family: 'Rubik-Regular';
              }
              .LeftRbottom{
                width: 304px;
                line-height: 25px;
                font-size: 14px;
                color: #fff;
                font-family: 'Rubik-Regular';
              }
            }
          }
        }
        .LeftRtop{
          font-family: 'Rubik-Bold';
        }
      }
      .titleAdv{
        width: 210px;
        height: 36px;
        font-size: 36px;
        font-family: 'Rubik-Bold';
        font-weight: bold;
        color: #fff;
        margin-top: 88px;
      }
      .peopleDetail{
        background: url('../../assets/img/nasdexImg/juxingbeifen9@2x.png') no-repeat;
        background-size: cover;
        width: 1120px;
        height: 471px;
        margin-top: 40px;
        padding: 53px 60px 92px;
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 500;
        .peopleDetailPage{
          height: 294px;
          width: 280px;
          .detaileTop{
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            margin-top: 20px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            font-family: 'Rubik-Regular';
            .RW{
              height: 24px;
              width: 26px;
              img{
                width: 26px;
                height: 24px;
                margin-left: 9px;
                opacity: 0.9;
              }
            }
            .RWA{
              height: 24px;
              width: 26px;
              img{
                width: 26px;
                height: 24px;
                margin-left: 9px;
                opacity: 1;
              }
            }
            .TT{
              height: 24px;
              width: 26px;
              img{
                width: 26px;
                height: 24px;
                margin-left: 9px;
                opacity: 0.9;
              }
            }
            .TTA{
              height: 24px;
              width: 26px;
              img{
                width: 26px;
                height: 24px;
                margin-left: 9px;
                opacity: 1;
              }
            }
            .AF{
              height: 24px;
              width: 26px;
              img{
                width: 26px;
                height: 24px;
                margin-left: 9px;
                opacity: 0.9;
              }
            }
            .AFA{
              height: 24px;
              width: 26px;
              img{
                width: 26px;
                height: 24px;
                margin-left: 9px;
                opacity: 1;
              }
            }
            
          }
          .detaileCenter{
            font-size: 16px;
            color: #c8c8c8;
            text-align: center;
            margin-top: 14px;
            font-family: 'Rubik-Regular';
          }
          .detaileBottom{
            font-size: 14px;
            line-height: 24px;
            text-align: center;
            color: #fff;
            margin-top: 12px;
            font-family: 'Rubik-Regular';
          }
        }
        img{
          width: 121px;
          height: 120px;
          text-align: center;
          margin-left: 80px;
        }
        .detaileTop{
          font-family: 'Rubik-Bold';
        }
      }
      .titlePar{
        // width: 510px;
        width: 650px;
        height: 36px;
        font-size: 36px;
        font-family: 'Rubik-Bold';
        font-weight: bold;
        color: #fff;
        margin-top: 87px;
      }
      .ParTitle{
        background: url('../../assets/img/nasdexImg/juxingbeifen10@2x.png') no-repeat;
        background-size: cover;
        width: 1121px;
        height: 300px;
        margin-top: 40px;
        padding: 60px 59px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        img{
          width: 220px;
          height: 60px;
        }
      }
      .titleBusi{
        width: 680px;
        height: 36px;
        font-size: 36px;
        font-weight: bold;
        color: #fff;
        margin-top: 90px;
        font-family: 'Rubik-Bold';
      }
      .BusiPage{
        width: 1120px;
        height: 565px;
        margin-top: 80px;
        display: flex;
        justify-content: space-between;
        position: relative;
        .busiLine{
          position: absolute;
          top: -16px;
          left: 0;
          width: 1099px;
          height: 2px;
          img{
            width: 1099px;
            height: 2px;
          }
        }
        .BusiAll{
          background: url('../../assets/img/nasdexImg/juxingbeifen12@2x.png') no-repeat;
          background-size: cover;
          width: 266px;
          height: 565px;
          padding: 26px 35px 102px 20px;
          position: relative;
          .BusiRound{
            position: absolute;
            width: 44px;
            height: 44px;
            left: 111px;
            top:-18px
          }
          .BusiTop{
            width: 120px;
            text-align: center;
            height: 24px;
            font-family: 'Rubik-Bold';
            font-weight: bold;
            color: #fff;
            font-size: 20px;
            margin: 0 auto;
          }
          .BusiCenter{
            font-family: 'Rubik-Regular';
            .BusiCenterOne{
              font-size: 16px;
              color: #0083fe;
              margin:20px 0 0 12px ;
            }
            img{
              width: 8px;
              height: 8px;
              margin: 3px 4px 0 0;
            }
            .BusiCenterAll{
              display: flex;
              margin-top: 10px;
              p{
                width: 198px;
                height: 32px;
                color: #fff;
                font-size: 12px;
              }
            }
          }
          .BusiBottom{
            font-family: 'Rubik-Regular';
            .BusiBottomOne{
              font-size: 16px;
              color: #00efff;
              margin-top: 20px;
              padding-left: 12px;
            }
            img{
              width: 8px;
              height: 8px;
              margin: 3px 4px 0 0;
            }
            .BusiBottomAll{
              display: flex;
              margin-top: 10px;
              p{
                width: 198px;
                height: 32px;
                color: #fff;
                font-size: 12px;
              }
            }
            .TopOne{
              margin-top: 28px;
            }
            .TopTwo{
              margin-top: 45px;
            }
          }
        }
        .BusiPageTwo{
          .BusiBottom{
            .Integra{
              margin-top: 58px;
            }
            .TopTwo{
              margin-top: 15px;
            }
            .nasdexMvp{
              margin-top: 25px;
            }
          }
        }
        .BusiPageThree{
          .BusiBottom{
            .BusiBottomOne{
              margin-top: 10px;
            }
            .TopOne{
              margin-top: 18px;
            }
            .refineOne{
              margin-top: 26px;
            }
            .TopTwo{
              margin-top: 10px;
            }
            .rurtherOne{
              margin-top: 20px;
            }
          }
          
        }
        .BusiPageFour{
          .BusiCenter{
            .addTop{
              margin-top: 25px;
            }
          }
          .BusiBottom{
            .implementTop{
              margin-top: 70px;
            }
          }
        }
      }
    }
    .footer {
      width: 1021px;
      height: 425px;
      background: url('../../assets/img/nasdexImg/footer@2x.png') no-repeat;
      background-size: cover;
      margin: 102px auto 0;
      padding: 270px 286px 30px 348px;
      display: flex;
      flex-wrap: wrap;
      justify-content:space-around;
      .footerTop{
        img{
          width: 125px;
          height: 24px;
        }
      }
      .footerTopTwo{
        width: 270px;
        height: 17px;
        text-align: center;
        font-size: 14px;
        font-family: "Rubik-Regular";
        color: #fff;
        opacity: 69%;
        margin-top: 8px;
      }
      .footerEnter{
        // 116px
        width: 205px;
        height: 24px;
        margin-top: 12px;
        display: flex;
        justify-content: space-evenly;
        img{
          width: 24px;
          height: 24px;
        }
      }
      .footerBottom{
        width: 234px;
        height: 17px;
        font-size: 14px;
        font-family: "Rubik-Regular";
        color: #fff;
        opacity: 69%;
        margin-top: 18px;
      }
    }
  }
}

@keyframes bounce-down {
  25% {
    transform: translateY(-4px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(4px);
  }
}
@keyframes bounce-opcity {
  25% {
    opacity: 0.5;
  }
  // 40%{
  //      opacity: 0.3;
  // }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.5;
  }
  // 75% {
  //      opacity: 0.9;
  // }
  100% {
    opacity: 1;
  }
}
@media screen and (max-width: 750px) {
  .outer {
    width: 100%;
    height: 7350px;
    background-color: #041425;
    .core{
      width: 100%;
      position: relative;
      // 背景图区域
      .backgroundThree{
        display: none;
        position:absolute;
        width: 257px;
        height: 266px;
        background: url('../../assets/img/nasdexImg/h5tuoyuan4@2x.png') no-repeat;
        background-size: cover;
        z-index: 5;
        left: 0;
      }
      .backgroundFour{
        display: none;
        position:absolute;
        width: 257px;
        height: 266px;
        background: url('../../assets/img/nasdexImg/h5tuoyuan@2x.png') no-repeat;
        background-size: cover;
        z-index: 5;
        right: 50;
      }
      .backgroundFive{
        // display: none;
        position:absolute;
        width: 348px;
        height: 469px;
        background: url('../../assets/img/nasdexImg/h5tuoyuan3@2x.png') no-repeat;
        background-size: cover;
        z-index: 5;
        top: 150px;
      } 
      .backgroundSix{
        position:absolute;
        width: 104px;
        height: 367px;
        background: url('../../assets/img/nasdexImg/h5TwoYuanBf.png') no-repeat;
        background-size: cover;
        top: 2750px;
        right: 0;
      }
      .backgroundSeven{
        display: none;
      }
      .backgroundEight{
        display: none;
      }
      .backgroundNine{
        display: none;
      }
      .backgroundTen{
        display: none;
      }
      .backgroundOne{
        // display: none;
        position:absolute;
        width: 190px;
        height: 220px;
        background: url('../../assets/img/nasdexImg/h5TwoYuan.png') no-repeat;
        background-size: cover;
        z-index: 5;
        right: 0;
        top: 0;
      }
      .backgroundTwo{
        display: none;
      }
      .backgroundMeteor{
        display: none;
      }
      .header{
        // display: none;
        width: 100%;
        height: 64px;
        padding: 0px 16px;
        .svg{
          position: relative;
          z-index: 600;
          opacity: 0.8;
          margin-left: 0;
        }
        .nav{
          display: none;
        }
        .Popout{
          display: block;
          width: 24px;
          // height: 22px;
          background: #041425;
          position: relative;
          z-index: 80;
          img{
            width: 24px;
            height: 22px;
          }
        }
        .rightFrameAll{
          width: 100%;
          height: 812px;
          // background: #000;
          // opacity: 60%;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1001;
          display: flex;
          .leftFrame{
            width: 300px;
            height: 812px;
            background: #000;
            opacity: 0.5;
          }
          .rightFrame{
            display: block;
            position: absolute;
            width: 220px;
            height: 812px;
            background: #032543;
            opacity: 100%;
            right: 0;
            top: 0;
            z-index: 500;
            padding: 0 41px;
            .frameTop{
              margin: 0 0 0 132px;
              // width: 210px;
              height: 24px;
              img{
                width: 24px;
                height: 24px;
              }
            }
            .frameBottom{
              width: 110px;
              // width: 75px;
              height: 380px;
              margin: 0 auto;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              padding-top: 40px;
              font-size: 14px;
              font-family: 'Rubik-Regular';
              .navOne{
                display: block;
                width: 48px;
                height: 12px;
                text-align: center;
                color: #fff;
              }
              .navTwo{
                display: block;
                width: 120px;
                height: 14px;
                color: #fff;
                text-align: center;
              }
              .navThree{
                display: block;
                width: 100px;
                height: 12px;
                color: #fff;
                text-align: center;
              }
              .navFour{
                display: block;
                width: 100px;
                height: 10px;
                color: #fff;
                text-align: center;
              }
              .navFive{
                display: block;
                width: 100px;
                height: 12px;
                color: #fff;
                text-align: center;
              }
              .navSix{
                display: block;
                width: 100px;
                height: 12px;
                color: #fff;
                text-align: center;
              }
            }
            .btn{
              width: 138px;
              height: 40px;
              
              line-height: 40px;
              background: linear-gradient(236deg,#00D4E3,#0082FF);
              display: inline-block;
              border-radius: 30px;
              text-align: center;
              img {
                width: 88px;
              }
            }
          }
        }
      }
      
      .main{
        // display: none;
        // background: #bfa;
        // width: 375px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        // background: #000;
        .title{
          // display: none;
          width:340px;
          margin: 64px auto 0;
          .titleOne{
            // display: none;
            height: 26px;
            width: 280px;
            justify-content: space-between;
            span{
              height: 16px;
              width: 94px;
              font-size: 16px;
              margin: 0 0 0 0;
            }
            img{
              width: 155px;
              height: 26px;
            }
          }
          .titleTwo{
            // display: none;
            margin-top: 30px;
            p{
              font-size: 24px;
            }
          }
          .titleThree{
            // display: none;
            margin-top: 30px;
            width: 120px;
            height: 34px;
            font-size: 12px;
            line-height: 34px;
          }
          .titleThreeA{
            // display: none;
            margin-top: 30px;
            width: 120px;
            height: 34px;
            font-size: 12px;
            line-height: 34px;
          }
          .titleFour{
            // display: none;
            margin-top: 30px;
            width: 340px;
            p{
              font-size: 14px;
            }
            .leftOne{
              width: 308px;
              height: 12px;
              font-size: 12px;
              img{
                width: 14px;
                height: 12px;
                margin: 1px 0 0 0;
              }
            }
            .leftOneA{
              width: 308px;
              height: 12px;
              font-size: 12px;
              img{
                width: 14px;
                height: 12px;
                margin: 1px 0 0 0;
              }
            }
          }
        }
        .barFrame{
          // display: none;
          width: 355px;
          height: 140px;
          padding: 26px 31px 0 32px;
          flex-wrap: wrap;
          justify-content: center;
          background: url('../../assets/img/nasdexImg/h5juxing@2x.png') no-repeat;
          background-size: cover;
          // margin: 0 0 0 0;
          margin: -20px auto 0;
          
          .barFrameLeft{
            width: 320px;
            height: 40px;
            font-size: 12px;
            text-align: center;
            line-height: 20px;
          }
          .barFrameReight{
            width: 120px;
            height: 34px;
            font-size: 12px;
            line-height: 34px;
          }
          .barFrameReightA{
            width: 120px;
            height: 34px;
            font-size: 12px;
            line-height: 34px;
          }
        }
        .titleTopCenter{
          // display: none;
          width: 200px;
          height: 22px;
          font-size: 22px;
          line-height: 10px;
          margin: 57px auto 0;
        }
        .exchange{
          // display: none;
          width: 334px;
          height: 120px;
          font-size: 14px;
          margin: 12px auto 0;

        }
        .titleExisting{
          // display: none;
          width: 315px;
          height: 64px;
          font-size: 22px;
          margin: 50px auto 0;
        }
        .caseOne{
          // display: none;
          margin-top: 20px;
          background: url('../../assets/img/nasdexImg/h5ninejuxingOne.png') no-repeat;
          background-size: cover;
          width: 343px;
          height: 610px;
          margin: 0 auto;
          padding: 20px 18px 0;
          .caseOneTop{
            width: 307px;
            height: 40px;
            font-size: 16px;
            text-align: center;
          }
          .caseOneBottom{
            width: 280px;
            flex-wrap: wrap;
            margin: 0 auto;
            .caseOneBottomOne{
              width: 280px;
              height: 160px;
              margin: 0 auto;
              margin-top: 35px;
              text-align: center;
              img{
                width: 62px;
                height: 62px;
              }
              div{
                margin-top: 14px;
                font-size: 14px;
              }
              p{
                margin-top: 14px;
                font-size: 12px;
                width: 280px;
              }
            }
            .caseOneBottomTwo{
              width: 280px;
              height: 160px;
              margin: 0 auto;
              margin-top: 0px;
              text-align: center;
              img{
                width: 62px;
                height: 62px;
              }
              div{
                margin-top: 14px;
                font-size: 14px;
              }
              p{
                margin-top: 14px;
                font-size: 12px;
              }
            }
            .caseOneBottomThree{
              width: 280px;
              height: 160px;
              margin: 0 auto;
              margin-top: 0px;
              text-align: center;
              img{
                width: 62px;
                height: 62px;
              }
              div{
                margin-top: 14px;
                font-size: 14px;
              }
              p{
                margin-top: 14px;
                font-size: 12px;
                width: 270px;
              }
            }
          }
        }
        .down{
          // display: none;
        }
        .caseTwo{
          // display: none;
          margin-top: 33px;
          background: url('../../assets/img/nasdexImg/h5juxingbeifen3@2x.png') no-repeat;
          background-size: cover;
          width: 343px;
          height: 590px;
          margin: 0 auto;
          padding: 20px 18px 0;
          .caseOneTop{
            width: 307px;
            height: 40px;
            font-size: 16px;
            text-align: center;
          }
          .caseOneBottom{
            width: 260px;
            flex-wrap: wrap;
            margin: 0 auto;
            .caseOneBottomOne{
              width: 260px;
              height: 160px;
              margin: 0 auto;
              margin-top: 35px;
              text-align: center;
              img{
                width: 62px;
                height: 62px;
              }
              div{
                margin-top: 14px;
                font-size: 14px;
              }
              p{
                margin-top: 14px;
                font-size: 12px;
                width: 280px;
              }
            }
            .caseOneBottomTwo{
              width: 260px;
              height: 160px;
              margin: 0 auto;
              margin-top: 0px;
              text-align: center;
              img{
                width: 62px;
                height: 62px;
              }
              div{
                margin-top: 14px;
                font-size: 14px;
              }
              p{
                margin-top: 14px;
                font-size: 12px;
              }
            }
            .caseOneBottomThree{
              width: 260px;
              height: 160px;
              margin: 0 auto;
              margin-top: 0px;
              text-align: center;
              img{
                width: 62px;
                height: 62px;
              }
              div{
                margin-top: 14px;
                font-size: 14px;
              }
              p{
                margin-top: 14px;
                font-size: 12px;
                width: 270px;
              }
            }
          }
        }
        .titleCore{
          // display: none;
          width: 315px;
          height: 64px;
          font-size: 22px;
          margin: 40px auto 0;
        }
        .interCut{
          // display: none;
          width: 343px;
          margin: 0 auto;
          margin-top: 20px;
          position: relative;
          .interCutOne{
            width: 343px;
            height: 70px;
            background: url('../../assets/img/nasdexImg/h5juxing@2x(1).png') no-repeat;
            background-size: cover;
            margin: 0 auto;
          }
          .interCutTwo{
            width: 343px;
            height: 70px;
            left: 0;
            background: url('../../assets/img/nasdexImg/h5juxing@2x(1).png') no-repeat;
            background-size: cover;
            margin: 0 auto;
          }
          .interCutThree{
            width: 343px;
            height: 70px;
            background: url('../../assets/img/nasdexImg/h5juxing@2x(1).png') no-repeat;
            background-size: cover;
            margin: 0 auto;
          }
          img{
            width: 60px;
            height: 60px;
          }
          .tcp{
            width: 230px;
            height: 48px;
            line-height: 20px;
            font-size: 14px;
          }
        }
        .banners{
          // display: none;
          margin: 0 auto;
          width: 343px;
          height: 174.48px;
          margin-top: 30px;
          .bannerLeft{
            left: 163px;
            bottom: 8px;
            img{
              width: 6px;
              height: 6px;
            }
          }
          .bannerReight{
            left: 175px;
            bottom: 8px;
            img{
              width: 6px;
              height: 6px;
            }
          }
        }
        .banner{
          // display: none;
          margin: 0 auto;
          width: 343px;
          height: 174.48px;
          margin-top: 30px;
          .bannerLeft{
            left: 163px;
            bottom: 8px;
            img{
              width: 6px;
              height: 6px;
            }
          }
          .bannerReight{
            left: 175px;
            bottom: 8px;
            img{
              width: 6px;
              height: 6px;
            }
          }
        }
        .titleOur{
          // display: none;
          width: 315px;
          height: 64px;
          font-size: 22px;
          margin: 40px auto 0;
        }
        .peoplePage{
          // display: none;
          background: url('../../assets/img/nasdexImg/h5ninejuxingTwo.png') no-repeat;
          background-size: cover;
          width: 343px;
          height: 780px;
          margin-top: 20px;
          margin: 0 auto;
          padding: 20px 25px 0 20px;
          align-content: flex-start;
          .peopleTop{
            // display: none;
            width: 343px;
            height: 368px;
            flex-wrap: wrap;
            align-content: space-around;
            .peopleTopLeft{
              width: 315px;
              height: 186px;
              margin: 0 auto;
              .peopleTopLeftL{
                width: 60px;
                height: 60px;
                img{
                  width: 60px;
                  height: 60px;
                  margin-top: 10px;
                }
                .peoplebtnTop{
                  // display: none;
                  width: 60px;
                  height: 17.5px;
                  margin: 10px auto 0;
                }
                .peoplebtnBottom{
                  // display: none;
                  width: 60px;
                  height: 17.5px;
                }
              }
              .peopleTopLeftR{
                width: 228px;
                height: 186px;
                .LeftRtop{
                  font-size: 16px;
                  width: 228px;
                  .JD{
                    height: 16px;
                    margin-bottom: 2px;
                    img{
                      margin-left: 4px;
                      width: 16px;
                      height: 16px;
                    }
                  }
                  .JDA{
                    height: 16px;
                    margin-bottom: 2px;
                    img{
                      margin-left: 4px;
                      width: 16px;
                      height: 16px;
                    }
                  }
                }
                .LeftRcentre{
                  font-size: 14px;
                  width: 228px;
                }
                .LeftRbottom{
                  font-size: 12px;
                  width: 228px;
                  line-height: 20px;
                }
              }
            }
            .peopleTopReight{
              margin: 0 auto;
              width: 315px;
              height: 146px;
              .peopleTopLeftL{
                width: 60px;
                height: 60px;
                img{
                  width: 60px;
                  height: 60px;
                  margin-top: 10px;
                }
                .peoplebtnTop{
                  // display: none;
                  width: 60px;
                  height: 17.5px;
                  margin: 10px auto 0;
                }
                .peoplebtnBottom{
                  // display: none;
                  width: 60px;
                  height: 17.5px;
                }
              }
              .peopleTopLeftR{
                width: 228px;
                height: 146px;
                .LeftRtop{
                  font-size: 16px;
                  width: 228px;
                  .BZ{
                    height: 16px;
                    margin-bottom: 2px;
                    img{
                      margin-left: 4px;
                      width: 16px;
                      height: 16px;
                    }
                  }
                  .BZA{
                    height: 16px;
                    margin-bottom: 2px;
                    img{
                      margin-left: 4px;
                      width: 16px;
                      height: 16px;
                    }
                  }
                }
                .LeftRcentre{
                  font-size: 14px;
                  width: 228px;
                }
                .LeftRbottom{
                  font-size: 12px;
                  width: 228px;
                  line-height: 20px;
                }
              }
            }
          }
          .peopleBottom{
            width: 367px;
            height: 368px;
            flex-wrap: wrap;
            align-content: space-evenly;
            .peopleBottomLeft{
              width: 315px;
              height: 146px;
              margin: 0 auto;
              .peopleTopLeftL{
                width: 60px;
                height: 60px;
                img{
                  width: 60px;
                  height: 60px;
                  margin-top: 10px;
                }
                .peoplebtnTop{
                  // display: none;
                  width: 60px;
                  height: 17.5px;
                }
                .peoplebtnBottom{
                  // display: none;
                  width: 60px;
                  height: 17.5px;
                }
              }
              .peopleTopLeftR{
                width: 228px;
                height: 146px;
                .LeftRtop{
                  font-size: 16px;
                  width: 228px;
                }
                .LeftRcentre{
                  font-size: 14px;
                  width: 228px;
                }
                .LeftRbottom{
                  font-size: 12px;
                  width: 228px;
                  line-height: 20px;
                }
              }
            }
            .peopleBottomReight{
              margin: 0 auto;
              width: 315px;
              height: 146px;
              .peopleTopLeftL{
                width: 60px;
                height: 60px;
                img{
                  width: 60px;
                  height: 60px;
                  margin-top: 13px;
                }
                .peoplebtnTop{
                  // display: none;
                  width: 60px;
                  height: 17.5px;
                }
                .peoplebtnBottom{
                  // display: none;
                  width: 60px;
                  height: 17.5px;
                }
              }
              .peopleTopLeftR{
                width: 228px;
                height: 146px;
                .LeftRtop{
                  font-size: 16px;
                  width: 228px;
                  .GS{
                    height: 16px;
                    margin-bottom: 2px;
                    img{
                      margin-left: 4px;
                      width: 16px;
                      height: 16px;
                    }
                  }
                  .GSA{
                    height: 16px;
                    margin-bottom: 2px;
                    img{
                      margin-left: 4px;
                      width: 16px;
                      height: 16px;
                    }
                  }
                }
                .LeftRcentre{
                  font-size: 14px;
                  width: 228px;
                }
                .LeftRbottom{
                  font-size: 12px;
                  width: 228px;
                  line-height: 20px;
                }
              }
            }
          }
        }
        .titleAdv{
          // display: none;
          width: 315px;
          height: 64px;
          font-size: 22px;
          margin: 40px auto 0;
        }
        .peopleDetail{
          // display: none;
          width: 343px;
          height: 760px;
          margin-top: 20px;
          padding: 29px 31px 39px 32px;
          flex-wrap: wrap;
          background: url('../../assets/img/nasdexImg/h5ninejuxingThree.png') no-repeat;
          background-size: cover;
          margin: 0 auto;
          .peopleDetailPage{
            height: 190px;
            width: 280px;
            margin: 0 auto;
            .detaileTop{
              font-size: 16px;
              .AF{
                width: 16px;
                height: 16px;
                margin-bottom: 1px;
                // text-align: center;
                img{
                  margin-left: 2px;
                  width: 16px;
                  height: 16px;
                }
              }
              .TT{
                width: 16px;
                height: 16px;
                margin-bottom: 1px;
                // text-align: center;
                img{
                  margin-left: 2px;
                  width: 16px;
                  height: 16px;
                }
              }
              .TTA{
                width: 16px;
                height: 16px;
                margin-bottom: 1px;
                // text-align: center;
                img{
                  margin-left: 2px;
                  width: 16px;
                  height: 16px;
                }
              }
              .RW{
                width: 16px;
                height: 16px;
                margin-bottom: 1px;
                // text-align: center;
                img{
                  margin-left: 2px;
                  width: 16px;
                  height: 16px;
                }
              }
              .RWA{
                width: 16px;
                height: 16px;
                margin-bottom: 1px;
                // text-align: center;
                img{
                  margin-left: 2px;
                  width: 16px;
                  height: 16px;
                }
              }
              .AFA{
                width: 16px;
                height: 16px;
                margin-bottom: 1px;
                // text-align: center;
                img{
                  margin-left: 2px;
                  width: 16px;
                  height: 16px;
                }
              }
            }
            .detaileCenter{
              font-size: 14px;
            }
            .detaileBottom{
              font-size: 12px;
              width: 290px;
              line-height: 15px;
            }
          }
          img{
            width: 60px;
            height: 60px;
            margin-left: 105px;
          }
        }
        .titlePar{
          // display: none;
          width: 315px;
          height: 64px;
          font-size: 22px;
          margin: 40px auto 0;
        }
        .ParTitle{
          // display: none;
          background: url('../../assets/img/nasdexImg/h5juxingbeifen10@2x.png') no-repeat;
          background-size: cover;
          width: 343px;
          height: 290px;
          padding: 30px 18px 40px 19px;
          margin: 0 auto;
          img{
            width: 146px;
            height: 40px;
          }
        }
        .titleBusi{
          // display: none;
          width: 315px;
          height: 64px;
          font-size: 22px;
          margin: 40px auto 0;
        }
        .BusiPage{  
          // display: none;
          width: 345px;
          height: 2108px;
          flex-wrap: wrap;
          margin: 0 auto;
          .busiLine{
            display: none;
          }
          .BusiAll{
            width: 345px;
            // height: 582px;
            // padding: 39px 74px 28px 73px;
            
            .BusiRound{
              display: none;
            }
            .BusiTop{
              font-size: 20px;
              width: 100px;
              margin: 10px 0 0 100px;
              // margin: 10px 0 0 20px;
            }
            .BusiCenter{
              margin-left: 40px;
              .BusiCenterOne{
                font-size: 16px;
                margin-left: 13px;
              }
            }
            .BusiBottom{
              margin-left: 40px;
              .BusiBottomOne{
                font-size: 16px;
                margin-top: 0px;
              }
              .BusiBottomAll{
                p{
                  font-size: 12px;
                }
              }
            }
          }
          .BusiPageOne{
            width: 345px;
            height: 503px;
            background: url('../../assets/img/nasdexImg/roadmapOne.png') no-repeat;
            background-size: cover;
          }
          .BusiPageTwo{
            width: 345px;
            height: 487px;
            background: url('../../assets/img/nasdexImg/roadmapTwo.png') no-repeat;
            background-size: cover;
          }
          .BusiPageThree{ 
            width: 345px;
            height: 582px;
            background: url('../../assets/img/nasdexImg/roadmapThree.png') no-repeat;
            background-size: cover;
            .BusiTop{
              display: none;
            }
            .BusiCenter{
              display: none;
            }
            .BusiBottom{
              display: none;
            }
          }
          .BusiPageFour{
            width: 345px;
            height: 454px;
            background: url('../../assets/img/nasdexImg/roadmapFour.png') no-repeat;
            background-size: cover;
          }
        }
      }
      .footer{
        // display: none;
        width: 375px;
        height: 211px;
        // margin: 0 0 0 0;
        margin: 30px auto 0;
        padding: 63px 47px 0;
        position: relative;
        z-index: 300;
        background-position-y: 55px;
        background: url('../../assets/img/nasdexImg/h5Bgfooter@2x.png') no-repeat;
        background-size: cover;
        // background: #000;
        // position: absolute;
        // bottom: -200px;

        .footerTop{
          // display: none;
          height: 24px;
          justify-content: center;
        }
        .footerTopTwo{
          margin-top: 0;
        }
        .footerEnter{
          // display: none;
          width: 300px;
          margin-top: 0;
          padding: 0 20px 0;
        }
        .footerBottom{
         text-align: center;
         margin-top: 0;
        }
      } 
    }
  }
}
</style>