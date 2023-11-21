import { localstorageKey } from '@/constants'

export const zonePrice = (price) => {
    if (price) {
        const zone = localStorage.getItem(localstorageKey.zone) || 'IND'
        const zonePrice = price.filter((data) => data.cur == zone)[0]
        return zonePrice
    } else {
        return {}
    }
}