'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import BigLogoSvg from '@/assets/svg/BigLogoSvg';
import {
  LoginBox,
  LoginButton,
  EmailLogin,
  LogoBox,
  Info,
  BigMent,
  SmallMent,
  Ment,
  EasyJoin,
  Logo,
  Wrapper,
  ButtonContainer,
  Line,
  SocialItem,
  SocialList,
} from './Sign.style';
import Image from 'next/image';

const Sign = () => {
  return (
    <Wrapper>
      <LoginBox>
        <Logo>
          <Link href="/">
            <LogoBox>
              <BigLogoSvg />
            </LogoBox>
          </Link>
          <Info>
            <BigMent>나의 팀을 이해하는 곳</BigMent>
            <Ment>
              <SmallMent>일을 잘하는 것만큼 내 팀의 상태를 파악하는 것도 중요하죠.</SmallMent>
              <SmallMent>스테이터스로 팀원의 일정과 상태를 체크하세요.</SmallMent>
            </Ment>
          </Info>
        </Logo>
        <ButtonContainer>
          <Link href="/login">
            <LoginButton>로그인하기</LoginButton>
          </Link>
          <Line />
          <Link href="/signup">
            <EmailLogin>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>이메일로 시작하기</span>
            </EmailLogin>
          </Link>
          <EasyJoin>간편하게 가입하세요!</EasyJoin>
          <SocialList>
            <SocialItem>
              <div className="naver">
                <Image src={'/assets/image/btnG_아이콘원형.png'} alt="NaverLogin" width={32} height={32} />
              </div>
              <span>네이버 로그인</span>
            </SocialItem>
            <SocialItem>
              <div className="kakao">
                <Image src={'/assets/image/kakaotalk-icon.png'} alt="kakaoLogin" width={32} height={32} />
              </div>
              <span>카카오톡 로그인</span>
            </SocialItem>
            <SocialItem>
              <div className="google">
                <Image src={'/assets/image/icons8-구글-로고-48.png'} alt="GoogleLogin" width={32} height={32} />
              </div>
              <span>구글 로그인</span>
            </SocialItem>
          </SocialList>
        </ButtonContainer>
      </LoginBox>
    </Wrapper>
  );
};

export default Sign;
