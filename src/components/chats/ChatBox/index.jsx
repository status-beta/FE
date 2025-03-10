import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import React from 'react';
import { handleImgError } from '../../../utils/handleImgError';
import styles from './index.module.css';
import Image from 'next/image';

dayjs.locale('ko');
const ChatBox = ({ isMe, otherUser, chat }) => {
  return (
    <div className={styles.chatContainer} isMe={isMe}>
      {isMe ? (
        <div className={styles.fakeDiv} />
      ) : otherUser ? (
        <Image
          className={styles.userImg}
          src={otherUser?.groupAvatarImg}
          alt={otherUser?.groupUserNickname}
          onError={handleImgError}
        />
      ) : (
        <div className={styles.fakeDiv} />
      )}
      <div className={styles.comment + (isMe ? ' isMe' : '')}>
        {isMe ? (
          <div>
            {/* <strong>1</strong> */}
            <span>{dayjs(chat.createdAt).format('A HH:mm')}</span>
          </div>
        ) : null}
        <p>{chat?.message} </p>
        {!isMe ? <span>{dayjs(chat.createdAt).format('A HH:mm')}</span> : null}
      </div>
    </div>
  );
};

export default ChatBox;
