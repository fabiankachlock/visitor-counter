
export const constructResponse = (count: number) => `
<svg width="150" height="22" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#444" width="60" height="22"></rect>
    <text fill="#fff" x="4" y="16" font-family="sans-serif" font-size="14px" >Visitors</text>
    <rect fill="#45b" x="60" width="90" height="22"></rect>
    <text fill="#fff" x="64" y="16" font-family="sans-serif" font-size="14px">${count}</text>
</svg>`;
