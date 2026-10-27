/* CaliberUX – shared shell + page renderers (no dependencies) */
const I = {
  grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  chart:'<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  clip:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  cog:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  menu:'<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  help:'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  dots:'<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
  trash:'<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/>',
  cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  check:'<polyline points="20 6 9 17 4 12"/>',
  alert:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  dollar:'<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>'
};
const ic = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[n]}</svg>`;

const NAV = [
  ['dashboard','Dashboard','suppliers.html','grid'],
  ['suppliers','Suppliers','suppliers.html','users'],
  ['reports','Reports','reports.html','file'],
  ['analytics','Analytics','analytics.html','chart'],
  ['audit','Audit Logs','audit-logs.html','clip'],
  ['alerts','Alerts','alerts.html','bell'],
  ['settings','Settings','settings.html','cog']
];

function shell(key, title, sub, actions, body){
  document.getElementById('app').innerHTML = `
  <div class="layout">
    <aside class="sidebar">
      <div class="brand"><div class="logo">▣</div><div>Caliber<small>UX</small></div></div>
      <nav class="nav">${NAV.map(n=>`<a href="${n[2]}" class="${n[0]===key?'active':''}">${ic(n[3])}${n[1]}</a>`).join('')}</nav>
    </aside>
    <div class="main">
      <header class="topbar">
        <button class="icon-btn">${ic('menu')}</button>
        <div class="search">${ic('search')}<input placeholder="Search suppliers, reports, alerts..."></div>
        <div class="spacer"></div>
        <button class="icon-btn" title="Alerts">${ic('bell')}<span class="badge-dot">3</span></button>
        <button class="icon-btn" title="Help">${ic('help')}</button>
        <div class="avatar">RK</div>
      </header>
      <main class="content">
        <div class="page-head"><div><h1>${title}</h1><p>${sub}</p></div><div class="actions">${actions||''}</div></div>
        ${body}
      </main>
    </div>
  </div><div class="toast" id="toast"></div>`;
}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),2200)}
const stat=(label,val,sub,icon,color)=>`<div class="stat"><div class="ico c-${color}">${ic(icon)}</div><div><div class="lbl">${label}</div><div class="val">${val}</div><div class="sub">${sub}</div></div></div>`;
const pill=(t,c)=>`<span class="pill ${c}">${t}</span>`;
const riskC={Low:'green',Medium:'orange',High:'red',Critical:'red'};
const dotl=(t,c)=>`<span class="dotl"><i style="background:var(--${c})"></i>${t}</span>`;
const dotC={Low:'green',Medium:'orange',High:'red',Critical:'red'};

/* Generic paginated table */
function mountTable(id, cols, rows, perPage, opts={}){
  const root=document.getElementById(id); let page=1, data=rows;
  function draw(){
    const pages=Math.max(1,Math.ceil(data.length/perPage)); if(page>pages)page=pages;
    const s=(page-1)*perPage, slice=data.slice(s,s+perPage);
    root.innerHTML=`<div class="tbl-wrap"><table><thead><tr>${cols.map(c=>`<th>${c.h}</th>`).join('')}</tr></thead><tbody>${
      slice.map(r=>`<tr>${cols.map(c=>`<td>${c.f?c.f(r):r[c.k]}</td>`).join('')}</tr>`).join('')||`<tr><td colspan="${cols.length}" style="text-align:center;color:var(--muted);padding:30px">No results found</td></tr>`
    }</tbody></table></div>
    <div class="pager"><span>Showing ${data.length?s+1:0} to ${Math.min(s+perPage,data.length)} of ${data.length} ${opts.noun||'entries'}</span>
    <div class="pages"><button data-p="prev" ${page===1?'disabled':''}>‹</button>${Array.from({length:Math.min(pages,5)},(_,i)=>`<button data-p="${i+1}" class="${page===i+1?'active':''}">${i+1}</button>`).join('')}<button data-p="next" ${page===pages?'disabled':''}>›</button></div></div>`;
    root.querySelectorAll('.pages button').forEach(b=>b.onclick=()=>{const p=b.dataset.p;page=p==='prev'?page-1:p==='next'?page+1:+p;draw()});
  }
  draw();
  return {setData(d){data=d;page=1;draw()}};
}
const rowActs=`<div class="row-actions"><button title="View">${ic('eye')}</button><button title="Download">${ic('download')}</button><button title="Delete">${ic('trash')}</button></div>`;
const dotsBtn=`<div class="row-actions"><button>${ic('dots')}</button></div>`;
const tabBar=(id,tabs)=>`<div class="tabs" id="${id}">${tabs.map((t,i)=>`<button class="${i===0?'active':''}">${t}</button>`).join('')}</div>`;
function wireTabs(id,cb){const el=document.getElementById(id);el.querySelectorAll('button').forEach(b=>b.onclick=()=>{el.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');cb&&cb(b.textContent.trim())})}
const cycle=(arr,n,fn)=>Array.from({length:n},(_,i)=>fn(arr[i%arr.length],i));

/* ============ PAGES ============ */
const PAGES={
suppliers(){
  shell('suppliers','Suppliers','Manage your suppliers and monitor performance',
    `<button class="btn" onclick="toast('Filters applied')">${ic('filter')}Filter</button><button class="btn primary" onclick="toast('Add Supplier form coming soon')">${ic('plus')}Add Supplier</button>`,
    `<div class="cards">
      ${stat('Total Suppliers','142','<b>↑ 8%</b> vs last month','users','blue')}
      ${stat('Active Suppliers','98','<b>↑ 5%</b> vs last month','check','green')}
      ${stat('High Risk Suppliers','45','<b style="color:var(--red)">↑ 3%</b> vs last month','alert','orange')}
      ${stat('Verified Suppliers','80','<b>↑ 12%</b> vs last month','shield','purple')}
    </div>
    <div class="panel"><div class="toolbar">
      <div class="search">${ic('search')}<input id="q" placeholder="Search by name, ID or category"></div>
      <select id="fc"><option>All Categories</option><option>Raw Materials</option><option>IT Services</option><option>Logistics</option><option>Manufacturing</option></select>
      <select id="fr"><option>All Risk</option><option>Low</option><option>Medium</option><option>High</option></select>
      <select><option>10 / Page</option><option>25 / Page</option></select></div>
      <div id="tbl"></div></div>`);
  const base=[['Northern Steelworks','Raw Materials','Private Limited','Low','Active'],['Meridian Solutions','IT Services','Private Limited','Medium','Active'],['Zenith Logistics','Logistics','Partnership','Low','Active'],['Alpha Tech Systems','IT Services','LLP','High','Inactive'],['Crest Manufacturing','Manufacturing','Private Limited','Medium','Active'],['Delmar Ventures','Raw Materials','Proprietorship','Low','Active'],['Bluewave Corp','Logistics','Private Limited','High','Active'],['Apex Packaging','Manufacturing','Private Limited','Medium','Active'],['Orion Chemicals','Raw Materials','LLP','Low','Active'],['Swift Cargo Services','Logistics','Private Limited','High','Pending']];
  const rows=cycle(base,40,(b,i)=>({id:'SUP'+String(1001+i).padStart(4,'0'),name:b[0]+(i>=10?' '+(Math.floor(i/10)+1):''),cat:b[1],type:b[2],risk:b[3],status:b[4]}));
  const t=mountTable('tbl',[
    {h:'Supplier ID',k:'id'},{h:'Supplier Name',f:r=>`<b>${r.name}</b>`},{h:'Category',k:'cat'},{h:'Business Type',k:'type'},
    {h:'Risk Level',f:r=>dotl(r.risk,dotC[r.risk])},
    {h:'Status',f:r=>pill(r.status,r.status==='Active'?'green':r.status==='Pending'?'orange':'gray')},
    {h:'Actions',f:()=>dotsBtn}],rows,10,{noun:'suppliers'});
  const f=()=>{const q=document.getElementById('q').value.toLowerCase(),c=document.getElementById('fc').value,r=document.getElementById('fr').value;
    t.setData(rows.filter(x=>(x.name+x.id+x.cat).toLowerCase().includes(q)&&(c==='All Categories'||x.cat===c)&&(r==='All Risk'||x.risk===r)))};
  ['q','fc','fr'].forEach(i=>document.getElementById(i).addEventListener('input',f));
},

analytics(){
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul'], vals=[48,62,55,70,58,74,66];
  const W=460,H=170,pad=28,max=100,x=i=>pad+i*(W-pad*2)/(vals.length-1),y=v=>H-pad-(v/max)*(H-pad*2);
  const line=vals.map((v,i)=>`${i?'L':'M'}${x(i)},${y(v)}`).join(' ');
  const area=`${line} L${x(vals.length-1)},${H-pad} L${x(0)},${H-pad} Z`;
  const grid=[0,25,50,75,100].map(v=>`<line x1="${pad}" x2="${W-pad}" y1="${y(v)}" y2="${y(v)}" stroke="#eef0f5"/><text x="${pad-6}" y="${y(v)+3}" font-size="9" fill="#9ca3af" text-anchor="end">${v}</text>`).join('');
  const chart=`<svg viewBox="0 0 ${W} ${H}" width="100%"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2563eb" stop-opacity=".25"/><stop offset="1" stop-color="#2563eb" stop-opacity="0"/></linearGradient></defs>${grid}<path d="${area}" fill="url(#g)"/><path d="${line}" fill="none" stroke="#2563eb" stroke-width="2"/>${vals.map((v,i)=>`<circle cx="${x(i)}" cy="${y(v)}" r="3" fill="#fff" stroke="#2563eb" stroke-width="2"><title>${months[i]}: ₹${v} L</title></circle><text x="${x(i)}" y="${H-10}" font-size="9" fill="#9ca3af" text-anchor="middle">${months[i]}</text>`).join('')}</svg>`;
  const seg=[['Approved',32,'#2563eb'],['Under Review',28,'#f59e0b'],['In Progress',30,'#10b981'],['Rejected',22,'#ef4444'],['Completed',16,'#8b5cf6']];
  const tot=128,R=52,C=2*Math.PI*R;let off=0;
  const arcs=seg.map(s=>{const l=s[1]/tot*C,e=`<circle cx="70" cy="70" r="${R}" fill="none" stroke="${s[2]}" stroke-width="18" stroke-dasharray="${l} ${C-l}" stroke-dashoffset="${-off}" transform="rotate(-90 70 70)"/>`;off+=l;return e}).join('');
  const donut=`<svg viewBox="0 0 140 140" width="150"><circle cx="70" cy="70" r="${R}" fill="none" stroke="#f3f4f6" stroke-width="18"/>${arcs}<text x="70" y="68" text-anchor="middle" font-size="20" font-weight="700" fill="#111827">${tot}</text><text x="70" y="84" text-anchor="middle" font-size="9" fill="#6b7280">Total</text></svg>`;
  shell('analytics','Analytics','Data-driven insights and performance metrics',
    `<button class="btn">${ic('cal')}01 Apr 2026 - 30 Apr 2026</button><button class="btn">${ic('download')}Export</button>`,
    `${tabBar('tb',['Overview','Spend Analysis','Supplier Performance','Risk Analysis','AI Insights','Trend Analysis'])}
    <div class="cards">
      ${stat('Total Spend (YTD)','₹54.8 Cr','<b>↑ 12.4%</b> vs last year','dollar','purple')}
      ${stat('Total Projects','128','<b>↑ 8.1%</b> vs last year','file','blue')}
      ${stat('Approved Requests','32','<b>↑ 4.2%</b> vs last month','check','green')}
      ${stat('Avg. AI Confidence','79%','<b>↑ 2.3%</b> vs last month','shield','purple')}
    </div>
    <div class="grid-2">
      <div class="panel"><div class="panel-body"><div style="display:flex;justify-content:space-between;margin-bottom:10px"><h3>Spend Over Time</h3><select><option>Last 7 months</option><option>Last 12 months</option></select></div>${chart}</div></div>
      <div class="panel"><div class="panel-body"><h3>Projects by Status</h3><div class="donut-wrap">${donut}<div class="legend">${seg.map(s=>`<div><i style="background:${s[2]}"></i>${s[0]}<span>${s[1]} (${Math.round(s[1]/tot*100)}%)</span></div>`).join('')}</div></div></div></div>
    </div>`);
  wireTabs('tb',n=>toast(n+' view selected'));
},

