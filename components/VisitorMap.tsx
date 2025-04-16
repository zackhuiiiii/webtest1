import { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import styles from '@/styles/VisitorMap.module.css';

interface Visitor {
  location: [number, number]; // [longitude, latitude]
  timestamp: number;
}

const VisitorMap = () => {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    // Example function to get visitor's location
    const trackVisitor = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const newVisitor: Visitor = {
          location: [data.longitude, data.latitude],
          timestamp: Date.now()
        };
        
        setVisitors(prev => [...prev, newVisitor]);
        setTotalVisitors(prev => prev + 1);
        
        // Here you would typically save this to your backend
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackVisitor();
  }, []);

  return (
    <div className={styles.mapContainer}>
      <div className={styles.statsOverlay}>
        <span>Total Visitors: {totalVisitors}</span>
      </div>
      <ComposableMap
        projectionConfig={{
          scale: 147,
        }}
      >
        <Geographies geography="/world-110m.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1e1e1e"
                stroke="#333"
                strokeWidth={0.5}
              />
            ))
          }
        </Geographies>
        
        {visitors.map((visitor, index) => (
          <Marker key={index} coordinates={visitor.location}>
            <circle r={4} fill="#0070f3" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default VisitorMap;