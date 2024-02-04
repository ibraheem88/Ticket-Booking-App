import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import YoutubePlayer from "react-native-youtube-iframe";
import Fonts from '../constants/Fonts';
import Icons from '../constants/Icons';
import { WatchStackParamList } from '../helpers/types';
import { MovieDetail, getDataAuth } from '../network/apis';

type TrailerScreenProps = StackScreenProps<WatchStackParamList, 'TrailerScreen'>

const Arrow = Icons.arrow_left_light

const TrailerScreen = ({ route, navigation }: TrailerScreenProps) => {

    const [playing, setPlaying] = React.useState(false);
    const [loading, setLoading] = React.useState(true)
    const [videoId, setVideoId] = React.useState('')
    const insets = useSafeAreaInsets()

    const onStateChange = React.useCallback((state: string) => {
        console.log(state)
        if (state === "ended") {
            setPlaying(false);
            navigation.goBack()
        }
    }, []);

    const getTrailer = () => {
        const Params = `/${route.params.id}/videos?language=en-US`
        getDataAuth(MovieDetail + Params, (res) => {
            setLoading(false)
            const trailer = res?.results.filter((item: any) => item?.type === 'Trailer' && item?.site === 'YouTube')
            if (trailer[0]?.key) {
                setVideoId(trailer[0]?.key)
            }
        }, (err) => {
            setLoading(false)
            console.log(err)
        })
    }

    React.useEffect(() => {
        getTrailer()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={[styles.backButton, { top: insets.top }]}
                onPress={() => navigation.goBack()}>
                <Arrow />
            </TouchableOpacity>
            {loading ?
                <ActivityIndicator size={28} color={'#fff'} /> :
                (videoId ? <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={videoId}
                    onChangeState={onStateChange}
                /> :
                    <Text style={styles.message}>No Trailer Available</Text>
                )
            }
        </SafeAreaView>
    );
};

export default TrailerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20
    },
    message: {
        alignSelf: 'center',
        fontFamily: Fonts.semiBold,
        fontSize: 14
    },
    backgroundVideo: {
        width: '100%',
        flex: 1
    },
});
