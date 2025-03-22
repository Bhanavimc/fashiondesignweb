const backendDomain = process.env.REACT_APP_BACKEND_URL || "https://localhost:8080";
const SummaryApi = {
    signUp: {
        url: `${backendDomain}/api/signup`,
        method: "post",
    },
    signIn: {
        url: `${backendDomain}/api/signin`, // Add the URL for signIn
        method: "post",
    },
    addDesign: {
        url: `${backendDomain}/api/AddDesign`,
        method: "post",
    }
};
export default SummaryApi;
