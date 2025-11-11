// Data Loader Module
export async function loadVTubers() {
    try {
        const response = await fetch('./data/vtubers.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.vtubers || [];
    } catch (error) {
        console.error('載入 VTuber 資料失敗:', error);
        throw error;
    }
}
