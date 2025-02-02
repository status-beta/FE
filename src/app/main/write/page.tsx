// import { useForm } from 'react-hook-form';
// import { useMutation } from 'react-query';
// import 'react-toastify/dist/ReactToastify.css';
// import { addGroup, editGroupImage, inviteUsers } from '../../apis/groupApi';
import CancelSvg from '@/assets/svg/CancelSvg';
import ImageSvg from '@/assets/svg/ImageSvg';
import styled from 'styled-components';
import { FlexCenterBox, FlexColumnBox } from '@/shared/flex';

export default function Write() {
  // 다음 버튼 클릭 시 실행되는 함수
  const onValid = () => {};
  // async (data) => {
  //   // 그룹 생성
  //   if (step === 1) {
  //     addGroupFn({ groupName: data.groupName });
  //     // 그룹 초대
  //   } else if (step === 2) {
  //     if (!emails.length) return;
  //     const response = await inviteUsers({
  //       id: groupId,
  //       body: { email: emails },
  //     });
  //     if (response.status === 400)
  //       return toast.error("초대 실패", {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     else {
  //       setEmails([]);
  //       setStep((prev) => prev + 1);
  //     }
  //     // 그룹 이미지 수정
  //   } else if (step === 3) {
  //     editGroupImageFn({
  //       id: groupId,
  //       body: { image: file },
  //     });
  //     // 그룹 url로 이동
  //   } else if (step === 4) {
  //     navigate(`/groups/${groupId}`);
  //   }
  // },
  // [step, navigate, addGroupFn, groupId, emails, file, editGroupImageFn]

  // 나중에 할래요. 클릭시 실행되는 함수
  const clickLater = () => {
    // setStep((prev) => prev + 1);
  };

  // 이미지 수정했을 때 실행되는 함수
  const onChangePreview = (e) => {
    // const fileBlob = URL.createObjectURL(e.target.files[0]);
    // setFile(e.target.files[0]);
    // setPreview(fileBlob);
  };

  // 이미지를 초기화하는 버튼을 눌렀을 때 실행하는 함수
  const onDeleteImg = (e) => {
    // setPreview(null);
    // setFile(null);
  };

  // 초대 버튼 클릭 시 실행되는 함수
  const clickInvite = (e) => {
    e.preventDefault();
    // setEmails((prev) => [...prev, watch('email')]);
  };

  // input에서 enter 눌렀을 때 실행되는 함수
  const enterInvite = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      return clickInvite(e);
    }
  };

  // 이메일 취소 버튼을 눌렀을 때 해당 이메일이 삭제되게 하는 기능
  const deleteEmail = (index: number) => {
    // setEmails((prev) => prev.filter((email, idx) => idx !== index));
  };

  return (
    <Wrapper as="main">
      {/* <Step isThree={step >= 3} isFour={step === 4}>
        {step}/3단계
      </Step>
      <Form onSubmit={handleSubmit(onValid)}>
        {step === 1 && (
          <>
            <Title>팀 이름이 어떻게 되나요?</Title>
            <SubTitle>
              {errors.groupName ? '팀이 인식할 수 있는 이름을 입력하는게 좋아요.' : '팀 스페이스 생성을 도와드릴게요!'}
            </SubTitle>
            <Input
              {...register('groupName', { required: true, minLength: 2 })}
              type="text"
              placeholder="팀 이름을 입력해주세요"
            />
            <Button isValid={watch('groupName')}>다음</Button>
          </>
        )}
        {step === 2 && (
          <>
            <Title>{watch('groupName')}에 또 누가 있나요?</Title>
            <SubTitle>함께 하는 팀원을 이메일로 초대하세요.</SubTitle>
            <Label isValid={!errors.email}>
              <Input
                {...register('email')}
                type="email"
                placeholder="예: hanghae99@gmail.com, mklee@naver.com"
                onKeyDown={enterInvite}
              />
              <button onClick={clickInvite}>초대하기</button>
            </Label>
            {emails.length > 0 && (
              <Emails>
                {emails.map((email, idx) => (
                  <Email key={email + idx}>
                    {email}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        deleteEmail(idx);
                      }}
                    >
                      <CancelSvg />
                    </button>
                  </Email>
                ))}
              </Emails>
            )}

            <Button isValid={emails.length}>다음</Button>
            <LaterButton onClick={clickLater}>나중에 할래요.</LaterButton>
          </>
        )}
        {step === 3 && (
          <>
            <Title>팀에 대표 아이콘을 정해보세요.</Title>
            <SubTitle>{preview ? '멋진 대표 이미지에요!' : '원하는 이미지를 업로드하세요.'}</SubTitle>
            <ImgLabel _background={preview}>
              <File type="file" accept="image/*" onChange={onChangePreview} />
              {!preview && (
                <span>
                  <ImageSvg />
                </span>
              )}
            </ImgLabel>
            {preview ? <DeleteImgBtn onClick={onDeleteImg}>사진 제거</DeleteImgBtn> : null}
            <Button isValid={preview}>다음</Button>
            <LaterButton onClick={clickLater}>나중에 할래요.</LaterButton>
          </>
        )}
        {step === 4 && (
          <>
            <Title>{watch('groupName')}</Title>
            <SubTitle>서로를 이해하는 팀을 만들어 드릴게요:)</SubTitle>
            <GroupImg _background={preview} />
            <Button isValid={true}>팀 생성하기</Button>
          </>
        )}
      </Form> */}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  ${FlexColumnBox};
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 660px;
  ${FlexColumnBox};
  align-items: center;
`;

export const Step = styled.span`
  margin-top: ${(props) => (props.isThree ? '23vh' : '30vh')};
  opacity: ${(props) => (props.isFour ? '0' : '1')};
  color: #aaaaaa;
  font-size: 0.9rem;
  margin-bottom: 11px;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 11px;
`;

export const SubTitle = styled.span`
  font-size: 1.2rem;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  padding: 1rem;
  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    box-shadow: 0px 0px 6px #58c08b;
  }
