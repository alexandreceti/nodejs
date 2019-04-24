const request = require('request')

const find = function(ativo) {
    console.log("ativo")
    const url =`https://www.worldtradingdata.com/api/v1/stock?symbol=${ativo}&api_token=strAUp65tYXoMTcirP9Uae0AaRPosw4zg46mjRmTlztBEIEAfcv8yhX9dHfZ`
    let result = new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            if (error) reject(error)
            resolve(body.data
                )
        });
    })
    
}

module.exports = {
    find
}