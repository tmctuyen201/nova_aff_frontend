import { createFallbackImage } from "./createFallbackImage";

/**
 * Load image with multiple fallback options
 * @param {string} primaryUrl - Primary image URL
 * @param {Object} fallbackOptions - Options for fallback
 * @returns {Promise<string>} Final image URL or data URL
 */
export const loadImageWithFallback = async (
  primaryUrl,
  fallbackOptions = {}
) => {
  const { title, color, category } = fallbackOptions;

  // Try primary URL first
  try {
    const response = await fetch(primaryUrl, { method: "HEAD" });
    if (response.ok) {
      return primaryUrl;
    }
  } catch (error) {
    console.log("Primary image failed to load:", error);
  }

  // Fallback to generated image
  return createFallbackImage(title, color, category);
};

/**
 * Create a React hook for image loading with fallback
 */
export const useImageWithFallback = (imageUrl, fallbackOptions) => {
  const [finalImageUrl, setFinalImageUrl] = React.useState(imageUrl);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setIsLoading(true);
    setError(null);

    const img = new Image();
    img.onload = () => {
      setFinalImageUrl(imageUrl);
      setIsLoading(false);
    };
    img.onerror = () => {
      console.log("Image failed to load, creating fallback");
      const fallbackUrl = createFallbackImage(
        fallbackOptions.title,
        fallbackOptions.color,
        fallbackOptions.category
      );
      setFinalImageUrl(fallbackUrl);
      setIsLoading(false);
      setError("Primary image failed to load");
    };
    img.src = imageUrl;
  }, [
    imageUrl,
    fallbackOptions.title,
    fallbackOptions.color,
    fallbackOptions.category,
  ]);

  return { imageUrl: finalImageUrl, isLoading, error };
};

/**
 * Get reliable image URLs with auto-format and quality optimization
 */
export const getOptimizedImageUrl = (originalUrl, options = {}) => {
  const { width = 400, height = 300, quality = 75 } = options;

  // If it's an Unsplash URL, add optimization parameters
  if (originalUrl.includes("images.unsplash.com")) {
    const url = new URL(originalUrl);
    url.searchParams.set("w", width);
    url.searchParams.set("h", height);
    url.searchParams.set("fit", "crop");
    url.searchParams.set("crop", "center");
    url.searchParams.set("auto", "format");
    url.searchParams.set("q", quality);
    return url.toString();
  }

  return originalUrl;
};

/**
 * Preload images to reduce loading time
 */
export const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(new Error(`Failed to load ${url}`));
        img.src = url;
      });
    })
  );
};
