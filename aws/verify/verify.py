import requests, json, os
from datetime import datetime

# pip install module-name -t /path/to/project-dir
CAPTCHA_VERIFY_URL= os.getenv('captcha_url', 'https://www.google.com/recaptcha/api/siteverify')
CAPTCHA_SECRET = os.getenv('captcha_secret', '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe')

def process(event, context):
  response = False

  captcha_data = {
    "secret": CAPTCHA_SECRET,
    "response": event["captcha"]
  }

  verify = requests.post(CAPTCHA_VERIFY_URL, data=captcha_data)
  result = json.loads(verify.text)
  if result['success']:
    response = result['success']
  return response

if __name__ == "__main__":
  response = process({"captcha": "adjlkadfa"}, "")
  print(response)
