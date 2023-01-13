/* dynamo table marathons
* runner -->partition key
* marathon
* gender
* time
* date --->sort key
* age
*/

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

async function createMarathon(event){
  try {
    const body = JSON.parse(event.body);

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

    await docClient.put(params).promise();
  } catch (err) {
    console.log(err);
    return err;
  }
}
async function getMarathons(event){
    console.log("path="+event.path);
    let gender,params,result
    let paths = event.path.split("/");
    if(paths.length>2){
        gender = paths[2];
    }
    let table = "marathons";
    if (gender) {
        params = {
        TableName : table,
        IndexName : 'gender-index',
        KeyConditionExpression : 'gender = :genderVal', 
        ExpressionAttributeValues : {
          ':genderVal' : gender        
        }
      };
    }else{
        params = {
            TableName: table
        };
    }

    try {
        if(gender){
            result = await docClient.query(params).promise();
        }else{
            result = await docClient.scan(params).promise()
        }
        
        console.log("Items="+JSON.stringify(result.Items))
        return result.Items;
    } catch (error) {
        console.error(error);
    }
  }

exports.createMarathon = createMarathon;
exports.getMarathons = getMarathons;

