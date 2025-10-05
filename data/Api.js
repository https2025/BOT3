
// © 2025 KyuuRzy. All Rights Reserved.
// respect the work, don’t just copy-paste.

const config = require('../settings/config');
const fetch = require('node-fetch')

const Api = {
  get: async (endpoint, params = {}) => {
    const query = new URLSearchParams(params).toString()
    const res = await fetch(`https://zephrine.live/${endpoint}?${query}`)
    return await res.json()
  },

  post: async (endpoint, body = {}) => {
    const res = await fetch(`https://zephrine.live${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
    return await res.json()
  }
}

module.exports = Api