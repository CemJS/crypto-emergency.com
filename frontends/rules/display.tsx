import { Cemjsx } from "cemjs-all"
import cube from '@svg/beauty/cube.svg'
import triangle from '@svg/beauty/triangle.svg'
import cylinder from '@svg/beauty/cylinder.svg'

import UserAgreement from './display/UserAgreement'
import UserCookies from './display/UserCookies'
import UserDataPolicy from './display/UserDataPolicy'
import UserPersonal from "./display/UserPersonal"

export const display = function () {


    let nameRule = window.location.pathname.split("/user-")[1]
    if (nameRule == "agreement") {
        return UserAgreement.bind(this)()
    } else if (nameRule == "cookies") {
        return UserCookies.bind(this)()
    } else if (nameRule == "data-policy") {
        return UserDataPolicy.bind(this)()
    } else if (nameRule == "personal") {
        return UserPersonal.bind(this)()
    } else {
        return (
            <div>not found</div>
        )
    }
}