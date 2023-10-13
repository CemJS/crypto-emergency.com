import { Cemjsx } from "cemjs-all"
import btc from '@svg/coins/btc.svg'
import trx from '@svg/coins/trx.svg'
import ada from '@svg/coins/ada.svg'
import bnb from '@svg/coins/bnb.svg'
import doge from '@svg/coins/doge.svg'
import eth from '@svg/coins/eth.svg'
import zrx from '@svg/coins/zrx.svg'
import usdt from '@svg/coins/usdt.svg'
import usd from '@svg/coins/usd.svg'
import mana from '@svg/coins/mana.svg'
import star from '@svg/icon/star.svg'
import prev from '@svg/icon/prev.svg'
import startPrev from '@svg/icon/startPrev.svg'
import next from '@svg/icon/next.svg'
import endNext from '@svg/icon/endNext.svg'
import filter from '@svg/icon/filter.svg'
import lineB from '@svg/lines/linesB.svg'


export default function () {
    // console.log('=c818c5=',this.Static.records)
    return (
        <section class="listExchange effect_lines pt_80">
            <div class="wrapper">
                <h1 class="general_title">Список обменных пунктов</h1>

                <div class="listExchange_table_wrapper">
                    <table class="listExchange_table table">
                        <thead class="listExchange_table_head">
                            <tr class="listExchange_table_row">
                                <th></th>
                                <th class="listExchange_table_index">#</th>
                                <th class="listExchange_table_name">Название</th>
                                <th class="listExchange_table_coins">Коины</th>
                                <th class="listExchange_table_filter">
                                    <img
                                        src={filter}
                                        onclick={() => {
                                            this.Fn.initOne({
                                                name: "modalFilterExchange", ifOpen: (front) => {
                                                    setTimeout(() => {
                                                        front.clearData()
                                                    }, 500);
                                                }
                                            })
                                        }}
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody class="table_body listExchange_table_body">
                            {
                  this.Static.records.map((item, index) => {
                    return (
                      <tr class="table_row listExchange_table_row">
                        <td class="listExchange_favourites">
                          <img src={star} alt="Избранные обменники" class="listExchange_icon" />
                        </td>
                        <td class="listExchange_table_index">{index + 1}</td>
                        <td class="listExchange_table_name">{item.name}</td>
                        <td class="listExchange_table_coins">
                          {/* <div class="coins_wrap">
                            {
                              item.list_coins.map((el, index) => {
                                return (
                                  <img src={`/assets/icons/coins/${el.icon}.svg`} class="coins_wrap_item"></img>
                                )
                              })
                            }
                          </div> */}
                        </td>
                        <td class="listExchange_table_btn">
                          <a class="btn btn_gradient" href={item.url} onclick={this.Fn.link}>
                            <span>Обменять</span>
                          </a>
                        </td>
                      </tr>
                    )
                  })
                }

                       {/* {
                  this.Static.records.map((item, index) => {
                    return (
                      <tr class="table_row listExchange_table_row">
                        <td class="listExchange_favourites">
                          <img src={star} alt="Избранные обменники" class="listExchange_icon" />
                        </td>
                        <td class="listExchange_table_index">{index + 1}</td>
                        <td class="listExchange_table_name">{item.name}</td>
                        <td class="listExchange_table_coins">
                          <div class="coins_wrap">
                            {
                              item.list_coins.map((el, index) => {
                                return (
                                  <img src={`/assets/icons/coins/${el.icon}.svg`} class="coins_wrap_item"></img>
                                )
                              })
                            }
                          </div>
                        </td>
                        <td class="listExchange_table_btn">
                          <a class="btn btn_gradient" href={item.url} onclick={this.Fn.link}>
                            <span>Обменять</span>
                          </a>
                        </td>
                      </tr>
                    )
                  })
                } */}
                        </tbody>
                    </table>
                    <div class="listExchange_pagination mt_25">
                        <div class="pag_list">
                            <button class="pag_list_item" onclick={() => { this.fn("pagBtn", 'startPrev') }}>
                                <img src={startPrev} />
                            </button>
                            <button class="pag_list_item" onclick={() => { this.fn("pagBtn", 'prev') }}>
                                <img src={prev} />
                            </button>

                            <ul class="pag_list_count" ref="numCarousel">
                                {
                                    this.Static.arrPag.map((item, index) => {
                                        return (
                                            <li
                                                ref="numSlide"
                                                class={["pag_list_item", index == this.Static.currentPage ? "pag_list_item_active" : null]}
                                                onclick={() => { this.fn("pagBtn", 'numeral', index) }}
                                            >
                                                {index + 1}
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <button class="pag_list_item" onclick={() => { this.fn("pagBtn", 'next') }}>
                                <img src={next} />
                            </button>
                            <button class="pag_list_item" onclick={() => { this.fn("pagBtn", 'endNext') }}>
                                <img src={endNext} />
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <img src={lineB} class="listExchange_lineB"></img>
        </section>
    )
}