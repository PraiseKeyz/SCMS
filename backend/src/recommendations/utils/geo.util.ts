import { Logger } from '@nestjs/common';

export interface LatLng {
  lat: number;
  lng: number;
}

export function haversineDistanceMeters(a: LatLng, b: LatLng): number {
  const R = 6371000;
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

// Zone.geojson is a Polygon — approximate its center as the average of the
// outer ring's points. Good enough for "nearest zone" ranking; not a true
// geometric centroid.
export function polygonCentroid(geojson: any): LatLng {
  const ring: [number, number][] = geojson?.coordinates?.[0] ?? [];
  if (!ring.length) {
    Logger.warn(
      'polygonCentroid received missing or malformed geojson',
      'GeoUtil',
    );
    return { lat: 0, lng: 0 };
  }

  const sum = ring.reduce(
    (acc, [lng, lat]) => ({ lat: acc.lat + lat, lng: acc.lng + lng }),
    { lat: 0, lng: 0 },
  );

  return { lat: sum.lat / ring.length, lng: sum.lng / ring.length };
}
