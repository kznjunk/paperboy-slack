# Paperboy Slack

## How?

### Simple message

![image](https://user-images.githubusercontent.com/3426213/111921152-478a3e80-8a93-11eb-9918-41e7b4729caf.png)

```js
const token = 'xxxx-00000000'
const { sendSlack } = require('@kznjunk/paperboy-slack')(token)

const channel = 'general'
const message = 'hello there!'

const res = await sendSlack(channel, message)
// res: { ok: true, ... }
```

### Code 

![image](https://user-images.githubusercontent.com/3426213/111921221-af408980-8a93-11eb-84b2-39943f1d56f5.png)

```js
const token = 'xxxx-00000000'
const { sendSlack } = require('@kznjunk/paperboy-slack')(token)

const channel = 'general'
const message = 'afterwork beer for someone?'
const options = {
	code: 'const x = 42'
}

const res = await sendSlack(channel, message, options)
// res: { ok: true, ... }
```

## Note

The Slack token is available on the settings OAuth & Permissions page: https://api.slack.com/apps/{{appId}}/oauth?
