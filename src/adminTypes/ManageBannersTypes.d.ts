import { WhoColumnsInterface } from '@/global.types';

export interface BannerInterface {
  networkId: number;
  priorityDate: number; // Assuming this is a timestamp
  name: string;
  isInternal: boolean;
  whoColumns: WhoColumnsInterface;
  geoRuleId: number;
  image: string;
  code: string;
  id: number;
  sourcePath: string;
  language: string; // You might want to define a specific type if this is a known set of languages
  bannerType: string; // Consider creating an enum if you have a limited set of types
  isActive: boolean;
  customAttributes: Record<string, any>; // You can specify a more detailed type if needed
  targetPath: string;
  startDate: number; // Assuming this is a timestamp
}
