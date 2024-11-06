# Instructivo para poder crear el Chatbot
En este instructivo se va a mostrar cómo crear una aplicación desde cero usando React.
En particular, se utiliza Javascript con algunos paquetes como React, Axios, Express, entre otros.

La principal funcionalidad de este Chatbot es poder comunicarse con OpenAI para poder tener un comportamiento simil ChatGPT.
Para ello, se tendrá que crear una aplicación de React, e ir generando funcionalidades paso a paso hasta poder tener algo completamente funcional.

### React
React es una librería de Javascript, que ofrece las bases para poder construir un ecosistema fácil y de manera modular, centrándose en el uso de Javascript y JSX por sobre HTML y CSS.
React en sí no es muy poderoso, pero es muy extensible y hoy en día se construyó un gran ecosistema sobre el mismo que permite crear aplicaciones enormes en la web.

### OpenAI
OpenAI ofrece una Application Programming Interface (API) para poder utilizar sus modelos de lenguaje.
Una API es una **abstracción** sobre una funcionalidad que tiene como objetivo simplificar el uso del mismo, es similar a el botón para encender una computadora: En el medio pasan muchas cosas, pero nosotros sólo nos enteramos de que se encienden una vez que presionamos el botón.

Un modelo de lenguaje es un tipo de Inteligencia Artificial que se encarga de detectar los patrones humanos para poder predecir posibles patrones dándole un texto como inicio.
Esto permite que, dado un contexto en particular, el modelo de lenguaje pueda comportarse como uno lo desee. Esa es la idea de esta aplicación, un modelo de lenguaje que se comporta como un chat, y que posee la personalidad que nosotros decidamos para ella.

# Primeros Pasos
Lo primero que se necesita son algunos programas que servirán para poder ejecutar código de Javascript en la computadora, estos son `NodeJS` y `npm`.
Una vez que se tengan esos programas instalados, hacer `Shift+clic derecho` en el escritorio, y seleccionar la opción de `Abrir Powershell Aquí`.

### Powershell
La powershell va a ser la interfaz donde vamos a utilizar `npm`, el mismo permite ejecutar programas específicos de manera más precisa.
Una vez en powershell, ejecutar los siguientes comandos:
```bash
npm -g install npm
```
```bash
npx create-react-app mi-chatbot
```
Una vez ejecutado este comando, se deberán descargar paquetes de React, junto con algunas extensiones.
Ahora debería poder verse una carpeta nueva creada, que contendrá lo básico para poder crear una aplicación de React.
Ahora en powershell, tenemos que movernos dentro de la carpeta, por lo que se debe escribir en Powershell el siguiente comando:
```bash
cd mi-chatbot
```
También pueden abrir ustedes la carpeta para poder ir viendo los contenidos que se encuentran adentro.
Ya casi estamos listos para programar!

### VSCode
VSCode es un editor de texto pensado para programar, posee un sistema liviano y súper extensible.
Abrirlo desde la barra de búsqueda o desde su acceso directo en el escritorio, una vez que se abra, **agarrar la carpeta mi-chatbot que crearon recién y arrástrenlo adentro de la ventana de VSCode**.

Esto les abrirá la carpeta como un proyecto, les permitirá acceder rápidamente al código que vayan a modificar, o crear fácilmente archivos y carpetas nuevas.

Ahora deberían tener todo listo para comenzar a programar, tengan presente tener siempre la ventana de Powershell abierta en la carpeta del proyecto y la ventana de VSCode.

## Dependencias
El comando que ejecutaron en Powershell les creó multitud de cosas en esa carpeta, entre ellas les creó un archivo que se llama `package.json`, que es el encargado de manejar los paquetes externos que ofrecen funcionalidades automatizadas para nosotros. Si la abren desde VSCode, la misma debería tener el siguiente contenido:
```json
{
  "name": "mi-chatbot",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
Es necesario agregar dependencias extras para poder tener todo lo que vamos a necesitar.
En powershell, vamos a ejecutar el siguiente comando:

```bash
npm install axios body-parser cors express marked react-virtualized-auto-sizer react-window styled-components react-markdown buffer
```

Si mantuvieron abierta el archivo en VSCode, ahora se puede ver que el archivo cambió, añadiéndose estas nuevas dependencias que escribimos en Powershell.
Ahora con todas las dependencias listas, ya estamos listos para poder comenzar a programar!

## npm
`npm` funciona como una herramienta para `buildear` el proyecto, esto es tomar el código que está en el mismo y generar una salida que se puede abrir directamente desde el navegador. Ejecutar en Powershell el siguiente comando:

```bash
npm run start
```
Ahora se les debería abrir en un navegador la vista por defecto de una aplicación de React. Pueden minimizar (no cerrar) Powershell así pueden ir actualizando su código y poder ir viendo cómo cambia en el navegador.

# Primeros Pasos
Una página web se compone **siempre** de 3 componentes de código, el HTML (cuya función es indicar la estructura de la página), CSS (cuya función es brindar estilos visuales a la estructura creada en HTML) y Javascript (cuya función es darle interactividad y funcionalidad compleja a la página web).
Lo primero que debemos entender es cómo funciona React por detrás, React intenta transladar toda la lógica de HTML y CSS, utilizando una extensión de Javascript llamada JSX, es lo que utilizaremos para poder construir la página.

React se maneja con una filosofía de diseño basada en **componentes**, la idea es que un componente represente alguna parte de la página, y que los componentes pueden tener componentes adentro, dejando así la idea de poder componer muchos de estos componentes entre sí, para poder reutilizar esos componentes y dar un mejor de orden en el código.
La idea de este proyecto es ir armando poco a poco **componentes** para poder construir algo funcional.

Vamos a comenzar primero con lo que tenemos ahora, dentro de la carpeta `src` hay un archivo llamado `App.js`, que tiene el siguiente contenido:
```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

