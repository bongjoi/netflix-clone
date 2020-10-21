import React, { createContext, useContext, useState } from 'react';
import {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Accordion.Inner = function AccordionInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow((prev) => !prev)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="" />
      ) : (
        <img src="/images/icons/add.png" alt="" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? (
    <Body active {...restProps}>
      {children}
    </Body>
  ) : null;
};
