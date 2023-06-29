import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MDXComponents from '@theme-original/MDXComponents';

library.add(far);

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Make the FontAwesomeIcon component available in MDX as <icon />.
  icon: FontAwesomeIcon,
};
