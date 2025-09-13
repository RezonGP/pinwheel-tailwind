const tabGroups = document.querySelectorAll("[data-tab-group]");

tabGroups.forEach((tabGroup) => {
    const tabsNav = tabGroup.querySelector("[data-tab-nav]");
    const tabsNavItem = tabsNav.querySelectorAll("[data-tab]");

    const storageKey = `activeTab_${tabGroup.dataset.tabGroup}`;
    const activeTabName =
        localStorage.getItem(storageKey) || tabsNavItem[0].dataset.tab;

    setActiveTab(tabGroup, activeTabName);

    tabsNavItem.forEach((tabNavItem) => {
        tabNavItem.addEventListener("click", (e) => {
            e.preventDefault();
            const tabName = tabNavItem.dataset.tab;
            setActiveTab(tabGroup, tabName);
            localStorage.setItem(storageKey, tabName);
        });
    });
});

function setActiveTab(tabGroup, tabName) {
    const tabsNav = tabGroup.querySelector("[data-tab-nav]");
    const tabsContent = tabGroup.querySelector("[data-tab-content]");

    tabsNav.querySelectorAll("[data-tab]").forEach((tabNavItem) => {
        tabNavItem.classList.remove("active");
    });
    tabsContent.querySelectorAll("[data-tab-panel]").forEach((tabPane) => {
        tabPane.classList.remove("active");
    });

    const selectedTabNavItem = tabsNav.querySelector(`[data-tab="${tabName}"]`);
    selectedTabNavItem.classList.add("active");

    const selectedTabPane = tabsContent.querySelector(
        `[data-tab-panel="${tabName}"]`
    );
    selectedTabPane.classList.add("active");
}
