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


const socialNetworks = [
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
        logo: youtube,
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


export default function () {
    return (
        <main class="socialNetwork page">
            <div class="wrapper">
                <div class="socialNetwork_main">
                    <div class="title">
                        <h1>Социальные сети</h1>
                    </div>
                    <div class="socialNetwork-list">
                        {
                            socialNetworks.map((item, index) => {
                                return (
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
            </div>
        </main>
    )
}