/* dynamo table marathons
* runner -->partition key
* marathon
* gender
* time
* date --->sort key
* age
*/

const { MigrationHubStrategy } = require('aws-sdk');
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
           time: getTimeNumber(body.time),
           date: body.date,
           age: Number(body.age)
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
    let gender,params,result,ageMin=0,ageMax=100,ageQuery=false;genderQuery=false;
    let paths = event.path.split("/");
    if(paths.length>3&&paths.includes("gender")){
        gender = paths[3];genderQuery=true;
    }else if(paths.length>3&&paths.includes("age")){
        if(paths[3]==='30-'){
            ageMax=29;ageQuery=true;
        }else if(paths[3]==='30-50'){
            ageMin=30;ageMax=50; ageQuery=true;
        }else if(paths[3]==='50+'){
            ageMin=51;ageQuery=true
        }
    }
    let table = "marathons";

    params = {
        TableName: table
    };
    console.log("genderQuery="+genderQuery+" "+"gender="+gender+" "+"ageQuery="+ageQuery+" "+"ageMin="+ageMin+" "+"ageMax="+ageMax);
    if(genderQuery){
        params = {
            TableName : table,
            IndexName : 'gender-index',
            KeyConditionExpression : 'gender = :genderVal', 
            ExpressionAttributeValues : {
                ':genderVal' : gender        
            }
         };
    }

    if(ageQuery){
        params = {
            TableName : table,
            FilterExpression: "age BETWEEN :minAgeVal and :maxAgeVal",
            ExpressionAttributeValues: {
            ":minAgeVal": ageMin, 
            ":maxAgeVal": ageMax
        }
         };
    }

    try {
        if(genderQuery){
            result = await docClient.query(params).promise();
        }else if(ageQuery){
            result = await docClient.scan(params).promise();
        }else{
            result = await docClient.scan(params).promise()
        }
        
        console.log("Items="+JSON.stringify(result.Items))
        return result.Items;
    } catch (error) {
        console.error(error);
    }
  }

  const getTimeNumber = (time) =>{
    let hours = time.split(":")[0];
    if(hours.startsWith['0']) hours=hours[1]
    let minutes = time.split(":")[1];
    if(minutes.startsWith['0']) minutes=minutes[1]
    let seconds = time.split(":")[2];
    if(seconds.startsWith['0']) seconds=seconds[1]
    
    let timeNumber = Number(hours)*3600+Number(minutes)*60+Number(seconds);

    return timeNumber;
}

exports.createMarathon = createMarathon;
exports.getMarathons = getMarathons;

