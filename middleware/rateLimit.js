const rateLimit = require('express-rate-limit')

// Rate limit middleware
const rateLimitMiddleware = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  message: 'You have exceeded your 20 requests per minute limit.',
  headers: true,
})

// Export it
module.exports = rateLimitMiddleware
