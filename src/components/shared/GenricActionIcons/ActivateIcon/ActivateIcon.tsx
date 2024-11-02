import React, { FC } from 'react';
import { IconBaseProps } from 'react-icons';
import { ImEye } from 'react-icons/im';

const ActivateIcon: FC<IconBaseProps> = (props) => {
  return <ImEye {...props} />;
};

export default ActivateIcon;
