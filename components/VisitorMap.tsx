import { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import styles from '@/styles/VisitorMap.module.css';

const geoUrl = "/world-110m.json";

interface Visitor {
  coordinates: [number, number];
  timestamp: number;
}

interface LocationDensity {
  coordinates: [number, number];
  count: number;
}

const VisitorMap = () => {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [visitorDensity, setVisitorDensity] = useState<LocationDensity[]>([]);
  const [totalVisitors, setTotalVisitors] = useState(0);

  const calculateDensity = (visitors: Visitor[]) => {
    const densityMap = new Map<string, LocationDensity>();
    
    visitors.forEach(visitor => {
      const key = `${visitor.coordinates[0]},${visitor.coordinates[1]}`;
      if (densityMap.has(key)) {
        const location = densityMap.get(key)!;
        location.count += 1;
      } else {
        densityMap.set(key, {
          coordinates: visitor.coordinates,
          count: 1
        });
      }
    });

    return Array.from(densityMap.values());
  };

  const getMarkerProps = (count: number) => {
    // Scale radius based on visitor count (min 4, max 12)
    const radius = Math.min(4 + (count * 2), 12);
    
    // Color gradient based on count
    let color;
    if (count >= 10) color = "#FF0000";      // Red for high density
    else if (count >= 5) color = "#FFA500";   // Orange for medium density
    else color = "#0070f3";                   // Blue for low density

    return { radius, color };
  };

  const trackVisitor = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      const newVisitor: Visitor = {
        coordinates: [data.longitude, data.latitude],
        timestamp: Date.now()
      };

      const existingVisitors = JSON.parse(localStorage.getItem('visitors') || '[]');
      const updatedVisitors = [...existingVisitors, newVisitor];
      localStorage.setItem('visitors', JSON.stringify(updatedVisitors));

      setVisitors(updatedVisitors);
      setTotalVisitors(updatedVisitors.length);
      setVisitorDensity(calculateDensity(updatedVisitors));
    } catch (error) {
      console.error('Error tracking visitor:', error);
    }
  };

  useEffect(() => {
    const loadVisitors = () => {
      const saved = localStorage.getItem('visitors');
      if (saved) {
        const parsedVisitors = JSON.parse(saved);
        setVisitors(parsedVisitors);
        setTotalVisitors(parsedVisitors.length);
        setVisitorDensity(calculateDensity(parsedVisitors));
      }
    };

    loadVisitors();
    trackVisitor();
  }, []);

  return (
    <div className={styles.mapContainer}>
      <div className={styles.statsOverlay}>
        <span>Total Visitors: {totalVisitors}</span>
      </div>
      <div className={styles.map}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 150,
            center: [0, 30]
          }}
        >
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#2C3E50"
                    stroke="#1a1a1a"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#3498DB", outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {visitorDensity.map((location, index) => {
              const { radius, color } = getMarkerProps(location.count);
              return (
                <Marker key={index} coordinates={location.coordinates}>
                  <circle 
                    r={radius}
                    fill={color}
                    fillOpacity={0.8}
                    strokeWidth={2}
                    stroke="#fff"
                  />
                  {location.count > 1 && (
                    <text
                      textAnchor="middle"
                      y={4}
                      style={{
                        fontFamily: "system-ui",
                        fontSize: "8px",
                        fill: "#fff"
                      }}
                    >
                      {location.count}
                    </text>
                  )}
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <div className={styles.mobileMessage}>
        <p>Please visit on desktop to view the interactive visitor map.</p>
      </div>
    </div>
  );
};

export default VisitorMap;