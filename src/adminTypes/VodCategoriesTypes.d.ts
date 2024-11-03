import { WhoColumnsInterface } from '@/global.types';

export interface VodCategoriesInterface {
  name: string;
  whoColumns: WhoColumnsInterface;
  description: string;
  bannerUrl: string;
  subtitleExpr: string;
  code: string;
  isExternal: boolean;
  id: number;
  isActive: boolean;
  imageUrl: string;
}
