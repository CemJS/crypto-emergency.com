import { Cemjsx } from "cemjs-all"
import photo from "@svg/personalPosts/photo.svg"
import video from "@svg/personalPosts/video.svg"
import audio from "@svg/personalPosts/audio.svg"

export default function () {
    return (
        <div class="page">
            <div class="post-create">
                <div class="post-create__container">
                    <h2>Создать/редактировать пост</h2>
                    <form class="post-create__form">
                        <div class="post-create__lang">
                            <label>Ваш язык:</label>
                            <span
                                onclick={() => {
                                    this.Fn.initOne({
                                        name: "changeLanguage"
                                    })
                                }}
                            >{this.Static.data.lang}</span>
                        </div>
                        <div class="post-create__friends">
                            <input type="checkbox" id="friends"
                                onclick={(e) => {
                                    this.Static.data.friends = e.target.checked
                                    this.init()
                                }}
                            />
                            <label for="friends">Только для друзей</label>
                        </div>
                        <div class="post-create__text" contenteditable="plaintext-only" />

                        <div class="post-create__media">
                            <div class="post-create__media_item">
                                <img src={photo} alt="" />
                                <input type="file" accept=".jpg, .jpeg, .png, .gif" multiple="true" />
                            </div>
                            <div class="post-create__media_item">
                                <img src={video} alt="" />
                                <input type="file" accept=".mp4, .avi, .mov, .mkv, .avi, .flv" multiple="true" />
                            </div>
                            <div class="post-create__media_item">
                                <img src={audio} alt="" />
                                <input type="file" accept=".mp3, .wav, .aiff, .aac, .ogg, .wma" multiple="true" />
                            </div>
                        </div>
                        <div class="post-create__button">
                            <div class={["button", "button_gradient", "button_auth",
                                !this.Static.isValid ? "button_inactive" : null
                            ]}>
                                <span>
                                    Предпросмотр
                                </span>
                            </div>
                            <div class={["button", "button_gradient", "button_auth",
                                !this.Static.isValid ? "button_inactive" : null
                            ]}>
                                <span>
                                    Создать
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}