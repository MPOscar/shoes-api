const repository = require('src/infra/repositories/release')
const { Release } = require('src/domain/release')

const attrs = ['id', 'name', 'description', 'styleId', 'collectionId', 'sku', 'hot', 'children', 'priceEUR', 'priceGBP', 'priceUSD', 'gender', 'color', 'mainImage', 'releaseDate', 'customized', 'hiddenDashboard', 'createdAt', 'updatedAt']

const beforeUpdate = (domain) => {
  if (domain.priceUSD  === undefined) {
    domain.priceUSD = null;
  }
  if (domain.priceEUR === undefined) {
    domain.priceEUR = null;
  }
  if (domain.priceGBP  === undefined) {
    domain.priceGBP = null;
  }
}
const beforeCreate = beforeUpdate;

const {
  getOneUseCase,
  createUseCase,
  getAllUseCase,
  removeUseCase,
  updateUseCase
} = require('src/app/crud')(repository, Release, attrs, { beforeUpdate, beforeCreate } )
const createImageUseCase = require('./create_image')
const removeImageUseCase = require('./delete_image')
const updateMainImageUseCase = require('./change_main_image')
const getAllImagesUseCase = require('./getAllImages')
const getOutdatedUseCase = require('./get_outdated')
const setHiddenUseCase = require('./set_hidden')
const { searchUseCase } = require('./search')(repository, attrs)

module.exports = {
  getOneUseCase,
  createUseCase,
  getAllUseCase,
  removeUseCase,
  updateUseCase,
  getAllImagesUseCase,
  createImageUseCase,
  removeImageUseCase,
  updateMainImageUseCase,
  getOutdatedUseCase,
  setHiddenUseCase,
  searchUseCase
}
