import Collapse from '@mui/material/Collapse';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { FC } from 'react';
import StyledFeatureText from './FeatureStyledComponents/StyledFeatureText.styles';
import StyledFeatureButton from './FeatureStyledComponents/StyledFeatureButton.styles';
import StyledFeatureList from './FeatureStyledComponents/StyledFeatureList.styles';
import { FeaturesPropsInterface } from '@/components/dashboardMenu/dashboardmenu.types';
import Link from 'next/link';
import { useAppSelector } from '@/libs/redux/hooks';
import { selectFeatures } from '@/libs/redux/selectors';

const Features: FC<FeaturesPropsInterface> = (props) => {
  const { open, handleClick, panelIndex, configuration } = props;
  const allFeatures = useAppSelector(selectFeatures);
  const Features = allFeatures.filter(
    (feature) => feature.configuration_code === configuration.code,
  );
  return (
    <StyledFeatureList component="nav" aria-labelledby="nested-list-subheader">
      <StyledFeatureButton onClick={() => handleClick(panelIndex)}>
        <StyledFeatureText primary={configuration.text} />
        {Features.length > 0 ? (
          open ? (
            <IoMdArrowDropdown />
          ) : (
            <IoMdArrowDropup />
          )
        ) : undefined}
      </StyledFeatureButton>

      {Features.length > 0 && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <StyledFeatureList component="div" disablePadding>
            {Features.map((feature, index) => (
              <StyledFeatureButton
                sx={{ pl: 4 }}
                custom-isSubMenuItem
                key={index}>
                <Link href={`/platform-config/banners`} shallow>
                  <StyledFeatureText primary={feature.text} />
                </Link>
              </StyledFeatureButton>
            ))}
          </StyledFeatureList>
        </Collapse>
      )}
    </StyledFeatureList>
  );
};

export default Features;
