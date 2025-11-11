// Filter Manager Module
import { renderCards } from './card-renderer.js';
import { debounce } from './utils.js';

let allVTubers = [];
let currentFilter = 'all';
let currentSearch = '';

export function initFilters(vtubers) {
    allVTubers = vtubers;
    
    // Bind filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    // Bind search input with debounce
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', debounce(handleSearchInput, 300));
}

function handleFilterClick(event) {
    const btn = event.target;
    const category = btn.dataset.category;
    
    // Update active state
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
    });
    btn.classList.add('active');
    
    // Update filter and apply
    currentFilter = category;
    applyFilters();
}

function handleSearchInput(event) {
    currentSearch = event.target.value.toLowerCase().trim();
    applyFilters();
}

function applyFilters() {
    let filtered = [...allVTubers];
    
    // Filter by category
    if (currentFilter !== 'all') {
        if (currentFilter === 'live') {
            // Filter by live status
            filtered = filtered.filter(v => v.isLive === true);
        } else {
            // Filter by tags
            filtered = filtered.filter(v => 
                v.tags && v.tags.includes(currentFilter)
            );
        }
    }
    
    // Filter by search keyword
    if (currentSearch) {
        filtered = filtered.filter(v => {
            const nameMatch = v.name.toLowerCase().includes(currentSearch);
            const nameOriginalMatch = v.nameOriginal && 
                v.nameOriginal.toLowerCase().includes(currentSearch);
            const descMatch = v.description && 
                v.description.toLowerCase().includes(currentSearch);
            
            return nameMatch || nameOriginalMatch || descMatch;
        });
    }
    
    // Render filtered results
    renderCards(filtered);
}

export function resetFilters() {
    currentFilter = 'all';
    currentSearch = '';
    
    // Reset UI
    document.getElementById('search').value = '';
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        }
    });
    
    // Render all
    renderCards(allVTubers);
}
