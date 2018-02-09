import boto3, os
from botocore.exceptions import ClientError
from jinja2 import Template, Environment, PackageLoader, select_autoescape

#pip install module-name -t /path/to/project-dir

CHARSET = "UTF-8"
RETURN_PATH_ARN = os.getenv(
  "return_path_arn",
  "arn:aws:ses:eu-west-1:338196870821:identity/paseo.org.za"
  )

SENDER = os.getenv("sender", "info@paseo.org.za")
SOURCE_ARN = os.getenv(
  "source_arn",
  "arn:aws:ses:eu-west-1:338196870821:identity/paseo.org.za"
  )
REGION_NAME = os.getenv("region_name", "eu-west-1")
SERVICE = "ses"
SUBJECT = os.getenv("subject","Demo Email")

def process(event, context):
  return send_email(event)

def get_ses():
  mail = boto3.client(SERVICE, region_name=REGION_NAME)
  return mail

def get_destination(data):
  return {
    'ToAddresses': [
            data['destination'],
        ],
        'CcAddresses': [
            data['email'],
        ]
  }

def get_message(data):
  env = Environment(
    loader=PackageLoader('mail', 'templates'),
    autoescape=select_autoescape(['html', 'xml'])
  )

  template = env.get_template('mail.html')
  html_email = template.render(data=data)

  text_email = "Thank you for registering. Name:{}, Email: {}, Phone: {}, Message: {}".format(data['name'], data['email'], data['phone'], data['message'])

  # html_email = Template()

  return {
         'Subject': {
            'Data': SUBJECT,
            'Charset': CHARSET
        },
        'Body': {
            'Text': {
                'Data': text_email,
                'Charset': CHARSET
            },
            'Html': {
                'Data': html_email,
                'Charset': CHARSET
            }
        }
  }

def send_email(data):
  mail = get_ses()
  response = mail.send_email(
    Source=SENDER,
    Destination=get_destination(data),
    Message=get_message(data),
    ReturnPathArn=RETURN_PATH_ARN,
    SourceArn=SOURCE_ARN
  )
  return response

if __name__ == "__main__":
  data = {
    "captcha": "adjklakd",
    "destination": "johan@paseo.org.za",
    "email": "sfbushie@gmail.com",
    "name": "Johan Martin",
    "message": "This is a test message <script>alert('this is a test')</script>",
    "phone": "+27 81 443 8237"
  }
  response = process(data, {})
  print(response)
