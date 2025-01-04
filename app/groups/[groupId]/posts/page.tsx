'use client';

import { useParams } from 'next/navigation';

export default function Notice() {
  const params = useParams();
  const { groupId } = params;

  return (
    <div>
      <h1>Posts for Group {groupId}</h1>
    </div>
  );
}
