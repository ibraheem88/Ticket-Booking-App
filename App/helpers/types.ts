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
    MovieDetailScreen: {
        id: number
    },
    BookingScreen: {
        name: string,
        release_date: string
    },
    BookingConfirmationScreen: {
        hall: any,
        name: string,
        release_date: string
    },
    TrailerScreen: {
        id: number
    }
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

//Apis

export type callback = (res: any) => void;

export type errorCallback = (res: any) => void;