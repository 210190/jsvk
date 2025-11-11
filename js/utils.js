// Utility Functions

// Debounce function to limit function execution rate
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Tag color mapping
export const TAG_COLORS = {
    '唱歌': '#FF6B9D',
    '雜談': '#FF9E45',
    '遊戲': '#4CAF50'
};

// Format subscriber count
export function formatSubscribers(count) {
    if (!count) return '';
    
    if (typeof count === 'string') return count;
    
    if (count >= 1000000) {
        return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
        return `${(count / 1000).toFixed(1)}K`;
    }
    
    return count.toString();
}
