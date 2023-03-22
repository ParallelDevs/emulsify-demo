import cta from './cta.twig';
import ctaData from './cta.yml';

export default {
  title: 'Molecules/CTA',
};

export const SimpleCTA = () => cta(ctaData);
