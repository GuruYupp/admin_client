import { WhoColumnsInterface } from '@/global.types';

export interface platformLanguagesInterface {
  name: string;
  priority: number;
  whoColumns: WhoColumnsInterface;
  description: string;
  code: string;
  symbol: string;
  id: number;
  alphaCode: string;
  isActive: boolean;
  displayText: string;
  imageUrl: string;
}

export interface DisplayLanguagesInterface {
  name: string;
  priority: number;
  whoColumns: WhoColumnsInterface;
  code: string;
  id: number;
  isActive: boolean;
}
