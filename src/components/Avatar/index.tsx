import React from 'react';

type AvatarComponentProps = {
  width?: number;
}

export const AvatarComponent = ({width = 240} : AvatarComponentProps) => {
  return (
    <div className="daisy-avatar">
      <div className={`w-full rounded`}>
        <img width={width} height={width} src="./img/avatar.jpg" className="daisy-mask daisy-mask-squircle max-w-sm rounded-lg shadow-2xl"  alt="avatar"/>
      </div>
    </div>
  )
}