// allows s to perfrom AWS specific stuff
const AWS = require('aws-sdk');
const util = require('util');

const s3 = new AWS.S3();

exports.handler = async (event) => {
  console.log('Reading options from event:\n', util.inspect(event, { depth: 5 }));

  const srcBucket = event.Records[0].s3.bucket.name;
  const srcKey = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));
  console.log(srcBucket, srcKey);

  try {
    const imageInfo = await s3.getObject({ Bucket: srcBucket, key: srcKey }).promise();
    console.log(imageInfo);

    // How to resize??
  } catch (err) {
    console.log(err);
  }

  return;
}