En `VSCode`, lo primero que vamos a hacer es crear una carpeta `pages`, haciendo clic derecho en la carpeta de `src`,  y haciendo clic en `Crear carpeta`, luego, en `pages` hacemos clic derecho y seleccionamos `Crear archivo`, cuando elijan el nombre, escriban `Example.js`. Les creará un nuevo archivo vacío con ese nombre.

Dentro de `Example.js` pondrán el siguiente fragmento de código:

```js
const Example = () => {
};

export default Example;
```

Este es un archivo básico que representará la página principal de nuestro chatbot.
Notar que arriba se utilizan palabras como `import` para poder obtener funcionalidades de las librerías que instalamos, también podemos importar componentes propios, que es lo que iremos haciendo a lo largo del proyecto.

Ahora en el archivo `App.js`, vamos a eliminar un poco de contenido para poder luego poner el nuestro:
```js
-- BORRAR LAS SIGUIENTES LÍNEAS -------------------------------
import logo from './logo.svg';
import './App.css';
---------------------------------------------------------------

function App() {
-- BORRAR LAS SIGUIENTES LÍNEAS -------------------------------
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
---------------------------------------------------------------
}
```

Al inicio del archivo, vamos a usar un `import` para poder obtener el componente de `Example.js`:
```js
import Example from './pages/Example';

function App() {
}
```

Una vez que tenemos el componente importado, ahora podemos utilizarlo en nuestro código:

```js
import Example from './pages/Example';

function App() {
  return (
    <Example />
  );
}
```
Bien, ahora nuestro foco va a ser crear los distintos componentes para ir armando una interfaz básica.

## Primer Interfaz
Ahora viene la parte interesante, vamos a crear distintos componentes, que aceptan otros componentes, hasta poder crear una interfaz funcional básica.
Primero vamos a crear una nueva carpeta en `src`, llamada `components`, luego, adentro de `components` vamos a crear muchas carpetas llamada `body`, `buttons`, `textInput`, `textOutput` y `utils`.
En la carpeta `utils`, vamos a crear un componente nuevo: `colorPalette.js`:
```js
const colors = {
    primaryButton: '#2E8B57',
    primaryButtonHover: '#1F6F4C',
    secondaryButton: '#20B2AA',
    secondaryButtonHover: '#1C9D94',
    primaryColor: '#F9F9F9',
    secondaryColor: '#A57BC2',
    textPrimary: '#FFFFFF',
    textSecondary: '#7F8C8D',
    accentColor: '#008080',
    cardPrimary: '#FFFFFF'
};

export default colors;
```

Luego, en la carpeta `body`, vamos a crear los siguientes componentes:

