import React, { FC } from 'react';
import { IconBaseProps } from 'react-icons';
import { RiDeleteBin5Line } from 'react-icons/ri';

const DeleteIcon: FC<IconBaseProps> = (props) => {
  return <RiDeleteBin5Line {...props} />;
};

export default DeleteIcon;
