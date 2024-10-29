const express = require('express');
const axios = require('axios');
const router = express.Router();

const CHATBOT_URL = 'url-del-chatbot';

router.post('/chat', async (req, res) => {
    const { ID, personality, message } = req.body;

    try {
        const response = await axios.post(`${CHATBOT_URL}/chat`, {
            ID,
            personality,
            message
        }, {
            responseType: 'arraybuffer'
        });

        //casting a str
        const jsonResponse = Buffer.from(response.data).toString('utf-8');
        const { responseType, body } = JSON.parse(jsonResponse);

        if (responseType === 'TEXT') {
            //texto o markdown
            res.json({
                responseType: 'TEXT',
                content: body
            });
        } else if (responseType === 'IMAGE') {
            //url
            if(typeof body === 'string' && body.startsWith('http')){
                res.json({
                    responseType: 'IMAGE',
                    content: body
                });
            } else {
            //base64
            const imageBase64 = Buffer.from(body).toString('base64');
            res.json({
                responseType: 'IMAGE',
                content: `data:image/png;base64,${imageBase64}`
            });
            }
        } else {
            //default para que no explote
            res.status(400).json({
                content: 'Unsupported response type',
                responseType: 'TEXT'
            });
        }
    } catch (error) {
        console.error('Error al comunicarse con el chatbot:', error);
        res.status(500).json({ error: 'Error al comunicarse con el chatbot' });
    }
});


router.post('/text-to-speech', async (req, res) => {
    //audio
    const { ID, personality, message } = req.body;

    try {
        const response = await axios.post(`${CHATBOT_URL}/chat`, {
            ID,
            personality,
            message
        }, {
            responseType: 'arraybuffer'
        });

        const audioBase64 = Buffer.from(response.data).toString('base64');
        const audioDataUri = `data:audio/mpeg;base64,${audioBase64}`;
 
        res.json({
            responseType: 'AUDIO',
            content: audioDataUri
        });
    } catch (error) {
        console.error('Error communicating with the text-to-speech service:', error);
        res.status(500).json({ error: 'Error communicating with the text-to-speech service' });
    }
});


module.exports = router;

export {CHATBOT_URL};