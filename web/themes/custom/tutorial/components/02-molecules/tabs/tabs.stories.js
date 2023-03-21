import tabs from './tabs.twig';

import sideTabsData from './side-tabs.yml';
import tabData from './tabs.yml';

import './tabs';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Tabs' };

export const Default = () => tabs(tabData);
export const SideTabs = () => tabs(sideTabsData);
