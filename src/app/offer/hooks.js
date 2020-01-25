const mapOffer = (domain) => {
  if (!domain.raffle) {
    domain.raffleStart = null
    domain.raffleEnd = null
  } else {
    domain.releaseTime = null
  }
  if (domain.priceUSD  === undefined) {
    domain.priceUSD = null;
  }
  if (domain.priceEUR === undefined) {
    domain.priceEUR = null;
  }
  if (domain.priceGBP  === undefined) {
    domain.priceGBP = null;
  }
  return domain;
}

module.exports = {
  mapOffer
}
