/**
 * Navigation links shared between Navbar and Footer.
 */

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Administration', href: '/#administration' },
  {
    label: 'Academics',
    href: '#',
    dropdown: {
      type: 'mega',
      columns: [
        {
          title: 'UNDERGRADUATE',
          links: [
            { label: 'Artificial Intelligence and Data Science', href: '#' },
            { label: 'Automobile Engineering', href: '#' },
            { label: 'Civil Engineering', href: '#' },
            { label: 'Computer Science & Engineering', href: '#' },
            { label: 'Electronics & Communications Engineering', href: '#' },
            { label: 'Electrical & Electronics Engineering', href: '#' },
            { label: 'Information Technology', href: '#' },
            { label: 'Instrumentation & Control Engineering', href: '#' },
            { label: 'Mechanical Engineering', href: '#' },
            { label: 'Science & Humanities', href: '#' },
          ],
        },
        {
          title: 'POSTGRADUATE',
          links: [
            { label: 'ME - Computer Science & Engineering', href: '#' },
            { label: 'ME - Structural Engineering', href: '#' },
            { label: 'Master of Business Administration', href: '#' },
          ],
        },
        {
          title: 'PH.D',
          links: [
            { label: 'Computer Science & Engineering', href: '#' },
          ],
          widgets: [
            {
              title: 'ACADEMIC CALENDAR',
              links: [{ label: 'ACADEMIC CALENDAR', href: '#', isButton: true }],
            },
            {
              title: 'ALUMNI CELL',
              links: [{ label: 'ALUMNI CELL', href: '#', isButton: true }],
            },
            {
              title: 'INTERNAL QUALITY ASSURANCE CELL',
              links: [{ label: 'INTERNAL QUALITY ASSURANCE CELL', href: '#', isButton: true }],
            },
            {
              title: 'STAFF LIST',
              links: [{ label: 'Teaching Staff List', href: '#', isButton: true }],
            },
          ],
        },
      ],
    },
  },
  {
    label: 'Committee',
    href: '#',
    dropdown: {
      type: 'simple',
      links: [
        { label: 'Grievance Redressal Committee', href: '#' },
        {
          label: 'Internal Complaint Committee',
          children: [
            { label: 'Academic year 2025-2026', href: '#', isButton: true },
            { label: 'Academic year 2024-2025', href: '#', isButton: true },
            { label: 'Academic year 2023-2024', href: '#', isButton: true },
            { label: 'Academic year 2022-2023', href: '#', isButton: true },
          ],
        },
        { label: 'Committee for SC/ST', href: '#' },
        { label: 'Minority Cell', href: '#' },
        { label: 'Anti-ragging Committee', href: '#' },
        { label: 'Anti-drug Committee', href: '#' },
      ],
    },
  },
  { label: 'Placement', href: '/#placement' },
  { label: 'Campus Life', href: '/#campus-life' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Facilities', href: '/#facilities' },
  { label: 'R & D', href: '/#rd' },
  { label: 'Contact', href: '/#contact' },
];
