import { Cemjsx } from "cemjs-all"
import back from '@svg/icon/prev.svg'
import next from '@svg/icon/next.svg'

export default function () {
  console.log('=55ea43=', this.Static.record)
  return (
    <div class="ico_show effect_lines effect_figure">
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

        <section class="icoItem_header">
          <div class="icoItem_header_icon">
            <img src={`/assets/upload/worldPress/${this.Static.record.icon}`} />
          </div>
          <div class="icoItem_header_desc">
            <h2 class="main_title">{this.Static.record.title}</h2>
            <p>{this.Static.record.description}</p>
          </div>
        </section>

        <section class="icoItem">
          <div class="icoItem_info">
            {
              this.Static.record.cover ? (
                <div class="icoItem_info_cover">
                  <img src={`/assets/upload/worldPress/${this.Static.record.cover}`} />
                </div>
              ) : this.Static.record.coverVideo ? (
                <iframe
                  id="startupVideoPlayer"
                  width="100%"
                  height="585px"
                  src={this.Static.record.coverVideo}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : null
            }

            <div class="icoItem_info_desc">
              <div class="icoItem_info_desc_item">
                <div class="icoItem_category">
                  <span class=" text_important">
                    {this.Static.record.category}
                  </span>
                </div>
                <a class="btn btn_gradient" href={this.Static.record.siteLink} onclick={this.Fn.link} >
                  <span>Website</span>
                </a>
                <a class="btn btn_gradient" href={this.Static.record.whitePaperLink} onclick={this.Fn.link}>
                  <span>WhitePaper</span>
                </a>

              </div>
              <div class="icoItem_info_desc_item">
                <h5 class="icoItem_info_desc_title">Token sale:
                  {
                    this.Static.record.dateIsKnow ?
                      <span class="ml_10">TBA</span> :
                      <span class="ml_10">{this.Services.functions.dateFormat(this.Static.record.startDate, "point")} - {this.Services.functions.dateFormat(this.Static.record.endDate, "point")}</span>
                  }
                </h5>
                <ul class="token_list">
                  <li>Name: <span class="ttu bold ml_5">{this.Static.record.name}</span></li>
                  {
                    this.Static.record?.type ?
                      <li>Token type: <span class="ttu bold ml_5">{this.Static.record.type}</span></li> : null
                  }
                  <li>
                    {`${this.Static.record.category} Token price:`}
                    <span class="ttu bold ml_5">
                      {`1 ${this.Static.record.name} = ${this.Static.record.price} USD`}
                    </span>
                  </li>
                  <li>
                    Tokens for sale:
                    <span class="ttu bold ml_5">
                      {`${this.Static.record.targetSell.toLocaleString()} token`}
                    </span>
                  </li>

                  <li>
                    Total tokens:
                    <span class="ttu bold ml_5">
                      {`${this.Static.record.totalSupply.toLocaleString()} token`}
                    </span>
                  </li>
                  <li>
                    Available for Token Sale:
                    <span class="ttu bold ml_5">
                      {`${((this.Static.record.forSell / this.Static.record.totalSupply) * 100).toFixed(1)}%`}
                    </span>
                  </li>
                  <li>Accepts:<span class="ttu bold ml_5">{this.Static.record.sellType}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>


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