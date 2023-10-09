import { Cemjsx } from "cemjs-all"
import discord from '@images/social_networks/discord.png'
import facebook from '@svg/social_networks/facebook.svg'
import github from '@images/social_networks/github.png'
import instagram from '@images/social_networks/instagram.png'
import linkedin from '@images/social_networks/linkedin.png'
import telegram from '@svg/social_networks/telegram.svg'
import tiktok from '@images/social_networks/tiktok.png'
import twitter from '@images/social_networks/twitter.png'
import vk from '@images/social_networks/vk.png'
import youtube from '@images/social_networks/youtube.png'


const socialNetworks = [
    {
        logo: instagram,
        name: 'Instagram',
        url: 'https://www.instagram.com/cryptoemergencyrussia/?hl=ru',
        urlENG: 'https://www.instagram.com/cryptoemergency/?hl=ru'
    },
    {
        logo: tiktok,
        name: 'Tiktok',
        url: 'https://www.tiktok.com/@cryptoemergencyrussia',
        urlENG: 'https://www.tiktok.com/@cryptoemergency'
    },
    {
        logo: youtube,
        name: 'Youtube',
        url: 'https://www.youtube.com/channel/UCb9Fx-fNikzs-OZwnTXepLg/',
        urlENG: 'https://www.youtube.com/channel/UCdDWOveIuvqkyusDK1gv4ig/'
    },
    {
        logo: vk,
        name: 'Vkontakte',
        url: 'https://vk.com/cryptoemergency'
    },
    {
        logo: linkedin,
        name: 'Linkedin',
        url: 'https://www.linkedin.com/company/86302977'
    },
    {
        logo: twitter,
        name: 'Twitter',
        url: 'https://twitter.com/cryptoemergency',
    },
    {
        logo: discord,
        name: 'Discord',
        url: 'https://discord.com/invite/Qdm7W8DjYc'
    },
    {
        logo: github,
        name: 'Github',
        url: 'https://github.com/CryptoEmergency'
    },
]


export default function () {
    return (
        <div class="socials">

            <h2 class="about_subtitle">Социальные сети</h2>

            <ul class="socials_list">
                {
                    socialNetworks.map(item => {
                        return (
                            <li>
                                <a
                                    href={item.url}
                                    class={["socials_link", `socials_link_${item.name.toLocaleLowerCase()}`]}
                                    style={`background-image: url(${item.logo});`}
                                    aria-label={item.name}
                                    onclick={this.Fn.link}
                                >
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div class="socials_text">
                <p>Присоединяйтесь к нашей уникальной социальной сети CryptoEmergency и получите доступ к самой актуальной информации о криптовалютах и блокчейне. Скачайте наше приложение и станьте частью нашей экосистемы. У нас вы сможете общаться с единомышленниками, делиться своими идеями и получать ценные советы от опытных трейдеров и инвесторов. Присоединяйтесь к нам прямо сейчас и не упустите возможность быть в курсе последних новостей и трендов в мире криптовалют. Скачайте приложение CryptoEmergency и станьте частью нашей успешной и инновационной экосистемы уже сегодня!</p>
            </div>
        </div>
    )
}