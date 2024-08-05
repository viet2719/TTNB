// SelectedItemsContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type SelectedItemsContextType = {
    selectedItems: string[];
    toggleItem: (itemKey: string) => void;
    selectAllItems: () => void;
};

const SelectedItemsContext = createContext<SelectedItemsContextType | undefined>(
    undefined
);

export function useSelectedItems() {
    const context = useContext(SelectedItemsContext);
    if (context === undefined) {
        throw new Error('useSelectedItems must be used within a SelectedItemsProvider');
    }
    return context;
}

type SelectedItemsProviderProps = {
    children: ReactNode;
};

export function SelectedItemsProvider({ children }: SelectedItemsProviderProps) {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const toggleItem = (itemKey: string) => {
        setSelectedItems((prevSelectedItems) => {
            if (prevSelectedItems.includes(itemKey)) {
                return prevSelectedItems.filter((key) => key !== itemKey);
            } else {
                return [...prevSelectedItems, itemKey];
            }
        });
    };

    const selectAllItems = () => {
        // Thực hiện logic để chọn tất cả các mục
    };

    const contextValue: SelectedItemsContextType = {
        selectedItems,
        toggleItem,
        selectAllItems,
    };

    return (
        <SelectedItemsContext.Provider value={contextValue}>
            {children}
        </SelectedItemsContext.Provider>
    );
}