reports(){
  shell('reports','Reports','View, manage and schedule all generated reports',
    `<button class="btn primary" onclick="toast('Generating new report...')">${ic('plus')}New Report</button>`,
    `<div class="cards">
      ${stat('Total Reports','67','<b>↑ 6%</b> vs last month','file','blue')}
      ${stat('Scheduled Reports','12','<b>↑ 2</b> new this month','clock','green')}
      ${stat('Generated Today','18','<b>↑ 4</b> vs yesterday','check','orange')}
      ${stat('Total Downloads','245','<b>↑ 15%</b> vs last month','download','purple')}
    </div>
    ${tabBar('tb',['All Reports','Scheduled Reports','Recent Reports','Custom Reports'])}
    <div class="panel"><div class="toolbar">
      <div class="search">${ic('search')}<input id="q" placeholder="Search reports..."></div>
      <select id="ft"><option>All Types</option><option>Inventory</option><option>Compliance</option><option>Performance</option><option>Financial</option></select>
      <select id="fs"><option>All Status</option><option>Completed</option><option>Scheduled</option><option>Processing</option></select></div>
      <div id="tbl"></div></div>`);
  const base=[['Executive Summary Report','Inventory','Admin User','Completed'],['Supplier Performance Report','Performance','Maria Santos','Completed'],['Risk & Compliance Report','Compliance','Admin User','Scheduled'],['Contract Analysis Report','Financial','Maria Santos','Completed'],['Annual Compliance Report','Compliance','Admin User','Processing'],['Quarterly Spend Report','Financial','John Carter','Completed'],['Vendor Onboarding Report','Performance','Maria Santos','Completed']];
  const d=n=>new Date(2026,3,30-n).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  const rows=cycle(base,28,(b,i)=>({name:b[0],type:b[1],by:b[2],on:d(i)+(i%2?', 04:12 PM':', 10:30 AM'),status:b[3]}));
  const t=mountTable('tbl',[{h:'Report Name',f:r=>`<b>${r.name}</b>`},{h:'Type',k:'type'},{h:'Generated By',k:'by'},{h:'Generated On',k:'on'},
    {h:'Status',f:r=>pill(r.status,r.status==='Completed'?'green':r.status==='Scheduled'?'blue':'orange')},{h:'Actions',f:()=>rowActs}],rows,6,{noun:'reports'});
  const f=()=>{const q=document.getElementById('q').value.toLowerCase(),a=document.getElementById('ft').value,s=document.getElementById('fs').value;
    t.setData(rows.filter(x=>x.name.toLowerCase().includes(q)&&(a==='All Types'||x.type===a)&&(s==='All Status'||x.status===s)))};
  ['q','ft','fs'].forEach(i=>document.getElementById(i).addEventListener('input',f));
  wireTabs('tb',n=>{ if(n==='Scheduled Reports')t.setData(rows.filter(x=>x.status==='Scheduled'));else if(n==='Recent Reports')t.setData(rows.slice(0,7));else t.setData(rows)});
},

