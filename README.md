# Paperboy Slack

## How?

### Simple message




```js
const token = 'xxxx-00000000'
const { sendSlack } = require('@kznjunk/paperboy-slack')(token)

const channel = 'general'
const message = 'hello there!'

const res = await sendSlack(channel, message)
// res: { ok: true, ... }
```

### Code 



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

