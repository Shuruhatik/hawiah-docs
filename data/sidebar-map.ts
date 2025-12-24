import v1 from './sidebar/v1.0.0.json';
import v1_1 from './sidebar/v1.1.0.json';
import { NavGroup } from '@/components/docs/Sidebar';

export const sidebarMap: Record<string, NavGroup[]> = {
    'v1.1.0': v1_1 as NavGroup[],
    'v1.0.0': v1 as NavGroup[],
};
