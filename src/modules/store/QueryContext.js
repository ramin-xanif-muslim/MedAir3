import { useState, createContext, useContext } from "react";
import { useQuery } from "react-query";
import { fetchManagersPlace, fetchManagersTabs, fetchPathologistsPlace } from "../api";


const QueryContext = createContext();


const QueryContextProvider = ({ children }) => {

    const [isFetchManagersTabs, setIsFetchManagersTabs] = useState(false)

    const {
        data: managersTabs,
        refetch: refetchManagersTabs,
        isFetching: isFetchingManagersTabs,
        isLoading: isLoadingManagersTabs,
    } = useQuery(
        'managers/tabs',
        fetchManagersTabs,
        {
            enabled: isFetchManagersTabs
        }
    )

    const [isFetchPlaces, setIsFetchPlaces] = useState(false)

    const {
        data: places,
        refetch: refetchPlaces,
        isFetching: isFetchingPlaces,
        isLoading: isLoadingPlaces,
    } = useQuery(
        'managers/places',
        fetchManagersPlace,
        {
            enabled: isFetchPlaces
        }
    )

    const [isFetchPathologists, setIsFetchPathologists] = useState(false)

    const {
        data: pathologists,
        refetch: refetchPathologists,
        isFetching: isFetchingPathologists,
        isLoading: isLoadingPathologists,
    } = useQuery(
        'managers/pathologists',
        fetchPathologistsPlace,
        {
            enabled: isFetchPathologists
        }
    )

    const values = {
        pathologists,
        refetchPathologists,
        isFetchingPathologists,
        isLoadingPathologists,
        setIsFetchPathologists,

        places,
        refetchPlaces,
        isFetchingPlaces,
        isLoadingPlaces,
        setIsFetchPlaces,

        managersTabs,
        refetchManagersTabs,
        isFetchingManagersTabs,
        isLoadingManagersTabs,
        setIsFetchManagersTabs,
    };

    return (
        <QueryContext.Provider value={values}>
            {children}
        </QueryContext.Provider>
    );
};

const useQueryContext = () => useContext(QueryContext);

export { QueryContextProvider, useQueryContext };
