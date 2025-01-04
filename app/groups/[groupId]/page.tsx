'use client';

import { useParams } from 'next/navigation';

export default function Schedule() {
  const params = useParams();
  const { groupId } = params;

  return (
    <div>
      <h1>Schedule for Group {groupId}</h1>
    </div>
  );
}
