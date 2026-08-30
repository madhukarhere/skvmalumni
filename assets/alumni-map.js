// Alumni Map — data aggregated from the SKVM Alumni Directory responses.
// Uses safe DOM APIs (textContent / createElement) — no innerHTML with user data.

(function () {
  const ALUMNI = [
    // India
    ["Visakhapatnam", "India", 17.6868, 83.2185, [
      "K. Durga Aparna (2001)", "D A V Suresh (2008)", "Tangudu Akhilesh (2023)",
      "GSR Arun Kumar (1992)", "P. Siri Varshini (2020)", "K. Uditha Hasini (2022)",
      "Sagi Rajani (1990)", "M.N.S. Siddhartha (2015)", "D. Uma Neelaveni (1994)",
      "Pulakhandam Sowndarya (2023)", "Nouduri Venkata Abhishek (2011)",
      "Pattapu Navyanjali (2015)", "Soumya Ranjan Jena (2010)", "Sneha Korada (2021)",
      "Nakka Sridevi Chandrakala (2014)", "Nedunuri Aravinda (1990)",
      "Pola Sri Krishna Chaitanya (2023)", "Boddepalli Harish (2007)",
      "Madhukar Mudunuru (1998)", "V. Siva Santosh Karthik (2025)",
      "Pindiprolu Venkata Phani Raju (1989)"
    ]],
    ["Hyderabad", "India", 17.3850, 78.4867, [
      "Sridevi Mattaparthi (2006)", "Pavan Kumar Jallu (1989)",
      "Gandham Lalita Bhanu Prakash (1995)", "Chandra Y (1998)"
    ]],
    ["Bengaluru", "India", 12.9716, 77.5946, [
      "Vighneswari Kunapuli (2001)", "Rama Sastry (1988)", "Sriharsha Paidighantam (2008)"
    ]],
    ["Vijayawada", "India", 16.5062, 80.6480, ["Lekhana Narayan Doddi (2020)"]],
    ["Secunderabad", "India", 17.4399, 78.4983, ["Jay Laxmi Trivedi (1991)"]],
    ["Ranchi", "India", 23.3441, 85.3096, ["Himaja Moritala (2010)"]],
    ["Kakinada", "India", 16.9891, 82.2475, ["Dr. K. Sujatha (1986)"]],
    ["Kochi", "India", 9.9312, 76.2673, ["A V S Chakravarti (1985)"]],
    ["Guwahati", "India", 26.1445, 91.7362, ["Rajeev Kumar Patwari (1988)"]],

    // USA
    ["Sunnyvale, CA", "USA", 37.3688, -122.0363, ["Krishna Nadiminti (2002)"]],
    ["Aldie, VA", "USA", 38.9776, -77.6402, ["Geetha Vani Pusapati (1986)"]],
    ["Seattle, WA", "USA", 47.6062, -122.3321, [
      "Satvik Vishnubhatta (2008)", "Divya Kiron (2001)"
    ]],
    ["Cleveland, OH", "USA", 41.4993, -81.6944, ["Sameera Jaldu (1999)"]],
    ["Chicago, IL", "USA", 41.8781, -87.6298, ["Krishna Chaitanya Rachapudi (2007)"]],

    // Netherlands
    ["Amsterdam", "Netherlands", 52.3676, 4.9041, [
      "MVK Prasad (1992)", "Madhuri Mangalampalli (1992)"
    ]],

    ["Singapore", "Singapore", 1.3521, 103.8198, ["Seshanand Ravuri (1988)"]],
    ["Glasgow", "United Kingdom", 55.8642, -4.2518, ["Swarupa Vadlamani (1999)"]],
    ["Montreal", "Canada", 45.5017, -73.5673, ["Lanka Preethi (2005)"]]
  ];

  function el(tag, className, text) {
    const n = document.createElement(tag);
    if (className) n.className = className;
    if (text != null) n.textContent = text;
    return n;
  }

  // ── Stats tiles ───────────────────────────────────────────────
  const totalAlumni = ALUMNI.reduce((s, r) => s + r[4].length, 0);
  const cityCount = ALUMNI.length;
  const countries = {};
  ALUMNI.forEach(function (row) {
    const country = row[1];
    const members = row[4];
    countries[country] = (countries[country] || 0) + members.length;
  });
  const countryCount = Object.keys(countries).length;

  function stat(value, label) {
    const wrap = el('div', 'map-stat');
    wrap.appendChild(el('div', 'map-stat__value', String(value)));
    wrap.appendChild(el('div', 'map-stat__label', label));
    return wrap;
  }
  const statsHost = document.getElementById('mapStats');
  statsHost.appendChild(stat(totalAlumni, 'Alumni Registered'));
  statsHost.appendChild(stat(cityCount, 'Cities'));
  statsHost.appendChild(stat(countryCount, 'Countries'));

  // ── Country grid ──────────────────────────────────────────────
  const grid = document.getElementById('countryGrid');
  Object.keys(countries)
    .sort(function (a, b) { return countries[b] - countries[a]; })
    .forEach(function (name) {
      const card = el('div', 'country-card');
      card.appendChild(el('span', 'country-card__name', name));
      card.appendChild(el('span', 'country-card__count', String(countries[name])));
      grid.appendChild(card);
    });

  // ── Map ───────────────────────────────────────────────────────
  const map = L.map('alumni-map', {
    scrollWheelZoom: false,
    worldCopyJump: true
  });
  map.on('click', function () { map.scrollWheelZoom.enable(); });
  map.on('mouseout', function () { map.scrollWheelZoom.disable(); });

  // OpenStreetMap standard tiles — free, no API key required.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    subdomains: 'abc',
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  function radiusFor(n) { return Math.min(8 + n * 2.2, 30); }

  const allLatLngs = [];
  ALUMNI.forEach(function (row) {
    const city = row[0], country = row[1], lat = row[2], lng = row[3], members = row[4];
    allLatLngs.push([lat, lng]);

    const marker = L.circleMarker([lat, lng], {
      radius: radiusFor(members.length),
      color: '#172883',
      weight: 2,
      fillColor: '#c8a84b',
      fillOpacity: 0.75
    }).addTo(map);

    // Build the popup DOM safely.
    const popup = el('div', 'map-popup');
    popup.appendChild(el('div', 'map-popup__title', city + ', ' + country));
    const count = members.length;
    popup.appendChild(
      el('div', 'map-popup__count',
        count + (count === 1 ? ' alumnus' : ' alumni') + ' registered')
    );
    const list = el('ul', 'map-popup__list');
    members.forEach(function (m) { list.appendChild(el('li', null, m)); });
    popup.appendChild(list);

    marker.bindPopup(popup);
    marker.bindTooltip(city + ' · ' + count, { direction: 'top', offset: [0, -6] });
  });

  // Fit map to include every alumni city, with a little breathing room.
  if (allLatLngs.length) {
    map.fitBounds(L.latLngBounds(allLatLngs), { padding: [30, 30] });
  } else {
    map.setView([22, 60], 3);
  }

  // Legend (static markup, no user data)
  const legend = L.control({ position: 'bottomright' });
  legend.onAdd = function () {
    const div = L.DomUtil.create('div', 'map-legend');
    const h = document.createElement('h4');
    h.textContent = 'Alumni per city';
    div.appendChild(h);

    [[1, 10], [5, 18], ['10+', 26]].forEach(function (pair, i) {
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.style.width = pair[1] + 'px';
      dot.style.height = pair[1] + 'px';
      div.appendChild(dot);
      div.appendChild(document.createTextNode(' ' + pair[0] + '  '));
    });
    return div;
  };
  legend.addTo(map);
})();
