// Main Application Entry Point
import { loadVTubers } from './data-loader.js';
import { renderCards, showLoading, showError } from './card-renderer.js';
import { initFilters } from './filter-manager.js';

async function init() {
    try {
        // Show loading state
        showLoading();
        
        // Load VTuber data
        const vtubers = await loadVTubers();
        
        // Render initial cards
        renderCards(vtubers);
        
        // Initialize filters
        initFilters(vtubers);
        
        console.log(`✅ 成功載入 ${vtubers.length} 個 VTuber`);
        
    } catch (error) {
        console.error('❌ 初始化失敗:', error);
        showError();
    }
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
