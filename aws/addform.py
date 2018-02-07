import boto3, requests, json, os, asyncio
from datetime import datetime
from jinja2 import Template

CAPTCHA_VERIFY_URL= os.getenv('captcha_url', 'https://www.google.com/recaptcha/api/siteverify')
CAPTCHA_SECRET = os.getenv('captcha_secret', '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe')

def process(event, context):
  response = False
  captcha_data = {
    "secret": CAPTCHA_SECRET,
    "response": "3452efdsafsdf"
  }

  verify = requests.post(CAPTCHA_VERIFY_URL, data=captcha_data)
  result = json.loads(verify.text)
  if result['success']:
    response = result['success']
    loop = asyncio.get_event_loop()
    tasks = [
      asyncio.ensure_future(send_email('test', captcha_data)),
      asyncio.ensure_future(submit_data(captcha_data)),
    ]
    loop.run_until_complete(asyncio.wait(tasks))
    loop.close()
    #send email
    #add to database

  return response

async def send_email(mail_template, data):
  print("send email: {}".format(datetime.now()))

async def submit_data(data):
  print("submit data: {}".format(datetime.now()))

if __name__ == "__main__":
  response = process("", "")
  print(response)
