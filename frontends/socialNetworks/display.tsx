import { Cemjsx } from "cemjs-all"


import discord from '@svg/social_networks/discord.svg'
import facebook from '@svg/social_networks/facebook.svg'
import github from '@svg/social_networks/github.svg'
import instagram from '@svg/social_networks/instagram.svg'
import linkedin from '@svg/social_networks/linkedin.svg'
import telegram from '@svg/social_networks/telegram.svg'
import tiktok from '@svg/social_networks/tiktok.svg'
import twitter from '@svg/social_networks/twitter.svg'
import vk from '@svg/social_networks/vk.svg'
import youtube from '@svg/social_networks/youtube.svg'
import logo_apple from '@images/social_networks/logo_apple.png'
import logo_android from '@images/social_networks/logo_android.png'
import cem_assist from '@images/social_networks/cem_assist.png'
import wallet_icon from '@images/social_networks/wallet_icon.png'
import crypto_emergency from '@images/social_networks/crypto_emergency.svg'



const socialNetworks=[
  {
    logo: instagram,
    regionRU: 'RU',
    regionENG: 'EN',
    loginRU: '@CryptoEmergencyRussia',
    loginENG: '@CryptoEmergency',
    urlRU: 'https://www.instagram.com/cryptoemergencyrussia/?hl=ru',
    urlENG: 'https://www.instagram.com/cryptoemergency/?hl=ru' 
  },

  // {
  //   logo: facebook,
  //   regionRU: 'RU',
  //   regionENG: 'EN',
  //   loginRU: '@RUcryproemergency222',
  //   loginENG: '@ENGcryproemergency222',
  //   urlRU: '',
  //   urlENG: '' 
  // },
  {
    logo: tiktok,
    regionRU: 'RU',
    regionENG: 'EN',
    loginRU: '@cryptoemergencyrussia',
    loginENG: '@cryptoemergency',
    urlRU: 'https://www.tiktok.com/@cryptoemergencyrussia',
    urlENG: 'https://www.tiktok.com/@cryptoemergency' 
  },
  {
    logo: youtube ,
    regionRU: 'RU',
    regionENG: 'EN',
    loginRU: '@СryptoEmergency',
    loginENG: '@CryptoEmergency4865',
    urlRU: 'https://www.youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg/',
    urlENG: 'https://www.youtube.com/channel/UCdDWOveIuvqkyusDK1gv4ig/' 
  },
  {
    logo: vk,
    regionRU: 'RU',
    regionENG: '',
    loginRU: 'CryptoEmergency',
    loginENG: '',
    urlRU: 'https://vk.com/cryptoemergency',
    urlENG: ''
  },
  {
    logo: linkedin,
    regionENG: 'EN',
    loginENG: 'CryproEmergency',
    urlENG: 'https://www.linkedin.com/company/86302977'
  },
  {
    logo: twitter,
    regionRU: '',
    regionENG: 'EN',
    loginRU: '',
    loginENG: '@cryptoemergency',
    urlRU: 'https://twitter.com/cryptoemergency',
    urlENG: ''  
  },
  {
    logo: discord,
    regionRU: 'RU',
    loginRU: 'CryproEmergency',
    urlRU: 'https://discord.com/invite/Qdm7W8DjYc',
    urlENG: ''
  },

  {
    logo: github,
    loginENG: '@CryptoEmergency',
    regionENG: 'EN',
    urlENG: 'https://github.com/CryptoEmergency'  
  },
]
const apps=[
  {
    app: 'CEM Assistant',
    logo: cem_assist,
    appstore: 'https://apps.apple.com/ru/app/cem-assistant/id6448629326',
    playmarket: 'https://play.google.com/store/apps/details?id=com.cemassistant&hl=ru',
  },
  {
    app: 'CEM Wallet',
    logo: wallet_icon,
    appstore: 'https://apps.apple.com/ru/app/cem-wallet/id1637300554',
    playmarket: 'https://play.google.com/store/apps/details?id=com.cemwallet&hl=en&gl=US',
  },
  {
    app: 'Crypto Emergency',
    logo: crypto_emergency,
    appstore: 'https://apps.apple.com/es/app/crypto-emergency/id1635628021',
    playmarket: 'https://play.google.com/store/apps/details?id=com.cryptoemergency&hl=en&gl=US',
  },
]

export const display = function () {
    return (

      <main class="socialNetwork page">
          <div class="wrapper">
            <div class="socialNetwork_main">
              <div class="title">
                <h1>Социальные сети</h1>
              </div>
              <div class="socialNetwork-list">
                {
                  socialNetworks.map((item, index)=>{
                    return(
                      <div class="socialNetwork-list_item">
                        <div class="img">
                          <img src={item.logo} alt="img" />
                        </div>

                        <div class="content">
                          <a target="_blank" href={item.urlRU} class="ruLink">
                          <span class="spanRegionRU">{item.regionRU}</span>
                          {item.loginRU}
                          </a>
                          <a target="_blank" href={item.urlENG} class="engLink">
                          <span class="spanRegionENG">{item.regionENG}</span>
                          {item.loginENG} 
                          </a>
                        </div>
                        
                      </div>
                    )
                  })
                }
                
                
              </div>
            </div>
            <div class="apps-main">
              <div class="title">
               <h1>Наши проекты</h1>
              </div>
              <div class="apps-main_list">
              {
                  apps.map((item, index)=>{
                    return(
                      <div class="apps-main_list_item">
                  <div class="img">
                    <img src={item.logo} alt="img" />
                    <p>{item.app}</p>
                  </div>
                  <div class="content">
                    <a target="_blank" href={item.appstore} class="appstore">
                      <img src={logo_apple} alt="" />
                      AppStore
                    </a>
                    
                    <a target="_blank" href={item.playmarket} class="playmarket">
                      <img src={logo_android} alt="" />
                      PlayMarket
                    </a>
                  </div>
                </div>

                  )
                })
              }
                <a class="apps-main_list_item" target="_blank" href='https://cemscan.com/'>
                  <div class="img">
                    <img src={crypto_emergency} alt="img" />
                    <p>BlockChain CemScan</p>
                  </div>
                </a>
              </div>
              </div>
          </div>
      </main>
    )
}