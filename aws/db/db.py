import boto3, os
from botocore.exceptions import ClientError
from datetime import datetime

#pip install module-name -t /path/to/project-dir

DB_TABLE = os.getenv("db_table", "demo_contact_us")
DB_KEY = os.getenv("db_key", "email")
DB_SUBKEY = os.getenv("db_subkey", "name")

def process(data, context):
  table = get_table()
  now = datetime.now()
  addtime = now.strftime("%B %d, %Y")
  # avoid underscores in item key or value
  response = table.put_item(
    Item={
      'name': data['name'],
      'phone': data['phone'],
      'email': data['email'],
      'message': data['message'],
      'created': addtime
    }
  )
  return response

# dynamodb - database
def get_db():
  resource = boto3.resource('dynamodb')
  return resource

def get_table():
  resource = get_db()
  tables = resource.tables.all()
  for table in tables:
    if table.name == DB_TABLE:
      return table
  table = create_table(resource)
  return table

def create_table(resource):
  table = resource.create_table(
    TableName=DB_TABLE,
    KeySchema=[
      {
        'AttributeName':DB_KEY,
        'KeyType':'HASH'
      },
      {
        'AttributeName':DB_SUBKEY,
        'KeyType':'RANGE'
      }
    ],
    AttributeDefinitions=[
      {
        'AttributeName':DB_KEY,
        'AttributeType':'S'
      },
      {
        'AttributeName':DB_SUBKEY,
        'AttributeType':'S'
      }
    ],
    ProvisionedThroughput={
      'ReadCapacityUnits': 5,
      'WriteCapacityUnits': 5
    }
  )
  return table



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
