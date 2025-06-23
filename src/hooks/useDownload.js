import { useState } from 'react';

export const useDownload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const downloadFile = async (url, fileName) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      
      // Trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError('Failed to download file. Please try again.');
      console.error('Download error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return { downloadFile, isLoading, error };
};
