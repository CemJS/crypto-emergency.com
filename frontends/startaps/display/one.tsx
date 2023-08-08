import { Cemjsx } from "cemjs-all"
import back from '@svg/icon/prev.svg'

export default function () {
  console.log('=55ea43=', this.Static.record)
  return (
    <div class="startaps_show effect_lines">
      <div class="wrapper">
        <div class="back">
          <div class="back_arrow">
            <img
              src={back}
              onclick={() => {
                delete this.Static.record
                this.init()
              }}
            >
            </img>
          </div>
          <div
            class="tool"
            onclick={() => {
              this.Fn.initOne({
                name: "modalTool", ifOpen: (front) => {
                  setTimeout(() => {
                    front.clearData()
                  }, 500);
                }
              })
            }}
          >
            <span class="tool_item"></span>
            <span class="tool_item"></span>
            <span class="tool_item"></span>
          </div>
        </div>

        <h2 class="general_title">{this.Static.record.title}</h2>

        <section class="startap_info">
          <div class="startap_info_item startap_info_item_media">
            <div class="startap_info_cover">
              {
                this.Static.record.cover ?
                  <img src={`/assets/upload/worldPress/${this.Static.record.cover}`}></img>
                  :
                  this.Static.record.coverVideo ?
                    <iframe class="social-video" id="startupVideoPlayer" width="100%" height="400px" src={this.Static.record.coverVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    :
                    null
              }
            </div>
            {
              this.Static.record.social.length ?
                <div class="startap_social">
                  {
                    this.Static.record.social.map(item => {
                      return (
                        <a href={item.url} class="startap_social_icon">
                          {/* <img src={`/assets/upload/worldPress/${item.channel}`}></img> */}
                        </a>
                      )
                    })
                  }
                </div> : null
            }
            <div class="startap_box">
              <p class="startap_text">
                {this.Static.record.descriptionShort}
              </p>
            </div>
            <div class="startap_btns">
              <a
                onclick={this.Fn.link}
                href={this.Static.record.whitePaperLink}
                class={["btn btn_gradient", this.Static.record.whitePaperLink ? null : "button_inactive"]}
              >
                <span>WhitePaper</span>
              </a>
              <a href={this.Static.record.siteLink} onclick={this.Fn.link} class="btn btn_gradient">
                <span>WebSite</span>
              </a>
            </div>
          </div>
          <div class="startap_info_item startap_info_item_desc">

            <p class="startap_text">{this.Static.record.description}</p>
            <div class="startap_socials">
              {
                this.Static.record.social.map((item, index) => {
                  return (
                    <a >{item.name}</a>
                  )
                })
              }
            </div>
          </div>

        </section>

        {/* <h2 class="general_title">Токеномика</h2>
        <section class="startap_tokenomica ">
          <div class="tokenomica_pie">
            <svg class="chart" width="250" height="250" viewBox="0 0 40 40">
              <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
              <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
              <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
            </svg>
          </div>
          <div class="tokenomica_desc">
            {
              this.Static.record.tokenomica.map((item, index) => {
                return (
                  <div class="tokenomica_desc_item">
                    <div class={["tokenomica_desc_item_line", `tokenomica_desc_item_line-${index}`]}></div>
                    <div class="tokenomica_desc_item_text">{item.name}</div>
                  </div>
                )
              })
            }
          </div>
        </section> */}

        {/* <section class="startap_gallery">

        </section> */}

      </div>
    </div>

  )
}