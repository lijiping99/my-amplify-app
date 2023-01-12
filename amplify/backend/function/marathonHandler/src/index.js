const { createMarathon,getMarathons } = require('./dynamodbHandler');

exports.handler = async (event) => {
    console.log(event);
    let response;
    
    if(event.httpMethod==='POST'){

    await createMarathon(event);
    
    response = {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      }, 
      body: "success",
    };

    }

    if(event.httpMethod==='GET'){

      let marathons = await getMarathons(event);
           
      response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }, 
        body: JSON.stringify(marathons)
      };
      console.log("response from lambda:"+JSON.stringify(response));
      }

    
    return response;
    
};
