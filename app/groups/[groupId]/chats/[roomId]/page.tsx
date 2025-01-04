'use client';

import { useParams } from 'next/navigation';

export default function Chats() {
  const params = useParams();
  const { groupId, roomId } = params;

  return (
    <div>
      <h1>
        Chat Room {roomId} for Group {groupId}
      </h1>
    </div>
  );
}
