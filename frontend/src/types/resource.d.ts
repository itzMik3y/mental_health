export interface Resource {
  /** stable id */
  id: string;
  /** display title */
  title: string;
  /** short one‑line preview */
  shortDescription: string;
  /** richer multi‑paragraph text shown on the card back */
  longDescription?: string;
  /** optional contact details */
  phone?: string;
  email?: string;
  address?: string;
  website?: string;
  hours?: string;
  /** cost / payment info */
  pricing?: string;

  /** visual tweaks */
  icon?: FC<{ className?: string }>;
  iconBgColor?: string;
  iconColor?: string;

  /** pricing badge flags */
  freeService?: boolean;
  lowCost?: boolean;
  slidingScale?: boolean;
}
