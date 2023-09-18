import { Cemjsx } from "cemjs-all"
import badge1 from "@svg/personalAwards/badge1.svg"
import badge2 from "@svg/personalAwards/badge2.svg"
import badge3 from "@svg/personalAwards/badge3.svg"
import badge4 from "@svg/personalAwards/badge4.svg"
import badge5 from "@svg/personalAwards/badge5.svg"
import badge6 from "@svg/personalAwards/badge6.svg"
import badge7 from "@svg/personalAwards/badge7.svg"
import plus from "@svg/personalAwards/plus.svg"

const image = [badge1, badge2, badge3, badge3, badge4, badge5, badge6, badge7]

export default function () {
    return (
        <div class="page">
            <div class="awards">
                <div class="awards__container">
                    <div class="awards__list">
                        {
                            this.Static.awards.map((item, i) => {
                                return (
                                    <div class="awards__list_item">
                                        <img class="awards__badge" src={image[i]} />
                                        <img class="awards__badge_small" src={image[i]} />
                                        <div class="awards__exp">
                                            <img src={plus} />
                                            {`${item.exp} ${item.reward}`}
                                        </div>
                                        <div class="awards__description">
                                            <p class="awards__title">
                                                {item.title}
                                            </p>
                                            <p class="awards__text">
                                                {item.text}
                                            </p>
                                        </div>
                                        <div class="awards__progress">
                                            <div class={["awards__progress_bar",
                                                item.received
                                                    ?
                                                    "green"
                                                    :
                                                    null
                                            ]}
                                                style={`width: ${(item.progress / item.result) * 100}%`}
                                            />
                                            <p class={["awards__progress_result",
                                                item.received
                                                    ?
                                                    "green"
                                                    :
                                                    null
                                            ]}>
                                                {
                                                    !item.received
                                                        ?
                                                        `${item.progress} / ${item.result}`
                                                        :
                                                        "Получено"
                                                }
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}