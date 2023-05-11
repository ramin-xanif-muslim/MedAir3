import moment from "moment";
import { useNavigate } from "react-router";
import sendRequest from "../api/sendRequest";

export const useOnRowTable = () => {

  const navigate = useNavigate();

  const fetchData = (id) => {
    try {
      Promise.all([
        sendRequest("vite/" + id, {}, "get"),
        // getMorby(id),
        // getVizit(id),
        // getTreatment(id),
        // getAnalyses(id),
      ]);
    } catch (err) {
    }
  };


  const onRowTable = async (record) => {
    try {
      await fetchData(record.patientId);
      navigate("/profile");
    } catch (error) {
      console.log('%c error', 'background: red; color: dark', error.message);
    }
  };
  return { onRowTable };
};
