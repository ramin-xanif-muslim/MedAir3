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

    savedDrawingCanvas: {},
    setSavedDrawingCanvas: (item) => set(() => ({ savedDrawingCanvas: item })),

    dataSourceVisitTable: [],
    setDataSourceVisitTable: (item) => set(() => ({
        dataSourceVisitTable:
            item
    })),

    dataSourceAnalysisTable: [],
    setDataSourceAnalysisTable: (item) => set(() => ({ dataSourceAnalysisTable: item })),

    dataSourceTreatmentTable: [],
    setDataSourceTreatmentTable: (item) => set(() => ({ dataSourceTreatmentTable: item })),

    recipeList: [],
    setRecipeList: (item) => set(() => ({ recipeList: item })),

    dataSourceSearchTable: [],
    setDataSourceSearchTable: (item) => set(() => ({
        dataSourceSearchTable:
            item
    })),

    isFieldsChange: false,
    setIsFieldsChange: (item) => set(() => ({
        isFieldsChange:
            item
    })),
    onFieldsChange: (item) => set(() => ({
        isFieldsChange:
            true
    })),

    initialValuesPersonInfoForm: { gender: 'Female' },
    setInitialValuesPersonInfoForm: (item) => set(() => ({
        initialValuesPersonInfoForm:
            item
    })),

    initialValuesDiseaseHistory: {},
    setInitialValuesDiseaseHistory: (item) => set(() => ({
        initialValuesDiseaseHistory:
            item
    })),

    initialValuesTreatment: {},
    setInitialValuesTreatment: (item) => set(() => ({
        initialValuesTreatment:
            item
    })),

});

export const useStore = create(store);