* `MainBody.js`:
```js
import styled from "styled-components"
import colors from "../utils/colorPalette"

const MainBody = styled.main`
  background-color: ${colors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
`;

export default MainBody;
```

* `Header.js`:
```js
import styled from "styled-components"
import colors from "../utils/colorPalette"

const Header = styled.header`
  background-color: ${colors.secondaryColor};
  color: ${colors.primaryColor};
  padding: 20px 0px 20px 0px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export default Header;
```

En la carpeta `buttons`, vamos a crear el siguiente componente:

* `submitButton.js`:
```js
import styled from "styled-components";
import colors from "../utils/colorPalette";

const SubmitButton = styled.button`
  padding: 9px 18px;
  background-color: ${colors.primaryButton};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: ${colors.primaryButtonHover};
  }
`;

export default SubmitButton;
```

En la carpeta `textInput`, creamos el siguiente componente:

* `textInputForm.js`:
```js
import styled from "styled-components";
import colors from "../utils/colorPalette";

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px 0px 20px 0px;
`;

const InputField = styled.textarea`
  padding: 10px;
  margin: 0 10px 0;
  width: 300px;
  border: 2px solid ${colors.accentColor};
  border-radius: 18px;
  font-size: 12px;
  &:focus {
    outline: none;
    border-color: ${colors.accentColor};
  }
`;

export {FormContainer, InputField};
```

En la carpeta `textOutput`, creamos los siguientes componentes:

* `MessageBubble.js`:
```js
import colors from "../utils/colorPalette";
import styled from "styled-components";

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 10px 0 10px;
`;

const BubbleBase = styled.div`
  color: white;
  padding: 10px 15px;
  display: inline-block;
  max-width: 70%;
  word-wrap: break-word;
  border-radius: 15px;
`;

const SenderBubble = styled(BubbleBase)`
  background-color: ${colors.primaryButton};
  border-radius: 15px 15px 0 15px;
  margin-left: auto;
  margin-right: 15px;
`;

const ReceiverBubble = styled(BubbleBase)`
  background-color: ${colors.secondaryColor};
  color: white;
  border-radius: 15px 15px 15px 0;
  padding: 10px 15px;
  display: inline-block;
  max-width: 70%;
  margin-right: auto;
  margin-left: 15px;
  word-wrap: break-word;
`;

export {BubbleContainer, SenderBubble, ReceiverBubble}
```

* `conversationCard.js`:
```js
import colors from "../utils/colorPalette";
import styled from "styled-components";

const conversationCard = styled.div`
    background-color: ${colors.cardPrimary};
    border: none;
    border-radius: 8px;
    margin-top: 20px;
    width: 80%;
    height: 100%;
    position: relative;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    text-align: center;
    overflow-y: auto;
`;

export default conversationCard;
```

Ahora que tenemos todos estos componentes, los podemos poner todos en nuestro componente principal `Example.js`:
```js
const Example = () => {
};

export default Example;

```

Primero importamos todos los componentes que vamos a utilizar:

```js
// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { useState, useRef, useEffect, useCallback } from 'react';
import { VariableSizeList as List } from 'react-window';
import { FormContainer, InputField } from '../components/textInput/textInputForm';
import SubmitButton from '../components/buttons/submitButton';
import Header from '../components/body/Header';
import MainBody from '../components/body/MainBody';
import ConversationCard from '../components/textOutput/conversationCard';
import { BubbleContainer, SenderBubble, ReceiverBubble } from '../components/textOutput/MessageBubble';
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Example = () => {
};

export default Example;
```

Luego, vamos a generar nuevas variables para poder utilizar adentro de nuestro componente.
La idea de estas variables es mantener un seguimiento del estado de la interfaz, ya que debemos definir cómo se comportan todos esos componentes interactivamente:

```js
import { useState, useRef, useEffect, useCallback } from 'react';
import { VariableSizeList as List } from 'react-window';
import { FormContainer, InputField } from '../components/textInput/textInputForm';
import SubmitButton from '../components/buttons/submitButton';
import Header from '../components/body/Header';
import MainBody from '../components/body/MainBody';
import ConversationCard from '../components/textOutput/conversationCard';
import { BubbleContainer, SenderBubble, ReceiverBubble } from '../components/textOutput/MessageBubble';

const Example = () => {
// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const conversationRef = useRef(null);
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        setMessages([...messages, { text: inputValue, isSender: true }]);
        setInputValue("");
      }
    };
    useEffect(() => {
        if (conversationRef.current) {
          conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
        }
      }, [messages]);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
};

export default Example;
```

Finalmente, podemos poner debajo la forma de la interfaz que va a tener esta página:

```js
import { useState, useRef, useEffect, useCallback } from 'react';
import { FormContainer, InputField } from '../components/textInput/textInputForm';
import SubmitButton from '../components/buttons/submitButton';
import Header from '../components/body/Header';
import MainBody from '../components/body/MainBody';
import ConversationCard from '../components/textOutput/conversationCard';
import { BubbleContainer, SenderBubble, ReceiverBubble } from '../components/textOutput/MessageBubble';

const Example = () => {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const conversationRef = useRef(null);
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        setMessages([...messages, { text: inputValue, isSender: true }]);
        setInputValue("");
      }
    };
    useEffect(() => {
        if (conversationRef.current) {
          conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
        }
      }, [messages]);

// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    return(
        <MainBody>
            <Header>Hola mundo</Header>
            <ConversationCard ref={conversationRef}>
                {messages.length === 0 ? (
                    <p>No messages yet.</p>
                ) : (
                    messages.map((msg, index) => (
                        <BubbleContainer key={index}>
                            {msg.isSender ? ( <><SenderBubble>{msg.text}</SenderBubble> <ReceiverBubble>...</ReceiverBubble></> ) : ( <ReceiverBubble>{msg.text}</ReceiverBubble>)}
                        </BubbleContainer>
                    ))
                )}
            </ConversationCard>
        </MainBody>
    );
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
};

export default Example;
```
Con esta primer componente, deberíamos ver una interfaz vacía sin siquiera un mensaje. Si vamos añadiendo más componentes de los que fuimos creando, veremos que toma una forma más completa ahora.

```js
import { useState, useRef, useEffect, useCallback } from 'react';
import { FormContainer, InputField } from '../components/textInput/textInputForm';
import SubmitButton from '../components/buttons/submitButton';
import Header from '../components/body/Header';
import MainBody from '../components/body/MainBody';
import ConversationCard from '../components/textOutput/conversationCard';
import { BubbleContainer, SenderBubble, ReceiverBubble } from '../components/textOutput/MessageBubble';

const Example = () => {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const conversationRef = useRef(null);
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        setMessages([...messages, { text: inputValue, isSender: true }]);
        setInputValue("");
      }
    };
    useEffect(() => {
        if (conversationRef.current) {
          conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
        }
      }, [messages]);
};

    return(
        <MainBody>
            <Header>Hola mundo</Header>
            <ConversationCard ref={conversationRef}>
                {messages.length === 0 ? (
                    <p>No messages yet.</p>
                ) : (
                    messages.map((msg, index) => (
                        <BubbleContainer key={index}>
                            {msg.isSender ? ( <><SenderBubble>{msg.text}</SenderBubble> <ReceiverBubble>...</ReceiverBubble></> ) : ( <ReceiverBubble>{msg.text}</ReceiverBubble>)}
                        </BubbleContainer>
                    ))
                )}
            </ConversationCard>
// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            <FormContainer onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    placeholder="Enter your text here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <SubmitButton type="submit">Submit</SubmitButton>
            </FormContainer>
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        </MainBody>
    );
};

