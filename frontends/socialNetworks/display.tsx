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
// import tech from '@svg/social_networks/tech.svg'


const socialNetworks=[
  {
    logo: instagram,
    regionRU: 'RU',
    regionENG: 'ENG',
    loginRU: '@RUcryproemergency',
    loginENG: '@ENGcryproemergency',
    urlRU: '',
    urlENG: '' 
  },

  {
    logo: facebook,
    regionRU: 'RU',
    regionENG: 'ENG',
    loginRU: '@RUcryproemergency',
    loginENG: '@ENGcryproemergency',
    urlRU: '',
    urlENG: '' 
  },
  {
    logo: tiktok,
    regionRU: 'RU',
    regionENG: 'ENG',
    loginRU: '@RUcryproemergency',
    loginENG: '@ENGcryproemergency',
    urlRU: '',
    urlENG: '' 
  },
  {
    logo: youtube ,
    regionRU: 'RU',
    regionENG: 'ENG',
    loginRU: '@RUcryproemergency',
    loginENG: '@ENGcryproemergency',
    urlRU: '',
    urlENG: '' 
  },
  {
    logo: vk,
    regionRU: 'RU',
    regionENG: 'ENG',
    loginRU: '@RUcryproemergency',
    loginENG: '@ENGcryproemergency',
    urlRU: '',
    urlENG: ''
  },
  {
    logo: linkedin,
    regionENG: 'ENG',
    loginENG: '@ENGcryproemergency',
    urlENG: 'https://www.linkedin.com/company/86302977'
  },
  {
    logo: twitter,
    regionRU: 'RU',
    regionENG: 'ENG',
    loginRU: '@RUcryproemergency',
    loginENG: '@ENGcryproemergency',
    urlRU: 'https://twitter.com/cryptoemergency',
    urlENG: ''  
  },
  {
    logo: discord,
    regionRU: 'RU',

    loginRU: '@RUcryproemergency',
    urlRU: 'https://github.com/CryptoEmergency',
    urlENG: ''
  },
  {
    logo: facebook,
    regionRU: 'RU',
    regionENG: 'ENG',

    loginRU: '@RUcryproemergency',
    loginENG: '@ENGcryproemergency',
    urlRU: 'https://github.com/CryptoEmergency',
    urlENG: 'https://github.com/CryptoEmergency'
  },
  {
    logo: github,
    loginENG: '@ENGcryproemergency',
    regionENG: 'ENG',
    url: 'https://github.com/CryptoEmergency'  
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
                          <a target="_blank" href={item.urlENG} class="ruLink">
                          <span class="spanRegionRU">{item.regionRU}</span>
                          {item.loginRU}
                            
                          </a>

                          
                          <a target="_blank" href={item.urlRU} class="engLink">
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
          </div>
      </main>
    )
}