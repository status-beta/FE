'use client';

import BigLogoSvg from '@/public/assets/svg/BigLogoSvg';
import {
  LoginContainer,
  Title,
  Form,
  Or,
  ButtonWrap,
  LoginButton,
  SocialButtonWrap,
  SignInLogo,
  Wrapper,
  BigMent,
  LogoBox,
  ImageDiv,
} from './Login.style';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '@/components/common/elements/Input';

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormData>({ mode: 'onChange' });

  const email = watch('email');
  const password = watch('password');

  const ActiveIsPassedLogin = () => {
    return email.includes('@') && password.length >= 8 && !errors.password ? setIsActive(true) : setIsActive(false);
  };

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      //   const response = await signin(data);
      //   if (!response.data) return alert('회원 정보를 찾을 수 없습니다.');
      //   const {
      //     status,
      //     data: { accessToken, refreshToken, currentPage },
      //   } = response;
      //   if (status === 200) {
      //     setAccessToken(accessToken);
      //     localStorage.setItem('token', refreshToken);
      //     if (currentPage) {
      //       return window.location.replace(`/groups/${currentPage}`);
      //     } else {
      //       return window.location.replace('/main/write');
      //     }
      //   }
    } catch (err) {
      //   toast.error(err.response.data.errorMessage, {
      //     position: 'top-center',
      //     autoClose: 1000,
      //     hideProgressBar: true,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: 'light',
      //   });
    }
  };

  return (
    <Wrapper>
      <div></div>
      <LoginContainer>
        <SignInLogo>
          <Link href="/">
            <LogoBox>
              <BigLogoSvg />
            </LogoBox>
          </Link>
          <BigMent>나의 팀을 이해하는 곳</BigMent>
        </SignInLogo>
        <Title>로그인</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={{
              ...register('email', {
                required: '이메일을 입력해주세요',
                pattern: {
                  value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                  message: '올바른 이메일 형식을 입력해주세요.',
                },
              }),
            }}
            type={'email'}
            placeholder="이메일 입력"
            onKeyUp={ActiveIsPassedLogin}
            _border={!watch('email') ? '#BBBBBB' : errors.email ? '#FF2D53' : '#5FCB94'}
            label={'이메일'}
            errors={errors}
            errorName={'email'}
          />
          <Input
            register={{
              ...register('password', {
                required: '비밀번호를 입력해주세요.',
                maxLength: {
                  value: 20,
                  message: '20자리 이하로 작성해주세요',
                },
                minLength: {
                  value: 8,
                  message: '8자리 이상으로 작성해주세요',
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                  message: '영어, 특수문자 포함 8~20자리 입니다.',
                },
              }),
            }}
            type={'password'}
            placeholder="비밀번호 입력"
            onKeyUp={ActiveIsPassedLogin}
            _border={!watch('password') ? '#BBBBBB' : errors.password ? '#FF2D53' : '#5FCB94'}
            label={'비밀번호'}
            errors={errors}
            errorName={'password'}
          />
          <ButtonWrap>
            <button>계정 찾기</button>
            <button>비밀번호 찾기</button>
          </ButtonWrap>
          <LoginButton className={isActive ? 'activeLoginBtn' : 'loginBtn'}>로그인</LoginButton>
          <Or>
            <span>또는</span>
          </Or>
          <SocialButtonWrap>
            <div className="naver">
              <Image src={'/assets/image/btnG_아이콘원형.png'} alt="NaverLogin" width={32} height={32} />
            </div>
            <div className="kakao">
              <Image src={'/assets/image/kakaotalk-icon.png'} alt="kakaoLogin" width={32} height={32} />
            </div>
            <div className="google">
              <Image src={'/assets/image/icons8-구글-로고-48.png'} alt="GoogleLogin" width={32} height={32} />
            </div>
          </SocialButtonWrap>
        </Form>
      </LoginContainer>
      <ImageDiv>
        <Image src={'/assets/image/signinImage.webp'} alt={'login-image'} width={370} height={537.5} />
      </ImageDiv>
      {/* <ToastContainer /> */}
    </Wrapper>
  );
};

export default Login;
