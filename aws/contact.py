from mail import mail
from db import db
from verify import verify
import json

def process(event, context):
  result = False;
  if (verify.process(event, context)):
    response = mail.process(event, context)
    if 200 == response['ResponseMetadata']['HTTPStatusCode']:
      result = True

    response = db.process(event, context)
    if 200 == response['ResponseMetadata']['HTTPStatusCode']:
      result = True
    else:
      result = False
  return result;

if __name__ == "__main__":
  data = {
    "captcha": "adjklakd",
    "destination": "johan@paseo.org.za",
    "email": "jnm@catenare.com",
    "name": "Johan Martin",
    "message": "This is a test message <script>alert('this is a test')</script>",
    "phone": "+27 81 443 8237"
  }
  response = process(data, {})
  print(response)
