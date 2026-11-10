const frames = [
  {
    label: 'Frame 1',
    title: 'Emergency Responder Locator',
    variant: 'white',
    content: 'locator'
  },
  {
    label: 'Frame 2',
    title: 'Nearest Ambulance',
    variant: 'white',
    content: 'ambulance'
  },
  {
    label: 'Frame 3',
    title: 'Nearest Fire Station',
    variant: 'white',
    content: 'fire'
  },
  {
    label: 'Frame 4',
    title: 'Nearest Barangay',
    variant: 'white',
    content: 'barangay'
  },
  {
    label: 'Frame 5',
    title: 'Nearest Police',
    variant: 'white',
    content: 'police'
  },
  {
    label: 'Frame 9',
    title: 'Power Outage',
    variant: 'white',
    content: 'outage'
  },
  {
    label: 'Frame 10',
    title: 'Responders',
    variant: 'white',
    content: 'responders'
  },
  {
    label: 'Frame 11',
    title: 'Responders',
    variant: 'white',
    content: 'responders-2'
  },
  {
    label: 'Frame 12',
    title: 'Call Center',
    variant: 'purple',
    content: 'purple-cta'
  },
  {
    label: 'Frame 13',
    title: 'Verify code',
    variant: 'purple',
    content: 'verify'
  },
  {
    label: 'Frame 14',
    title: 'Waiting for approval',
    variant: 'purple',
    content: 'waiting'
  },
  {
    label: 'Frame 15',
    title: 'Who\'s using the app?',
    variant: 'purple',
    content: 'app-usage'
  },
  {
    label: 'Frame 20',
    title: 'Today',
    variant: 'white',
    content: 'today'
  },
  {
    label: 'Frame 21',
    title: 'Today',
    variant: 'white',
    content: 'today-alt'
  },
  {
    label: 'Frame 24',
    title: 'Today',
    variant: 'white',
    content: 'today-3'
  },
  {
    label: 'Frame 25',
    title: 'History',
    variant: 'white',
    content: 'history'
  },
  {
    label: 'Frame 26',
    title: 'Today',
    variant: 'white',
    content: 'today-4'
  },
  {
    label: 'Frame 23',
    title: 'Profile',
    variant: 'white',
    content: 'profile'
  },
  {
    label: 'Frame 29',
    title: 'Waiting for approval',
    variant: 'purple',
    content: 'waiting-alt'
  },
  {
    label: 'Frame 28',
    title: 'Responders',
    variant: 'white',
    content: 'responders-3'
  }
];

const renderService = (name, tone, callText = 'Call') => `
  <div class="service-item">
    <span class="dot ${tone}"></span>
    <span class="service-name">${name}</span>
    <span class="service-call ${tone}">${callText}</span>
  </div>
`;

