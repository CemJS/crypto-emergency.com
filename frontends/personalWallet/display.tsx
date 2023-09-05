import { Cemjsx } from "cemjs-all"
import transaction_newmember_bonus from "@images/personalWallet/transaction_newmember_bonus.svg"
import crem_logo from "@images/personalWallet/crem_logo.svg"
import done from "@images/personalWallet/done.svg"
import nav_arrow from "@svg/events/show/nav_arrow.svg"

export const display = function () {
  // console.log('=display=', this.Static.limitArray)

  // this.fn('finish');
  return (
    <div class="page personalWallet">
      <div class="wrapper">
        <div class='head'>
          <h1>Мои активы</h1>
          <div class='returnBtn'>
            <img src={nav_arrow} alt="" />
            <a href="/" onclick={this.Fn.link}
            >
              <span>Назад</span>
            </a>
          </div>
        </div>
        <div class='cards-container'>
          <div class='card'>

            <div class='balance' >

              <p>Мой счет</p>

              <div class='balance_total'>
                <p class='balance_amount'>0.50</p>
                <p class='coin'>CEMD</p>
              </div>
            </div>
            <div class='card_footer'>
              <div class='balance_usd'>
                <p class='currency'>Доллары</p>
                <p class='balance'>0.50</p>
              </div>
              <div class='actual_rate'>
                <p class='title'>Актуальный курс</p>
                <p class='amount'>1.00</p>
              </div>

            </div>
            <img src={crem_logo} alt="" class='crem_logo' />
            <div class="info_content">
              <p>Обмен CEM доступен<br />от 10 CEMD</p>
            </div>
            <button class="exchange_button">Обменять</button>
          </div>
        </div>
        <div class='test-container'>
          <table class='table_bonus table'>
            <thead class="table_bonus_head table_head">
              <tr class='table_bonus_row'>
                <th class="table_bonus_row_start">Type</th>
                <th>Date</th>
                <th>Transaction</th>
                <th>Sum</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody class='table_bonus_body' ref='elementContainer'>
              {
                this.Static.limitArray.map((item, index) => {
                  // console.log('=this.Static.limitArray=', this.Static.limitArray)
                  return (
                    <tr class='table_bonus_row'>
                      <td class="table_bonus_row_start">
                        <img src={transaction_newmember_bonus} alt="" class='bonus_type' />
                        {item.type}
                      </td>
                      <td>{item.date}</td>
                      <td>{item.transaction}</td>
                      <td>{item.sum}</td>
                      <td><img src={done} alt="" /></td>
                    </tr>
                  )
                  // }
                })
              }
            </tbody>
          </table>
          <nav class="pagination-container">
            <button class="pagination-button" id="prev-button" aria-label="Previous page" title="Previous page">
              &lt;
            </button>

            <div id="pagination-numbers" ref='paginationNumbers'>
              <span class='hidden' ref='first_two' >
              {
                this.Static.Pages.slice(0, 2).map((item, index) => {
                  return (
                    <button class="pagination-number" page-index="1" aria-label="Page 2" 
                    onclick ={(e)=>{
                      this.Static.currentPage = e.target.innerText
                      this.fn('setCurrentPage', Number(this.Static.currentPage));
                      console.log('=TwocurrentPage=',this.Static.currentPage)
                      if(this.Static.currentPage < 3){
                        this.Ref.first_two.classList.add('hidden')
                        this.Static.Begin = 0
                        this.Static.End = 5
                      }
                      this.init()
                    }}
                    >
                    {item}</button>
                  )
                })
                
              }
              
              
              <span class='first_two_dots' ref='first_two_dots'>...</span>
              </span>
              {
                this.Static.Pages.slice(this.Static.Begin, this.Static.End).map((item, index) => {
                  return (
                    <button class={item.class} ref = "pagination_number"
                      onclick={(e) => {
                        this.Static.currentPage = e.target.innerText
                        this.fn('setCurrentPage', Number(this.Static.currentPage));
                        console.log('=716b08=',this.Ref.pagination_number)
                        this.Ref.pagination_number.classList.remove('active')
                        e.target.classList.add('active')
                        console.log('=index=',item.class)
                        this.init()
                        

                      }}
                    >{item.number}</button>

                  )
                })
              }
              ...
              {
                this.Static.Pages.slice(-2).map((item, index) => {
                  return (
                    <button class="pagination-number" ref='two_last'
                    onclick ={(e)=>{
                      this.Static.currentPage = e.target.innerText
                      this.fn('setCurrentPage', Number(this.Static.currentPage));
                      console.log('=TwoLAstcurrentPage=',this.Static.currentPage)
                      if(this.Static.currentPage < 3){
                        this.Ref.first_two.classList.add('hidden')
                        this.Static.Begin = 0
                        this.Static.End = 5
                      }
                      this.init()
                    }}
                    >
                      {item}</button>

                  )
                })
              }
            </div>
            <button class={["pagination-button", this.Static.test == 2 ? "test" : "ffhff"]} id="next-button" aria-label="Next page" title="Next page"
            >
              &gt;
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}