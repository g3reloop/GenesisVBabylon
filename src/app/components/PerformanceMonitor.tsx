'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  memoryUsage?: number;
  loadTime?: number;
  renderTime?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const startTime = performance.now();

    // Monitor memory usage
    const updateMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) // MB
        }));
      }
    };

    // Monitor load time
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({
        ...prev,
        loadTime: Math.round(loadTime)
      }));
    };

    // Monitor render time
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure') {
          setMetrics(prev => ({
            ...prev,
            renderTime: Math.round(entry.duration)
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['measure'] });

    // Update memory usage every 5 seconds
    const memoryInterval = setInterval(updateMemoryUsage, 5000);
    updateMemoryUsage();

    window.addEventListener('load', handleLoad);

    // Show performance monitor after 2 seconds
    const showTimer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      clearInterval(memoryInterval);
      clearTimeout(showTimer);
      window.removeEventListener('load', handleLoad);
      observer.disconnect();
    };
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Monitor</div>
      <div>Memory: {metrics.memoryUsage || 0}MB</div>
      <div>Load: {metrics.loadTime || 0}ms</div>
      <div>Render: {metrics.renderTime || 0}ms</div>
      <button
        onClick={() => setIsVisible(false)}
        className="mt-2 text-gray-400 hover:text-white"
      >
        ×
      </button>
    </div>
  );
};

export default PerformanceMonitor;

