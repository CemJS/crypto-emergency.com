import { Cemjsx } from "cemjs-all"
import back from '@svg/icon/prev.svg'
import next from '@svg/icon/next.svg'

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
            {
              this.Static.record.social.length ?
                <div class="startap_socials">
                  {
                    this.Static.record.social.map((item, index) => {
                      return (
                        <a href={item.url} onclick={this.Fn.link} class="startap_socials_item">
                          <img src={`/assets/icons/socials/${item.channel}.svg`} alt={item.channel} />
                        </a>
                      )
                    })
                  }
                </div> : null
            }
          </div>
        </section>

        {
          this.Static.record.tokenomica.length ?
            <section class="startap_tokenomica">
              <h2 class="general_title">Токеномика</h2>
              <div class="tokenomica_board">
                <div class="tokenomica_pie">
                  <svg width="230" height="140">
                    <rect x="5" y="5" width="220" height="130"
                      fill="skyblue" stroke="steelblue" stroke-width="5"
                    />
                  </svg>
                </div>
                <div class="tokenomica_desc">
                  {
                    this.Static.record.tokenomica.map((item, index) => {
                      return (
                        <div class="tokenomica_desc_item">
                          <div class={["tokenomica_desc_item_line", `tokenomica_desc_item_line-${index}`]}>
                            <span
                              class={["tokenomica_desc_item_value", `tokenomica_desc_item_value-${index}`]}
                            >
                              {item.value}%
                            </span>
                          </div>
                          <span class="tokenomica_desc_item_name">{item.name}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section> : null
        }

        {
          this.Static.record.team.length ?
            <section class="startap_team">
              <h2 class="general_title">Команда</h2>
              <div class="startap_team_wrap">
                <button class="icoItem_btn icoItem_btn_prev">
                  <img src={back} />
                </button>
                <button class="icoItem_btn icoItem_btn_next">
                  <img src={next} />
                </button>
                <div class="startap_team_carousel">
                  {
                    this.Static.record.team.map((item, index) => {
                      return (
                        <div class="startap_team_item">
                          <div class="startap_team_item_img">
                            {/* <img src="" alt="" /> */}
                          </div>
                          <span class="startap_team_item_name">{item.name}</span>
                          <span class="startap_team_item_pos">{item.position}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section> : null
        }

        {
          this.Static.record.media.length ?
            <section class="icoItem_gallery pt_25">
              <h2 class="often_title">Галерея</h2>
              <div class="icoItem_gallery_wrap pt_20">
                <button class="icoItem_btn icoItem_btn_prev">
                  <img src={back} />
                </button>
                <button class="icoItem_btn icoItem_btn_next">
                  <img src={next} />
                </button>
                <div class="icoItem_carousel">
                  {
                    this.Static.record.media.map((item, index) => {
                      return (
                        <div
                          class="icoItem_carousel_item"
                          onclick={() => {
                            this.Fn.initOne({
                              name: "modalGallery", ifOpen: (front) => {
                                setTimeout(() => {
                                  front.clearData()
                                }, 500);
                              }
                            })
                            this.cross({ records: this.Static.record.media })
                            this.init()
                          }}
                        >
                          <img src={`/assets/upload/worldPress/${item.name}`} alt="Gallery photo" />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section> : null
        }
      </div>
    </div>

  )
}