// Asset exports for local images in src/assets/images
import heroMockup from './hero-image-home-page.webp';
import desktopHero from './desktop-hero-image.png';
import desktopDemo from './desktop-demo.webp';
import exploreReports from './Explore-Reports.webp';
import setUpBusiness from './Set-Up-Business-Add-Items.webp';
import customizeBills from './Customize-Create-Bills.webp';
import downloadTrial from './Download-and-Explore-Free-Trial.webp';
import logo1 from './logo1.svg';
import qrCode from './QR-code.webp';
import mobileIcon from './mobile-icon-01-01.png';

// Mega-menu solution icons
import iconAccounting from './Accounting.webp';
import iconInventory from './Inventory.webp';
import iconInvoicing from './Invoicing.webp';
import iconEInvoice from './E-Invoice.webp';
import iconPOS from './POS.webp';
import iconOCR from './OCR.webp';
import iconRetail from './Retail.webp';
import iconPharma from './Pharma.webp';
import iconGrocery from './Grocery.webp';
import iconRestaurant from './Restaurant.webp';
import iconJewellery from './Jewellery.webp';
import iconClothing from './Clothing.webp';
import iconTaxone from './Taxone.webp';
import iconFlyy from './Flyy.webp';
import iconTable from './Table.webp';
import iconNeodove from './Neodove.webp';
import iconBlogs from './Blogs.webp';
import iconUseCase from './Use-Case.webp';
import iconGuides from './Guides.webp';
import iconTestimonial from './Testimonial.webp';
import iconPlatformVideo from './Platform-Video.webp';

// Review badges
import iconGooglePlay from './vyh-ic-google-play.webp';
import iconSourceForge from './vyh-ic-source-forge.webp';
import iconG2 from './vyh-ic-g2.webp';

// Eagerly map all local assets in src/assets/images
const allImages = import.meta.glob<string>('./*.{webp,png,svg,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

/**
 * Resolves any image by filename or relative path from src/assets/images
 */
export function getLocalImage(nameOrPath: string): string {
  if (!nameOrPath) return '';
  const cleanName = nameOrPath.replace(/^(\/|@\/)?(images\/|src\/assets\/images\/)?/, '');
  const directKey = `./${cleanName}`;
  if (allImages[directKey]) {
    return allImages[directKey];
  }
  // Try decoded URI key if spaces or symbols were encoded
  const decodedKey = `./${decodeURIComponent(cleanName)}`;
  if (allImages[decodedKey]) {
    return allImages[decodedKey];
  }
  return `/images/${cleanName}`;
}

export {
  heroMockup,
  desktopHero,
  desktopDemo,
  exploreReports,
  setUpBusiness,
  customizeBills,
  downloadTrial,
  logo1,
  qrCode,
  mobileIcon,
  iconAccounting,
  iconInventory,
  iconInvoicing,
  iconEInvoice,
  iconPOS,
  iconOCR,
  iconRetail,
  iconPharma,
  iconGrocery,
  iconRestaurant,
  iconJewellery,
  iconClothing,
  iconTaxone,
  iconFlyy,
  iconTable,
  iconNeodove,
  iconBlogs,
  iconUseCase,
  iconGuides,
  iconTestimonial,
  iconPlatformVideo,
  iconGooglePlay,
  iconSourceForge,
  iconG2,
  allImages,
};
