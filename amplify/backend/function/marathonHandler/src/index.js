const { createMarathon } = require('./dynamodbHandler');

exports.handler = async (event) => {
    console.log(event)
    
    if(event.httpMethod='POST'){

    await createMarathon(event);

    }

    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }, 
        body: "success",
    };
    return response;
    
};
