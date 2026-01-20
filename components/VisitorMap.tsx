import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
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
  timestamp: string;
}

interface LocationDensity {
  coordinates: [number, number];
  count: number;
}

const VisitorMap = () => {
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
    const radius = Math.min(1 + (count * 2), 3);
    let color;
    if (count >= 300) color = "#FF0000";      // Red for high density
    else if (count >= 100) color = "#FFA500";   // Orange for medium density
    else color = "#0070f3";                   // Blue for low density

    return { radius, color };
  };

  const fetchVisitors = async () => {
    const { data: visitors, error } = await supabase
      .from('visitors')
      .select('*');

      if (error) {
        console.error('Supabase fetch error:', error);
        return;
      }
      console.log('Fetched visitors:', visitors); // Check fetched data
      setTotalVisitors(visitors.length);
      setVisitorDensity(calculateDensity(visitors));
    };

  const trackVisitor = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      console.log('IP location:', data);
      
      const { error } = await supabase
        .from('visitors')
        .insert([{
          coordinates: [data.longitude, data.latitude],
          timestamp: new Date().toISOString()
        }]);
        if (error) {
          console.error('Supabase insert error:', error);
          return;
        }
        console.log('Successfully added visitor'); // Check insert success
        fetchVisitors();
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

  useEffect(() => {
    fetchVisitors();
    trackVisitor();

    // Subscribe to realtime changes
    const subscription = supabase
      .channel('visitors')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'visitors' },
        () => {
          fetchVisitors();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className={styles.mapContainer}>
      <div className={styles.statsOverlay}>
        <span>Total Visitors: {totalVisitors + 1000}</span>
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
                    strokeWidth={1}
                    stroke="#fff"
                  />
                  {/* {location.count > 1 && (
                    <text
                      textAnchor="middle"
                      y={5}
                      style={{
                        fontFamily: "system-ui",
                        fontSize: "3px",
                        fill: "#fff"
                      }}
                    >
                      {location.count}
                    </text>
                  )} */}
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