audit(){
  shell('audit','Audit Logs','Track all system activities and user actions',
    `<button class="btn">${ic('cal')}01 Apr 2026 - 30 Apr 2026</button><button class="btn">${ic('filter')}Filter</button>`,
    `<div class="cards">
      ${stat('Total Events','1,048','<b>↑ 9%</b> vs last week','clip','blue')}
      ${stat('Warnings','256','<b style="color:var(--orange)">↑ 4%</b> vs last week','alert','orange')}
      ${stat('High Risk','092','<b style="color:var(--red)">↑ 2%</b> vs last week','shield','red')}
      ${stat('Critical','32','<b style="color:var(--red)">↑ 1%</b> vs last week','alert','red')}
      ${stat('Need Review','60','<b>↓ 3%</b> vs last week','eye','purple')}
    </div>
    ${tabBar('tb',['All Logs','AI Decisions','User Actions','Overrides','System Events','Alerts'])}
    <div class="panel"><div id="tbl"></div></div>`);
  const base=[['Admin User','Administrator','Login','Success','Dashboard','Logged in from new device','Low'],['Maria Santos','Procurement Mgr','Update','Success','SUP-1042','Updated supplier risk profile','Medium'],['AI Engine','System','AI Decision','Review','CNT-2210','Flagged contract clause for review','High'],['John Carter','Analyst','Export','Success','RPT-0988','Exported Spend Report (CSV)','Low'],['Admin User','Administrator','Override','Warning','ALT-3321','Overrode AI risk recommendation','High'],['System','Scheduler','System Event','Failed','JOB-7710','Scheduled sync failed – timeout','Critical'],['Maria Santos','Procurement Mgr','Delete','Success','DOC-4412','Removed outdated supplier document','Medium']];
  const rows=cycle(base,48,(b,i)=>({ts:new Date(2026,3,30,17-(i%10),(i*7)%60).toLocaleString('en-GB',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}),user:b[0],role:b[1],act:b[2],st:b[3],ent:b[4],det:b[5],risk:b[6],ip:'192.168.1.'+(10+i%90)}));
  const stC={Success:'green',Review:'purple',Warning:'orange',Failed:'red'};
  const t=mountTable('tbl',[{h:'Timestamp',k:'ts'},{h:'User',f:r=>`<b>${r.user}</b><span class="muted">${r.role}</span>`},{h:'Action',f:r=>pill(r.act,'blue')},{h:'Status',f:r=>pill(r.st,stC[r.st])},
    {h:'Entity',k:'ent'},{h:'Details',k:'det'},{h:'Risk Level',f:r=>pill(r.risk,riskC[r.risk])},{h:'IP Address',k:'ip'}],rows,5,{noun:'events'});
  wireTabs('tb',n=>{const m={'AI Decisions':'AI Decision','Overrides':'Override','System Events':'System Event','User Actions':null};
    if(m[n])t.setData(rows.filter(r=>r.act===m[n]));else if(n==='User Actions')t.setData(rows.filter(r=>r.user!=='System'&&r.user!=='AI Engine'));else if(n==='Alerts')t.setData(rows.filter(r=>r.risk==='High'||r.risk==='Critical'));else t.setData(rows)});
},

