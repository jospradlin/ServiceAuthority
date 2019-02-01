// const Axios = require('axios');

// function vmlogin(parent, args, context, info) {
//   const session_url = 'https://carpvc01.ca.com/rest/com/vmware/cis/session';
//   const uname = 'XXX';
//   const pass = 'XXX';
 
 
  // return 'Test Value';
 
  // Axios.post(session_url, {}, {
  //   auth: {
  //     username: uname,
  //     password: pass
  //   }
  // }).then(function (response) {
  //   console.log('Authenticated');
  //   console.log(response.data);
  //   return response.data.value;
  // }).catch(function (error) {
  //   console.log(`Error: ${error}`);
  // });


  
// }

// module.exports = {
//   vmlogin,
// }


// async function vmlogin(parent, args, { response }, info) {
//   // At Req Level
//   const agent = new https.Agent({      
//     rejectUnauthorized: false
//   });
//   var session_url = 'https://carpvc01.ca.com/rest/com/vmware/cis/session';
//   var uname = 'XXXX';
//   var pass = 'XXXXX';
//   const res = await Axios.post(session_url, {}, {
//     httpsAgent: agent,
//     auth: {
//       username: uname,
//       password: pass
//     }
//   });

//   const { date, expires, connection } = res.headers;
//   const cookie = res.headers['set-cookie'][0];
//   const cookiePieces = cookie.split(';');
//   const cookie_name = cookiePieces[0].split('=',2)[0];
//   const cookie_value = cookiePieces[0].split('=', 2)[1];

//   console.log(date);
//   console.log(expires);
//   console.log(connection);
//   console.log(cookie);
//   console.log(cookie_name);
//   console.log(cookie_value);


//   response.cookie(cookie_name, cookie_value, { domain: ".carpvc01.ca.com", path: "/rest", httpOnly: true })  




//   return res.data.value;
// }

  // Axios.post(session_url, {}, {
  //   httpsAgent: agent,
  //   auth: {
  //     username: uname,
  //     password: pass
  //   }
  // }).then(function (response) {
  //   console.log('Authenticated');
  //   console.log(response.data);
  //   const value = response.data.value;
  //   console.log(`Value: ${value}`)
  //   return value;
  // }).catch(function (error) {
  //   if (error.response) {
  //     // The request was made and the server responded with a status code
  //     // that falls out of the range of 2xx
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //   } else if (error.request) {
  //     // The request was made but no response was received
  //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //     // http.ClientRequest in node.js
  //     console.log(error.request);
  //   } else {
  //     // Something happened in setting up the request that triggered an Error
  //     console.log('Error', error.message);
  //   }
  //   console.log(error.config);
  // });




