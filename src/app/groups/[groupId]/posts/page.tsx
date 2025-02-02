import { useParams } from 'next/navigation';
import NoticeCarousel from '@/components/posts/NoticePosts';
import FreePosts from '@/components/posts/FreePosts';
import styled from 'styled-components';
import { FlexColumnBox } from '@/shared/flex';
// import { PostDeleteModalAtom, PostDetailModalAtom, PostFormModalAtom } from '@/recoil/modalAtoms';
// import { useRecoilValue } from 'recoil';
// import PostForm from '@/components/posts/PostForm';
// import PostDetail from '@/components/posts/PostDetail';
// import DeleteModal from '@/components/posts/DeleteModal';
import { AnimatePresence } from 'framer-motion';

export default function Post() {
  const params = useParams();
  const { groupId } = params;
  // const showPostForm = useRecoilValue(PostFormModalAtom);
  // const showDetail = useRecoilValue(PostDetailModalAtom);
  // const showDeleteModal = useRecoilValue(PostDeleteModalAtom);
  return (
    <BoardWrap>
      <FreePosts />
      <NoticeCarousel />
      <AnimatePresence>
        <h1>Posts for Group {groupId}</h1>
        {/* {showPostForm && <PostForm />}
        {showDetail && <PostDetail />}
        {showDeleteModal && <DeleteModal />} */}
      </AnimatePresence>
    </BoardWrap>
  );
}

export const NoticeWrap = styled.div`
  ${FlexColumnBox}
  margin: 0 auto auto auto;
  width: 100%;
`;

export const BoardWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  padding: 24px 2%;
  gap: 1rem;
`;
