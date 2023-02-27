const http = require('http');

const postData = JSON.stringify({
  'hi': 'Hi there httpbin!',
});

const options = {
  hostname: 'httpbin.org',
  port: 80,
  path: '/post',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`Response Status Code : ${res.statusCode}`);
  console.log(`Response Headers : ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`Response Body: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`Error in request : ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();