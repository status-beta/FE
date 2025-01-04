'use client';

import React, { useEffect, useState, useCallback } from 'react';
import BigLogoSvg from '@/public/assets/svg/BigLogoSvg';
import ArrowSvg from '@/public/assets/svg/ArrowSvg';
import start1 from '@/public/assets/image/start1.webp';
import start2 from '@/public/assets/image/start2.webp';
import start3 from '@/public/assets/image/start3.webp';
import start4 from '@/public/assets/image/start4.webp';
import start5 from '@/public/assets/image/start5.webp';
import GoogleLogin from '@/public/assets/image/icons8-구글-로고-48.png';
import {
  Header,
  Logo,
  Main,
  Nav,
  ScrollUpBtn,
  Section1,
  Section1Btns,
  Section1Img,
  Section1Text,
  Section2,
  Section2Img,
  Section2Item,
  Section2Text,
  Section3,
  Section3First,
  Section3Second,
  Wrapper,
} from './Start.styles';
import { AnimatePresence, useTransform, useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Start = () => {
  const [isTop, setIsTop] = useState(true);

  const { scrollYProgress } = useViewportScroll();

  const section2_1_y = useTransform(scrollYProgress, [0.02, 0.13], [150, 0]);
  const section2_1_opacity = useTransform(scrollYProgress, [0.02, 0.13], [0.3, 1]);
  const section2_2_y = useTransform(scrollYProgress, [0.25, 0.35], [300, 0]);
  const section2_2_opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const section2_3_y = useTransform(scrollYProgress, [0.46, 0.56], [300, 0]);
  const section2_3_opacity = useTransform(scrollYProgress, [0.46, 0.56], [0, 1]);
  const section2_4_y = useTransform(scrollYProgress, [0.68, 0.8], [300, 0]);
  const section2_4_opacity = useTransform(scrollYProgress, [0.68, 0.8], [0, 1]);
  const section3_y = useTransform(scrollYProgress, [0.83, 0.93], [200, 0]);
  const section3_opacity = useTransform(scrollYProgress, [0.83, 0.93], [0, 1]);
  // 일정 스크롤이 내려가면 헤더에 보더값이 생기게 하는 함수
  const onScrollFn = useCallback(() => {
    if (window.scrollY > 65) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  }, []);

  const onClickBtn = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  // 스크롤 이벤트를 등록
  useEffect(() => {
    window.addEventListener('scroll', onScrollFn);
    return () => window.removeEventListener('scroll', onScrollFn);
  }, [onScrollFn]);

  return (
    <Wrapper>
      <Header as="header" $isTop={isTop}>
        <Logo>
          <BigLogoSvg />
        </Logo>
        <Nav>
          <span>문의하기</span>
          <Link href="/sign">
            <span>로그인하기</span>
          </Link>
          <Link href="/login">
            <button>Status 무료 가입</button>
          </Link>
        </Nav>
      </Header>
      <Main as="main">
        <Section1 as="section">
          <Section1Text
            variants={section1TextAni}
            initial="initial"
            animate="animate"
            transition={{ type: 'tween', duration: 1 }}
          >
            <h2>나와 팀을 알아가는</h2>
            <h2>워크 스페이스</h2>
            <p>일을 잘하는 것만큼 함께하는 팀을 알아가는 것도 중요하죠.</p>
            <strong>스테이터스로 팀원의 일정과 상태를 체크하며 서로를 알아가세요.</strong>
            <Section1Btns>
              <Link href={'/login'}>Status 무료 가입</Link>
              <button>
                <span>
                  <Image src={GoogleLogin} alt="구글" />
                </span>
                Google로 가입
              </button>
            </Section1Btns>
          </Section1Text>
          <Section1Img
            variants={section1Img}
            initial="initial"
            animate="animate"
            transition={{ type: 'tween', duration: 1 }}
          >
            <Image src={start1} alt="start1" />
          </Section1Img>
        </Section1>
        <Section2 as="section">
          <Section2Item style={{ y: section2_1_y, opacity: section2_1_opacity }}>
            <Section2Img>
              <Image src={start2} alt="start2" />
            </Section2Img>
            <Section2Text>
              <h3>“왜 자리에 안 계시지?”</h3>
              <h3>팀의 실시간 일정과 상태를</h3>
              <h3>항상 체크하세요.</h3>
              <p>
                팀의 일정을 한 눈에 모아보고, 요약해서 볼 수 <br />
                있습니다. 나의 일정과 현재 상태 역시 손쉽게
                <br />
                알릴 수 있어요.
              </p>
            </Section2Text>
          </Section2Item>
          <Section2Item style={{ y: section2_2_y, opacity: section2_2_opacity }}>
            <Section2Img>
              <Image src={start3} alt="start3" />
            </Section2Img>

            <Section2Text>
              <h3>팀 게시판을 통해 서로를 알아가세요.</h3>
              <p>
                팀원과 크고 작은 이야기들을 나눠볼까요?
                <br />
                피크닉 일정을 잡을 수도 있고
                <br />
                중요한 미팅 약속을 잡을 수도 있어요.
                <br />
                중요한 이야기는 공지사항에 저장해요.
              </p>
            </Section2Text>
          </Section2Item>
          <Section2Item style={{ y: section2_3_y, opacity: section2_3_opacity }}>
            <Section2Img>
              <Image src={start4} alt="start4" />
            </Section2Img>

            <Section2Text>
              <h3>”민지님과는 어떻게 일해야 할까?”</h3>
              <p>서로를 알고, 팀을 조직하고 조율하세요.</p>
            </Section2Text>
          </Section2Item>
          <Section2Item style={{ y: section2_4_y, opacity: section2_4_opacity }}>
            <Section2Img>
              <Image src={start5} alt="start5" />
            </Section2Img>

            <Section2Text>
              <h3>오늘 우리 팀의 컨디션은?</h3>
              <p>
                나의 하루 컨디션을 기록하고 오늘 하루 우리
                <br />
                팀의 전체 컨디션도 확인해요.
              </p>
            </Section2Text>
          </Section2Item>
        </Section2>
        <Section3 as="section">
          <Section3First style={{ y: section3_y, opacity: section3_opacity }}>
            <BigLogoSvg />
            <h2>오늘 바로 팀과 Status를 사용해 보세요.</h2>
            <p>Get to know your team better.</p>
            <Link href={'/login'}>Status 무료 가입</Link>
          </Section3First>
          <Section3Second>
            <BigLogoSvg />
            <ul>
              <strong>제품</strong>
              <li>개요</li>
              <li>스토리</li>
              <li>연락처</li>
              <li>팀 정보</li>
              <li>도움말 센터</li>
            </ul>
          </Section3Second>
        </Section3>
      </Main>
      <AnimatePresence>
        {isTop ? null : (
          <ScrollUpBtn variants={BtnAni} initial="initial" animate="animate" exit="exit" onClick={onClickBtn}>
            <ArrowSvg _width={'20'} _height={'20'} />
          </ScrollUpBtn>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Start;

const section1TextAni = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
};
const section1Img = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
};

const BtnAni = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
