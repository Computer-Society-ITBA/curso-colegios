import { useState, useRef, useEffect, useCallback } from 'react';
import { FormContainer, InputField } from '../components/textInput/textInputForm';
import SubmitButton from '../components/buttons/submitButton';
import Header from '../components/body/Header';
import MainBody from '../components/body/MainBody';
import { BubbleContainer, SenderBubble, ReceiverBubble } from '../components/textOutput/MessageBubble';
import { ThemeProvider } from '../components/utils/ThemeContext';
import ColorPicker from '../components/colorPickers/ColorPicker';
import { VariableSizeList as List } from 'react-window';  
import ConversationCard from '../components/textOutput/conversationCard';

const Example = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState(""); 
  const listRef = useRef();
  const rowHeights = useRef({});

  

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isSender: true, imageBytes: null }]);
      setInputValue("");
    }
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
    }, [index, msg]);

    return (
      <div style={style}>
        <div ref={rowRef}>
          <BubbleContainer key={index}>
            {msg.isSender ? (
              <SenderBubble>{msg.text}</SenderBubble>
            ) : (
              <ReceiverBubble content={msg.text} imageBytes={msg.imageBytes} />
            )}
          </BubbleContainer>
        </div>
      </div>
    );
  };

  return (
    <ThemeProvider>
      <MainBody>
        <Header>Hola mundo</Header>
        <div style={{display:'flex', justifyContent:'flex-start', gap:'20px', width:'100%', height:'100%', alignItems:'center'}}>
          <ColorPicker />
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
        </div>

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
    </ThemeProvider>
  );
};

export default Example;

