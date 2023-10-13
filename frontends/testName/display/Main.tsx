import { Cemjsx } from "cemjs-all"

export default function () {
    console.log('=a650c5=', this.Static.records)
    return (
        <div >

            <table class="usersTable">
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                    {
                        this.Static.records.map((item, index) => {
                            return (

                                <tr class='table_bonus_row'>
                                    <td class="table_bonus_row_start">{item._id}</td>
                                    <td class="table_bonus_row_date">{item.name}</td>
                                    <td>{item.age}</td>
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button
                onclick={() => {
                    this.Static.records = []
                    this.Events.users.change(`/api/events/Evg?uuid=${this.Variable.myInfo.uuid}&minAge=50`)
                    this.Events.users.addEventListener('add', ({ data }) => {
                        let record = JSON.parse(data)
                        if (Object.keys(record).length) {
                            this.Static.records.push(record)
                        }
                        this.init()
                    });
                }
                }
            >
                50 лет
            </button>
        </div>
    )
}