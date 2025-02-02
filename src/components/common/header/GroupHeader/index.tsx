'use client';

// import { useState } from 'react';
// import BellSvg from '@/public/assets/svg/BellSvg';
// import QuestionSvg from '@/public/assets/svg/QuestionSvg';
// import BigLogoSvg from '@/public/assets/svg/BigLogoSvg';
// // import { editProfileModalAtom, headerMenuAtom } from '../../../../recoil/modalAtoms';
// // import { groupUserAtom } from '../../../../recoil/userAtoms';
// // import { handleImgError } from '../../../../utils/handleImgError';
// // import AlertModal from '../../../Modals/AlertModal';
// // import ProfileEditModal from '../../../Modals/ProfileEditModal';
// // import HeaderMenu from '../HeaderMenu';
import { RightNav, Nav, Wrapper } from './styles';
// import { AnimatePresence } from 'framer-motion';
// // import { useRecoilState, useRecoilValue } from 'recoil';
// // import { useQuery } from '@tanstack/react-query';
// // import { readInvites } from '../../../../apis/groupApi';
// import Link from 'next/link';

const GroupHeader = () => {
  //   const [headerAlert, setHeaderAlert] = useState(false);
  //   //   const [headerMenu, setHeaderMenu] = useRecoilState(headerMenuAtom);
  //   //   const [editProfile, setEditProfile] = useRecoilState(editProfileModalAtom);
  //   //   const { groupId } = useParams();
  //   //   const groupUser = useRecoilValue(groupUserAtom);
  //   //   const { data: invites } = useQuery(['alerts'], readInvites, {
  //   //     staleTime: 3000,
  //   //     refetchOnWindowFocus: false,
  //   //     retry: 0,
  //   //   });
  return (
    <Wrapper as="header">
      {/* <Nav as="nav">
           <Link href={'/main/write'}>
             <BigLogoSvg />
           </Link>
           <RightNav>
             <li onClick={() => (window.location.href = 'https://forms.gle/Kei4J8JcNRVjrscs6')}>
               <QuestionSvg />
             </li>
             <li onClick={() => setHeaderAlert(true)}>
               <BellSvg /> */}
      {/* {invites && invites.length > 0 && <span>{invites?.length}</span>} */}
      {/* </li> */}
      {/* <li onClick={() => setHeaderMenu(true)}>
               {groupUser && groupUser.groupAvatarImg ? (
                 <img src={groupUser.groupAvatarImg} alt={groupUser.groupUserNickname} onError={handleImgError} />
               ) : (
                 <FakeImg />
               )}
               {headerMenu && <HeaderMenu user={groupUser} />}
             </li> */}
      {/* </RightNav>
         </Nav>
         <AnimatePresence> */}
      {/* {headerAlert ? <AlertModal setHeaderAlert={setHeaderAlert} /> : null} */}
      {/* {editProfile ? <ProfileEditModal closeModal={setEditProfile} user={groupUser} groupId={groupId} /> : null} */}
      {/* </AnimatePresence> */}
    </Wrapper>
  );
};

export default GroupHeader;