alerts(){
  shell('alerts','Alerts','Monitor and respond to system alerts',
    `<button class="btn" onclick="toast('All alerts marked as read')">${ic('check')}Mark all read</button><button class="btn primary" onclick="toast('Create alert rule coming soon')">${ic('plus')}Add Alert Rule</button>`,
    `<div class="cards">
      ${stat('High Priority','8','Needs immediate attention','alert','red')}
      ${stat('Medium Priority','15','Review within 24 hours','alert','orange')}
      ${stat('Low Priority','23','Review when possible','alert','blue')}
      ${stat('Resolved','46','This month','check','green')}
    </div>
    ${tabBar('tb',['All Alerts','High Priority','Medium Priority','Low Priority','Resolved'])}
    <div class="panel"><div class="toolbar"><div class="search">${ic('search')}<input id="q" placeholder="Search alerts..."></div>
      <select id="ft"><option>All Types</option><option>AI Risk</option><option>Contract</option><option>Compliance</option><option>Payment</option></select></div>
      <div id="tbl"></div></div>`);
  const base=[['Supplier risk threshold exceeded','Northern Steelworks','AI Risk','SUP-1042','High','Open'],['Contract expiring in 7 days','Meridian Solutions','Contract','CNT-2210','Medium','Open'],['Compliance document missing','Zenith Logistics','Compliance','SUP-1003','Medium','In Progress'],['Unusual payment pattern detected','Alpha Tech Systems','Payment','PAY-8821','High','Open'],['Quarterly review pending','Crest Manufacturing','Compliance','RPT-0412','Low','Resolved'],['Supplier rating decreased','Delmar Ventures','AI Risk','SUP-1006','Low','In Progress'],['Invoice mismatch found','Bluewave Corp','Payment','INV-5519','Medium','Resolved']];
  const ago=['15 min ago','1 hr ago','3 hr ago','5 hr ago','Yesterday','2 days ago','3 days ago'];
  const rows=cycle(base,28,(b,i)=>({t:b[0],s:b[1],type:b[2],rel:b[3],pr:b[4],cr:ago[i%7],st:b[5]}));
  const t=mountTable('tbl',[{h:'Alert',f:r=>`<b>${r.t}</b><span class="muted">${r.s}</span>`},{h:'Type',k:'type'},{h:'Related To',f:r=>`<span style="color:var(--blue)">${r.rel}</span>`},
    {h:'Priority',f:r=>pill(r.pr,riskC[r.pr]==='green'?'blue':riskC[r.pr])},{h:'Created',k:'cr'},
    {h:'Status',f:r=>pill(r.st,r.st==='Resolved'?'green':r.st==='Open'?'red':'orange')},{h:'Actions',f:()=>dotsBtn}],rows,6,{noun:'alerts'});
  let tab='All Alerts';
  const f=()=>{const q=document.getElementById('q').value.toLowerCase(),a=document.getElementById('ft').value;
    t.setData(rows.filter(x=>(x.t+x.s).toLowerCase().includes(q)&&(a==='All Types'||x.type===a)&&(tab==='All Alerts'||(tab==='Resolved'?x.st==='Resolved':x.pr===tab.split(' ')[0]))))};
  ['q','ft'].forEach(i=>document.getElementById(i).addEventListener('input',f));
  wireTabs('tb',n=>{tab=n;f()});
},

