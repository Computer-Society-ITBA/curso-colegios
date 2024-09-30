import { useState, useRef, useEffect } from 'react';
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
      </ConversationCard >
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