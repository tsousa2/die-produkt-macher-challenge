## Description

This is a NestJS API responsible for handling uploaded audio files from users,
by checking and fixing potential grammar errors, in order to produce a corrected audio file and return it to the client.

## Implementation

In order to implement the audio file support, Multer was used which is a built-in NestJS middleware,
which allows the uploaded file to be extracted from the requests and handled posteriorly.

The user email can also be sent as a path parameter, which is sanitized using the class-validator library, in order to make it a mandatory field.

## Curl Example

```bash
curl -L -X POST 'http://localhost:3000/recording/upload/tiagoandredesousa@gmail.com' \
-F 'voice-recording=@"/C:/Users/Tiago Sousa/Downloads/ee7b9fc8-e8c3-4999-b80a-ebab35f08344.wav"'
```

## Install dependencies

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```