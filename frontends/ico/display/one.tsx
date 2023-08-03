import { Cemjsx } from "cemjs-all"

export default function () {
  console.log('=55ea43=', this.Static.record)
  return (
    <div
      onclick={() => {
        delete this.Static.record
        this.init()
      }}
    >1234</div>
  )
}