export default Example;
```
Si vemos ahora el navegador, vamos a ver que ahora tenemos una interfaz minimal con un comportamiento básico.
Ahora nos va a interesar agregar comportamiento complejo, pues esto no hace nada importante todavía.

## Añadiendo sobre lo trabajado
Una de las partes importantes de desarrollar un proyecto es construir sobre lo añadido, nuestro foco ahora va a estar en añadir sobre esta base las cosas que nos interesan y que le van a dar la verdadera funcionalidad!

Lo primero que vamos a hacer es agregar la conexión con la API de OpenAI
Para poder comunicarnos con esa API, debemos crear código especialmente preparado para poder realizar esas conexiones mediante la Web.

En la carpeta `src`, vamos a crear una nueva carpeta llamada `services`, donde crearemos el siguiente archivo:

* `apiStore.js`:
```js
const express = require('express');
const axios = require('axios');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;
const CHATBOT_URL = 'https://apicursocolegiosv2.calmglacier-4e27b0b4.brazilsouth.azurecontainerapps.io';

app.use(express.json());
app.use(cors());

app.post('/chat', async (req, res) => {
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
        const stringResponse = Buffer.from(response.data).toString('utf-8');
        const jsonResponse = JSON.parse(stringResponse);
        if (jsonResponse.hasOwnProperty('contentType') && jsonResponse.contentType === 'TEXT') {
            //texto o markdown
            res.json({
                responseType: 'TEXT',
                content: jsonResponse.content
            });
        } else if (jsonResponse.hasOwnProperty('responseType') && jsonResponse.responseType === 'IMAGE') {
            res.json({
                content: 'No tengo la capacidad de mostrar imágenes todavía',
                responseType: 'IMAGE'
            });
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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```
Ahora que tenemos este pequeño módulo para manejar la conexión con OpenAI, vamos a integrarlo en nuestra interfaz:

* `Example.js`:
```js
import { useState, useRef, useEffect, useCallback } from 'react';
import { FormContainer, InputField } from '../components/textInput/textInputForm';
import SubmitButton from '../components/buttons/submitButton';
import Header from '../components/body/Header';
import MainBody from '../components/body/MainBody';
import ConversationCard from '../components/textOutput/conversationCard';
import { BubbleContainer, SenderBubble, ReceiverBubble } from '../components/textOutput/MessageBubble';
// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import axios from 'axios';

const RESPONSE_ID = Math.floor(Math.random()*100000000);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const Example = () => {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const conversationRef = useRef(null);
/* BORRO -----------------------------------------------------------------
    const handleSubmit = (e) => {
// ----------------------------------------------------------------------- */
// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const handleSubmit = async (e) => {
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      e.preventDefault();
      if (inputValue.trim()) {
        setMessages([...messages, { text: inputValue, isSender: true }]);
        setInputValue("");
// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        try {
            const response = await axios.post('http://localhost:3001/chat', {
                ID: (RESPONSE_ID).toString(),
                personality: 'Default personality',
                message: inputValue
            });
            const { responseType, content } = response.data;
            setMessages(prevMessages => [...prevMessages, { text: content, isSender: false, responseType: responseType }]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      }
    };
    useEffect(() => {
        if (conversationRef.current) {
          conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
        }
      }, [messages]);
};

    return(
        <MainBody>
            <Header>Hola mundo</Header>
            <ConversationCard ref={conversationRef}>
                {messages.length === 0 ? (
                    <p>No messages yet.</p>
                ) : (
                    messages.map((msg, index) => (
                        <BubbleContainer key={index}>
// BORRO -------------------------------------------------------------------------------------------------------------------------------------
                            {msg.isSender ? ( <><SenderBubble>{msg.text}</SenderBubble> <ReceiverBubble>...</ReceiverBubble></> ) : ( <ReceiverBubble>{msg.text}</ReceiverBubble>)}
// ------------------------------------------------------------------------------------------------------------------------------------------
// AGREGO +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                            {msg.isSender ? ( <SenderBubble>{msg.text}</SenderBubble> ): ( <ReceiverBubble>{msg.text}</ReceiverBubble>)}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                        </BubbleContainer>
                    ))
                )}
            </ConversationCard>
            <FormContainer onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    placeholder="Enter your text here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <SubmitButton type="submit">Submit</SubmitButton>
            </FormContainer>
        </MainBody>
    );
};

export default Example;
```
Esto permite realizar llamados vía la web, para que funcione de verdad, es necesario ejecutar por detrás el servicio recién creado.
Abrimos otra ventana de Powershell dentro de la carpeta `services`, y ejecutamos el siguiente comando:
```bash
node apiStore.js
```
Con estos cambios, ahora si se envía un mensaje a través del chat, la respuesta provendrá de OpenAI!
Con esto, ya se tiene la gran funcionalidad que queremos para nuestro chatbot, ahora nos vamos a enfocar en aumentar sus capacidades para que sea una herramienta más útil.

## Próximo paso
Ahora toca agregar más soporte de funcionalidades, vamos a agregar soporte de un tipo de texto especial (Markdown) e imágenes:
Vamos a modificar los siguientes archivos:

* `MessageBubble.js`:
```js
import colors from "../utils/colorPallete";
import styled from "styled-components";
// AGREGO +++++++++++++++++++++++++++++++++++++++++++++++
import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 10px 0 10px;
`;

const BubbleBase = styled.div`
  color: white;
  padding: 10px 15px;
  display: inline-block;
  max-width: 70%;
  word-wrap: break-word;
  border-radius: 15px;
`;

// BORRO --------------------------------------------------------
//const SenderBubble = styled(BubbleBase)`
// --------------------------------------------------------------
// AGREGO +++++++++++++++++++++++++++++++++++++++++++++++++++++++
const StyledSenderBubble = styled(BubbleBase)`
  color: ${colors.textPrimary};
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  background-color: ${colors.primaryButton};
  border-radius: 15px 15px 0 15px;
  margin-left: auto;
  margin-right: 15px;
`;

// BORRO --------------------------------------------------------
//const ReceiverBubble = styled(BubbleBase)`
// --------------------------------------------------------------
// AGREGO +++++++++++++++++++++++++++++++++++++++++++++++++++++++
const StyledReceiverBubble = styled(BubbleBase)`
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  background-color: ${colors.secondaryColor};
// BORRO --------------------------------------------------------
  color: white;
// --------------------------------------------------------------
// AGREGO +++++++++++++++++++++++++++++++++++++++++++++++++++++++
  color: ${colors.textPrimary};
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  border-radius: 15px 15px 15px 0;
  padding: 10px 15px;
  display: inline-block;
  max-width: 70%;
  margin-right: auto;
  margin-left: 15px;
  word-wrap: break-word;
// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++
  p, ul, ol, code, pre {
    margin: 0;
    color: inherit;
    font-family: inherit;
  }
  img {
    max-width: 400px;
    border-radius: 15px;
  }
  pre {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 5px;
    border-radius: 8px;
    position: relative;
    z-index: 1;
  }
  code {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 2px 4px;
    border-radius: 4px;
    color: ${colors.textSecondary};
    font-family: 'Courier New', Courier, monospace;
    position: relative;
    z-index: 2;
  }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
`;

// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++
const SenderBubble = memo((props) => {
  return <StyledSenderBubble {...props} />;
});

const ReceiverBubble = memo(({ content, handleLoad, responseType }) => {
  const renderContent = () => {
    if (responseType === 'IMAGE') {
      return <img src={content} onLoad={handleLoad} alt="Response" />;
    }

    else if (responseType === 'TEXT') {
        return (
        <ReactMarkdown components={{ p: 'span', h1: 'strong', img: 'img' }}>
          {content}
        </ReactMarkdown>
        );
    }
    return null;
  };

    return <StyledReceiverBubble>{renderContent()}</StyledReceiverBubble>;
});
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

export {BubbleContainer, SenderBubble, ReceiverBubble}
```

* `Example.js`:
```js
import { useState, useRef, useEffect, useCallback } from 'react';
import { FormContainer, InputField } from '../components/textInput/textInputForm';
import SubmitButton from '../components/buttons/submitButton';
import Header from '../components/body/Header';
import MainBody from '../components/body/MainBody';
import ConversationCard from '../components/textOutput/conversationCard';
import { BubbleContainer, SenderBubble, ReceiverBubble } from '../components/textOutput/MessageBubble';
import axios from 'axios';

const RESPONSE_ID = Math.floor(Math.random()*100000000);

const Example = () => {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
// BORRO ----------------------------------------------------------
    const conversationRef = useRef(null);
// ----------------------------------------------------------------
// AGREGO +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const listRef = useRef();
    const rowHeights = useRef({});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        setMessages([...messages, { text: inputValue, isSender: true }]);
        setInputValue("");
        try {
            const response = await axios.post('/chat', {
                ID: (RESPONSE_ID).toString(),
                personality: 'Default personality',
                message: inputValue
            });
            const { responseType, content } = response.data;
            setMessages(prevMessages => [...prevMessages, { text: content, isSender: false, responseType: responseType }]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
      }
    };
// BORRO --------------------------------------------------------
    useEffect(() => {
        if (conversationRef.current) {
          conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
        }
      }, [messages]);
};
// --------------------------------------------------------------
// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const handleImageLoad = (index) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[index].imageLoaded = true;
        return updatedMessages;
      });
    };

    const getRowHeight = useCallback((index) => {
        return rowHeights.current[index] ? rowHeights.current[index] + 20 : 100;
    }, []);

    const Row = ({ index, style }) => {
        const msg = messages[index];
        const rowRef = useRef();
        useEffect(() => {
            if (rowRef.current) {
                const height = rowRef.current.getBoundingClientRect().height;
                rowHeights.current[index] = height;
                listRef.current.resetAfterIndex(index);
            }
        }, [index, msg, msg.imageLoaded]);
        return (
            <div style={style}>
                <div ref={rowRef}>
                    <BubbleContainer key={index}>
                        {msg.isSender ? (
                            <SenderBubble>{msg.text}</SenderBubble>
                        ) : (
                            <ReceiverBubble content={msg.text} responseType={msg.responseType} handleLoad={() => handleImageLoad(index)}/>
                        )}
                    </BubbleContainer>
                </div>
            </div>
        );
    };
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    return(
        <MainBody>
            <Header>Hola mundo</Header>
// BORRO -------------------------------------------------------------------
            <ConversationCard ref={conversationRef}>
                {messages.length === 0 ? (
                    <p>No messages yet.</p>
                ) : (
                    messages.map((msg, index) => (
                        <BubbleContainer key={index}>
                            {msg.isSender ? ( <SenderBubble>{msg.text}</SenderBubble> ) : ( <ReceiverBubble>{msg.text}</ReceiverBubble>)}
                        </BubbleContainer>
                    ))
                )}
            </ConversationCard>
// -------------------------------------------------------------------------
// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            <ConversationCard>
                <List
                    height={700}
                    itemCount={messages.length}
                    itemSize={getRowHeight}
                    width={'100%'}
                    ref={listRef}
                >
                    {Row}
                </List>
            </ConversationCard>
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            <FormContainer onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    placeholder="Enter your text here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <SubmitButton type="submit">Submit</SubmitButton>
            </FormContainer>
        </MainBody>
    );
};

