# API Endpoints

## Register user

Register a new user

Method: POST

URL: /users/register

Body:

```
{
  "email": "{email}",
  "password": "{password}",
  "name": "{name}"
}

```

## Login / get user

Login a user

Method: POST

URL: /users/login

Body:

```
{
  "email": "{email}",
  "password": "{password}",
}

```

The API returns the user object from the database, including the userID (_id).
Additionally the Firebase access token is returned.  

## Add a new conversation

Add a new conversation that can be either a simulation or Q&A. 

Method: POST

URL: /conversations

Body:

```
{
    "userId": "{userId}",
    "type": "{type}", // simulation or QAndA
    "category": "{category}",
    "transcript": 
[
{
"author": "{author}", // ai or user
"comment": "{comment}"
},
]
}
```


## Get conversations

Get all user's conversations (simulations and Q&A)

Method: GET

URL: /conversations/:userID

The API returns an array of all user's conversations in this format:

```
[
{
        "metadata": {
            "createdAtT": "2024-07-11T15:40:45.881Z"
        },
        "_id": "668ffcfdd691fc439433c2de",
        "userId": "testId",
        "type": "simulation",
        "category": "accident",
        "transcript": [
            {
                "author": "ai",
                "comment": "I'm having chest pain and trouble breathing. Is this serious?",
                "_id": "668ffcfdd691fc439433c2df"
            },
        ]
}
]
```