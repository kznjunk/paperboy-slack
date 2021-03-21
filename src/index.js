module.exports = function paperboySlack(token) {
    if (!token) throw new Error('Slack web client requires a token..')

    const { WebClient } = require('@slack/web-api')
    const web = new WebClient(token)

    return { sendSlack }

    async function sendSlack(channel, text, options) {
        if (!channel || !text) throw new Error('Missing channel or message..')

        const slackData = {
            text,
            channel,
            blocks: [
                {
                    'type': 'section',
                    'text': {
                        'type': 'mrkdwn',
                        'text': text
                    }
                }
            ]
        }

        if (options && options.details) {
            slackData.blocks.push({
                'type': 'section',
                'text': {
                    'type': 'mrkdwn',
                    'text': `\`\`\`${options.details}\`\`\``
                }
            })
        }

        return await web.chat.postMessage(slackData)
    }
}
