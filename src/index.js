const injectedGlobals = new WeakSet();

export const injectGlobals = (injectStyleOnce, globalStyles) => {
    if (injectedGlobals.has(globalStyles)) return;

    injectedGlobals.add(globalStyles);
    const selectors = Object.keys(globalStyles);

    for (const selector of selectors) {
        const value = globalStyles[selector];
        injectStyleOnce(selector, selector, [value], false);
    }
};
