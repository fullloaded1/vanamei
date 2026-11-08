import { redirect } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CharcoalLegacyRedirect({ params }: Props) {
  const { slug } = await params;

  // Map old charcoal slugs to new activated carbon slugs
  const slugMap: Record<string, string> = {
    'arang-briket-shisha': 'granular-activated-carbon',
    'arang-kayu-keras': 'pelletized-activated-carbon',
    'arang-tempurung-kelapa': 'water-treatment-air-gas-purification',
    'arang-sawdust-briquette': 'powdered-activated-carbon'
  };

  const targetSlug = slugMap[slug] || 'granular-activated-carbon';
  redirect(`/products/${targetSlug}`);
}