`;

export const Button = styled.button`
  margin-top: 49px;
  width: 13rem;
  height: 2.9rem;
  font-size: 1.2rem;
  ${FlexCenterBox};
  background: ${(props) => (props.isValid ? props.theme.color.green : props.theme.color.gray)};
  border-radius: 5px;
  color: white;
`;

export const LaterButton = styled.span`
  margin-top: 49px;
  cursor: pointer;
  color: ${(props) => props.theme.color.gray};
  transition: color 0.1s linear;
  &:hover {
    color: ${(props) => props.theme.color.black};
  }
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  button {
    position: absolute;
    right: 1rem;
    padding: 0.4rem 0.6rem;
    color: ${(props) => (props.isValid ? 'inherit' : props.theme.color.gray)};
    font-weight: 400;
    font-size: 1rem;
    background-color: #fbfbfa;
    border: ${(props) => (props.isValid ? `2px solid ${props.theme.color.green}` : `1px solid rgba(0, 0, 0, 0.1)`)};
    border-radius: 5px;
  }
`;

export const Emails = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 11px;
`;

export const Email = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-size: 1rem;
  background-color: ${(props) => props.theme.color.green};
  border-radius: 100px;
  margin-right: 1rem;
  margin-bottom: 11px;
  button {
    width: 1rem;
    margin-left: 9px;
    padding: 0;
    ${FlexCenterBox};
    svg {
      width: 1rem;
      height: 1rem;
      cursor: pointer;
      &:hover {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`;

export const ImgLabel = styled.label`
  ${FlexCenterBox};
  width: 16rem;
  height: 16rem;
  background-color: #e9e9e9;
  background-image: url(${(props) => props._background});
  background-size: cover;
  background-position: center center;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.1s linear;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    span {
      svg {
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
  span {
    ${FlexCenterBox};
    svg {
      width: 5rem;
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const GroupImg = styled(ImgLabel)`
  &:hover {
    background-color: #e9e9e9;
  }
`;

export const File = styled.input`
  display: none;
`;

export const DeleteImgBtn = styled.span`
  margin-top: 1rem;
  color: #4281db;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    color: #739bd4;
  }
`;
