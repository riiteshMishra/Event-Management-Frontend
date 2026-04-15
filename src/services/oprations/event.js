import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { eventEndPoints } from "../apiEndpoints";

// All events
export const getEvents = async () => {

    const toastId = toast.loading("fetching events")
    let result;
    try {
        const response = await apiConnector("GET", eventEndPoints.GET_EVENTS)

        console.log("data", response?.data?.data);

        toast.success(response.data.message || "Events fetched")
        result = response?.data?.data;
        return result;

    } catch (err) {
        console.log("ERROR WHILE FETCHING EVENTS", err);
        toast.error(err.message);
        throw new Error("Event fetching failed");

    } finally {
        toast.dismiss(toastId)
    }
}

// Event by slug
export const getEventBySlug = async (slug) => {
    let result;
    try {
        const response =
            await apiConnector("GET", `${eventEndPoints.GET_EVENT}/${slug}`);

        if (!response?.data?.success)
            throw new Error("Invalid response");

        console.log("GET EVENT BY SLUG API RESPONSE", response);
        toast.success(response?.data?.message || "Event Feched successfully");
        return result = response?.data?.data
    } catch (err) {
        console.log(err.message);
        toast.error(err.message)
    }
}