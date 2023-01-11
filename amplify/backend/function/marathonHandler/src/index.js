const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

async function createItem(params){
  try {
    await docClient.put(params).promise();
  } catch (err) {
    console.log(err);
    return err;
  }
}
/*
* runner
* marathon
* gender
* time
* year
* age
*/

exports.handler = async (event) => {
    console.log(event)
    const customerId = event.pathParameters.marathonId;
    const body = JSON.parse(event.body);
    const customer = {'customerId': customerId, 'customerName': "Customer " + customerId };

    const params = {
        TableName : 'marathons',
        
        Item: {
           runner: body.name,
           marathon: body.marathon,
           gender: body.gender,
           time: body.time,
           date: body.date,
           age: body.age
        }
      }

      await createItem(params);

    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }, 
        body: JSON.stringify(customer),
    };
    return response;
};