export default Example;
```

Finalmente, nuestra interfaz está lista para soportar imágenes, ahora sólo basta con modificar nuestro servicio para que lo pueda tomar:
* `apiStore.js`:
```js
const express = require('express');
const axios = require('axios');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;
const CHATBOT_URL = 'https://apicursocolegiosv2.calmglacier-4e27b0b4.brazilsouth.azurecontainerapps.io';

app.use(express.json());
app.use(cors());

app.post('/chat', async (req, res) => {
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
        const stringResponse = Buffer.from(response.data).toString('utf-8');
        const jsonResponse = JSON.parse(stringResponse);
        if (jsonResponse.hasOwnProperty('contentType') && jsonResponse.contentType === 'TEXT') {
            //texto o markdown
            res.json({
                responseType: 'TEXT',
                content: jsonResponse.content
            });
// BORRO ------------------------------------------------------------------
        } else if (jsonResponse.hasOwnProperty('responseType') && jsonResponse.responseType === 'IMAGE') {
            res.json({
                content: 'No tengo la capacidad de mostrar imágenes todavía',
                responseType: 'IMAGE'
            });
// ------------------------------------------------------------------------
// AGREGO +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        } else if (jsonResponse.hasOwnProperty('responseType') && jsonResponse.responseType === 'IMAGE') {
            //url
            if(typeof jsonResponse.body === 'string' && jsonResponse.body.startsWith('http')){
                res.json({
                    responseType: 'IMAGE',
                    content: jsonResponse.body
                });
            } else {
            //base64
                const imageBase64 = Buffer.from(jsonResponse.body).toString('base64');
                res.json({
                    responseType: 'IMAGE',
                    content: `data:image/png;base64,${imageBase64}`
                });
            }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```
Una vez hechos estos cambios, cerrar la ventana de Powershell donde estaba ejecutándse el comando de `node apiStore.js` (u oprimir Ctrl+C) y volver a ejecutarlo para que ejecute el servicio con el código actualizado.

¡Muy bien! Ya casi estamos finalizando el instructivo, se puede ver claramente cómo fuimos incrementalmente aumentando las capacidades de nuestro chatbot, y ahora es algo muy parecido a la propia ChatGPT.

## Cambiar y setear la personalidad
Ahora vamos a ir un poco más allá. ¿Qué les parecería poder determinar la personalidad del chatbot a nuestra discreción? Esto puede ser una funcionalidad muy útil, podemos hacer que hable con dialectos específicos, que se comporte como un empleado de un rubro en particular, etcétera.
Para poder hacer funcionar esto, vamos a reutilizar un componente que ya creamos, y le daremos comportamiento especial para poder lograr que genere la personalidad específica que queremos.

* `Example.js`:
```js
import { useState, useRef, useEffect, useCallback } from 'react';
import { FormContainer, InputField } from '../components/textInput/textInputForm';
import SubmitButton from '../components/buttons/submitButton';
import Header from '../components/body/Header';
import MainBody from '../components/body/MainBody';
import ConversationCard from '../components/textOutput/conversationCard';
import { BubbleContainer, SenderBubble, ReceiverBubble } from '../components/textOutput/MessageBubble';
import axios from 'axios';

const RESPONSE_ID = Math.floor(Math.random()*100000000);

const Example = () => {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
// AGREGO +++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const [personalityValue, setPersonalityValue] = useState("");
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const listRef = useRef();
    const rowHeights = useRef({});

    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        setMessages([...messages, { text: inputValue, isSender: true }]);
        setInputValue("");
        try {
            const response = await axios.post('/chat', {
                ID: (RESPONSE_ID).toString(),
// BORRO --------------------------------------------------------
                personality: 'Default personality',
// --------------------------------------------------------------
// AGREGO +++++++++++++++++++++++++++++++++++++++++++++++++++++++
                personality: personalityValue === "" ? 'Default Personality' : personalityValue,
// AGREGO +++++++++++++++++++++++++++++++++++++++++++++++++++++++
                message: inputValue
            });
            const { contentType, content } = response.data;
            if (contentType === 'TEXT') {
                setMessages(prevMessages => [...prevMessages, { text: content, isSender: false, responseType: contentType }]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
      }
    };
    const handleImageLoad = (index) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[index].imageLoaded = true;
        return updatedMessages;
      });
    };

    const getRowHeight = useCallback((index) => {
        return rowHeights.current[index] ? rowHeights.current[index] + 20 : 100;
    }, []);

    const Row = ({ index, style }) => {
        const msg = messages[index];
        const rowRef = useRef();
        useEffect(() => {
            if (rowRef.current) {
                const height = rowRef.current.getBoundingClientRect().height;
                rowHeights.current[index] = height;
                listRef.current.resetAfterIndex(index);
            }
        }, [index, msg, msg.imageLoaded]);
        return (
            <div style={style}>
                <div ref={rowRef}>
                    <BubbleContainer key={index}>
                        {msg.isSender ? (
                            <SenderBubble>{msg.text}</SenderBubble>
                        ) : (
                            <ReceiverBubble content={msg.text} responseType={msg.responseType} handleLoad={() => handleImageLoad(index)}/>
                        )}
                    </BubbleContainer>
                </div>
            </div>
        );
    };

    return(
        <MainBody>
            <Header>Hola mundo</Header>
// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            <InputField
                type="text"
                placeholder="¿Qué personalidad tengo?"
                value={personalityValue}
                onChange={(e) => setPersonalityValue(e.target.value)}
            />
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            <ConversationCard>
                <List
                    height={700}
                    itemCount={messages.length}
                    itemSize={getRowHeight}
                    width={'100%'}
                    ref={listRef}
                >
                    {Row}
                </List>
            </ConversationCard>
            <FormContainer onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    placeholder="Enter your text here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <SubmitButton type="submit">Submit</SubmitButton>
            </FormContainer>
        </MainBody>
    );
};

export default Example;
```
Con esto añadido, ¡Ahora nuestro chatbot puede tomar la personalidad que nosotros elijamos!
Prueben pidiéndole que tome nuestro dialecto Argentino, por ejemplo.

## Texto a Voz
Como última funcionalidad para el curso de hoy, vamos a generar voz a partir de texto utilizando Inteligencia Artificial también.
La idea será poder solicitar que el mensaje que nos devuelve nuestro chatbot también pueda estar en formato de audio.

Para lograr esto, lo que vamos a hacer es agregar un botón extra que provea esta funcionalidad extra.
Antes que eso, es necesario añadirle soporte al servicio para poder realizar este tipo de llamadas:

* `apiStore.js`:
```js
const express = require('express');
const axios = require('axios');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;
const CHATBOT_URL = 'https://apicursocolegiosv2.calmglacier-4e27b0b4.brazilsouth.azurecontainerapps.io';

app.use(express.json());
app.use(cors());

app.post('/chat', async (req, res) => {
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
        const stringResponse = Buffer.from(response.data).toString('utf-8');
        const jsonResponse = JSON.parse(stringResponse);
        if (jsonResponse.hasOwnProperty('contentType') && jsonResponse.contentType === 'TEXT') {
            //texto o markdown
            res.json({
                responseType: 'TEXT',
                content: jsonResponse.content
            });
        } else if (jsonResponse.hasOwnProperty('responseType') && jsonResponse.responseType === 'IMAGE') {
            //url
            if(typeof jsonResponse.body === 'string' && jsonResponse.body.startsWith('http')){
                res.json({
                    responseType: 'IMAGE',
                    content: jsonResponse.body
                });
            } else {
            //base64
                const imageBase64 = Buffer.from(jsonResponse.body).toString('base64');
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

// AGREGO +++++++++++++++++++++++++++++++++++++++++++++++++++++
app.post('/text-to-speech', async (req, res) => {
    //audio
    const { ID, personality, message } = req.body;
    try {
        const response = await axios.post(`${CHATBOT_URL}/text-to-speech`, {
            ID,
            personality,
            message
        }, {
            responseType: 'arraybuffer'
        });
        const audioData64 = Buffer.from(response.data).toString('base64');
        const audioDataUri = `data:audio/ogg;base64,${audioData64}`;

        res.json({
            responseType: 'AUDIO',
            content: audioDataUri
        });
    } catch (error) {
        console.error('Error communicating with the text-to-speech service:', error);
        res.status(500).json({ error: 'Error communicating with the text-to-speech service' });
    }
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

Una vez que tenemos eso, reniciamos el servicio como lo hicimos antes.
Ahora sólo queda agregar el comportamiento en la aplicación:

* `MessageBubble.js`:
```js
import colors from "../utils/colorPallete";
import styled from "styled-components";
import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 10px 0 10px;
`;

const BubbleBase = styled.div`
  color: white;
  padding: 10px 15px;
  display: inline-block;
  max-width: 70%;
  word-wrap: break-word;
  border-radius: 15px;
`;

const StyledSenderBubble = styled(BubbleBase)`
  color: ${colors.textPrimary};
  background-color: ${colors.primaryButton};
  border-radius: 15px 15px 0 15px;
  margin-left: auto;
  margin-right: 15px;
`;

const StyledReceiverBubble = styled(BubbleBase)`
  background-color: ${colors.secondaryColor};
  color: ${colors.textPrimary};
  border-radius: 15px 15px 15px 0;
  padding: 10px 15px;
  display: inline-block;
  max-width: 70%;
  margin-right: auto;
  margin-left: 15px;
  word-wrap: break-word;
  p, ul, ol, code, pre {
    margin: 0;
    color: inherit;
    font-family: inherit;
  }
  img {
    max-width: 400px;
    border-radius: 15px;
  }
  pre {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 5px;
    border-radius: 8px;
    position: relative;
    z-index: 1;
  }
  code {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 2px 4px;
    border-radius: 4px;
    color: ${({ theme }) => theme.textSecondary};
    font-family: 'Courier New', Courier, monospace;
    position: relative;
    z-index: 2;
  }
`;

const SenderBubble = memo((props) => {
  return <StyledSenderBubble {...props} />;
});

const ReceiverBubble = memo(({ content, handleLoad, responseType }) => {
  const renderContent = () => {
    if (responseType === 'IMAGE') {
      return <img src={content} onLoad={handleLoad} alt="Response" />;
    }
    else if (responseType === 'TEXT') {
        return (
        <ReactMarkdown components={{ p: 'span', h1: 'strong', img: 'img' }}>
          {content}
        </ReactMarkdown>
        );
    }
// AGREGO +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    else if (responseType === 'AUDIO') {
      return (
        <audio controls>
          <source src={content} type="audio/ogg" />
          El browser no soporta el formato de audio!
        </audio>
      );
    }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    return null;
  };

    return <StyledReceiverBubble>{renderContent()}</StyledReceiverBubble>;
});

export {BubbleContainer, SenderBubble, ReceiverBubble}
```

* `Example.js`:
```js
import { useState, useRef, useEffect, useCallback } from 'react';
import { FormContainer, InputField } from '../components/textInput/textInputForm';
import SubmitButton from '../components/buttons/submitButton';
import Header from '../components/body/Header';
import MainBody from '../components/body/MainBody';
import ConversationCard from '../components/textOutput/conversationCard';
import { BubbleContainer, SenderBubble, ReceiverBubble } from '../components/textOutput/MessageBubble';
import axios from 'axios';

const RESPONSE_ID = Math.floor(Math.random()*100000000);

const Example = () => {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [personalityValue, setPersonalityValue] = useState("");
    const listRef = useRef();
    const rowHeights = useRef({});

    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        setMessages([...messages, { text: inputValue, isSender: true }]);
        setInputValue("");
        try {
            const response = await axios.post('/chat', {
                ID: (RESPONSE_ID).toString(),
                personality: personalityValue === "" ? 'Default Personality' : personalityValue,
                message: inputValue
            });
            const { responseType, content } = response.data;
            setMessages(prevMessages => [...prevMessages, { text: content, isSender: false, responseType: responseType }]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
      }
    };
// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const handleTextToSpeech = async (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        setMessages([...messages, { text: inputValue, isSender: true }]);
        setInputValue("");
        try {
            const response = await axios.post('http://localhost:3001/text-to-speech', {
                ID: (RESPONSE_ID).toString(),
                personality: personalityValue === "" ? 'Default Personality' : personalityValue,
                message: inputValue
            });
            const { responseType, content } = response.data;
            setMessages(prevMessages => [...prevMessages, { text: content, isSender: false, responseType: responseType }]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
      }
    };
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const handleImageLoad = (index) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[index].imageLoaded = true;
        return updatedMessages;
      });
    };

    const getRowHeight = useCallback((index) => {
        return rowHeights.current[index] ? rowHeights.current[index] + 20 : 100;
    }, []);

    const Row = ({ index, style }) => {
        const msg = messages[index];
        const rowRef = useRef();
        useEffect(() => {
            if (rowRef.current) {
                const height = rowRef.current.getBoundingClientRect().height;
                rowHeights.current[index] = height;
                listRef.current.resetAfterIndex(index);
            }
        }, [index, msg, msg.imageLoaded]);
        return (
            <div style={style}>
                <div ref={rowRef}>
                    <BubbleContainer key={index}>
                        {msg.isSender ? (
                            <SenderBubble>{msg.text}</SenderBubble>
                        ) : (
                            <ReceiverBubble content={msg.text} responseType={msg.responseType} handleLoad={() => handleImageLoad(index)}/>
                        )}
                    </BubbleContainer>
                </div>
            </div>
        );
    };

    return(
        <MainBody>
            <Header>Hola mundo</Header>
            <InputField
                type="text"
                placeholder="¿Qué personalidad tengo?"
                value={personalityValue}
                onChange={(e) => setPersonalityValue(e.target.value)}
            />
            <ConversationCard>
                <List
                    height={700}
                    itemCount={messages.length}
                    itemSize={getRowHeight}
                    width={'100%'}
                    ref={listRef}
                >
                    {Row}
                </List>
            </ConversationCard>
            <FormContainer onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    placeholder="Enter your text here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <SubmitButton type="submit">Submit</SubmitButton>
// AGREGO ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                <SubmitButton type="button" onClick={handleTextToSpeech}>¡Text-To-Speech!</SubmitButton>
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            </FormContainer>
        </MainBody>
    );
};

export default Example;
```

¡Listo! Con eso ya tenemos todo lo que les queríamos mostrar hoy. Espero que les haya servido como una introducción a cómo se siente el desarrollo de una aplicación.
