import { WhoColumnsInterface } from '@/global.types';

export interface LiveTvGenresInterface {
  name: string;
  priority: number;
  description: string;
  code: string;
  id: number;
  isActive: boolean;
  whoColumns: WhoColumnsInterface;
}
