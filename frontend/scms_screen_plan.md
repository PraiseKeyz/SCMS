# SCMS App Screen Plan

## 1. Onboarding & Auth
- **Role Selection**: Initial landing screen where users choose 'Visitor' or 'Staff'.
- **Login Screen**: Staff-only login (Wardens/Admins) with email and password fields.

## 2. Visitor Experience (Map-Centric)
- **Visitor Home (Map View)**: Interactive Mapbox-style map showing campus zones (parking, venues, roads), gates, and landmarks. Includes a search bar and category filters.
- **Landmark Detail & Navigation**: Detailed view of a landmark with a 'Navigate' CTA that shows a route overlay on the map.

## 3. Driver & Parking Experience
- **Driver Parking Map**: Map view specifically highlighting parking zones with real-time status colors (Green/Amber/Red).
- **Parking Zone List**: A list view of all parking zones with occupancy percentages, distance, and ETA.
- **Recommended Parking (Nearest)**: A 'Find Nearest' result screen showing the top recommended zone based on distance and occupancy.

## 4. Warden/Staff Experience (Task-Oriented)
- **Warden Dashboard**: Overview for staff showing active alerts, their assigned zone, and quick actions.
- **Zone Status Update**: A simple, one-tap interface for wardens to update their current zone status (Available, Limited, Full).
- **Incident Reporting**: Form to report incidents (type, description, location) with GPS attachment.
- **Broadcast Alert**: Form for wardens to send campus-wide emergency broadcasts.

## 5. Admin Experience
- **Warden Deployment (Admin Only)**: Map/List view showing the real-time locations and check-ins of all wardens on duty.
- **User Management**: Screen for admins to manage (add/remove) staff accounts.