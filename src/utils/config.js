// Based url
const BASEURLOBJ = {
    'dev': 'http://dev.com',
    'prod': 'http://prod.com'
} 

module.exports = {
    BASEURL: BASEURLOBJ[process.env.API_EVN]
}