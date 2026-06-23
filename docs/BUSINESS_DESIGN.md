# SCMS — Business Design & Go-To-Market

> Smart Campus Mobility System · Kingdom Hack 3.0 · Smart City Innovation Track
>
> Built for Redemption City, the RCCG camp ground on the Lagos–Ibadan Expressway
> (6.825889°N, 3.462819°E). This isn't a generic multi-campus pitch. SCMS is built around
> Redemption City's actual geography, zones, gates, and landmarks.

## 1. The Problem at Redemption City

Redemption City hosts some of the largest recurring religious gatherings anywhere, most
notably the Holy Ghost Congress, which draws crowds in the hundreds of thousands across a
camp ground spanning thousands of acres. At that scale, the same problems show up every event:

- **Visitors get lost.** There's no reliable way to navigate between gates, the Holy Ghost
  Auditorium, the Camp Food Court, the Medical Centre, or restrooms across grounds this large.
- **Drivers circle aimlessly.** Nobody can tell which of the camp's parking areas, Main Car
  Park, Guest House Parking, or Arena Overflow Parking, still has space, so vehicles back up
  at the gates while other zones sit half empty.
- **Wardens coordinate by radio.** Incidents and hazards get reported verbally, with no
  record of what happened, when, or who responded.
- **Camp administration flies blind.** There's no real-time view of zone occupancy or
  warden deployment across the ground during peak congestion.

## 2. Who This Is For

Redemption City itself, operated by The Redeemed Christian Church of God (RCCG). SCMS is
modeled directly on the camp's real layout:

| Element | Real examples already in the system |
|---------|--------------------------------------|
| Parking zones | Main Car Park (P-A), Guest House Parking (P-B), Arena Overflow Parking (P-C) |
| Venue ground | Holy Ghost Auditorium Grounds (V-MAIN) |
| Gates | Main Entrance Gate, Eastern Exit Gate, VIP Gate |
| Landmarks | Holy Ghost Auditorium, Redemption City Medical Centre, Camp Food Court, Admin Secretariat, restroom blocks |

The people who use it on the ground:

| User | What SCMS gives them at Redemption City |
|------|-------------------------------------------|
| **Visitor** at a Congress or service | An anonymous map to navigate gate to auditorium to food court to restroom, with no login needed |
| **Driver** arriving for a vigil or Congress | Live status of Main Car Park, Guest House Parking, and Arena Overflow Parking, with a route to whichever is open |
| **Warden** on duty | One tap zone status updates, instant alert broadcast (e.g. "Flooding near Gate 2, use Gate 1"), and incident logging |
| **Camp administration** | A real-time view of warden deployment and zone occupancy across the entire camp during peak events |

## 3. Business Model

SCMS is built for Redemption City specifically, not as a multi-tenant SaaS product.

- **Commissioned directly by RCCG** as the operating body of Redemption City. Either a
  one-time build and handover, or an ongoing hosting and maintenance retainer tied to the
  camp's event calendar (Congress, Convention, weekly services).
- **Optional data insight package.** Anonymized occupancy and crowd-flow reports per event
  (for example, "Main Car Park fills by 9:40am on Congress days") to inform the camp's own
  future infrastructure decisions. There's no privacy cost since visitors never hold an account.
- **A future possibility, not the current plan.** If this proves out at Redemption City over
  time, the same approach could extend to other RCCG provincial camps. That's a downstream
  option, not part of this go-to-market.

## 4. Rollout Plan

| Stage | Scope |
|-------|-------|
| **Phase 1: Pilot** | Deploy on the existing seeded zones, gates, and landmarks during a regular weekly service or a smaller convention. Validate the real-time flow with a small number of wardens before scaling up. |
| **Phase 2: Flagship event** | Once validated, roll out camp-wide for a major gathering such as the Holy Ghost Congress, with full warden deployment and the visitor map live for attendees. |
| **Phase 3: Standing tool** | SCMS becomes Redemption City's permanent operations layer for every event going forward, not a one-off pilot. |

The primary stakeholder and decision-maker throughout is Redemption City's camp
administration and RCCG event operations team.

## 5. What It Replaces

| Today at Redemption City | With SCMS |
|---------------------------|-----------|
| Wardens coordinate by radio, with no record of incidents | Incidents and alerts are logged, timestamped, and broadcast instantly through the app |
| No visitor facing digital map of the camp | A live, anonymous map covering real zones, gates, and landmarks |
| No visibility into parking occupancy | Drivers see live zone status and get routed to the nearest available zone |
| Generic maps only show the camp's general location | SCMS understands the camp's internal layout, the zones, gates, and landmarks that no general purpose map covers |

## 6. Roadmap

| Stage | Scope |
|-------|-------|
| **Now (hackathon MVP)** | Auth, Redemption City's seeded campus map, parking zone status, alerts and incidents, and real-time WebSocket sync, all modeled on the camp's actual zones and landmarks |
| **Next 3 months** | Turn-by-turn navigation across the camp, push notifications for Congress-scale events, and an admin analytics dashboard for camp administration |
| **6 to 12 months** | Crowd prediction trained on real Redemption City event data, replacing today's distance and occupancy heuristic, plus integration with the camp's physical gate operations |

## 7. Why Now

Redemption City's events keep growing in scale. The Holy Ghost Congress regularly draws
record attendance year over year. Smartphone penetration among attendees is now high enough
that a visitor facing app is a realistic channel, not a barrier. And safety at this scale of
gathering is a real and growing concern for the camp. Real-time incident reporting and
alerting moves operations from reactive radio coordination to a proactive, recorded response.
