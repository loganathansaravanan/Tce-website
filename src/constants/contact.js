import { SITE_CONFIG } from './siteConfig';

/**
 * Contact information displayed in the Footer section.
 * Icons are referenced by string name for serialization.
 */

export const CONTACT_INFO = [
  {
    icon: 'Phone',
    label: 'Phone Number',
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`,
  },
  {
    icon: 'Mail',
    label: 'Email Address',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: 'MapPin',
    label: 'Address',
    value: SITE_CONFIG.address,
    href: '#',
  },
  {
    icon: 'Globe',
    label: 'Website',
    value: SITE_CONFIG.website,
    href: SITE_CONFIG.websiteUrl,
  },
];
