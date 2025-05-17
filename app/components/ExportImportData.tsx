import React, { useState, useRef } from 'react';
import { getWorkoutData, saveWorkoutData } from '../utils/storage';

interface ExportImportDataProps {
  onDataImported: () => void;
}

const ExportImportData: React.FC<ExportImportDataProps> = ({ onDataImported }) => {
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Export data to JSON file
  const handleExport = () => {
    try {
      const data = getWorkoutData();
      
      if (Object.keys(data).length === 0) {
        alert('No workout data to export.');
        return;
      }
      
      // Add metadata with timestamp for export
      const exportData = {
        data: data,
        metadata: {
          exportedAt: new Date().toISOString(),
          version: "1.0"
        }
      };
      
      const dataStr = JSON.stringify(exportData, null, 2);
      const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
      
      const exportFileName = `workout-data-${new Date().toISOString().split('.')[0].replace(/:/g, '-')}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileName);
      linkElement.click();
      
      setImportStatus('Export successful!');
      setTimeout(() => setImportStatus(null), 3000);
    } catch (error) {
      console.error('Export failed:', error);
      setImportStatus('Export failed. Please try again.');
      setTimeout(() => setImportStatus(null), 3000);
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle file import
  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const importedData = JSON.parse(content);
        let workoutData;
        
        // Handle both old and new format
        if (importedData.data && importedData.metadata) {
          workoutData = importedData.data;
        } else {
          workoutData = importedData;
        }
        
        // Validate imported data structure
        if (typeof workoutData !== 'object') {
          throw new Error('Invalid data format');
        }
        
        // Merge with existing data (importedData will overwrite existing)
        const existingData = getWorkoutData();
        const mergedData = { ...existingData, ...workoutData };
        
        // Save merged data
        saveWorkoutData(mergedData);
        
        setImportStatus('Import successful!');
        setTimeout(() => setImportStatus(null), 3000);
        
        // Notify parent component
        onDataImported();
      } catch (error) {
        console.error('Import failed:', error);
        setImportStatus('Import failed. Please check the file format.');
        setTimeout(() => setImportStatus(null), 3000);
      }
    };
    
    reader.onerror = () => {
      setImportStatus('Error reading file. Please try again.');
      setTimeout(() => setImportStatus(null), 3000);
    };
    
    reader.readAsText(file);
    
    // Reset file input
    if (event.target) {
      event.target.value = '';
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-medium mb-1">Backup & Restore</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Export your workout data for backup or import previously exported data.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-sm font-medium transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Export Data
          </button>
          
          <button
            onClick={triggerFileInput}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" transform="rotate(180, 10, 10)" />
            </svg>
            Import Data
          </button>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImport}
            accept=".json"
            className="hidden"
          />
        </div>
      </div>
      
      {importStatus && (
        <div className="mt-3 text-sm text-center font-medium text-emerald-600 dark:text-emerald-400 animate-pulse">
          {importStatus}
        </div>
      )}
    </div>
  );
};

export default ExportImportData; 