import React, { useState } from 'react';
import { 
  Monitor, Play, Activity, MapPin, Eye, 
  RefreshCw, Plus, Clock, BarChart2
} from 'lucide-react';

export default function DashboardSection({ onActionToast }) {
  const [activeTab, setActiveTab] = useState('screens');
  const [syncingScreenId, setSyncingScreenId] = useState(null);

  // Screen Data (12 Total Screens across Indian locations)
  const screensList = [
    { id: 1, name: 'Banjara Hills Store #01', location: 'Hyderabad', status: 'online', playlist: 'Festive Combo Special', orientation: 'Landscape (1080p)', uptime: 'Connected', lastSync: 'Recent' },
    { id: 2, name: 'MG Road Cafe Menu Board', location: 'Vijayawada', status: 'online', playlist: 'Morning Filter Coffee Deal', orientation: 'Landscape (1080p)', uptime: 'Connected', lastSync: 'Recent' },
    { id: 3, name: 'Indiranagar Showroom Window', location: 'Bengaluru', status: 'online', playlist: 'Ethnic Wear Sale', orientation: 'Portrait (4K)', uptime: 'Connected', lastSync: 'Recent' },
    { id: 4, name: 'T. Nagar Retail Outlet', location: 'Chennai', status: 'online', playlist: 'Gold & Silk Festival Offers', orientation: 'Landscape (1080p)', uptime: 'Connected', lastSync: 'Recent' },
    { id: 5, name: 'Beach Road Storefront', location: 'Visakhapatnam', status: 'online', playlist: 'Weekend Specials', orientation: 'Portrait (1080p)', uptime: 'Connected', lastSync: 'Recent' },
    { id: 6, name: 'Jubilee Hills Office Welcome Screen', location: 'Hyderabad', status: 'online', playlist: 'Company News Ticker', orientation: 'Landscape (1080p)', uptime: 'Connected', lastSync: 'Recent' },
    { id: 7, name: 'Gachibowli Tech Park Kiosk', location: 'Hyderabad', status: 'online', playlist: 'Express Lunch Combo', orientation: 'Landscape (1080p)', uptime: 'Connected', lastSync: 'Recent' },
    { id: 8, name: 'Kalyan Nagar Showroom', location: 'Bengaluru', status: 'online', playlist: 'Apparel Clearance Sale', orientation: 'Landscape (1080p)', uptime: 'Connected', lastSync: 'Recent' },
    { id: 9, name: 'Anna Nagar Store Display', location: 'Chennai', status: 'online', playlist: 'Sweet & Snack Menu', orientation: 'Landscape (1080p)', uptime: 'Connected', lastSync: 'Recent' },
    { id: 10, name: 'Benz Circle Branch', location: 'Vijayawada', status: 'online', playlist: 'Festive Combo Special', orientation: 'Landscape (1080p)', uptime: 'Connected', lastSync: 'Recent' },
    { id: 11, name: 'Dwaraka Nagar Outlet', location: 'Visakhapatnam', status: 'online', playlist: 'Breakfast Special', orientation: 'Landscape (1080p)', uptime: 'Connected', lastSync: 'Recent' },
    { id: 12, name: 'Madhapur Side Entrance Screen', location: 'Hyderabad', status: 'maintenance', playlist: 'Default Screen Saver', orientation: 'Portrait (1080p)', uptime: 'Checking', lastSync: '10 mins ago' },
  ];

  // Playlists List (8 Active Playlists)
  const playlistsList = [
    { id: 'pl-1', name: 'Festive Combo Special', items: 6, duration: '03:45', screens: 3, status: 'Active Now', tags: 'Biryani, Festive' },
    { id: 'pl-2', name: 'Morning Filter Coffee Deal', items: 4, duration: '02:30', screens: 2, status: 'Scheduled (6:30AM - 11AM)', tags: 'Breakfast, Tiffin' },
    { id: 'pl-3', name: 'Ethnic Wear Sale', items: 8, duration: '04:15', screens: 2, status: 'Active Now', tags: 'Fashion, Discounts' },
    { id: 'pl-4', name: 'Gold & Silk Festival Offers', items: 5, duration: '03:00', screens: 1, status: 'Active Now', tags: 'Sarees, Jewelry' },
    { id: 'pl-5', name: 'Company News Ticker', items: 3, duration: '01:45', screens: 1, status: 'Looping', tags: 'Corporate' },
    { id: 'pl-6', name: 'Express Lunch Combo', items: 7, duration: '05:00', screens: 1, status: 'Active Now', tags: 'Food Court' },
    { id: 'pl-7', name: 'Sweet & Snack Menu', items: 4, duration: '02:15', screens: 1, status: 'Active Now', tags: 'Sweets' },
    { id: 'pl-8', name: 'Apparel Clearance Sale', items: 6, duration: '03:30', screens: 1, status: 'Active Now', tags: 'Retail' },
  ];

  const handleSyncScreen = (screen) => {
    setSyncingScreenId(screen.id);
    if (onActionToast) {
      onActionToast(`Syncing "${screen.name}" remotely...`);
    }
    setTimeout(() => {
      setSyncingScreenId(null);
      if (onActionToast) {
        onActionToast(`"${screen.name}" content updated over air!`);
      }
    }, 1000);
  };

  return (
    <section id="dashboard-demo" className="relative py-24 bg-navy-950 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-brand-600/15 via-cyan-500/10 to-indigo-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold text-cyan-300">
            <Monitor className="w-4 h-4 text-cyan-400" />
            <span>INTERACTIVE DASHBOARD PROTOTYPE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            SignFlow Dashboard <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-300 to-cyan-400">
              Control Center Prototype
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Click through active screens, inspect scheduled playlists, and experience centralized remote display control.
          </p>
        </div>

        {/* METRICS STATS BAR */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Total Screens */}
          <div className="p-5 rounded-2xl bg-navy-900/80 border border-slate-800 backdrop-blur-md flex items-center justify-between shadow-lg">
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-1">Total Screens</div>
              <div className="text-3xl font-extrabold text-white">12</div>
              <div className="text-[11px] font-semibold text-emerald-400 flex items-center mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5"></span>
                11 Active • 1 Maint.
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-cyan-400">
              <Monitor className="w-6 h-6" />
            </div>
          </div>

          {/* Active Playlists */}
          <div className="p-5 rounded-2xl bg-navy-900/80 border border-slate-800 backdrop-blur-md flex items-center justify-between shadow-lg">
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-1">Active Playlists</div>
              <div className="text-3xl font-extrabold text-cyan-300">8</div>
              <div className="text-[11px] font-semibold text-cyan-400 flex items-center mt-1">
                <Clock className="w-3 h-3 mr-1" />
                Scheduled Rotations
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Play className="w-6 h-6" />
            </div>
          </div>

          {/* Locations */}
          <div className="p-5 rounded-2xl bg-navy-900/80 border border-slate-800 backdrop-blur-md flex items-center justify-between shadow-lg">
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-1">Locations</div>
              <div className="text-3xl font-extrabold text-white">5</div>
              <div className="text-[11px] font-semibold text-slate-300 flex items-center mt-1">
                <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                Hyd, Vja, Blr, Chn, Vizag
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <MapPin className="w-6 h-6" />
            </div>
          </div>

          {/* Total Views */}
          <div className="p-5 rounded-2xl bg-navy-900/80 border border-slate-800 backdrop-blur-md flex items-center justify-between shadow-lg">
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-1">Total Views</div>
              <div className="text-3xl font-extrabold text-emerald-400">2,480</div>
              <div className="text-[11px] font-semibold text-emerald-400 flex items-center mt-1">
                <Activity className="w-3 h-3 mr-1" />
                Daily Impressions Captured
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Eye className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* MAIN DASHBOARD CONTAINER */}
        <div className="mt-8 bg-navy-900/90 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Header Bar & Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-b border-slate-800 bg-navy-950/80 gap-4">
            
            <div className="flex items-center space-x-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('screens')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-2 ${
                  activeTab === 'screens' ? 'bg-gradient-to-r from-brand-600 to-cyan-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Screen Manager (12)</span>
              </button>

              <button
                onClick={() => setActiveTab('playlists')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-2 ${
                  activeTab === 'playlists' ? 'bg-gradient-to-r from-brand-600 to-cyan-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>Playlists (8)</span>
              </button>

              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-2 ${
                  activeTab === 'analytics' ? 'bg-gradient-to-r from-brand-600 to-cyan-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5" />
                <span>Status & Health</span>
              </button>
            </div>

            <div className="flex items-center space-x-3 text-xs w-full sm:w-auto justify-end">
              <button 
                onClick={() => {
                  if (onActionToast) onActionToast("Checking connected display status...");
                }}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold border border-slate-700 flex items-center space-x-1.5 transition"
              >
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                <span>Refresh Displays</span>
              </button>

              <button 
                onClick={() => {
                  if (onActionToast) onActionToast("Opened New Playlist Studio");
                }}
                className="px-3.5 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-semibold flex items-center space-x-1.5 transition shadow-md shadow-brand-500/20"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Playlist</span>
              </button>
            </div>
          </div>

          {/* TAB 1: SCREENS MANAGER */}
          {activeTab === 'screens' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4 text-xs">
                <div className="text-slate-400 font-medium">
                  Showing 12 managed digital displays across Indian store locations
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span>11 Active</span>
                  </span>
                  <span className="flex items-center space-x-1 ml-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span>1 Maintenance</span>
                  </span>
                </div>
              </div>

              {/* Screens Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {screensList.map((screen) => {
                  const isSyncing = syncingScreenId === screen.id;
                  const isOnline = screen.status === 'online';

                  return (
                    <div 
                      key={screen.id}
                      className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between space-y-3 group"
                    >
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition">
                              {screen.name}
                            </h4>
                            <span className="text-xs text-slate-400 flex items-center mt-0.5">
                              <MapPin className="w-3 h-3 text-slate-500 mr-1" />
                              {screen.location}
                            </span>
                          </div>

                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${
                            isOnline 
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                              : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          }`}>
                            {isOnline ? 'Active' : 'Notice'}
                          </span>
                        </div>

                        <div className="mt-3 p-2.5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-1">
                          <div className="text-[10px] text-slate-500 font-semibold uppercase">Active Display Playlist</div>
                          <div className="text-xs font-bold text-slate-200 truncate flex items-center space-x-1.5">
                            <Play className="w-3 h-3 text-cyan-400 shrink-0" />
                            <span>{screen.playlist}</span>
                          </div>
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-400 font-mono">
                          <div>Format: <span className="text-slate-300">{screen.orientation}</span></div>
                          <div>Status: <span className="text-emerald-400">{screen.uptime}</span></div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                        <span className="text-[10px] text-slate-500 font-mono">Sync: {screen.lastSync}</span>
                        <button
                          onClick={() => handleSyncScreen(screen)}
                          disabled={isSyncing}
                          className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold border border-slate-700 hover:border-cyan-400 transition flex items-center space-x-1"
                        >
                          <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin text-cyan-400' : ''}`} />
                          <span>{isSyncing ? 'Pushing...' : 'Push Sync'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: PLAYLISTS MANAGER */}
          {activeTab === 'playlists' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4 text-xs">
                <div className="text-slate-400 font-medium">
                  8 active promotional schedules assigned to display groups
                </div>
                <div className="text-cyan-400 font-mono font-semibold">
                  Auto-rotation: Active
                </div>
              </div>

              <div className="space-y-3">
                {playlistsList.map((pl) => (
                  <div
                    key={pl.id}
                    className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800 hover:border-cyan-500/40 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md shadow-brand-500/20">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-bold text-sm text-white">{pl.name}</h4>
                          <span className="px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 text-[10px] font-mono">
                            {pl.tags}
                          </span>
                        </div>
                        <div className="text-xs text-slate-400 flex items-center space-x-4 mt-1">
                          <span>{pl.items} Media Slides</span>
                          <span>•</span>
                          <span>Duration: {pl.duration}</span>
                          <span>•</span>
                          <span className="text-cyan-400 font-semibold">{pl.screens} Screens Assigned</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                        {pl.status}
                      </span>
                      <button 
                        onClick={() => {
                          if (onActionToast) onActionToast(`Editing timeline for "${pl.name}"`);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700"
                      >
                        Edit Timeline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: STATUS & HEALTH */}
          {activeTab === 'analytics' && (
            <div className="p-6 space-y-6">
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="lg:col-span-2 p-5 bg-navy-950/80 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-white">Daily Display Impressions</h4>
                      <p className="text-xs text-slate-400">Total playback impressions across store locations</p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg">
                      Active Customer Footfall
                    </span>
                  </div>

                  <div className="h-44 pt-6 flex items-end justify-between gap-2 px-2 border-b border-slate-800 pb-2">
                    {[
                      { time: '08:00', height: '40%', val: '210' },
                      { time: '10:00', height: '65%', val: '340' },
                      { time: '12:00', height: '95%', val: '520' },
                      { time: '14:00', height: '80%', val: '430' },
                      { time: '16:00', height: '75%', val: '390' },
                      { time: '18:00', height: '90%', val: '490' },
                      { time: '20:00', height: '30%', val: '100' },
                    ].map((bar, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                        <div className="text-[10px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition">{bar.val}</div>
                        <div 
                          style={{ height: bar.height }} 
                          className="w-full bg-gradient-to-t from-brand-600 via-brand-500 to-cyan-400 rounded-t-lg group-hover:brightness-125 transition duration-200"
                        ></div>
                        <div className="text-[10px] text-slate-400 font-mono">{bar.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-navy-950/80 rounded-2xl border border-slate-800 space-y-4">
                  <h4 className="font-bold text-sm text-white">Network Display Status</h4>
                  
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-300">Cloud Connection Status</span>
                      <span className="text-emerald-400 font-mono font-bold">Active</span>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-300">Storage Cache</span>
                      <span className="text-cyan-400 font-mono font-bold">Local Sync Ready</span>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-300">Offline Protection</span>
                      <span className="text-emerald-400 font-mono font-bold">Enabled</span>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-300">Display Sync Status</span>
                      <span className="text-emerald-400 font-mono font-bold">Verified</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
