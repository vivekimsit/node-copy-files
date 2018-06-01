'use strict';

const joi = require('joi');

const copyFiles = (files, target) => {

};

const defaults = {};

const schema = joi
  .object({
    source: [joi.string(), joi.array().items(joi.string())],
    target: joi.string().required()
  })
  .unknown()
  .required();

export default (sources, target, options = {}) => {
  options = {...defaults, ...options};
  return copyFiles(sources, target, options);
};
