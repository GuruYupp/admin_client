import React, { FC } from 'react';
import { IconBaseProps } from 'react-icons';
import { MdOutlineModeEdit } from 'react-icons/md';

const EditIcon: FC<IconBaseProps> = (props) => {
  return <MdOutlineModeEdit {...props} />;
};

export default EditIcon;
