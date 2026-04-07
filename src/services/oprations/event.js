import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { eventEndPoints } from "../apiEndpoints";


export const getEvents = async () => {

    const toastId = toast.loading("fetching events")
    let result;
    try {
        const response = await apiConnector("GET", eventEndPoints.GET_EVENTS)

        console.log("data", response);

        toast.success(response.data.message || "events fetched")
        result = response.data.data;
        return result;

    } catch (err) {
        console.log("ERROR WHILE FETCHING EVENTS", err);
        toast.error(err.message);
        throw new Error("Event fetching failed");

    } finally {
        toast.dismiss(toastId)
    }
}