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
    region: 'RU',
    url: '' 
  },
  {
    logo: instagram,
    region: 'ENG',
    url: '' 
  },
  {
    logo: telegram,
    region: 'RU',
    url: '' 
  },
  {
    logo: telegram,
    region: 'ENG',
    url: '' 
  },
  {
    logo: tiktok,
    region: 'RU',
    url: '' 
  },
  {
    logo: tiktok,
    region: 'ENG' ,
    url: '' 
  },
  {
    logo: youtube ,
    region: 'RU',
    url: '' 
  },
  {
    logo: youtube,
    region: 'ENG' ,
    url: '' 
  },
  {
    logo: vk,
    region: 'RU',
    url: '' 
  },
  {
    logo: linkedin,
    region: 'ENG',
    url: 'https://www.linkedin.com/company/86302977' 
  },
  {
    logo: twitter,
    region: 'ENG',
    url: 'https://twitter.com/cryptoemergency'  
  },
  {
    logo: discord,
    region: 'ENG',
    url: '' 
  },
  {
    logo: facebook,
    region: 'ENG',
    url: '' 
  },
  {
    logo: github,
    region: 'ENG',
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
                      <a target="_blank" href={item.url} class="socialNetwork-list_item">
                        <img src={item.logo} alt="" />
                        <span>{item.region}</span>
                      </a>
                    )
                  })
                }
                
              </div>
            </div>
          </div>
      </main>
    )
}