// Alumni Map — data aggregated from the SKVM Alumni Directory responses.
// Uses safe DOM APIs (textContent / createElement) — no innerHTML with user data.

(function () {
  const ALUMNI = [
    // India
    ["Ahmedabad", "India", 23.0225, 72.5714, [
      "Dangeti Viswateja Ashish (2008)"
    ]],
    ["Bengaluru", "India", 12.9716, 77.5946, [
      "Anusha Sidharth (2000)", "Bhargav Bhamidipati (1997)", "Dev B J C (2007)",
      "K. Veena Soujanya (1998)", "Kedarsethi Akshay Kumar (2020)",
      "Omkar Manas Baratam (2006)", "Pavan Palepu (2008)", "Poosarla Ravi Teja (2007)",
      "Rama Sastry (1988)", "Ramjee Ganti (1997)", "Ravikanth M P (1994)",
      "Sasikiran Boddapati (1998)", "Shastry Anipindi (1995)", "Sridhar Kasukhela (1985)",
      "Sriharsha Paidighantam (2008)", "Supriya Kotini (1999)",
      "Varaha Vinaya Priyanka Geddam (2016)",
      "Vemparala Sri Kameswari Sai Susmita (2022)", "Vighneswari Kunapuli (2001)"
    ]],
    ["Chennai", "India", 13.0827, 80.2707, [
      "Aswini Nadiminti (2006)", "P. Kamal Kumar (2001)", "Ravi Babu Pyla (1998)"
    ]],
    ["Delhi", "India", 28.6139, 77.2090, [
      "Sangram Kumar Naik (1989)"
    ]],
    ["Eluru", "India", 16.7107, 81.0952, [
      "Rasagna Toleti (2022)"
    ]],
    ["Guwahati", "India", 26.1445, 91.7362, [
      "Rajeev Kumar Patwari (1988)"
    ]],
    ["Hyderabad", "India", 17.3850, 78.4867, [
      "Aditi Ashok (2007)", "Chandra Y (1998)", "Chengalvala Naga Prasad (1992)",
      "Devireddy Madhuri (2019)", "Dr. K. V. Ratnamala (2000)",
      "Gandham Lalita Bhanu Prakash (1995)", "Gayatri Ivaturi (2005)",
      "K. Purna Chandra Rama Naidu (2015)", "Katari Anu Deepika (2015)",
      "Kishore Devarakonda (1999)", "Kothalanka Shivadeep Sai (2017)",
      "Naimisha Giri (2013)", "Pavan Kumar Jallu (1989)", "Pediredla Maheshwari (2020)",
      "Poojitha Vetcha (2002)", "Pusapati Jagannadha Varma (2010)",
      "Ravi Sarma Somayajula (1988)", "Samyuktha Arikarevula (2014)",
      "Sanjay GVR (2002)", "Shyam Sundar (2019)", "Somayajula Venkata Jogarao (1989)",
      "Sony Adapa (2002)", "Sridevi Mattaparthi (2006)", "Srikant Kalaga (2002)",
      "Vamsi Pemmaraju (2015)"
    ]],
    ["Jodhpur", "India", 26.2389, 73.0243, [
      "Ananth Patnaik (2015)"
    ]],
    ["Kakinada", "India", 16.9891, 82.2475, [
      "Bhaskar Kambhampati (2019)", "Dr. K. Sujatha (1986)"
    ]],
    ["Kochi", "India", 9.9312, 76.2673, [
      "A V S Chakravarti (1985)"
    ]],
    ["Mumbai", "India", 19.0760, 72.8777, [
      "Sai Vikas Dommeti (2020)"
    ]],
    ["Mysore", "India", 12.2958, 76.6394, [
      "Nagisetti Harshitha Naidu (2024)"
    ]],
    ["Navi Mumbai", "India", 19.0330, 73.0297, [
      "Ashok Karkera (2000)"
    ]],
    ["Ongole", "India", 15.5057, 80.0499, [
      "Thalada Suguna Rani (1998)"
    ]],
    ["Pune", "India", 18.5204, 73.8567, [
      "Pushkar Adari (2019)", "Sai Santhosh Pentakota (2016)"
    ]],
    ["Ranchi", "India", 23.3441, 85.3096, [
      "Himaja Moritala (2010)"
    ]],
    ["Secunderabad", "India", 17.4399, 78.4983, [
      "Jay Laxmi Trivedi (1991)"
    ]],
    ["Siluguri", "India", 26.7271, 88.3953, [
      "Kavita Murari (1990)"
    ]],
    ["Vadodara", "India", 22.3072, 73.1812, [
      "Nagisetti Abhiram Karthikeya (2024)"
    ]],
    ["Vijayawada", "India", 16.5062, 80.6480, [
      "Lekhana Narayan Doddi (2020)", "Rejeti Srinivas (2019)"
    ]],
    ["Visakhapatnam", "India", 17.6868, 83.2185, [
      "Alekhya Manchikanti (2022)", "Alluri Teneswar Prasanth Reddy (2018)",
      "B V S R Sai Ganesh (2016)", "Bodasingi Vaishnavi (2021)",
      "Boddepalli Harish (2007)", "Ch. Harsha Ravi Teja (2003)",
      "Chekuri Radha Devi (1990)", "D A V Suresh (2008)", "D S N Sharan (2006)",
      "D. Uma Neelaveni (1994)", "Dadi Tushar (2022)", "G V R Sandeep (2000)",
      "Govindavajhala Sriram Arun Kumar (1992)", "Gudla Loka Poojitha (2024)",
      "K. Durga Aparna (2001)", "K. Likith (2022)", "K. Uditha Hasini (2022)",
      "Katakam Madhuri (2021)", "Kesireddy Javali Srisatyasahithi (2020)",
      "Kunthsam Venkata Santoshi Hemalatha (1999)", "Lalita Pappu (1988)",
      "M.N.S. Siddhartha (2015)", "Madhavi N. (2017)", "Madhukar Mudunuru (1998)",
      "Manchikanti Abhiram (2025)", "Manoj Venkat Seelam (2007)",
      "Nakka Sridevi Chandrakala (2014)", "Nedunuri Aravinda (1990)",
      "Nitya Ramanan (1998)", "Nouduri Venkata Abhishek (2011)",
      "Odugu Sarat Chandra (2022)", "P. Geya Sree (2022)", "P. Siri Varshini (2020)",
      "P. Venkateswara Rao (2005)", "Pattapu Navyanjali (2015)",
      "Phani Kumar Somayajula (1999)", "Pindiprolu Venkata Phani Raju (1989)",
      "Pola Sri Krishna Chaitanya (2023)", "Pulakhandam Sowndarya (2023)",
      "Pulavarthi Sri Varshini (2019)", "Sagi Rajani (1990)",
      "Sneha Korada (2021)", "Soumya Ranjan Jena (2010)", "T. N. Chaitanya (2000)",
      "Tangudu Akhilesh (2023)", "Taruni Surisetti (2022)",
      "V. Bharathi Kanti Lakshmi", "V. Siva Santosh Karthik (2025)",
      "Vennela Boddeti (2017)", "Venugopal K. (2007)",
      "Waltair Srikara Likhith (2018)", "Y. Madhavi Latha (1999)",
      "Yernena Uma Maheswari (2018)"
    ]],

    // USA
    ["Aldie, VA", "USA", 38.9776, -77.6402, [
      "Geetha Vani Pusapati (1986)"
    ]],
    ["Atlanta, GA", "USA", 33.7490, -84.3880, [
      "Sasanka Gandavarapu (2000)"
    ]],
    ["Baltimore, MD", "USA", 39.2904, -76.6122, [
      "Sridhara Yaddanapudi (1999)"
    ]],
    ["Chicago, IL", "USA", 41.8781, -87.6298, [
      "Krishna Chaitanya Rachapudi (2007)"
    ]],
    ["Cleveland, OH", "USA", 41.4993, -81.6944, [
      "Sameera Jaldu (1999)"
    ]],
    ["Dallas, TX", "USA", 32.7767, -96.7970, [
      "Manjula Saladi (2003)", "Ravi Shankar (2001)", "V. K. Prasanthi Sistla (2005)"
    ]],
    ["Downingtown, PA", "USA", 40.0068, -75.7032, [
      "Sowmya Kurella (2002)"
    ]],
    ["Ellicott City, MD", "USA", 39.2673, -76.7983, [
      "Chandra Puranam (1987)"
    ]],
    ["Jacksonville, FL", "USA", 30.3322, -81.6557, [
      "Venkata Padma P. Kolapalli (2003)"
    ]],
    ["Los Angeles, CA", "USA", 34.0522, -118.2437, [
      "Murali Siruvuru (1991)"
    ]],
    ["Seattle, WA", "USA", 47.6062, -122.3321, [
      "Divya Kiron (2001)", "Satvik Vishnubhatta (2008)"
    ]],
    ["South Brunswick, NJ", "USA", 40.3826, -74.5310, [
      "Sandhya Kurella (1998)"
    ]],
    ["Sunnyvale, CA", "USA", 37.3688, -122.0363, [
      "Krishna Nadiminti (2002)"
    ]],

    // United Kingdom
    ["Glasgow", "United Kingdom", 55.8642, -4.2518, [
      "Swarupa Vadlamani (1999)"
    ]],
    ["London", "United Kingdom", 51.5072, -0.1276, [
      "Aravind Sriram (1998)"
    ]],

    // Netherlands
    ["Amsterdam", "Netherlands", 52.3676, 4.9041, [
      "MVK Prasad (1992)", "Madhuri Mangalampalli (1992)"
    ]],

    // Canada
    ["Montreal", "Canada", 45.5017, -73.5673, [
      "Lanka Preethi (2005)"
    ]],
    ["Toronto", "Canada", 43.6532, -79.3832, [
      "Naveen Bhukta Govindu (1998)"
    ]],

    // Singapore
    ["Singapore", "Singapore", 1.3521, 103.8198, [
      "Seshanand Ravuri (1988)", "Vijay Bhamidipati (2001)"
    ]],

    // Japan
    ["Tokyo", "Japan", 35.6762, 139.6503, [
      "Malladi V. S. K. Chintamani Sai Sisir Chandrachud (2018)"
    ]]
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
