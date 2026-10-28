/* Illustrations and icons (inline SVG, flat "Vivace" style). */
var LOGO='<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#ea4a2a"/><path d="M10 25V14a6 6 0 0 1 12 0v11z" fill="#fff"/><path d="M13 19h6" stroke="#ea4a2a" stroke-width="2.4" stroke-linecap="round"/><path d="M6 25h20" stroke="#ffc532" stroke-width="2.6" stroke-linecap="round"/></svg>';
var ART={
/* Giappone: Fuji, sole, torii */
ja:'<svg viewBox="0 0 346 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="346" height="200" fill="#2b50d8"/>'+
  '<circle cx="262" cy="66" r="38" fill="#ffc532"/><circle cx="214" cy="36" r="3" fill="#ff9fb6"/><circle cx="306" cy="132" r="4" fill="#ff9fb6"/>'+
  '<path d="M0 166 L122 64 L172 104 L202 88 L346 184 L346 200 L0 200Z" fill="#fff"/>'+
  '<path d="M97 85 L122 64 L147 85 L134 91 L122 83 L110 91Z" fill="#2b50d8" opacity=".22"/>'+
  '<path d="M0 182 Q90 162 180 182 T346 178 V200 H0Z" fill="#ea4a2a"/>'+
  '<g fill="#1a1720"><rect x="40" y="122" width="6" height="56"/><rect x="74" y="122" width="6" height="56"/><rect x="30" y="116" width="60" height="7" rx="2"/><rect x="34" y="132" width="52" height="5"/></g></svg>',
/* Cina: Grande Muraglia sulle colline, lanterna, sole */
zh:'<svg viewBox="0 0 346 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="346" height="200" fill="#ea4a2a"/>'+
  '<circle cx="250" cy="58" r="34" fill="#ffc532"/><circle cx="196" cy="30" r="3" fill="#ff9fb6"/><circle cx="318" cy="112" r="4" fill="#ff9fb6"/>'+
  '<path d="M0 132 Q60 96 120 122 T236 108 T346 116 V200 H0Z" fill="#c23a1f"/>'+
  '<path d="M0 150 Q70 112 140 134 T270 120 T346 128 V200 H0Z" fill="#12965a"/>'+
  '<path d="M0 154 L30 140 L70 128 L110 136 L150 124 L196 120 L240 128 L290 118 L346 124 L346 134 L290 128 L240 138 L196 130 L150 134 L110 146 L70 138 L30 150 L0 164Z" fill="#fff6e6"/>'+
  '<g fill="#fff6e6"><rect x="64" y="114" width="14" height="18"/><rect x="186" y="106" width="14" height="18"/><rect x="284" y="104" width="14" height="18"/></g>'+
  '<g fill="#1a1720" opacity=".55"><rect x="68" y="120" width="6" height="6"/><rect x="190" y="112" width="6" height="6"/><rect x="288" y="110" width="6" height="6"/></g>'+
  '<path d="M0 182 Q100 166 200 182 T346 178 V200 H0Z" fill="#0d7a49"/>'+
  '<rect x="44" y="6" width="3" height="18" fill="#1a1720"/><rect x="32" y="22" width="27" height="6" rx="3" fill="#1a1720"/>'+
  '<ellipse cx="45.5" cy="50" rx="24" ry="24" fill="#ffc532"/><path d="M34 30 C27 42 27 58 34 70 M57 30 C64 42 64 58 57 70 M45.5 27 V73" stroke="#ea4a2a" stroke-opacity=".5" stroke-width="2.5" fill="none"/>'+
  '<rect x="32" y="71" width="27" height="6" rx="3" fill="#1a1720"/><path d="M41 77 V90 M45.5 77 V94 M50 77 V90" stroke="#ffc532" stroke-width="2.5" stroke-linecap="round"/></svg>',
/* Italia: colline, cipressi, Colosseo, sole */
it:'<svg viewBox="0 0 346 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="346" height="200" fill="#12965a"/>'+
  '<circle cx="84" cy="60" r="34" fill="#ffc532"/><circle cx="150" cy="30" r="3" fill="#ff9fb6"/><circle cx="40" cy="128" r="4" fill="#ff9fb6"/>'+
  '<path d="M0 150 Q80 112 170 140 T346 128 V200 H0Z" fill="#0d7a49"/>'+
  '<g transform="translate(176 70)"><path d="M0 92 V30 Q70 0 140 22 V92Z" fill="#fff"/>'+
  '<g fill="#12965a" opacity=".85"><rect x="12" y="40" width="12" height="16" rx="6"/><rect x="34" y="36" width="12" height="16" rx="6"/><rect x="56" y="33" width="12" height="16" rx="6"/><rect x="78" y="32" width="12" height="16" rx="6"/><rect x="100" y="33" width="12" height="16" rx="6"/><rect x="120" y="35" width="10" height="15" rx="5"/>'+
  '<rect x="12" y="66" width="12" height="20" rx="6"/><rect x="34" y="64" width="12" height="22" rx="6"/><rect x="56" y="63" width="12" height="23" rx="6"/><rect x="78" y="63" width="12" height="23" rx="6"/><rect x="100" y="63" width="12" height="23" rx="6"/><rect x="120" y="64" width="10" height="22" rx="5"/></g></g>'+
  '<g fill="#1a1720"><path d="M140 176 Q146 120 152 176Z"/><path d="M154 176 Q159 132 164 176Z"/><path d="M30 186 Q36 136 42 186Z"/></g>'+
  '<path d="M0 182 Q100 168 200 184 T346 180 V200 H0Z" fill="#ea4a2a"/></svg>'
};
var ICO={
arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2.2"/><circle cx="10" cy="17" r="2.2"/></svg>',
plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
exam:'<svg viewBox="0 0 24 24"><path d="M5 3h10l4 4v14H5z"/><path d="M9 13l2.5 2.5L16 10"/></svg>',
travel:'<svg viewBox="0 0 24 24"><path d="M2 16l20-8-6 12-3-5z"/><path d="M13 15l9-7"/></svg>',
work:'<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/></svg>',
passion:'<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>',
clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
};
