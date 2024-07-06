
import { Data } from '@/App'
import axios from 'axios'

export const getreferrals = async () => {
    try {

        const referrals = await axios({
            method: 'get',
            url: 'http://localhost:3000/api/getreferrals/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        if (!referrals) throw Error
        console.log(referrals)
        return referrals
    }
    catch (error) {
        console.log(error)
    }
}
export const addreferral = (data: Data) => {
    try {
        const referral = axios({
            method: 'post',
            url: 'http://localhost:3000/api/addreferral/',
            data: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            }
        })
        if (!referral) throw Error
        return referral
    }
    catch (error) {
        console.log(error)
    }
}