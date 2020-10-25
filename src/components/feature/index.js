import React from 'react';
import {
  Container,
  Background,
  Image,
  Gradient,
  Text,
  Title,
  SubTitle,
} from './styles/feature';

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.Background = function featureBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
};

Feature.Image = function featureImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Feature.Gradient = function featureGradient({ ...restProps }) {
  return <Gradient {...restProps} />;
};

Feature.Text = function featureText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Feature.Title = function featureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function featureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
