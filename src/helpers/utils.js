export const getImageWidth = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img.width);
    };
    img.onerror = (error) => {
      reject(error);
    };
    img.src = imageUrl;
  });
};

export const getTotalWidth = async (imageUrls) => {
  try {
    const widths = await Promise.all(imageUrls.map(getImageWidth));
    const totalWidth = widths.reduce((total, width) => total + width, 0);
    return totalWidth;
  } catch (error) {
    console.error("Error loading images:", error);
    return null;
  }
};
