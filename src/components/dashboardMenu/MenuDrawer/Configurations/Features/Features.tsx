import Collapse from '@mui/material/Collapse';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { FC } from 'react';
import StyledFeatureText from './FeatureStyledComponents/StyledFeatureText.styles';
import StyledFeatureButton from './FeatureStyledComponents/StyledFeatureButton.styles';
import StyledFeatureList from './FeatureStyledComponents/StyledFeatureList.styles';
import { FeaturesPropsInterface } from '@/components/dashboardMenu/dashboardmenu.types';
import Link from 'next/link';

const Features: FC<FeaturesPropsInterface> = (props) => {
  const { open, handleClick, panelIndex } = props;
  return (
    <StyledFeatureList component="nav" aria-labelledby="nested-list-subheader">
      <StyledFeatureButton onClick={() => handleClick(panelIndex)}>
        <StyledFeatureText primary="Platform Configurations" />
        {open ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
      </StyledFeatureButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <StyledFeatureList component="div" disablePadding>
          <StyledFeatureButton sx={{ pl: 4 }} custom-isSubMenuItem>
            <Link href={`/platform-config/banners`} shallow>
              <StyledFeatureText primary="Starred" />
            </Link>
          </StyledFeatureButton>
        </StyledFeatureList>
      </Collapse>
    </StyledFeatureList>
  );
};

export default Features;
