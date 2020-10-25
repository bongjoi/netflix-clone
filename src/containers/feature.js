import React from 'react';
import { Feature, OptForm } from '../components';

export default function FeatureContainer() {
  return (
    <Feature>
      <Feature.Background>
        <Feature.Image src="/images/misc/home-bg.jpg" alt="" />
        <Feature.Gradient />
      </Feature.Background>
      <Feature.Text>
        <Feature.Title>영화, TV 프로그램을 무제한으로.</Feature.Title>
        <Feature.SubTitle>
          다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
        </Feature.SubTitle>

        <OptForm>
          <OptForm.Title>
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </OptForm.Title>
          <OptForm.Break />
          <OptForm.Input placeholder="이메일 주소" />
          <OptForm.Button>30일 무료 이용</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            신규 회원만 이 프로모션을 이용하실 수 있습니다.
          </OptForm.Text>
        </OptForm>
      </Feature.Text>
    </Feature>
  );
}
