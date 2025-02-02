// import React, { useState } from "react";
// import { Link, useMatch } from "react-router-dom";
// import { handleImgError } from "../../../../utils/handleImgError";
// import { FakeImg, GroupImg, GroupItem, GroupName } from "./styles";
'use client';
import Link from 'next/link';

const NavItem = (groupId: string) => {
  //   const groupMatch = useMatch(`/groups/${group?.groupId}/*`);
  //   const [isHover, setIsHover] = useState(false);

  return (
    <Link href={`/groups/${groupId}`}>
      {/* //       <GroupItem
//         onMouseOver={() => setIsHover(true)}
//         onMouseLeave={() => setIsHover(false)}
//       >
//         {group.groupImg ? (
//           <GroupImg
//             isFocus={groupMatch}
//             src={group?.groupImg}
//             alt={group?.groupName}
//             onError={handleImgError}
//           />
//         ) : (
//           <FakeImg isFocus={groupMatch} />
//         )}

//         {isHover && <GroupName>{group?.groupName}</GroupName>}
//       </GroupItem> */}
    </Link>
  );
};

export default NavItem;
