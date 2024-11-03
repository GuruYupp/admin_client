import { WhoColumnsInterface } from '@/global.types';

export interface GeoRuleInterface {
  name: string;
  whoColumns: WhoColumnsInterface;
  isDependent: boolean;
  code: string;
  id: number;
  isActive: boolean;
  definition: string;
}
