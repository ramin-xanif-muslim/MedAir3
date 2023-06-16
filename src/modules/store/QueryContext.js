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
        setIsFetchPathologists,

        places,
        refetchPlaces,
        isFetchingPlaces,
        setIsFetchPlaces,

        managersTabs,
        refetchManagersTabs,
        isFetchingManagersTabs,
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
