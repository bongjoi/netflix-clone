import React from 'react';
import { Accordion } from '../components';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>자주 묻는 질문</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.question}</Accordion.Header>
          <Accordion.Body>{item.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
