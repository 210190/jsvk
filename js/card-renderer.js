// Card Renderer Module
export function renderCards(vtubers) {
    const container = document.getElementById('vtuber-grid');
    const loading = document.getElementById('loading');
    const empty = document.getElementById('empty');
    const error = document.getElementById('error');
    
    // Hide all states
    loading.classList.add('hidden');
    empty.classList.add('hidden');
    error.classList.add('hidden');
    
    // Clear container
    container.innerHTML = '';
    
    // Show empty state if no vtubers
    if (!vtubers || vtubers.length === 0) {
        empty.classList.remove('hidden');
        return;
    }
    
    // Render each vtuber card
    vtubers.forEach(vtuber => {
        const card = createCard(vtuber);
        container.appendChild(card);
    });
}

function createCard(vtuber) {
    const card = document.createElement('div');
    card.className = 'vtuber-card';
    card.dataset.id = vtuber.id;
    
    // Avatar with live badge
    const avatarWrapper = document.createElement('div');
    avatarWrapper.className = 'avatar-wrapper';
    
    const avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = vtuber.avatar;
    avatar.alt = vtuber.name;
    avatar.loading = 'lazy';
    
    avatarWrapper.appendChild(avatar);
    
    // Live badge
    if (vtuber.isLive) {
        const liveBadge = document.createElement('span');
        liveBadge.className = 'live-badge';
        liveBadge.textContent = 'LIVE';
        avatarWrapper.appendChild(liveBadge);
    }
    
    card.appendChild(avatarWrapper);
    
    // Name
    const name = document.createElement('h3');
    name.className = 'name';
    name.textContent = vtuber.name;
    card.appendChild(name);
    
    // Original name (if exists)
    if (vtuber.nameOriginal && vtuber.nameOriginal !== vtuber.name) {
        const nameOriginal = document.createElement('div');
        nameOriginal.className = 'name-original';
        nameOriginal.textContent = vtuber.nameOriginal;
        card.appendChild(nameOriginal);
    }
    
    // Description
    if (vtuber.description) {
        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = vtuber.description;
        card.appendChild(description);
    }
    
    // Tags
    if (vtuber.tags && vtuber.tags.length > 0) {
        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'tags';
        
        vtuber.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = `tag tag-${tag}`;
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
        
        card.appendChild(tagsContainer);
    }
    
    // Organization
    if (vtuber.organization) {
        const organization = document.createElement('div');
        organization.className = 'organization';
        organization.textContent = vtuber.organization;
        card.appendChild(organization);
    }
    
    // Click event: open channel
    card.addEventListener('click', () => {
        window.open(vtuber.channelUrl, '_blank', 'noopener,noreferrer');
    });
    
    return card;
}

export function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('error').classList.add('hidden');
    document.getElementById('empty').classList.add('hidden');
    document.getElementById('vtuber-grid').innerHTML = '';
}

export function showError() {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('error').classList.remove('hidden');
    document.getElementById('empty').classList.add('hidden');
    document.getElementById('vtuber-grid').innerHTML = '';
}
