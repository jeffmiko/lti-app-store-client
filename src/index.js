const axios = require("axios")
const axiosCreate = axios.create

const API_BASE_URL = 'https://ltiappstore.com'


class LtiAppClient {

  constructor({ token, baseUrl, timeout=10000 } = {}) {
    if (!token) throw new TypeError("A token is required.")
    if (!baseUrl) baseUrl = API_BASE_URL
    let type = token.includes('.') ? "LTIK" : "Bearer"
    this.baseUrl = new URL("api", baseUrl)
    this.axios = axiosCreate({
      baseURL: this.baseUrl.href,
      headers: {'Authorization': `${type} ${token}`},
      timeout: timeout,
    })
  }


  decode(token) {
    let parts = token.split('.')
    if (parts.length < 3) throw new Error("The token is not a valid JWT token")
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString())
    delete payload.iat
    delete payload.exp
    delete payload.iss
    return payload
  }  

  async getInstitution(institutionId) {
    return await this.axios.get(`institutions/${institutionId}`).then(res => res.data)    
  }

  async getUser(userId) {
    return await this.axios.get(`users/${userId}`).then(res => res.data)    
  }

  async getContext(contextId) {
    return await this.axios.get(`contexts/${contextId}`).then(res => res.data)
  }

  async getSections(contextId) {
    return await this.axios.get(`contexts/${contextId}/sections`).then(res => res.data)    
  }

  async getSection(contextId, sectionId) {
    return await this.axios.get(`contexts/${contextId}/sections/${sectionId}`).then(res => res.data)        
  }

  async getRoster(contextId, sectionId) {
    if (sectionId)
      return await this.axios.get(`contexts/${contextId}/sections/${sectionId}/roster`).then(res => res.data)    
    else
      return await this.axios.get(`contexts/${contextId}/roster`).then(res => res.data)    
  }

  async getResources(contextId) {
    return await this.axios.get(`contexts/${contextId}/resources`).then(res => res.data)        
  }

  async getResource(resourceId) {
    return await this.axios.get(`resources/${resourceId}`).then(res => res.data)            
  }

  async getGrades(resourceId, userId) {
    if (userId)
      return await this.axios.get(`resources/${resourceId}/grades/${userId}`).then(res => res.data)            
    else
      return await this.axios.get(`resources/${resourceId}/grades`).then(res => res.data)     
  }

  async setGrade(resourceId, userId, score, publish) {
    let params = { userId, score, publish: !!publish }
    return await this.axios.put(`resources/${resourceId}/grades`, params).then(res => res.data)            
  }

  async getVendor(vendorId) {
    return await this.axios.get(`vendors/${vendorId}`).then(res => res.data)
  }

  async getApps(vendorId) {
    return await this.axios.get(`vendors/${vendorId}/apps`).then(res => res.data)
  }

  async getApp(appId) {
    return await this.axios.get(`apps/${appId}`).then(res => res.data)
  }

  async getInstalls(appId) {
    return await this.axios.get(`apps/${appId}/installs`).then(res => res.data)
  }

  async getLaunchStats(appId) {
    return await this.axios.get(`apps/${appId}/launches`).then(res => res.data)    
  }

  async getApiStats(vendorId) {
    return await this.axios.get(`vendors/${vendorId}/apiusage`).then(res => res.data)    
  }


}





module.exports = LtiAppClient