settings(){
  const toggle=on=>`<button class="toggle ${on?'on':''}" onclick="this.classList.toggle('on')"></button>`;
  shell('settings','Settings','Manage your account and system preferences','',
    `${tabBar('tb',['Profile','Preferences','Notifications','Security','Integrations','Billing'])}
    <div id="tabbody"></div>
    <div class="danger-zone"><div><b>Delete Account</b><p>Permanently delete your account and all associated data. This action cannot be undone.</p></div>
    <button class="btn danger" onclick="confirm('Delete your account? This cannot be undone.')&&toast('Account deletion requested')">${ic('logout')}Delete Account</button></div>`);
  const profile=`<div class="settings-grid">
    <div class="panel"><div class="panel-body"><h3 style="margin-bottom:14px">Profile Information</h3><div class="form-grid">
      <div class="field"><label>Full Name</label><input value="Rajesh Kumar"></div>
      <div class="field"><label>Email Address</label><input type="email" value="rajesh.kumar@caliberux.com"></div>
      <div class="field"><label>Phone Number</label><input value="+91 98765 43210"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div class="field"><label>Job Title</label><input value="Procurement Manager"></div><div class="field"><label>Department</label><input value="Procurement"></div></div>
      <div class="field"><label>Employee ID</label><input value="EMP-00421"></div>
      <div class="actions"><button class="btn primary" onclick="toast('Profile saved successfully')">Save Changes</button><button class="btn" onclick="toast('Changes discarded')">Reset</button></div>
    </div></div></div>
    <div class="panel"><div class="panel-body"><h3 style="margin-bottom:14px">Preferences</h3><div class="form-grid">
      <div class="field"><label>Theme</label><select><option>Light</option><option>Dark</option><option>System</option></select></div>
      <div class="field"><label>Language</label><select><option>English</option><option>Hindi</option><option>Tamil</option></select></div>
      <div class="field"><label>Date Format</label><select><option>DD/MM/YYYY</option><option>MM/DD/YYYY</option><option>YYYY-MM-DD</option></select></div>
      <div class="field"><label>Time Zone</label><select><option>(GMT+05:30) Asia/Kolkata</option><option>(GMT+00:00) UTC</option></select></div>
      <div class="field"><label>Default Landing Page</label><select><option>Dashboard</option><option>Suppliers</option><option>Analytics</option></select></div>
      <label class="check"><input type="checkbox" checked><span>Compact view<small>Show more data on screen</small></span></label>
    </div></div></div></div>`;
  const rowsHtml=(arr)=>`<div class="panel"><div class="panel-body">${arr.map(a=>`<div class="list-row"><div><b>${a[0]}</b><div style="color:var(--muted);font-size:11.5px;margin-top:2px">${a[1]}</div></div>${a[2]}</div>`).join('')}</div></div>`;
  const views={
    Profile:profile,Preferences:profile,
    Notifications:rowsHtml([['Email notifications','Receive alerts and summaries by email',toggle(1)],['Push notifications','Browser push for high-priority alerts',toggle(1)],['Weekly digest','A summary of activity every Monday',toggle(0)]]),
    Security:rowsHtml([['Two-factor authentication','Add an extra layer of security',toggle(0)],['Login alerts','Notify me of logins from new devices',toggle(1)],['Change password','Last changed 45 days ago','<button class="btn" onclick="toast(\'Password reset email sent\')">Update</button>']]),
    Integrations:rowsHtml([['SAP ERP','Sync supplier and payment data',pill('Connected','green')],['Slack','Send alerts to a channel','<button class="btn" onclick="toast(\'Slack connect coming soon\')">Connect</button>'],['Microsoft Teams','Share reports with your team','<button class="btn" onclick="toast(\'Teams connect coming soon\')">Connect</button>']]),
    Billing:rowsHtml([['Current plan','Enterprise – 25 seats',pill('Active','green')],['Next invoice','₹1,25,000 due on 01 May 2026','<button class="btn" onclick="toast(\'Downloading invoice\')">Download</button>']])
  };
  const show=n=>{document.getElementById('tabbody').innerHTML=views[n]};
  show('Profile'); wireTabs('tb',show);
}
};
document.addEventListener('DOMContentLoaded',()=>PAGES[document.body.dataset.page]());
