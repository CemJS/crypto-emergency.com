import { Cemjsx } from "cemjs-all"
import calendar from "@svg/events/calendar.png"
import map_point from "@svg/events/map_point.png"
import seach_magnifier from "@svg/events/seach_magnifier.svg"
import selector_arrow from "@svg/events/selector_arrow.svg"
import test from "@images/events/test.jpg"
import test2 from "@images/events/test2.png"
import back from '@svg/icon/prev.svg'
import next from '@svg/icon/next.svg'

import Navigation from "./navigation"
export const display = function () {
  
  return (
    <div class="page">
      <Navigation />
    </div>
  )
}