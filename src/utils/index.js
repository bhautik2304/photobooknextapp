import { localstorageKey } from '@/constants'

export const zonePrice = (price) => {
    if (price) {
        const zone = localStorage.getItem(localstorageKey.zone) || 'IND'
        const zonePrice = price.filter((data) => data.countryzone_id== zone)[0]
        return {
            priceSrring: `${zonePrice.price} ${zonePrice.currency.currency_sign}`,
            price: parseInt(zonePrice.price),
            currency: zonePrice.currency.currency_sign
        }
    } else {
        return {}
    }
}