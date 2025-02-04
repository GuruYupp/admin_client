import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface AdminBreadCrumbsPropsInterface {
  data: { link?: string; text: string; isActive?: boolean }[];
}

const AdminBreadCrumb: FC<AdminBreadCrumbsPropsInterface['data'][0]> = ({
  link,
  text,
  isActive,
}) => {
  return link ? (
    <Link underline="hover" color="inherit" href={link}>
      {text}
    </Link>
  ) : (
    <Typography
      color={isActive ? 'primary' : 'text.secondary'}
      fontSize="0.9rem">
      {text}
    </Typography>
  );
};

const AdminBreadCrumbs: FC<AdminBreadCrumbsPropsInterface> = ({ data }) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      style={{
        fontSize: '0.9rem',
        fontWeight: '500',
        marginBottom: '1rem',
      }}>
      {data.map((crumbdata, index) => (
        <AdminBreadCrumb
          {...crumbdata}
          isActive={index === data.length - 1}
          key={index}
        />
      ))}
    </Breadcrumbs>
  );
};

export default AdminBreadCrumbs;
