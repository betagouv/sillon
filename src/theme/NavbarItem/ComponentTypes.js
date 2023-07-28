import LiveChatNavbarItem from '@site/src/components/LiveChatNavbarItem';
import PdfVersionNavbarItem from '@site/src/components/PdfVersionNavbarItem';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DocNavbarItem from '@theme/NavbarItem/DocNavbarItem';
import DocSidebarNavbarItem from '@theme/NavbarItem/DocSidebarNavbarItem';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import DocsVersionNavbarItem from '@theme/NavbarItem/DocsVersionNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import HtmlNavbarItem from '@theme/NavbarItem/HtmlNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import SearchNavbarItem from '@theme/NavbarItem/SearchNavbarItem';

// We "swizzle" this component to provide a way to use our own custom navbar item
// Note: we cannot just use `import OriginalComponentTypes from '@theme/NavbarItem/ComponentTypes';` and make a `...OriginalComponentTypes` as it won't exist
const ComponentTypes = {
  // Custom
  'custom-liveChat': LiveChatNavbarItem,
  'custom-pdfVersion': PdfVersionNavbarItem,
  // Defaults
  default: DefaultNavbarItem,
  localeDropdown: LocaleDropdownNavbarItem,
  search: SearchNavbarItem,
  dropdown: DropdownNavbarItem,
  html: HtmlNavbarItem,
  doc: DocNavbarItem,
  docSidebar: DocSidebarNavbarItem,
  docsVersion: DocsVersionNavbarItem,
  docsVersionDropdown: DocsVersionDropdownNavbarItem,
};
export default ComponentTypes;
