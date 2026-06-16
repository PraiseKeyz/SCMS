import { PrismaClient, Role, ZoneType, GateDirection, LandmarkCategory, ZoneStatusEnum } from '../generated/prisma/index.js';
import { hash } from 'argon2';

const prisma = new PrismaClient();

// Campus center: Redemption City, Lagos-Ibadan Expressway — 6.825889°N, 3.462819°E
// All coordinates are approximate placeholders around the confirmed campus location.

async function main() {
  console.log('\n🌱 Seeding SCMS database...\n');

  // Wipe in dependency order
  await prisma.wardenCheckin.deleteMany();
  await prisma.zoneStatus.deleteMany();
  await prisma.broadcastAlert.deleteMany();
  await prisma.incident.deleteMany();
  await prisma.user.deleteMany();
  await prisma.zone.deleteMany();
  await prisma.gate.deleteMany();
  await prisma.landmark.deleteMany();

  // ── Users ───────────────────────────────────────────────────────────────────
  const credentials = [
    { name: 'Warden Alpha', email: 'alpha@scms.dev', role: Role.WARDEN, password: 'Warden@123' },
    { name: 'Warden Beta',  email: 'beta@scms.dev',  role: Role.WARDEN, password: 'Warden@456' },
    { name: 'Super Admin',  email: 'admin@scms.dev', role: Role.ADMIN,  password: 'Admin@9999' },
  ];

  const hashedPasswords = await Promise.all(credentials.map(c => hash(c.password)));

  const users = await Promise.all(
    credentials.map(({ name, email, role }, i) =>
      prisma.user.create({ data: { name, email, role, password: hashedPasswords[i] } }),
    ),
  );

  const admin = users[2];

  console.log('✅ Users');
  credentials.forEach(({ name, email, role, password }, i) => {
    console.log(`   ${role.padEnd(6)} | ${name.padEnd(15)} | ${email.padEnd(20)} | password: ${password}`);
  });

  // ── Zones ───────────────────────────────────────────────────────────────────
  const zones = await prisma.zone.createManyAndReturn({
    data: [
      {
        name: 'Main Car Park',
        label: 'P-A',
        capacity: 500,
        type: ZoneType.PARKING,
        geojson: {
          type: 'Polygon',
          coordinates: [[
            [3.4605, 6.8252], [3.4630, 6.8252],
            [3.4630, 6.8263], [3.4605, 6.8263],
            [3.4605, 6.8252],
          ]],
        },
      },
      {
        name: 'Guest House Parking',
        label: 'P-B',
        capacity: 200,
        type: ZoneType.PARKING,
        geojson: {
          type: 'Polygon',
          coordinates: [[
            [3.4635, 6.8265], [3.4655, 6.8265],
            [3.4655, 6.8274], [3.4635, 6.8274],
            [3.4635, 6.8265],
          ]],
        },
      },
      {
        name: 'Arena Overflow Parking',
        label: 'P-C',
        capacity: 800,
        type: ZoneType.PARKING,
        geojson: {
          type: 'Polygon',
          coordinates: [[
            [3.4645, 6.8248], [3.4678, 6.8248],
            [3.4678, 6.8262], [3.4645, 6.8262],
            [3.4645, 6.8248],
          ]],
        },
      },
      {
        name: 'Holy Ghost Auditorium Grounds',
        label: 'V-MAIN',
        capacity: 5000,
        type: ZoneType.VENUE,
        geojson: {
          type: 'Polygon',
          coordinates: [[
            [3.4618, 6.8268], [3.4648, 6.8268],
            [3.4648, 6.8285], [3.4618, 6.8285],
            [3.4618, 6.8268],
          ]],
        },
      },
      {
        name: 'Main Access Road',
        label: 'R-MAIN',
        capacity: 0,
        type: ZoneType.ROAD,
        geojson: {
          type: 'Polygon',
          coordinates: [[
            [3.4610, 6.8256], [3.4620, 6.8256],
            [3.4620, 6.8280], [3.4610, 6.8280],
            [3.4610, 6.8256],
          ]],
        },
      },
    ],
  });

  console.log(`\n✅ Zones (${zones.length})`);
  zones.forEach(z => console.log(`   ${z.label.padEnd(8)} | ${z.name}`));

  // Initial AVAILABLE status for every parking zone
  const parkingZones = zones.filter(z => z.type === ZoneType.PARKING);
  await Promise.all(
    parkingZones.map(zone =>
      prisma.zoneStatus.create({
        data: { zoneId: zone.id, status: ZoneStatusEnum.AVAILABLE, updatedById: admin.id },
      }),
    ),
  );
  console.log(`\n✅ Zone statuses — ${parkingZones.length} parking zones set to AVAILABLE`);

  // ── Gates ───────────────────────────────────────────────────────────────────
  await prisma.gate.createMany({
    data: [
      { name: 'Main Entrance Gate', label: 'Gate 1', latitude: 6.8254, longitude: 3.4612, direction: GateDirection.ENTRY },
      { name: 'Eastern Exit Gate',  label: 'Gate 2', latitude: 6.8271, longitude: 3.4650, direction: GateDirection.EXIT },
      { name: 'VIP Gate',           label: 'Gate 3', latitude: 6.8260, longitude: 3.4638, direction: GateDirection.BOTH },
    ],
  });
  console.log('\n✅ Gates (3) — Entry, Exit, Both');

  // ── Landmarks ───────────────────────────────────────────────────────────────
  await prisma.landmark.createMany({
    data: [
      { name: 'Holy Ghost Auditorium',          category: LandmarkCategory.HALL,   latitude: 6.8275, longitude: 3.4630, accessibleRoute: true  },
      { name: 'Redemption City Medical Centre', category: LandmarkCategory.CLINIC, latitude: 6.8258, longitude: 3.4638, accessibleRoute: true  },
      { name: 'Camp Food Court',                category: LandmarkCategory.FOOD,   latitude: 6.8268, longitude: 3.4622, accessibleRoute: true  },
      { name: 'Admin Secretariat',              category: LandmarkCategory.ADMIN,  latitude: 6.8262, longitude: 3.4645, accessibleRoute: true  },
      { name: 'Public Restrooms Block A',       category: LandmarkCategory.TOILET, latitude: 6.8256, longitude: 3.4628, accessibleRoute: false },
      { name: 'Public Restrooms Block B',       category: LandmarkCategory.TOILET, latitude: 6.8270, longitude: 3.4640, accessibleRoute: false },
    ],
  });
  console.log('\n✅ Landmarks (6) — Hall, Clinic, Food, Admin, Toilet x2');

  console.log('\n🎉 Seed complete!');
  console.log('\n─── Login credentials ────────────────────────────────────────');
  credentials.forEach(({ name, email, password }, i) => {
    console.log(`  ${name.padEnd(15)} | ${email.padEnd(20)} | password: ${password}`);
  });
  console.log('──────────────────────────────────────────────────────────────\n');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
