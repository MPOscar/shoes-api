const OfferRepository = require('src/infra/repositories/offer')
const bitly = require('src/infra/thirdparty/bitly')
const { Offer } = require('src/domain/offer')
const beforeCreate = require('src/app/offer/hooks')
const { addBitlyToLinks } = require('src/app/offer/bitly-offer-service')

const create = ({ id, body }) => {
  if (!Array.isArray(body)) {
    body = [body]
  }
  return Promise.all(body.map(offer => {
    return new Promise(async (resolve, reject) => {
      try {
        let domain = beforeCreate.mapOffer(Offer(offer))
        domain = await addBitlyToLinks(domain, id)

        await OfferRepository.create(domain)
        // await OfferRepository.updateLinks(id, domain.links)
        resolve(domain)
      } catch (error) {
        reject(error)
      }
    })
  }))
}

module.exports = {
  create
}
