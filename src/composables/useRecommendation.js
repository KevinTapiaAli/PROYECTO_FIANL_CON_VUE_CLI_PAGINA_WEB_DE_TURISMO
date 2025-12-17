/**

 */
export function useRecommendation(packages, maxPrice) {
  if (!Array.isArray(packages)) {
    return [];
  }

  return packages
    .filter((p) => p.price <= maxPrice)
    .sort((a, b) => a.price - b.price)
    .slice(0, 3);
}
