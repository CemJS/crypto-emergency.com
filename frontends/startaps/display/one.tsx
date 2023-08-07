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
          <div class="tool">
            <span class="tool_item"></span>
            <span class="tool_item"></span>
            <span class="tool_item"></span>
          </div>
        </div>

        <div class="startap_info">
          <div class="startap_info_item">
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
            <div class="startap_info_desc">
              {this.Static.record.descriptionShort}
            </div>
            <div class="startap_btns">
              <a href={this.Static.record.whitePaperLink} onclick={this.Fn.link} class="btn btn_default">
                <span>WhitePaper</span>
              </a>
              <a href={this.Static.record.siteLink} onclick={this.Fn.link} class="btn btn_default">
                <span>WebSite</span>
              </a>
            </div>
          </div>
          <div class="startap_info_item"></div>

        </div>
      </div>
    </div>

  )
}