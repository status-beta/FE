import React, { useCallback, useEffect, useState } from 'react';
// import { useMutation } from 'react-query';
import { useParams } from 'next/navigation';
// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { queryClient } from '../../..';
// import { postLike, togglePost } from '../../../apis/postApi';
import ArrowSvg from '@/public/assets/svg/ArrowSvg';
import CommentSvg from '@/public/assets/svg/CommentSvg';
import LikeSvg from '@/assets/svg/LikeSvg';
import PostOptionSvg from '@/assets/svg/PostOptionSvg';
import SpaceLikeSvg from '@/assets/svg/SpaceLikeSvg';
// import { editPostAtom, PostDetailAtom } from '@/recoil/groupAtoms';

// import { PostDeleteModalAtom, PostDetailModalAtom, PostFormModalAtom } from '../../../recoil/modalAtoms';
// import { groupUserAtom } from '../../../recoil/userAtoms';
import getTime from '../../../utils/formatTimeAgo';
import { handleImgError } from '../../../utils/handleImgError';
import { MenuBox } from '../../modals/Menu';
import CommentList from '../CommentList';

import {
  CloseContainer,
  CommentCount,
  Content,
  FakeImg,
  FreePost,
  FreePostItemContainer,
  ImageWrap,
  LoadTime,
  MenuList,
  Nickname,
  PostComment,
  PostContent,
  PostImgWrap,
  PostLike,
  PostLikeCount,
  PostMenu,
  PostOption,
  PostResponse,
  PostUserDetail,
  PostUserInfo,
  SpreadBtn,
  UserImg,
} from './styles';
import Image from 'next/image';

interface FreePostItemProps {
  post: any;
  refetch: any;
}

const FreePostItem = ({ post, refetch }: FreePostItemProps) => {
  const { groupId } = useParams();
  const [CommentListOpen, setCommentOpen] = useState(false);
  const [openPostMenu, setOpenPostMenu] = useState(false);
  // const setEditPost = useSetRecoilState(editPostAtom);
  // const setDetailPost = useSetRecoilState(PostDetailAtom);
  // const setShowPostModal = useSetRecoilState(PostFormModalAtom);
  // const setShowPostDetail = useSetRecoilState(PostDetailModalAtom);
  // const setShowDeleteModal = useSetRecoilState(PostDeleteModalAtom);
  // const groupUser = useRecoilValue(groupUserAtom);
  const [commentCount, setCommentCount] = useState(0);

  // const { mutate: togglePostFn } = useMutation(togglePost, {
  //   onSuccess: () => {
  //     refetch();
  //     queryClient.invalidateQueries(['noticePosts', groupId]);
  //   },
  // });

  // const { mutate: likeFn } = useMutation(postLike, {
  //   onSuccess: () => refetch(),
  // });

  // 좋아요
  const toggleLike =
    //useCallback(
    () => {
      // const LikeData = {
      //   groupId,
      //   postId: post.postId,
      // };
      //likeFn(LikeData);
    };
  // [groupId, post.postId, likeFn]);

  // 메뉴 닫기
  const onCloseModal = useCallback(() => {
    setOpenPostMenu(false);
  }, []);

  // 게시글 메뉴 열기
  const modalOpen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenPostMenu(true);
  }, []);

  // 댓글 여닫기
  const openComment = useCallback(() => {
    setCommentOpen((prev) => !prev);
  }, []);

  // 자유게시글을 공지글로 바꾸는 함수
  const onTogglePost =
    //useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      //togglePostFn({ postId: post.postId, groupId });
      onCloseModal();
    };

  //[togglePostFn, onCloseModal, post, groupId],
  // );

  // 글 수정 버튼 클릭 시
  const onEditPost =
    // useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      // setEditPost(post);
      // setShowPostModal(true);
      onCloseModal();
    };
  //   [onCloseModal, post, setEditPost, setShowPostModal],
  // );

  // 상세보기 클릭 시
  const viewDetail =
    // useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      // setShowPostDetail(true);
      onCloseModal();
      // setDetailPost(post);
    };

  //   [onCloseModal, setShowPostDetail, setDetailPost, post],
  // );

  // 삭제 모달열기
  const deleteModalOpen =
    //useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      // setShowDeleteModal(true);
      onCloseModal();
      // setDetailPost(post);
    };

  //   [setShowDeleteModal, onCloseModal, post, setDetailPost],
  // );

  // useEffect(() => {
  //   if (post) {
  //     setCommentCount(post.commentCount);
  //   }
  // }, [post]);

  if (!post) return <div />;

  return (
    <>
      {openPostMenu && <CloseContainer onClick={onCloseModal} />}
      <FreePostItemContainer onClick={onCloseModal}>
        <FreePost layout>
          <PostMenu>
            <PostUserInfo>
              <UserImg>
                {post.groupAvatarImg ? (
                  <Image src={post.groupAvatarImg} alt="profile" onError={handleImgError} />
                ) : (
                  <FakeImg />
                )}
              </UserImg>
              <PostUserDetail>
                <Nickname>{post.groupUserNickname}</Nickname>
                <LoadTime>{getTime(post.createdAt)}</LoadTime>
              </PostUserDetail>
            </PostUserInfo>
            <PostOption onClick={modalOpen}>
              {openPostMenu ? (
                <MenuBox right={0} top={1.2}>
                  {/* {groupUser.groupUserId === post.groupUserId ? (
                    <MenuList>
                      <li onClick={onEditPost}>글 수정</li>
                      <li onClick={onTogglePost}>공지로 등록</li>
                      <li onClick={viewDetail}>상세 보기</li>
                      <li onClick={deleteModalOpen}>삭제</li>
                    </MenuList>
                  ) : (
                    <MenuList>
                      <li onClick={viewDetail}>상세 보기</li>
                    </MenuList>
                  )} */}
                </MenuBox>
              ) : null}
              <PostOptionSvg />
            </PostOption>
          </PostMenu>
          <PostContent onClick={viewDetail}>
            <PostImgWrap>
              {post?.postImg?.map((Image) => (
                <ImageWrap key={Image.postImg}>
                  <img src={Image.postImg} alt="postImg" onError={handleImgError} />
                </ImageWrap>
              ))}
            </PostImgWrap>
            <Content>{post.content}</Content>
          </PostContent>
          <PostResponse>
            <PostLike onClick={toggleLike}>
              {post.findLike ? <LikeSvg /> : <SpaceLikeSvg />}
              <PostLikeCount>{post.likeCount}</PostLikeCount>
            </PostLike>
            <PostComment onClick={() => openComment()}>
              <CommentSvg />
              <CommentCount>{commentCount}</CommentCount>
            </PostComment>
            <SpreadBtn onClick={() => openComment()} isSpread={CommentListOpen}>
              <ArrowSvg />
            </SpreadBtn>
          </PostResponse>
        </FreePost>
        {CommentListOpen ? (
          <CommentList postId={post.postId} groupId={groupId} setCommentCount={setCommentCount} />
        ) : null}
      </FreePostItemContainer>
    </>
  );
};

export default FreePostItem;
