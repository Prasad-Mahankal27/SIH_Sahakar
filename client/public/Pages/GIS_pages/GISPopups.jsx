import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Tooltip, useMap } from 'react-leaflet';
import lineIntersect from '@turf/line-intersect';
import { lineString } from '@turf/helpers';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet for the legend

// Utility function to get color based on status
const getColorByStatus = (status) => {
  switch (status) {
    case 'Underground':
      return '#1f78b4'; // Blue
    case 'On Ground':
      return '#33a02c'; // Green
    case 'Overground':
      return '#e31a1c'; // Red
    default:
      return '#000000'; // Black as default
  }
};

// Legend Component
const Legend = () => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'info legend');
      const statuses = ['Underground', 'On Ground', 'Overground'];
      const colors = statuses.map((status) => getColorByStatus(status));

      div.innerHTML += '<h4>Status</h4>';
      statuses.forEach((status, index) => {
        div.innerHTML +=
          '<i style="background:' +
          colors[index] +
          '; width: 18px; height: 18px; display: inline-block; margin-right: 8px;"></i> ' +
          status + '<br>';
      });

      return div;
    };

    legend.addTo(map);

    // Cleanup on unmount
    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
};

const GISPopup = () => {
  // Initial line data with 2 roads and 2 utility lines with angles
  const lineData = [
    // Roads with bends
    {
      id: 1,
      type: "Internet Optic Fiber Lines",
      status: "Underground",
      department: "Road Department",
      coordinates: [
        [51.505, -0.09],
        [51.506, -0.085],
        [51.507, -0.08],
        [51.508, -0.075],
        [51.509, -0.07],
      ],
    },
    {
      id: 2,
      type: "Electricity Line",
      status: "On Ground",
      department: "Road Department",
      coordinates: [
        [51.505, -0.07],
        [51.506, -0.075],
        [51.507, -0.08],
        [51.508, -0.085],
        [51.509, -0.09],
      ],
    },
    // Utility Lines with angles
    {
      id: 3,
      type: "Gas Pipe Line",
      status: "Underground",
      department: "Electric Department",
      coordinates: [
        [51.505, -0.09],
        [51.506, -0.08],
        [51.507, -0.07],
        [51.508, -0.06],
        [51.509, -0.05],
      ],
    },
    {
      id: 4,
      type: "Brridge",
      status: "On Ground",
      department: "Gas Department",
      coordinates: [
        [51.505, -0.07],
        [51.506, -0.06],
        [51.507, -0.05],
        [51.508, -0.04],
        [51.509, -0.03],
      ],
    },
  ];

  const [selectedOverlap, setSelectedOverlap] = useState(null);
  const [overlapsState, setOverlapsState] = useState([]);

  // Function to detect overlaps between lines
  const detectOverlaps = (lines) => {
    const overlaps = [];
    for (let i = 0; i < lines.length; i++) {
      for (let j = i + 1; j < lines.length; j++) {
        const line1 = lineString(lines[i].coordinates);
        const line2 = lineString(lines[j].coordinates);
        const intersection = lineIntersect(line1, line2);

        if (intersection.features.length > 0) {
          intersection.features.forEach((feature) => {
            overlaps.push({
              line1: lines[i],
              line2: lines[j],
              intersections: feature.geometry.coordinates,
              status: "Pending", // Initialize status as "Pending"
            });
          });
        }
      }
    }
    return overlaps;
  };

  // Initialize overlaps with status
  useEffect(() => {
    const detectedOverlaps = detectOverlaps(lineData);
    setOverlapsState(detectedOverlaps);
  }, [lineData]);

  // Handler to perform action on all overlaps
  const handleTakeAction = () => {
    // Example Action: Approve all Pending overlaps
    const updatedOverlaps = overlapsState.map(overlap => ({
      ...overlap,
      status: "Approved",
    }));
    setOverlapsState(updatedOverlaps);
  };

  return (
    <div className="relative">
      <h1 className="text-center text-2xl font-bold my-4">GIS Overlap Detection</h1>
      <MapContainer style={{ height: "600px", width: "100%" }} center={[51.506, -0.075]} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {lineData.map((line) => (
          <Polyline
            key={line.id}
            positions={line.coordinates}
            color={getColorByStatus(line.status)}
            weight={5}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1} sticky>
              <span>{line.type}</span>
            </Tooltip>
          </Polyline>
        ))}
        {overlapsState.map((overlap, idx) => (
          <Polyline
            key={idx}
            positions={[ [overlap.intersections[1], overlap.intersections[0]] ]} // Convert [lng, lat] to [lat, lng]
            color="purple"
            dashArray="5, 5"
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1} sticky>
              Overlap between {overlap.line1.type} and {overlap.line2.type}
            </Tooltip>
          </Polyline>
        ))}
        <Legend />
      </MapContainer>
      <div className="mt-6 bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-4">Overlap Details</h2>
        {overlapsState.length > 0 ? (
          <div>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Line 1</th>
                  <th className="border border-gray-300 p-2">Line 2</th>
                  <th className="border border-gray-300 p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {overlapsState.map((overlap, idx) => (
                  <tr key={idx}>
                    <td className="border border-gray-300 p-2">{overlap.line1.type}</td>
                    <td className="border border-gray-300 p-2">{overlap.line2.type}</td>
                    <td className={`border border-gray-300 p-2 ${overlap.status === 'Approved' ? 'bg-green-200' : 'bg-yellow-200'}`}>
                      {overlap.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Take Action Button */}
            <div className="mt-4 flex justify-center">
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={handleTakeAction}
              >
                Take Action
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No overlaps detected.</p>
        )}
      </div>

      {selectedOverlap && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-6 border-t border-gray-300">
          <h2 className="text-xl font-bold mb-4">Overlap Details</h2>
          <p>
            <strong>Line 1:</strong> {selectedOverlap.line1.type} ({selectedOverlap.line1.department})
          </p>
          <p>
            <strong>Line 2:</strong> {selectedOverlap.line2.type} ({selectedOverlap.line2.department})
          </p>
          <p>
            <strong>Status:</strong> {selectedOverlap.status}
          </p>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => setSelectedOverlap(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default GISPopup;
