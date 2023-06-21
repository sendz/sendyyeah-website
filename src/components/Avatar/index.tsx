import React from 'react';

type AvatarComponentProps = {
  width?: number;
}

export const AvatarComponent = ({width = 240} : AvatarComponentProps) => {
  return (
    <div className="tw-daisy-avatar">
      <div className={`tw-w-full tw-rounded`}>
        <img width={width} height={width} src="./img/avatar.jpg" className="tw-daisy-mask tw-daisy-mask-squircle tw-max-w-sm tw-rounded-lg tw-shadow-2xl"  alt="avatar"/>
      </div>
    </div>
  )
}