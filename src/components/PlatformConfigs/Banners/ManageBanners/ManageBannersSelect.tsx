import { styled } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  selectNetworkList,
  selectisMasterUser,
  selectisSuperUser,
} from '@/libs/redux/selectors';
import { fetchNetworks } from '@/libs/redux/features/commonConfigs/CommonConfigsSlice';
interface ManageBannersSelectPropsInterface {
  handleSelectNetworkId: (networkId: string) => void;
}
const StyledSelect = styled(Select)(() => ({
  Width: '100%',
  display: 'block',
  height: '35px',
})) as unknown as typeof Select;

const ManageBannersSelect: FC<ManageBannersSelectPropsInterface> = (props) => {
  const { handleSelectNetworkId } = props;
  const [network, setNetwork] = useState(' ');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNetworks());
  }, [dispatch]);

  const handleChange = (event: SelectChangeEvent) => {
    setNetwork(event.target.value as string);
    handleSelectNetworkId(event.target.value);
  };

  const isMasterUser = useAppSelector(selectisMasterUser);
  const isSuperUser = useAppSelector(selectisSuperUser);
  const networkList = useAppSelector(selectNetworkList);

  return (
    <StyledSelect
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={network}
      onChange={handleChange}
      size="small">
      {(isMasterUser || isSuperUser) && <MenuItem value={' '}>All</MenuItem>}
      {(isMasterUser || isSuperUser) && <MenuItem value={'0'}>Global</MenuItem>}
      {networkList.map((network) => (
        <MenuItem value={network.id.toString()} key={network.code}>
          {network.name}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default ManageBannersSelect;
