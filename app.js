const responders = [
  { name: 'Northside Medical Center', type: 'medical', label: 'Emergency medical care', distance: 0.8, icon: '✚', address: '1200 Sample Street' },
  { name: 'Central Fire & Rescue', type: 'fire', label: 'Fire and rescue service', distance: 1.4, icon: '✦', address: '45 Example Avenue' },
  { name: 'Community Police Station', type: 'police', label: 'Local police service', distance: 2.1, icon: '★', address: '88 Demo Road' },
  { name: 'Neighborhood Aid Hub', type: 'community', label: 'Community support', distance: 2.7, icon: '♥', address: '310 Placeholder Lane' }
];

const list = document.querySelector('#responder-list');
const count = document.querySelector('#result-count');
const status = document.querySelector('#status-message');
const locationInput = document.querySelector('#location-input');
let activeFilter = 'all';

function render() {
  const query = locationInput.value.trim().toLowerCase();
  const visible = responders.filter((item) => {
    const matchesType = activeFilter === 'all' || item.type === activeFilter;
    const matchesQuery = !query || `${item.name} ${item.label} ${item.address} ${item.type}`.toLowerCase().includes(query);
    return matchesType && matchesQuery;
  });

  count.textContent = `${visible.length} ${visible.length === 1 ? 'service' : 'services'}`;
  if (!visible.length) {
    list.innerHTML = '<div class="empty-state">No matching services in this sample directory. Try another search or service type.</div>';
    return;
  }

  list.innerHTML = visible.map((item) => `
    <article class="responder-card">
      <div class="card-top">
        <span class="service-icon ${item.type}" aria-hidden="true">${item.icon}</span>
        <div class="service-title"><h3>${item.name}</h3><span class="service-kind">${item.label}</span></div>
        <span class="availability" aria-label="Listed"></span>
      </div>
      <div class="card-bottom"><span class="distance"><strong>${item.distance.toFixed(1)} mi</strong> · ${item.address}</span><a class="directions" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}" target="_blank" rel="noopener noreferrer">Directions ↗</a></div>
    </article>`).join('');
}

document.querySelectorAll('.filter-chip').forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll('.filter-chip').forEach((chip) => {
      const selected = chip === button;
      chip.classList.toggle('selected', selected);
      chip.setAttribute('aria-pressed', String(selected));
    });
    render();
  });
});

document.querySelector('#search-button').addEventListener('click', () => {
  render();
  const place = locationInput.value.trim();
  status.textContent = place ? `Showing sample directory results for “${place}”` : 'Showing sample locations near your area';
});
locationInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') document.querySelector('#search-button').click();
});
locationInput.addEventListener('input', render);

document.querySelector('#locate-button').addEventListener('click', () => {
  if (!navigator.geolocation) {
    status.textContent = 'Location is not supported by this browser. You can enter a city or ZIP code instead.';
    return;
  }
  status.textContent = 'Requesting your location…';
  navigator.geolocation.getCurrentPosition(
    () => { status.textContent = 'Location received. This demo directory uses sample listings, not live nearby data.'; },
    () => { status.textContent = 'Could not access your location. Check browser permission or enter a city or ZIP code.'; },
    { timeout: 10000, maximumAge: 60000 }
  );
});

render();
