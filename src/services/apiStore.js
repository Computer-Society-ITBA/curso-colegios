const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;
const CHATBOT_URL = 'https://api.api-ninjas.com/v1/facts';

app.use(express.json());

app.post('/chat', async (req, res) => {
    const { ID, personality, message } = req.body;

    try {
        const response = await axios.post(`${CHATBOT_URL}`, {
            ID,
            personality,
            message
        }, {
            responseType: 'arraybuffer'
        });

        const jsonResponse = Buffer.from(response.data).toString('utf-8');
        const { responseType, body } = JSON.parse(jsonResponse);

        if (responseType === 'TEXT') {
            res.json({ responseType: 'TEXT', content: body });
        } else if (responseType === 'IMAGE') {
            if (typeof body === 'string' && body.startsWith('http')) {
                res.json({ responseType: 'IMAGE', content: body });
            } else {
                const imageBase64 = Buffer.from(body).toString('base64');
                res.json({ responseType: 'IMAGE', content: `data:image/png;base64,${imageBase64}` });
            }
        } else if (responseType === 'AUDIO') {
            const audioBase64 = Buffer.from(body).toString('base64');
            const audioDataUri = `data:audio/mpeg;base64,${audioBase64}`;
            res.json({ responseType: 'AUDIO', content: audioDataUri });
        } else {
            res.status(400).json({ content: 'Unsupported response type', responseType: 'TEXT' });
        }
    } catch (error) {
        console.error('Error communicating with the chatbot:', error);
        res.status(500).json({ error: 'Error communicating with the chatbot' });
    }
});

app.post('/text-to-speech', async (req, res) => {
    const { ID, personality, message } = req.body;

    try {
        const response = await axios.post(`${CHATBOT_URL}/chat`, {
            ID,
            personality,
            message
        }, {
            responseType: 'arraybuffer'
        });

        const jsonResponse = Buffer.from(response.data).toString('base64');
        const { responseType, body } = JSON.parse(jsonResponse);
        const audioDataUri = `data:audio/mpeg;base64,${body}`;
 
        res.json({ responseType: 'AUDIO', content: audioDataUri });
    } catch (error) {
        console.error('Error communicating with the text-to-speech service:', error);
        res.status(500).json({ error: 'Error communicating with the text-to-speech service' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
