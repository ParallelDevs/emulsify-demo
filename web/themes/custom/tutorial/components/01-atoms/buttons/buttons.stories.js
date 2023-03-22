// Buttons Stories
import button from './button.twig';

import buttonData from './button.yml';
import buttonSecondaryData from './button-secondary.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Button' };

export const ButtonPrimary = () => button(buttonData);

export const ButtonSecondary = () => button(buttonSecondaryData);
