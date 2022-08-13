const hmacsha1 = require('hmacsha1');
const uuid = require('uuid');

function generateSignature(appid, env, uri) {
  auth_signature_method = 'HMAC-SHA1';
  auth_consumer_key = hmacsha1(appid, env);
  auth_token = uuid.v4();
  auth_signature = hmacsha1(appid, uri + auth_token);
  auth_nonce = hmacsha1(appid, uuid.v4());
  auth_callback = encodeURIComponent(uri.replace(new RegExp('http(s)?://[^/]*'), ''));
  auth_timestamp = new Date().getTime();

  return `Auth ?auth_signature=${auth_signature}&auth_nonce=${auth_nonce}&auth_callback=${auth_callback}&auth_timestamp=${auth_timestamp}&auth_token=${auth_token}&auth_signature_method=${auth_signature_method}&auth_consumer_key=${auth_consumer_key}`;
}

console.log(generateSignature("challenge_uprodit", "production", "https://api.uprodit.com/v2/profile/personal/en/51"));
