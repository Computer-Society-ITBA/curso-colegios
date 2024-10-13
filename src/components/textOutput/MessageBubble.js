import { useTheme } from "../utils/ThemeContext";
import styled from "styled-components";
import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';

// BubbleContainer and BubbleBase remain the same

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  margin: 10px 0;
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
  background-color: ${({ theme }) => theme.primaryButton}; 
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 15px 15px 0 15px; 
  margin-left: auto; 
  margin-right: 15px;
`;

const StyledReceiverBubble = styled(BubbleBase)`
  background-color: ${({ theme }) => theme.secondaryColor}; 
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 15px 15px 15px 0; 
  margin-right: auto; 
  margin-left: 15px;

  p, ul, ol, code, pre {
    margin: 0;
    color: inherit;
    font-family: inherit;
  }

  img {
    max-width: 100%;
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
  const { colors } = useTheme();
  return <StyledSenderBubble theme={colors} {...props} />;
});

const ReceiverBubble = memo(({ content, imageBytes }) => {
  const { colors } = useTheme();

  const bytesToBase64 = (bytes) => {
    const binary = String.fromCharCode(...bytes);
    return `data:image/png;base64,${btoa(binary)}`;
  };

  const renderContent = () => {
    if (typeof content === 'string') {
      if (content.startsWith('data:image/')) {
        return <img src={content} alt="Response" />;
      } else {
        return <ReactMarkdown
          components={{
            p: 'span',
            h1: 'strong',
            img: 'img',
          }}
        >
          {content}
        </ReactMarkdown>;
      }
    } else if (imageBytes) {
      return <img src={bytesToBase64(imageBytes)} alt="Response" />;
    }
    return null;
  };

  return <StyledReceiverBubble theme={colors}>{renderContent()}</StyledReceiverBubble>;
});

export { BubbleContainer, SenderBubble, ReceiverBubble };
