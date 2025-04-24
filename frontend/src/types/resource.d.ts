export interface Resource {
    title: string;
    shortDescription: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    iconBgColor?: string;
    iconColor?: string;
    freeService?: boolean;
    lowCost?: boolean;
    slidingScale?: boolean;
    address?: string;
    phone?: string;
    email?: string;
    pricing?: string;
  }
  