const settings = {
    graphql: {
        uri: "http://localhost:3001/api/graphql",
    },
    meta: {
        rootUrl: "http://localhost:3000",
        title: "App",
        description: "The app description goes here.",
    },
    routes: {
        authenticated: {
            pathAfterFailure: "/login",
        },
        public: {
            pathAfterFailure: "/documents",
        },
    },
};

export default settings;
