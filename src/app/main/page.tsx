import HomeHeader from '@/components/common/header/HomeHeader';
import SideTeamBar from '@/components/common/SideTeamBar';
import styled from 'styled-components';

//메인페이지의 정확할 역할이 어떤건지??
// 비즈니스 로직에서 데이터를 불러오는 역할의 페이지인지, 아님 단순히 레이아웃으로 사용하는건지 확인 필요
export default function Main() {
  return (
    <>
      <Wrapper>
        <HomeHeader isMain={true} />
        <Body>
          <SideTeamBar />
        </Body>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100vh;
`;

const Body = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 60px 1fr;
`;
