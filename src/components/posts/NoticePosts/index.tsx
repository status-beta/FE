import React from 'react';
import { Wrapper, AllPost, Notice } from './styles';
// import Scrollbars from 'react-custom-scrollbars-2';
// import { useReadNoticePosts } from '../../../apis/postApi';
// import { useParams } from 'next/navigation';
// import { useInView } from 'react-intersection-observer';
// import NoticePostItem from '../NoticePostItem';
// import { AnimatePresence } from 'framer-motion';

function NoticePosts() {
  // const { groupId } = useParams();
  // const { ref, inView } = useInView();
  // 공지 게시글 조회
  // const { getNotice, fetchNextPage, isSuccess, hasNextPage, refetch } = useReadNoticePosts(groupId);

  // useEffect(() => {
  //   if (inView && hasNextPage) {
  //     fetchNextPage();
  //   }
  // }, [inView, fetchNextPage, hasNextPage]);

  return (
    <Wrapper>
      <Notice>공지사항</Notice>
      <AllPost>
        {/* <Scrollbars autoHide onScrollStop={fetchNextPage}>
          <AnimatePresence>
            {isSuccess && getNotice?.pages
              ? getNotice?.pages?.map((page) => (
                  <React.Fragment key={page?.currentPage}>
                    {page?.data.map((notice) => (
                      <NoticePostItem
                        key={notice?.postId}
                        groupId={groupId}
                        ref={ref}
                        notice={notice}
                        refetch={refetch}
                      />
                    ))}
                  </React.Fragment>
                ))
              : null}
          </AnimatePresence>
        </Scrollbars> */}
      </AllPost>
    </Wrapper>
  );
}

export default NoticePosts;
