export const  getImageWidth = (imageUrl) => {
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
  }
  
export const getTotalWidth = async(imageUrls) => {
    try {
      const widths = await Promise.all(imageUrls.map(getImageWidth));
      const totalWidth = widths.reduce((total, width) => total + width, 0);
      return totalWidth;
    } catch (error) {
      console.error('Error loading images:', error);
      return null;
    }
  }

  export const makeTheLastElementFirst = (elements) => {
    return [elements[elements.length - 1], ...elements.slice(0, elements.length - 1)];
  }

  export const makeTheFirstElementLast = (elements) => {
    return [...elements.slice(1), elements[0]];
  }