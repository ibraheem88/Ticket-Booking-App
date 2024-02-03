//ACTIONS
export type MovieAction = {
    type: string;
    payload: MovieState;
}

//STATES
export type MovieState = []


//NAVIGATION
export type WatchStackParamList = {
    WatchScreen: undefined,
    SearchScreen: undefined,
    MovieDetailScreen: undefined,
    BookingScreen: undefined
};

export type MainStackParamList = {
    BottomTabs: undefined
};

export type MyTabParamList = {
    Dashboard: undefined;
    Watch: undefined;
    MediaLibrary: undefined;
    More: undefined;
};