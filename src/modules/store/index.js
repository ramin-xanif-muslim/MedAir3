import create from "zustand";
import { useLocalStorageStore } from './local_storage_store'

export { useLocalStorageStore }

let store = (set) => ({
    breadcrumbItems: ['Calendar'],
    setBreadcrumbItems: (item) => set(() => ({ breadcrumbItems: item })),
    selectedDate: '',
    setSelectedDate: (item) => set(() => ({ selectedDate: item })),
    dataSourceDiseaseHistoryTable: [],
    setDataSourceDiseaseHistoryTable: (item) => set(() => ({ dataSourceDiseaseHistoryTable: item })),
    descriptionsCanvas: {},
    setDescriptionsCanvas: (item) => set(() => ({ descriptionsCanvas: item })),
    savedDrawingCanvas: {},
    setSavedDrawingCanvas: (item) => set(() => ({ savedDrawingCanvas: item })),
    dataSourceVisitTable: [],
    setDataSourceVisitTable: (item) => set(() => ({ dataSourceVisitTable: item })),
    dataSourceAnalysisTable: [],
    setDataSourceAnalysisTable: (item) => set(() => ({ dataSourceAnalysisTable: item })),
});

export const useStore = create(store);