import { Cemjsx } from "cemjs-all"
import avatarDefault from "@images/lenta/avatar_default.png"
import frameDefault from "@svg/lenta/default.svg"
import background from "@images/rules/background.jpg"
import ru from "@svg/flags/ru.svg"
import UserCategory from "./UserCategory"

const page = function () {
  return (
    <div class="test">dawfefsefsefsefsefsef</div>
  )
}

export default function () {
  return (
    <div class="personal">
      <div class="personal__container">
        <div class="personal-preview">
          <div class="personal-preview__header">
            <div class="personal-preview__avatar">
              <a href="">
                <div class="avatar">
                  <img class="avatar__photo" src={avatarDefault} />
                  <img class="avatar__frame" src={frameDefault} />
                  <div class="avatar__settings">
                    <img src="" />
                  </div>
                </div>
              </a>
            </div>
            <img class="personal-preview__background" src={background} />
          </div>
          <div class="personal-preview__info">
            <div class="personal-preview__main">
              <div class="personal-preview__flag">
                <img src={ru} />
              </div>
              <span class="personal-preview__name">TestUser</span>
              <span class="personal-preview__rating">17.54</span>
              <div class="personal-preview__status" contenteditable="true">Статус</div>
            </div>
            <div class="personal-preview__level">
              <div class="personal-preview__current" />
            </div>
          </div>
        </div>
        <div class="personal-categories">
          <div class="personal-categories__item">
            <div
              class={[
                "personal-categories__icon",
                this.Static.page == "lenta"
                  ?
                  "personal-categories__icon_lenta"
                  :
                  "personal-categories__icon_lenta_inactive"
              ]}
              onclick={() => {
                this.Static.page = "lenta"
              }}
            />
            <div class="personal-categories__frame">
              <div class="personal-categories__background">
                <span>3</span>
              </div>
            </div>
          </div>
          <div class="personal-categories__item">
            <div
              class={[
                "personal-categories__icon",
                this.Static.page == "about"
                  ?
                  "personal-categories__icon_about"
                  :
                  "personal-categories__icon_about_inactive"
              ]}
              onclick={() => {
                this.Static.page = "about"
              }}
            />
          </div>
          <div class="personal-categories__item">
            <div
              class={[
                "personal-categories__icon",
                this.Static.page == "questions"
                  ?
                  "personal-categories__icon_questions"
                  :
                  "personal-categories__icon_questions_inactive"
              ]}
              onclick={() => {
                this.Static.page = "questions"
              }}
            />
            <div class="personal-categories__frame">
              <div class="personal-categories__background">
                <span>5</span>
              </div>
            </div>
          </div>
          <div class="personal-categories__item">
            <div
              class={[
                "personal-categories__icon",
                this.Static.page == "answers"
                  ?
                  "personal-categories__icon_answers"
                  :
                  "personal-categories__icon_answers_inactive"
              ]}
              onclick={() => {
                this.Static.page = "answers"
              }}
            />
            <div class="personal-categories__frame">
              <div class="personal-categories__background">
                <span>3</span>
              </div>
            </div>
          </div>
          <div class="personal-categories__item">
            <div
              class={[
                "personal-categories__icon",
                this.Static.page == "followers"
                  ?
                  "personal-categories__icon_followers"
                  :
                  "personal-categories__icon_followers_inactive"
              ]}
              onclick={() => {
                this.Static.page = "followers"
              }}
            />
            <div class="personal-categories__frame">
              <div class="personal-categories__background">
                <span>12</span>
              </div>
            </div>
          </div>
          <div class="personal-categories__item">
            <div
              class={[
                "personal-categories__icon",
                this.Static.page == "friends"
                  ?
                  "personal-categories__icon_friends"
                  :
                  "personal-categories__icon_friends_inactive"
              ]}
              onclick={() => {
                this.Static.page = "friends"
              }}
            />
            <div class="personal-categories__frame">
              <div class="personal-categories__background">
                <span>15</span>
              </div>
            </div>
          </div>
          <div class="personal-categories__item">
            <div
              class={[
                "personal-categories__icon",
                this.Static.page == "awards"
                  ?
                  "personal-categories__icon_awards"
                  :
                  "personal-categories__icon_awards_inactive"
              ]}
              onclick={() => {
                this.Static.page = "awards"
              }}
            />
          </div>
          <div class="personal-categories__item">
            <div
              class={[
                "personal-categories__icon",
                this.Static.page == "social"
                  ?
                  "personal-categories__icon_social"
                  :
                  "personal-categories__icon_social_inactive"
              ]}
              onclick={() => {
                this.Static.page = "social"
              }}
            />
          </div>
          <div class="personal-categories__item">
            <div
              class={[
                "personal-categories__icon",
                this.Static.page == "gallery"
                  ?
                  "personal-categories__icon_gallery"
                  :
                  "personal-categories__icon_gallery_inactive"
              ]}
              onclick={() => {
                this.Static.page = "gallery"
              }}
            />
          </div>
        </div>
        <div class="personal-block">
          <UserCategory />
        </div>
      </div>
    </div>
  )
}