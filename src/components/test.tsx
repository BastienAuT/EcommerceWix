const isVariantInStock = (choices: { [key: string]: string }) => {
  return variants.some((variant) => {
    const variantChoices = variant.choices;
    if (!variantChoices) return false;
    return (
      Object.entries(choices).every(
        ([key, value]) => variantChoices[key] === value
      ) &&
      variant.stock?.inStock &&
      variant.stock?.quantity &&
      variant.stock?.quantity > 0
    );
  });
};
