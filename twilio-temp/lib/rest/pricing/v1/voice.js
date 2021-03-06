'use strict';

var _ = require('lodash');
var CountryList = require('./voice/country').CountryList;
var NumberList = require('./voice/number').NumberList;
var Page = require('../../../base/Page');

var VoicePage;
var VoiceList;
var VoiceInstance;
var VoiceContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Pricing.V1.VoicePage
 * @augments Page
 * @description Initialize the VoicePage
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 * @param {object} response - Response from the API
 *
 * @returns VoicePage
 */
/* jshint ignore:end */
function VoicePage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(VoicePage.prototype, Page.prototype);
VoicePage.prototype.constructor = VoicePage;

/* jshint ignore:start */
/**
 * Build an instance of VoiceInstance
 *
 * @function getInstance
 * @memberof Twilio.Pricing.V1.VoicePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns VoiceInstance
 */
/* jshint ignore:end */
VoicePage.prototype.getInstance = function getInstance(payload) {
  return new VoiceInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Pricing.V1.VoiceList
 * @description Initialize the VoiceList
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 */
/* jshint ignore:end */
function VoiceList(version) {
  /* jshint ignore:start */
  /**
   * @function voice
   * @memberof Twilio.Pricing.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Pricing.V1.VoiceContext}
   */
  /* jshint ignore:end */
  function VoiceListInstance(sid) {
    return VoiceListInstance.get(sid);
  }

  VoiceListInstance._version = version;
  // Path Solution
  VoiceListInstance._solution = {};

  // Components
  VoiceListInstance._numbers = undefined;
  VoiceListInstance._countries = undefined;

  Object.defineProperty(VoiceListInstance,
    'numbers', {
    get: function numbers() {
      if (!this._numbers) {
        this._numbers = new NumberList(
          this._version
        );
      }

      return this._numbers;
    },
  });

  Object.defineProperty(VoiceListInstance,
    'countries', {
    get: function countries() {
      if (!this._countries) {
        this._countries = new CountryList(
          this._version
        );
      }

      return this._countries;
    },
  });

  return VoiceListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Pricing.V1.VoiceInstance
 * @description Initialize the VoiceContext
 *
 * @property {string} name - The name
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
function VoiceInstance(version, payload) {
  this._version = version;

  // Marshaled Properties
  this.name = payload.name; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {};
}

module.exports = {
  VoicePage: VoicePage,
  VoiceList: VoiceList,
  VoiceInstance: VoiceInstance,
  VoiceContext: VoiceContext
};