const renderCardContent = (type) => {
  switch (type) {
    case 'locator':
      return `
        <div class="search-box"><span class="search-icon">⌕</span> Search</div>
        <div class="quick-actions">
          <div class="mini">🚑</div>
          <div class="mini">🔥</div>
          <div class="mini">🚓</div>
        </div>
        <div class="map-box">
          <span class="map-pin green p1"></span>
          <span class="map-pin gold p2"></span>
          <span class="map-pin blue p3"></span>
          <span class="map-pin pink p4"></span>
        </div>
        <div class="list-box">
          ${renderService('Ambulance 1', 'green')}
          ${renderService('Fire Truck 1', 'gold')}
          ${renderService('Barangay Team', 'blue')}
        </div>
      `;
    case 'ambulance':
      return `
        <div class="card-label"><span>Emergency</span><span></span></div>
        <div class="sheet-title">Nearest Ambulance</div>
        <div class="map-box">
          <span class="map-pin green p1"></span>
          <span class="map-pin gold p2"></span>
          <span class="map-pin blue p3"></span>
        </div>
        <div class="list-box">
          ${renderService('Ambulance 1', 'green')}
          ${renderService('Fire Truck 2', 'gold')}
          ${renderService('Barangay Team 1', 'blue')}
        </div>
      `;
    case 'fire':
      return `
        <div class="card-label"><span>Emergency</span><span></span></div>
        <div class="sheet-title">Nearest Fire Station</div>
        <div class="map-box">
          <span class="map-pin gold p1"></span>
          <span class="map-pin green p2"></span>
          <span class="map-pin blue p3"></span>
        </div>
        <div class="list-box">
          ${renderService('Fire Truck 1', 'gold')}
          ${renderService('Ambulance 2', 'green')}
          ${renderService('Police 1', 'blue')}
        </div>
      `;
    case 'barangay':
      return `
        <div class="card-label"><span>Barangay</span><span></span></div>
        <div class="sheet-title">Nearest Barangay</div>
        <div class="map-box">
          <span class="map-pin blue p1"></span>
          <span class="map-pin green p2"></span>
          <span class="map-pin gold p3"></span>
        </div>
        <div class="list-box">
          ${renderService('Barangay Team', 'blue')}
          ${renderService('Ambulance 2', 'green')}
          ${renderService('Police 1', 'gold')}
        </div>
      `;
    case 'police':
      return `
        <div class="card-label"><span>Response</span><span></span></div>
        <div class="sheet-title">Nearest Police</div>
        <div class="map-box">
          <span class="map-pin blue p1"></span>
          <span class="map-pin gold p2"></span>
          <span class="map-pin green p3"></span>
        </div>
        <div class="list-box">
          ${renderService('Police 1', 'blue', 'Call')}
          ${renderService('Ambulance 2', 'green', 'Call')}
          ${renderService('Barangay Team', 'gold', 'Call')}
        </div>
      `;
    case 'outage':
      return `
        <div class="card-label"><span>Power outage</span></div>
        <div class="small-map"></div>
        <div class="list-box">
          ${renderService('Cebeco 1', 'green')}
          ${renderService('Police 1', 'blue')}
          ${renderService('Barangay 1', 'gold')}
        </div>
      `;
    case 'responders':
      return `
        <div class="sheet-title">Responders</div>
        <div class="segmented">
          <button class="active">All</button>
          <button>Available</button>
          <button>Busy</button>
          <button>All</button>
        </div>
        <div class="list-box">
          ${renderService('Ambulance 1', 'green')}
          ${renderService('Fire Truck 1', 'gold')}
          ${renderService('Barangay Team', 'blue')}
        </div>
      `;
    case 'responders-2':
      return `
        <div class="sheet-title">Responders</div>
        <div class="segmented">
          <button>All</button>
          <button>Available</button>
          <button>Busy</button>
          <button class="active">All</button>
        </div>
        <div class="list-box">
          ${renderService('Ambulance 2', 'green')}
          ${renderService('Police 1', 'blue')}
          ${renderService('Fire Truck 2', 'gold')}
        </div>
      `;
    case 'purple-cta':
      return `
        <div class="hero-card">
          <div class="heading">Who’s using the app?</div>
          <div class="sub">Create or update your account to request emergency support.</div>
          <button class="big-button primary">I need help</button>
          <button class="big-button secondary">I’m a responder</button>
        </div>
        <div class="small-note">Need support? Call 911</div>
      `;
    case 'verify':
      return `
        <div class="hero-card">
          <div class="heading">Enter the code</div>
          <div class="form-row">
            <div class="code-box">4</div>
            <div class="code-box">4</div>
            <div class="code-box">4</div>
            <div class="code-box">4</div>
          </div>
          <button class="big-button primary" style="margin-top:16px;">Verify</button>
          <div class="small-note">Code sent to 0912 345 6789</div>
        </div>
      `;
    case 'waiting':
      return `
        <div class="hero-card">
          <div class="heading" style="text-align:center;">Waiting for approval</div>
          <div class="small-note" style="margin-top:8px;">Your request is being reviewed.</div>
          <div class="status-row">
            <div class="status-btn active">Accepted</div>
            <div class="status-btn">Pending</div>
          </div>
          <div class="list-box" style="margin-top:10px;">
            ${renderService('Ambulance 1', 'green')}
            ${renderService('Fire Truck 2', 'gold')}
          </div>
          <button class="big-button secondary" style="margin-top:10px;">Contact Admin</button>
        </div>
      `;
    case 'app-usage':
      return `
        <div class="hero-card">
          <div class="heading">Who’s using the app?</div>
          <div class="sub">Choose your role to continue.</div>
          <button class="big-button primary">I need help</button>
          <button class="big-button secondary">I’m a responder</button>
        </div>
      `;
    case 'today':
      return `
        <div class="sheet-title">Today</div>
        <div class="segmented">
          <button class="active">Today</button>
          <button>History</button>
          <button>Profile</button>
          <button>Log</button>
        </div>
        <div class="list-box" style="margin-top:8px;">
          ${renderService('Ambulance 1', 'green')}
          ${renderService('Fire Truck 2', 'gold')}
          ${renderService('Barangay Team', 'blue')}
        </div>
        <button class="center-button">Call</button>
      `;
    case 'today-alt':
      return `
        <div class="sheet-title">Today</div>
        <div class="segmented">
          <button class="active">Today</button>
          <button>History</button>
          <button>Profile</button>
          <button>Log</button>
        </div>
        <div class="list-box" style="margin-top:8px;">
          ${renderService('Ambulance 2', 'green')}
          ${renderService('Fire Truck 1', 'gold')}
          ${renderService('Police 2', 'blue')}
        </div>
      `;
    case 'today-3':
      return `
        <div class="sheet-title">Today</div>
        <div class="segmented">
          <button class="active">Today</button>
          <button>History</button>
          <button>Profile</button>
          <button>Log</button>
        </div>
        <div class="list-box" style="margin-top:8px;">
          ${renderService('Ambulance 1', 'green')}
          ${renderService('Barangay Team', 'blue')}
          ${renderService('Police 2', 'gold')}
        </div>
      `;
    case 'history':
      return `
        <div class="sheet-title">History</div>
        <div class="inline-list">
          ${renderService('Ambulance 1', 'green')}
          ${renderService('Fire Truck 1', 'gold')}
          ${renderService('Police 1', 'blue')}
        </div>
      `;
    case 'today-4':
      return `
        <div class="sheet-title">Today</div>
        <div class="list-box" style="margin-top:8px;">
          ${renderService('Ambulance 1', 'green')}
          ${renderService('Police 2', 'blue')}
          ${renderService('Barangay Team', 'gold')}
        </div>
      `;
    case 'profile':
      return `
        <div class="sheet-title">Profile</div>
        <div class="hero-card">
          <div class="heading">User profile</div>
          <div class="sub">Name • Ambulance 1</div>
          <div class="small-note">Status: available</div>
        </div>
        <button class="center-button">Contact Admin</button>
      `;
    case 'waiting-alt':
      return `
        <div class="hero-card">
          <div class="heading" style="text-align:center;">Waiting for approval</div>
          <div class="small-note" style="margin-top:8px;">Status verified</div>
          <div class="list-box" style="margin-top:10px;">
            ${renderService('Ambulance 1', 'green')}
            ${renderService('Police 1', 'blue')}
          </div>
          <button class="big-button secondary" style="margin-top:10px;">Start</button>
        </div>
      `;
    case 'responders-3':
      return `
        <div class="sheet-title">Responders</div>
        <div class="segmented">
          <button class="active">All</button>
          <button>Available</button>
          <button>Busy</button>
          <button>Log</button>
        </div>
        <div class="list-box" style="margin-top:8px;">
          ${renderService('Ambulance 1', 'green')}
          ${renderService('Fire Truck 2', 'gold')}
          ${renderService('Police 1', 'blue')}
        </div>
      `;
    default:
      return '';
  }
};

const gallery = document.getElementById('frame-gallery');

gallery.innerHTML = frames.map((frame) => `
  <div class="frame-slot">
    <div class="frame-header-label">${frame.label}</div>
    <div class="phone-card ${frame.variant} ${frame.variant === 'purple' ? 'tall' : ''}">
      <div class="phone-topbar">
        <span class="back">‹</span>
        <span class="title">${frame.title}</span>
      </div>
      <div class="phone-body">
        ${renderCardContent(frame.content)}
        <div class="phone-nav">
          <div class="nav-item active">Today</div>
          <div class="nav-item">History</div>
          <div class="nav-item">Profile</div>
        </div>
      </div>
    </div>
  </div>
`).join('');

